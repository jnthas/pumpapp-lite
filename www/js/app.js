// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('pump-app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/exercises');
  
  $stateProvider
  .state('list', {
    url: '/exercises',
    templateUrl: 'templates/exercise-list.html',
    controller: 'ExerciseListController',
    resolve: {
      exercises: function (DataService) {
        return DataService.getAll();
      }
    }
  })
  .state('new', {
    url: '/exercises/new',
    templateUrl: 'templates/exercise-detail.html',
    controller: 'ExerciseController',
    resolve: {
      exercise: function () {
        return {};
      }
    }
  })
  .state('edit', {
    url: '/exercises/:id',
    templateUrl: 'templates/exercise-detail.html',
    controller: 'ExerciseController',
    resolve: {
      exercise: function ($stateParams, DataService) {
        return DataService.getExerciseById($stateParams.id);
      }
    }
  })

});



