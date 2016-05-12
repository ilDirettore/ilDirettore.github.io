_app.controller('noteDetailsController', function($scope,EditingNoteService) {

	$scope.changeEditFlag = function() {
		$scope.isEditing = ($scope.isEditing==undefined || !$scope.isEditing) // XOR Like

		EditingNoteService.isEditing($scope.isEditing,function(err,result) {
			if (err)
				return console.error(err)

			return console.log(result)
		})
	}

	$scope.saveNote = function() {
		EditingNoteService.save();
	}

})