angular.module('app.services')
    .factory('Cyclists', ['$http', function ($http) {
        var getAll = function () {
            return $http.get('http://cyclingcompetition.azurewebsites.net/api/cyclists');
        };

        var getCyclistById = function (cyclistId) {
            return $http.get('http://cyclingcompetition.azurewebsites.net/api/cyclists/' + cyclistId);
        }

        return {
            getAll: getAll,
            getCyclistById: getCyclistById
        };
    }])