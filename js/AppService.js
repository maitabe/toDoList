
//constructor
function AppService(task, user) {

	// hold the list of tasks
	this._tasks = [];

	this.labelList = {};

	//hold every label created
	this.labels = ['personal', 'health', 'finances'];

	this.priority = ['high', 'medium', 'low'];

	this.colors = [ 'blue', 'green', 'yellow', 'red', 'orange'];

	this.dateTime = ['morning', 'afternoon', 'night'];

	this._user = user;
	// this.happey = '';

}

// AppService.prototype.search = function() {

// };



// Storage.prototype.setObject = function(key, value) {
//     this.setItem(key, JSON.stringify(value));
// }

// Storage.prototype.getObject = function(key) {
//     return JSON.parse(this.getItem(key));
// }



//methods
// Task.prototype.save = function(key, value) {
// 	this.setItem(key, JSON.stringify(value));
// };

// Task.prototype.get = function(key) {
// 	return JSON.parse(this.getItem(key));
// };


