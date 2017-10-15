'use strict';

angular.module('animalsApp')
  .controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.consoleMsg = function (data){
      //(data) ? $window.open('http://bvblogic.com/', '_blank') : console.log('doesn\'t need help');
      if (data) {
        $window.open('http://bvblogic.com/', '_blank');
      }
      else {
        console.log('doesn\'t need help');
      }
    }; 
  }]);
