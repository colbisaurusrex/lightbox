angular.module('gallery', ['shareState'])
  .controller('galleryController', function ($scope, storePhotos) {
    console.log(storePhotos.photos)
    $scope.photos = storePhotos;
  });
