require('../js/service.js');

angular.module('gallery', ['shareState'])
  .controller('galleryController', ['$scope', 'storePhotos', function ($scope, storePhotos) {
    const photoset = storePhotos.photos.photo;
    $scope.photos = photoset;
  }]);
