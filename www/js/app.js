// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // .state('app.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/search.html'
  //     }
  //   }
  // })

  .state('app.Monday', {
      url: '/Monday',
      views: {
        'menuContent': {
          templateUrl: 'templates/Monday.html'
        }
      }
    })
    .state('app.Tuesday', {
      url: '/Tuesday',
      views: {
        'menuContent': {
          templateUrl: 'templates/Tuesday.html'
        }
      }
    })
    .state('app.Wednesday', {
      url: '/Wednesday',
      views: {
        'menuContent': {
          templateUrl: 'templates/Wednesday.html'
        }
      }
    })
    .state('app.Thursday', {
      url: '/Thursday',
      views: {
        'menuContent': {
          templateUrl: 'templates/Thursday.html'
        }
      }
    })
    .state('app.Friday', {
      url: '/Friday',
      views: {
        'menuContent': {
          templateUrl: 'templates/Friday.html'
        }
      }
    })
    .state('app.Saturday', {
      url: '/Saturday',
      views: {
        'menuContent': {
          templateUrl: 'templates/Saturday.html'
        }
      }
    })
    .state('app.Sunday', {
      url: '/Sunday',
      views: {
        'menuContent': {
          templateUrl: 'templates/Sunday.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  var now = new Date();
  var today = now.getDay();
  if (today == 0)
    today = "Sunday";
  if (today == 1)
    today = "Monday";
  if (today == 2)
    today = "Tuesday";
  if (today == 3)
    today = "Wednesday";
  if (today == 4)
    today = "Thursday";
  if (today == 5)
    today = "Friday";
  if (today == 6)
    today = "Saturday";
  $urlRouterProvider.otherwise('/app/' + today);
});