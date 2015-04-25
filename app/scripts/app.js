// console.log('app.js is loaded');

// require("./landing");
// require("./collections");
// require("./album");
// require("./profile");

angular.module("BlocJams", []).controller("Landing.controller", ["$scope", function($scope) {
  
  $scope.heroHeader = "Bloc Jams";

  $scope.heroHeaderClicked = function () {

    var o = $scope.albumURLs;
    
    function shuffle(o) {
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    var newOoo = shuffle(o);
    $scope.albumURLs = newOoo;
  }

  $scope.subText = "Turn the music up!";

  $scope.subTextClicked = function() {
    $scope.subText += " ! ";
  }

  $scope.albumURLs = [
     '/images/album-placeholders/album-1.jpg',
     '/images/album-placeholders/album-2.jpg',
     '/images/album-placeholders/album-3.jpg',
     '/images/album-placeholders/album-4.jpg',
     '/images/album-placeholders/album-5.jpg',
     '/images/album-placeholders/album-6.jpg',
     '/images/album-placeholders/album-7.jpg',
     '/images/album-placeholders/album-8.jpg',
     '/images/album-placeholders/album-9.jpg',
  ];
  
}]);