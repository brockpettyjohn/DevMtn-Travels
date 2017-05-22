angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
                url:,
                parent:,
                templateUrl: ''
            })
            .state('contact',{
                url:'',
                parent:'',
                template:''
            })
            .state('packages',{
                url:'',
                parent:'',
                templateUrl:''
            })
            .state('booked',{
                url:'',
                parent:'',
                templateUrl:''
            })
            .state('locations',{
                url:'',
                parent:'',
                templateUrl:''
            })
            });

        $urlRouterProvider
            .otherwise('/');
    });
