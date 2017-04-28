angular.module('landing', ['shareState'])
  .controller('landingController', function ($scope, $http, $location, storePhotos) {
    $scope.pingFlickr = () => {
      return $http.get('FLICKR_API_URL')
    .then(({ data }) => {
      storePhotos.save(data.photoset);
    },
          error => console.log(error));
    };
    $scope.viewGallery = () => {
      $location.path('/gallery')
    }
  });
