'use strict';

angular
  .module('animalsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router'
    //'ngRoute'
  ])
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/animals.html'
  //     })
  //     .when('/contact', {
  //       templateUrl: 'views/contact.html',
  //       controller: 'ContactCtrl',
  //       controllerAs: 'contact'
  //     })
  //     .when('/cats', {
  //       templateUrl: 'views/cats.html',
  //       controller: 'CatsCtrl',
  //       controllerAs: 'cats'
  //     })
  //     .when('/dogs', {
  //       templateUrl: 'views/dogs.html',
  //       controller: 'DogsCtrl',
  //       controllerAs: 'dogs'
  //     })
  //     .when('/horses', {
  //       templateUrl: 'views/horses.html',
  //       controller: 'HorsesCtrl',
  //       controllerAs: 'horses'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
  }])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) { 
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })
      .state('cats', {
        url: 'cats',
        parent: '/',
        templateUrl: 'views/cats.html',
        onEnter: function(){
          angular.element(document.querySelector('.animals-menu div:nth-child(1)')).addClass('selected');
        },
        onExit: function(){
          angular.element(document.querySelectorAll('.animals-menu div')).removeClass('selected');
        }
      })
      .state('dogs', {
        url: 'dogs',
        parent: '/',
        templateUrl: 'views/dogs.html',
        onEnter: function(){
          angular.element(document.querySelector('.animals-menu div:nth-child(2)')).addClass('selected');
        },
        onExit: function(){
          angular.element(document.querySelectorAll('.animals-menu div')).removeClass('selected');
        }
      })
      .state('horses', {
        url: 'horses',
        parent: '/',
        templateUrl: 'views/horses.html',
        onEnter: function(){
          angular.element(document.querySelector('.animals-menu div:nth-child(3)')).addClass('selected');
        },
        onExit: function(){
          angular.element(document.querySelectorAll('.animals-menu div')).removeClass('selected');
        }
      })
      .state('contact', {
        url: 'contact',
        parent: '/',
        templateUrl: 'views/contact.html',
        controller:'ContactCtrl',
        onEnter: function(){
          angular.element(document.querySelector('.animals-menu div:nth-child(4)')).addClass('selected');
        },
        onExit: function(){
          angular.element(document.querySelectorAll('.animals-menu div')).removeClass('selected');
        }
      });
      
  }]);
