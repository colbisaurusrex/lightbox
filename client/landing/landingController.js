require('../js/service.js');

angular.module('landing', ['shareState'])
  .controller('landingController', function ($scope, $http, $location, storePhotos) {
    $scope.pingFlickr = () => {
      return $http.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${{process.env.FLICKR_API_KEY}}=&photoset_id=72157634968390409&format=json&nojsoncallback=1`)
    .then(({ data }) => {
      console.log(data)
      storePhotos.save(data.photoset);
    },
          error => console.log(error));
    };
    $scope.viewGallery = () => {
      $location.path('/gallery')
    }
  });
