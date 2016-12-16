var myApp = angular.module("myApp",['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl : 'home.html',
			controller : 'homeController'
			})
		.when('/newsletter', {
			templateUrl : 'news.html',
			controller : 'contactController'
			})
		.when('/programs', {
			templateUrl : 'programs.html',
			controller : 'programsController'
			})
		.when('/faculty', {
			templateUrl : 'faculty.html',
			controller : 'facultyController'
			})
		.when('/registration', {
			templateUrl : 'registration.html',
			controller : 'registrationController'
			})
		.when('/contactus', {
			templateUrl : 'contact.html',
			controller : 'contactController'
			})
		.otherwise({
			redirectTo : '/home'
			});
		}]);
		
myApp.controller("homeController", function($scope){
	$scope.message = "Welcome to the home page";
});

myApp.controller("contactController",function($scope){
	$scope.message = "You can reach us at Email : info@acme.com  Web : http://www.acme.com"
});

myApp.controller("myAccountController", function($scope){
	$scope.message = "Login please"
});











  



