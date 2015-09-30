(function(module) {
  
  module.controller('ExerciseController', function($scope, exercise, DataService, $ionicPopup) {
    
    var showAlert = function () {
      $ionicPopup.alert({
        title: 'Salvar',
        template: 'Salvo com sucesso.'
      });
    };
    
    $scope.exercise = exercise;
    
    $scope.save = function () {
      DataService.saveOrUpdate(exercise).then(function () {
        showAlert();
      });
    };
    
  });
  
})(angular.module('pump-app'));