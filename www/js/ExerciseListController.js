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
          DataService.remove(id).then(function () {
            removeFromScopeArray(id);
          });
          //$window.location.reload(true);
        } 
      });
    };
    
    function sortElements(exercises) {
      return exercises.rows.sort(function (a, b) {
        return parseInt(a.doc.order) - parseInt(b.doc.order)
      });
    }
    
    function removeFromScopeArray(id) {
      for(var i = 0; i < $scope.exercises.length; i++) {
        if ($scope.exercises[i].id === id) {
          $scope.exercises.splice(i, 1);
        }
      }
    }

  });
  
})(angular.module('pump-app'));