<?php

namespace App\Controller;

use Psr\Cache\CacheItemInterface;
use stdClass;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Cache\CacheInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ParksController extends AbstractController
{
    #[Route('/parks', name: 'app_parks')]
    public function index(HttpClientInterface $client,CacheInterface $cache): Response
    {
        
        $parks = $cache->get('parks', function(CacheItemInterface $cacheItem) use ($client) {
            $cacheItem->expiresAfter(5);
            $response = $client->request('GET',"https://raw.githubusercontent.com/adanfj/school/main/PHP/nationalParks/app/assets/nationalParks.json");
            return $response->toArray();
        });

        $ecosystems = array_unique(array_map(fn($x) => $x["ecosistema"], $parks));
        $ecosystems = array_map(fn($x) => [$x, sprintf('#%06X', mt_rand(0, 0xFFFFFF))], $ecosystems);
        $ecosystems = get_object_vars(array_reduce($ecosystems, function ($obj, $pair) {
            $obj->{$pair[0]} = $pair[1];
            return $obj;
        }, new stdClass()));

        return $this->render('parks/index.html.twig', [
            'controller_name' => 'ParksController',
            'parks'=>$parks,
            'ecosystems'=>$ecosystems
        ]);
    }
    #[Route('/parks/clear', name: 'app_parks_clear')]
    public function clear(HttpClientInterface $client,CacheInterface $cache):Response{
        $cache->delete("parks");
        return new Response("Cleared");
    }

}
