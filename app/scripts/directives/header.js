'use strict';

angular.module('animalsApp')
  .directive('header', function () {
    return {
      template: '<div class="header">' +
                '<span class="btn btn-default" id="menu" ng-click="openMenu()">' +
                'menu' +
                '</span>' +
                '<p>' +
                'Animals (test app)' +
                '</p>' +
                '</div>',
      restrict: 'E',
      controller: ['$scope', function headerController($scope) {
        $scope.openMenu = function(){
          angular.element(document.getElementById('mySidenav')).addClass('open-menu');
          angular.element(document.getElementById('wrapper')).addClass('diable-wrapper');
        };
      }]
    };
  });
