angular.module('gallery', ['shareState', 'angularUtils.directives.dirPagination'])
  .controller('galleryController', function ($scope, storePhotos) {
    const photoset = storePhotos.photos.photo;
    console.log(photoset)
    $scope.photos = photoset;
  });
