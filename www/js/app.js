angular.module('app', ['ionic', 'app.controllers', 'app.services'])

    .run(function ($ionicPlatform, $ionicHistory) {
        $ionicPlatform.ready(function () {
            var isWindows = ionic.Platform.isWindowsPhone() || (ionic.Platform.platform() == 'win64');
            
            /**
             * Windows Phone 8.1 fix for the hardware back button 
             */
            $ionicPlatform.registerBackButtonAction(function (evt) {
                if (evt && evt.type == 'backclick') {
                    $ionicHistory.goBack();
                }
                return true;
            }, 100);
            
            if (isWindows) {
                WinJS.Application.onbackclick = function (evt) {
                    $ionicPlatform.hardwareBackButtonClick(evt);
                    return true;
                }
            }

            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard && !isWindows) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })


    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.timeout = 8000;
    }])

    .config(['$ionicConfigProvider', function ($ionicConfigProvider) {
        $ionicConfigProvider.scrolling.jsScrolling(false);
    }])

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