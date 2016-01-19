angular.module('app')

.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            .state('tab.days', {
                url: '/days',
                views: {
                    'tab-days': {
                        templateUrl: 'templates/days/tab-days.html',
                        controller: 'DaysController'
                    }
                }
            })
            .state('tab.day-details', {
                url: '/days/:dayId',
                views: {
                    'tab-days': {
                        templateUrl: 'templates/days/day-details.html',
                        controller: 'DayDetailsController'
                    }
                }
            })

            .state('tab.teams', {
                url: '/teams',
                views: {
                    'tab-teams': {
                        templateUrl: 'templates/teams/tab-teams.html',
                        controller: 'TeamsController'
                    }
                }
            })
            .state('tab.team-details', {
                url: '/teams/:teamId',
                views: {
                    'tab-teams': {
                        templateUrl: 'templates/teams/team-details.html',
                        controller: 'TeamDetailsController'
                    }
                }
            })

            .state('tab.cyclists', {
                url: '/cyclists',
                views: {
                    'tab-cyclists': {
                        templateUrl: 'templates/cyclists/tab-cyclists.html',
                        controller: 'CyclistsController'
                    }
                }
            })
            .state('tab.cyclist-details', {
                url: '/cyclists/:cyclistId',
                views: {
                    'tab-cyclists': {
                        templateUrl: 'templates/cyclists/cyclist-details.html',
                        controller: 'CyclistDetailsController'
                    }
                }
            })

            .state('tab.about', {
                url: '/about',
                views: {
                    'tab-about': {
                        templateUrl: 'templates/about/tab-about.html',
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/days');
    });