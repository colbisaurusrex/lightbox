angular.module('landing', [])
  .controller('landingController', function ($scope, $http) {
    $scope.pingFlickr = () => {
      return $http.get(`FLICKR_API_URL`)
    .then(data =>  window.localStorage.setItem('photoset', data.data.photoset),
          error => console.log(error));
    };
  });
