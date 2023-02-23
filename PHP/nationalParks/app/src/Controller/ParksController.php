<?php

namespace App\Controller;

use stdClass;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ParksController extends AbstractController
{
    #[Route('/parks', name: 'app_parks')]
    public function index(): Response
    {
        $parks = json_decode($_SESSION["parks"]);
        $ecosystems = array_unique(array_map(fn($x) => get_object_vars($x)["ecosistema"], $parks));
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
}
