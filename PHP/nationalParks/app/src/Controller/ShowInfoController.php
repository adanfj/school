<?php

namespace App\Controller;

use Psr\Cache\CacheItemInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Cache\CacheInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ShowInfoController extends AbstractController
{
    #[Route('/showInfo/{value<[\w-]*>}', name: 'app_show_info_custom',methods:["GET"])]
    public function custom($value="I have nothing to show :(",HttpClientInterface $client,CacheInterface $cache): Response
    {
        $parks = $cache->get('parks', function(CacheItemInterface $cacheItem) use ($client) {
            $cacheItem->expiresAfter(5);
            $response = $client->request('GET',"https://raw.githubusercontent.com/adanfj/school/main/PHP/nationalParks/app/assets/nationalParks.json");
            return $response->toArray();
        });
        $park = array_values(array_filter($parks,fn($park)=>$park['nombre']==str_replace("-"," ",$value)))[0];
        return $this->json($park);
        // return $this->render('show_info/index.html.twig', [
        //     'park'=>$park
        // ]);
    }
    // #[Route('/showInfoJSON', name: 'app_show_info_json_custom')]
    // public function getParks(){
    //     $parks = json_decode($_SESSION["parks"]);
    //     return $this->json($parks);
    // }
}
