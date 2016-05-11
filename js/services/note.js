_app.service("EditingNoteService", function(NoteManager) {

	var _activeNote = {}

	this.isEditing = function(isEditing,completionHandler) {
		_activeNote.isLock = isEditing
		this.save(completionHandler)
	}

	this.save = function(completionHandler) {
		NoteManager.update(_activeNote,completionHandler)
	}

	this.delete = function(completionHandler) {
		NoteManager.delete(_activeNote.identifier,completionHandler)
	}

})