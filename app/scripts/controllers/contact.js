'use strict';

angular.module('animalsApp')
  .controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.sent = false;
    $scope.send = function (data) {
      console.log('data = ', data);
      $scope.sent = true;
    };
  }]);
