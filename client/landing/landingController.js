require('../js/service.js');

angular.module('landing', ['shareState'])
  .controller('landingController', function ($scope, $http, $location, storePhotos) {
    $scope.pingFlickr = () => {
      //Normally, I would never upload my api key. However, I am ok with it for the purpose of this challenge, it has no financial burden and I can cancel it at any time
      // - Solution 1: Set it as an environment variable, and ping my node server to send back the api key. Then construct the flickr api url based on the key sent back
      // Solution 2: Somehow use the flickr api to first login, and if the key is in the response, then add it to the url
      return $http.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=4d895bc804325cfb4f0ba94ff60c7df7=&photoset_id=72157634968390409&format=json&nojsoncallback=1`)
    .then(({ data }) => {
      console.log(data)
      //Here, I could persist the data in localStorage, but I chose to just store the photos in the app state. I wanted to demonstrate that I pass data through controllers via a service. With this current configuration, the data - i.e. the photoset object - does not persist.
      storePhotos.save(data.photoset);
    },
          error => console.log(error));
    };
    $scope.viewGallery = () => {
      $location.path('/gallery')
    }
  });
