angular.module('userProfiles').controller('MainController', function($scope, mainService) {
    
    $scope.test = "Hello, World!"

	$scope.getUsers = function() {
		$scope.users = mainService.getUsers();
	}();

});