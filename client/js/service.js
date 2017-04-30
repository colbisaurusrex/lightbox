angular.module('shareState', [])
.service('storePhotos', [function () {
  this.photos = [];
  this.save = function (data) {
    this.photos = data;
  };
}])
