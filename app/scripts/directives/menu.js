'use strict';

angular.module('animalsApp')
  .directive('menu', function () {
    return {
      template: '<div id="mySidenav" class="sidenav">' +
          '<a ui-sref="cats">Cats</a>' +
          '<a ui-sref="dogs">Dogs</a>' + 
          '<a ui-sref="horses">Horses</a>' +
          '<a ui-sref="contact">Contact us</a>' +
          '</div>',
      restrict: 'E',
      controller: [function menuController() {
        angular.element(document.querySelector('body')).bind('click', function(event){
          if (event.target.id !== 'menu' && event.target.id !== 'mySidenav') {
            angular.element(document.getElementById('mySidenav')).removeClass('open-menu');
            angular.element(document.getElementById('wrapper')).removeClass('diable-wrapper');
          }
        });
      }]
    };
  });
