<?php

namespace ContainerSya9UI5;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_EMf5WhBService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.EMf5WhB' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.EMf5WhB'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'cache' => ['services', 'cache.app', 'getCache_AppService', false],
            'client' => ['privates', '.debug.http_client', 'get_Debug_HttpClientService', false],
        ], [
            'cache' => '?',
            'client' => '?',
        ]);
    }
}