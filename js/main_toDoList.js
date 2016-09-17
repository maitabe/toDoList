
//global variables
var as,
	labelValue,
	priorityValue,
	colorValue,
	dateTimeValue;

//functions


function printLabelsArr() {

	$('#listLabel').empty();

	var labelKeys = Object.keys(as.labelList);

	for (var i = 0; i < labelKeys.length; i++) {

		$('#listLabel').append('<div class="pnl-folder" data-label= '+ i +' >' + labelKeys[i] + ' <span class="glyphicon glyphicon-tag"> </span> </div>');
	}

}


//Print tasks to screen(DOM)
function getArrTasks() {

	//avoid duplicity when adding task, empty the row
	$('#listStuff').empty();

	// print tasks  - loop the task object to fetch data and display in the DOM
	for (var i = 0; i < as._tasks.length; i++) {
			$('#listStuff').append('<div class="pnl-content" data-index= '+i+'  >' + as._tasks[i].content + '<a class="btn-group btn-group-xs">remove</a> </div>');
	}

	// add remove action handler to memory
	$('a.btn-group.btn-group-xs').on('click', function() {

		var taskIndex = $(this).parent().attr('data-index');
		var taskLabel = as._tasks[taskIndex].label;
		as._tasks.splice(taskIndex, 1);
		getArrTasks();

			//if i have more than 1 tasks in the same label substract
		if (as.labelList[taskLabel] > 1) {
			as.labelList[taskLabel] = as.labelList[taskLabel] - 1;
		}else{
			//if the label is only contain for one task, delete
			delete as.labelList[taskLabel];
			// as.labelList.splice(taskLabel, 1);
		}

		printLabelsArr();

	});

}


//init code and handlers code
$(document).ready(function() {

	//init app
	as = new AppService();

	//print labels to DOM
	for (var i = 0; i < as.labels.length; i++) {
		$('#iconLabel').append('<div class="flex-item" data-value='+ as.labels[i] + ' >' + as.labels[i]+ '</div>');
	}

	//print priority for task
	for (var i = 0; i < as.priority.length; i++) {
		$('#iconPriority').append('<div class="flex-item" data-value=' + as.priority[i]+ '>' + as.priority[i]+ '</div>');
	}

	//print list of colors
	for (var i = 0; i < as.colors.length; i++) {
		$('#iconColor').append('<div class="flex-item" data-value=' + as.colors[i] + '>'  + as.colors[i]+ '</div>');
	}

	//print datTime
	for (var i = 0; i < as.dateTime.length; i++) {
		$('#iconDateTime').append('<div class="flex-item" data-value=' + as.dateTime[i] + '>'  + as.dateTime[i]+ '</div>');
	}

	// handlers

	//add new task
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


		//push label if not exist
		// if(as.labelList[ts.label] !== undefined){
		if(as.labelList.hasOwnProperty('ts.label')) {
			//as.labelList.push(ts.label);
			as.labelList[ts.label] = 1;
		}else{
			//exist
			as.labelList[ts.label] = as.labelList[ts.label] + 1;
		}

		$('#titleText, #contentText').val('');
		$( "#iconLabel > div" ).removeClass('item-color-label');
		$( "#iconPriority > div" ).removeClass('item-color-priority');
		$( "#iconColor > div" ).removeClass('item-color');
		$( "#iconDateTime > div" ).removeClass('item-color-dateTime');

		//===== fetch mechanism ====

		// print the new created task
		getArrTasks();

		// print the label folder section
		printLabelsArr();

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