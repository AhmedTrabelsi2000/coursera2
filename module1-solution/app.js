// app.js
(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchMenu = "";
      $scope.message = "";
  
      $scope.checkLunch = function () {
        // Implement your lunch-checking logic here
        var dishes = $scope.lunchMenu.split(',');
        var numberOfDishes = dishes.filter(Boolean).length;
  
        if (numberOfDishes === 0) {
          $scope.message = "Please enter data first!";
        } else if (numberOfDishes <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      };
    }
  })();
  