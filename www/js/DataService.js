(function(module) {
  
  module.service('DataService', function() {
    
    var localDB = new PouchDB('pumpdb');
    
    var exercises = [
      {order: 1,
       name: 'Remada Alta',
       weight: 10,
       sets: 3,
       reps: 12,
       obs: 'observation test for exercise #1'},
      {order: 2,
       name: 'Supino inclinado',
       weight: 20,
       sets: 3,
       reps: 8,
       obs: ''}
    ];
    
    
    function getAll(callback) {
      return localDB.allDocs({include_docs: true, descending: true});
    }
    
    function getExerciseById(id) {
      return localDB.get(id);
    }
    
    function saveOrUpdate(exercise, callback) {
      if (!exercise._id) {
        exercise['_id'] = "P" + new Date().getTime();
      }
      return localDB.put(exercise);
    }
    
    function remove(exerciseId) {
      localDB.get(exerciseId).then(function (doc) {
        return localDB.remove(doc);
      });
    }
    
    
    this.getAll = getAll;
    this.getExerciseById = getExerciseById;
    this.saveOrUpdate = saveOrUpdate;
    this.remove = remove;
    
  });
  
})(angular.module('pump-app'));