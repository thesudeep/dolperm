angular.module('exam',['ngRoute'])

angular.module('exam').config(function($routeProvider) {
    $routeProvider               
         .when('/dol', {
            templateUrl : 'component/dol/dol.html',
            controller  : 'dolController as dol'
        })        
        .otherwise({
        	redirectTo: '/dol'
      });
 })