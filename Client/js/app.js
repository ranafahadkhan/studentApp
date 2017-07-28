var studentApp = angular.module('studentApp', ['ui.router']);


studentApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$urlRouterProvider.otherwise('students');
	
	$stateProvider.state('students', {
		url : '/students',
		templateUrl : '/views/students.html'
	});

	$locationProvider.html5Mode(true);
	
	
});