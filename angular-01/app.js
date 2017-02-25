(function() {
    'use strict';

    angular.module('LunchChecker', [])
    .controller('LunchCheckerController', LunchCheckerController);


    LunchCheckerController.$inject = ['$scope'];

    function LunchCheckerController($scope) {
        $scope.message = "";
        $scope.lunchItems = "";
        $scope.checkLunch = function() {
            $scope.message = getMessage(calculateNumWords($scope.lunchItems));
        };
    }

    function calculateNumWords(stringToSplit) {
        var comma = ",";
        var empty = "";
        var words = stringToSplit.split(comma);
        words = words.map((word) => word.trim());
        words = words.filter((word) => word != empty);
        return words.length;
    }


    function getMessage(numberOfItems) {
        if (numberOfItems == 0) {
            return "Please enter data first";
        }
        if (numberOfItems < 4) {
            return "Enjoy!";
        }
        return "Too much!";
    }
})();
