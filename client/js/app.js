require('angular');
require('angular-route');
require('angular-utils-pagination');
require('../landing/landingController.js');
require('../gallery/galleryController.js');
require('../styles/main.css');
require('../js/behavior.js');
const landingHTML = require('../landing/landing.html');
const galleryHTML = require('../gallery/gallery.html');

angular.module('lightbox', ['ngRoute', 'landing', 'gallery', 'angularUtils.directives.dirPagination'])
  .config(['$routeProvider', 'paginationTemplateProvider',function ($routeProvider, paginationTemplateProvider) {
    paginationTemplateProvider.setString(require('../gallery/dirPagination.tpl.html'));
    $routeProvider
    .when('/', {
      template: landingHTML,
      controller: 'landingController',
    })
    .when('/gallery', {
      template: galleryHTML,
      controller: 'galleryController',
    })
    //TODO: add html to render in case of errors
  }])
