app.controller('tinyzoosController', ['$scope', '$resource', function($scope, $resource) {
  var Tinyzoo= $resource('/api/tinyzoos');

Tinyzoo.query(function(result) {
  $scope.tinyzoos = result;
})
  $scope.tinyzoos = []

  $scope.createTinyzoo = function() {
    var tinyzoo = new Tinyzoo();
    tinyzoo.name = $scope.tinyzooName;
    tinyzoo.$save(function (result)  {
        $scope.tinyzoos.push(result);
        $scope.tinyzooName =''
    });
  }
}]);
