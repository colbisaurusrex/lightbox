require('../js/service.js');

angular.module('gallery', ['shareState'])
  .controller('galleryController', function ($scope, storePhotos) {
    const photoset = storePhotos.photos.photo;
    $scope.photos = photoset;
  });
