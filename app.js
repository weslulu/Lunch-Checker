(function() {
    'use strict';

    angular.module('LunchCheck', []) 
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";

        $scope.checkIfTooMuch = function() {
            if ($scope.lunchItems.trim() === "") {
                $scope.message = "Please enter data first";
                return;
            }

            let items = $scope.lunchItems.split(',').filter(item => item.trim() !== '');
            if (items.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
})();