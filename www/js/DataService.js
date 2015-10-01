(function(module) {
  
  module.service('DataService', function($q) {
    
    var localDB = new PouchDB('pumpdb');
    
    function getAll() {
      return localDB.allDocs({include_docs: true, descending: true});
    }
    
    function getExerciseById(id) {
      return localDB.get(id);
    }
    
    function saveOrUpdate(exercise) {
      if (!exercise._id) {
        exercise['_id'] = "P" + new Date().getTime();
      }
      return localDB.put(exercise);
    }
    
    function remove(exerciseId) {
      deferred = $q.defer();
      localDB.get(exerciseId).then(function (doc) {
        return localDB.remove(doc).then(function () {
          deferred.resolve();
        });
      }).catch(function () {
          deferred.reject();
      });
      return deferred.promise;
    }
    
    
    this.getAll = getAll;
    this.getExerciseById = getExerciseById;
    this.saveOrUpdate = saveOrUpdate;
    this.remove = remove;
    
  });
  
})(angular.module('pump-app'));