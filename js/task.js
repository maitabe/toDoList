//task object

// methods would be public

//constructor
var Task = function() {
	//properties
	this.title = '';
	this.content = '';
	this.dateCreate = '';
	this.priority = '';
	this.color = '';
	this.label = '';
	this.dueDate = '';
	this.id = '';
};

Task.prototype.log = function() {
	console.log(this.title);
};
