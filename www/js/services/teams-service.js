angular.module('app.services')
    .factory('Teams', ['$http', function ($http) {
        var getAll = function () {
            return $http.get('http://cyclingcompetition.azurewebsites.net/api/teams');
        };

        var getTeamById = function (teamId) {
            return $http.get('http://cyclingcompetition.azurewebsites.net/api/teams/' + teamId);
        }

        return {
            getAll: getAll,
            getTeamById: getTeamById
        };
    }])