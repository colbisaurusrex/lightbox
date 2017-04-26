angular.module('lightbox', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'landing.html'
    })
    .when('/lightbox', {
      templateUrl: 'lightbox.html'
    })
  })