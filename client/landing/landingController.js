require('../js/service.js');

angular.module('landing', ['shareState'])
  .controller('landingController', function ($scope, $http, $location, storePhotos) {
    $scope.pingFlickr = () => {
      //Normally, I would never upload my api key. However, I am ok with it for the purpose of this challenge, it has no financial burden and I can cancel it at any time
      return $http.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=4d895bc804325cfb4f0ba94ff60c7df7=&photoset_id=72157634968390409&format=json&nojsoncallback=1`)
    .then(({ data }) => {
      console.log(data)
      //Here, I could persist the data in localStorage, but I chose to just store the photos in the app state. I wanted to demonstrate that I pass data through controllers via a service.
      storePhotos.save(data.photoset);
    },
          error => console.log(error));
    };
    $scope.viewGallery = () => {
      $location.path('/gallery')
    }
  });
