(function() {
  'use strict';

  angular
    .module('recipes.admin', ['ui.grid', 'ui.grid.selection'])
    .controller('RecipesAddController', RecipesAddController);

  RecipesAddController.$inject = ['$http', '$scope', '$state', 'RecipesResource'];

  var buildList = function(str) {
    return str.split(',');
  };

  function RecipesAddController($http, $scope, $state, RecipesResource) {
    var vm = this;



    vm.insert = function () {
      var data = {
        flavour: $scope.form.flavour,
        type: $scope.form.type,
        name: $scope.form.name,
        calories: $scope.form.calories,
        ingredients: buildList($scope.form.ingredients)
      };
      $http(
        {
          method: 'post',
          url: '/api/recipes/new',
          data: data,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(
        function(response) {
          if (response)
            $scope.form = {};
          alert("Successfully added: response");
        },
        function(error) {
          console.log(error);
        }
      );
    };

  }

}());
