/**
 * Created by dchoi1 on 8/9/2016.
 */

angular.module('myApp')
    .controller('HomeCtrl', function($scope, $location) {
            console.log('HomeCtrl')
        $scope.authKey = $location.search().code;
        console.log($scope.authKey);
        $scope.parseAuthKey = function(){};
        }
    );