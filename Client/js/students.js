var app = angular.module('studentApp');


app.controller('studentCntrl', function($scope, $http) {
	$scope.isEditting  = true;
	var index = -1;
	$scope.students = [];
	function fetchAllstudents() {
		$http.get('/students').success(function(response) {
			$scope.students = response.response;
		});
	}
	fetchAllstudents();
	console.log($scope.students);
	
	$scope.createstudent = function(a_studentName,a_rollNumber,a_course,a_email) {
		var obj = {studentName : a_studentName, rollNumber : a_rollNumber, course : a_course, email : a_email,  index : ++index};
		$scope.studentName = '';
		$scope.rollNumber = '';
		$scope.course = '';
		$scope.email = '';
		$http.post('/saveData', obj).success(function(resData) {
			console.log("Data saved succesfully!", resData);
			$scope.students.push(resData);
		});
		$scope.isTrue = false;
	}
	
	$scope.edit = function(a_obj) {
		$scope.studentName = a_obj.studentName;
				$scope.rollNumber = a_obj.rollNumber;
						$scope.course = a_obj.course;
								$scope.email = a_obj.email;

		index = a_obj.index;
		$scope.isEditting = false;
		$scope.prevObj = a_obj;
	}
	
	$scope.updatestudent = function(a_studentName,a_rollNumber,a_course,a_email) {
		var obj = {studentName : a_studentName, rollNumber : a_rollNumber, course : a_course, email : a_email, index : index};
		
		$http.put('/update', [obj, $scope.prevObj]).success(function(resData) {
			console.log('res in update ', resData);
			//$scope.students[index] = obj;
			fetchAllstudents();
			$scope.isEditting  = true;
		});
		
		
	}

	$scope.delete = function(studentObj) {
		
		$http.delete('/delete/'+studentObj.studentName).success(function(res) {
			console.log("delete response--", res);
			fetchAllstudents();
			index--;
		});
		
		
	}
	
	$scope.show = function() {

			$scope.isShown  = true;
		}

	$scope.hide = function() {

			$scope.isShown  = false;
		}
		

	$scope.displayinfo = function(a_obj) {
		$scope.currentStudentName = a_obj.studentName;
		$scope.curstu = $scope.currentStudentName;
		alert($scope.currentStudentName);
	}

	    $scope.change = function() {
        $scope.isTrue  = true;
      };
	
	
});