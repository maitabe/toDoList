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



// var showLabel = function () {
// 	var label = ['personal', 'health', 'finances'];
// 	for (var i = 0; i < label.length; i++) {
// 		return label[i];
// 	}
// };


var priority = ['high', 'medium', 'low'];

var color = [ 'blue', 'green', 'yellow', 'red', 'orange'];






//methods
// Task.prototype.save = function(key, value) {
// 	this.setItem(key, JSON.stringify(value));
// };

// Task.prototype.get = function(key) {
// 	return JSON.parse(this.getItem(key));
// };


var User = function(name, lastname, username, email, address, id) {
	this.name = name;
	this.lastname = lastname;
	this.username = username;
	this.email = email;
	this.address = address;
	this.premiumUser = false;
	this.id = id;
};


//constructor
function AppService(task, user) {
	this._tasks = [];
	this._user = user;
}

// AppService.prototype.search = function() {

// };



// Storage.prototype.setObject = function(key, value) {
//     this.setItem(key, JSON.stringify(value));
// }

// Storage.prototype.getObject = function(key) {
//     return JSON.parse(this.getItem(key));
// }