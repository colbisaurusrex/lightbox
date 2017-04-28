angular.module('lightbox', ['ngRoute', 'landing', 'gallery'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: '/landing/landing.html',
      controller: 'landingController',
    })
    .when('/gallery', {
      templateUrl: '/gallery/gallery.html',
      controller: 'galleryController',
    })
  })
