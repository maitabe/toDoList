
//global variables
var as,
	labelValue,
	priorityValue,
	colorValue,
	dateTimeValue;

//functions
function getArrTasks() {
	//avoid duplicity when adding task, empty the row
	$('#listStuff').empty();

	for (var i = 0; i < as._tasks.length; i++) {
			$('#listStuff').append('<div class="pnl-content" data-index= '+i+'  >' + as._tasks[i].content + '<a class="btn-group btn-group-xs">remove</a> </div>');
		}

			$('a.btn-group.btn-group-xs').on('click', function() {

			var taskIndex = $('div.pnl-content').attr('data-index');

			as._tasks.splice(taskIndex, 1);

			getArrTasks();

		});
}

function addLabelFolder() {

	for (var i = 0; i < as._tasks.length; i++) {
		$('#listLabel').append('<div class="pnl-folder" data-index= '+i+' >' + as._tasks[i].label + ' <span class="glyphicon glyphicon-tag"> </span> </div>');
	}
}

//init code and handlers code
$(document).ready(function() {
	//init app
	as = new AppService();


	// $('#iconFeatures').hide();
	// $('#icon-tag').hide();

	// $('input#writein').mousedown(function(){
	// 	$('#iconFeatures').show();
	// });

		// $('div.glyphicon-tag').on('click', function() {
		// 	$('#icon-tag').show();
		// });


	$('#basic-addon2').on('click', function(event){
		//get text from input
		var titleText = $('input#titleText').val();

		var noteDesc = $('input#contentText').val();

		var label = $('#iconLabel .item-color-label').attr('data-value');

		var priority = $('#iconPriority .item-color-priority').attr('data-value');

		var color = $('#iconColor .item-color').attr('data-value');

		var dueDate = $('#iconDateTime .item-color-dateTime').attr('data-value');

		//how to create these values
		// var id =
		// var dateCreate =

		//======  save mechanism ======
		//create new Task (empty)
		var ts = new Task();
		//fill up the new Task created with the values for each property
		ts.title = titleText;
		ts.content = noteDesc;
		ts.dateCreate = new Date();
		ts.priority = priority;
		ts.color = color;
		ts.label = label;
		// ts.dueDate = '';
		// ts.id = '';


		//add the values of the properties for each task to the array of "tasks" int he service
		as._tasks.push(ts);

		$('#titleText, #contentText').val('');

		//===== fetch mechanism ====
		//avoid duplicity when adding task, empty the row
		$('#listStuff').empty();
		// loop the task object to fetch data and display in the DOM
		getArrTasks();
		// for (var i = 0; i < as._tasks.length; i++) {
		// 	$('#listStuff').append('<div class="pnl-content" data-index= '+i+'  >' + as._tasks[i].content + '<a class="btn-group btn-group-xs">remove</a> </div>');
		// }

		addLabelFolder();

		event.preventDefault();


	});

		//******improve this code to be only one handler*******
		//select one option of each feature
		$( "#iconLabel > div" ).on('click', function() {
			$( "#iconLabel > div" ).removeClass('item-color-label');
			  // labelValue = $(this).attr('data-value');
			$(this).addClass('item-color-label');

		});

		$( "#iconPriority > div" ).on('click', function() {
			$( "#iconPriority > div" ).removeClass('item-color-priority');
			 // priorityValue = $(this).attr('data-value');
			$(this).addClass('item-color-priority');
		});

		$( "#iconColor > div" ).on('click', function() {
			$( "#iconColor > div" ).removeClass('item-color');
			 // colorValue = $(this).attr('data-value');
			$(this).addClass('item-color');

		});

		$( "#iconDateTime > div" ).on('click', function() {
			$( "#iconDateTime > div" ).removeClass('item-color-dateTime');
			 // dateTimeValue = $(this).attr('data-value');
			$(this).addClass('item-color-dateTime');
		});



});