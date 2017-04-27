angular.module('lightbox', ['ngRoute', 'landing', 'gallery'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'landing.html',
      controller: 'landingController',
    })
    .when('/lightbox', {
      templateUrl: 'lightbox.html',
      controller: 'galleryController',
    })
  })
