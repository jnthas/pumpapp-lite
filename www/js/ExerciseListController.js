(function(module) {
  
  module.controller('ExerciseListController', function($scope, exercises, DataService, $ionicPopup, $window) {
    
    var showConfirm = function () {
      return $ionicPopup.confirm({
        title: 'Remover',
        template: 'Deseja remover esse exercício?'
      });
    };
    
    $scope.exercises = sortElements(exercises);
    
    $scope.remove = function (id) {
      showConfirm().then(function (res) {
        if (res) {
          console.log(id);
          DataService.remove(id);
          //$window.location.reload(true);
        } 
      });
    };
    
    function sortElements(exercises) {
      return exercises.rows.sort(function (a, b) {
        return parseInt(a.doc.order) - parseInt(b.doc.order)
      });
    }

  });
  
})(angular.module('pump-app'));