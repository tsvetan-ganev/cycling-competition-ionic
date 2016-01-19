angular.module('app', ['ionic', 'app.controllers', 'app.services'])

    .run(function ($ionicPlatform, $ionicHistory) {
        $ionicPlatform.ready(function () {
            var isWindows = ionic.Platform.isWindowsPhone() || (ionic.Platform.platform() == 'win64');
            
            /**
             * Windows Phone 8.1 fix for the hardware back button 
             */
            if (isWindows) {
                $ionicPlatform.registerBackButtonAction(function (evt) {
                    if (evt && evt.type == 'backclick') {
                        $ionicHistory.goBack();
                    }
                    return true;
                }, 100);
                
                WinJS.Application.onbackclick = function (evt) {
                    $ionicPlatform.hardwareBackButtonClick(evt);
                    return true;
                }

                screen.lockOrientation('portrait');
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
    }]);