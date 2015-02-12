(function(){
	'use strict';

	var taskname, 
      taskinstance,
      todoArea = $('#todoList'),
      todoForm = $('#addTodo'),
      todoTemplate = $('#todoTemp').html(),
      todoTemplateFunction = _.template(todoTemplate);

	window.app = {};
	console.log(window.app);
	app.allTodos = [];
	console.log(app.allTodos);

	app.Todo = function(taskName){

		this.task = taskName || "";
		this.status = 'incomplete';
		this.id = _.random(0, 99);
		this.toggleStatus = function(){
			if(this.status === 'incomplete'){
				this.status = 'complete';
			} else {
				this.status ='incomplete';
			}
		}
	};
	console.log("blah");
	app.addTodo = function(task) {
		app.allTodos.push(task);
		todoArea.prepend(todoTemplateFunction(task));
	};


	todoForm.on('submit', function(event){
		event.preventDefault();


		taskname = $(this).find('#text').val();
		taskinstance = new app.Todo(taskname);
		app.addTodo(taskinstance);
		this.reset();

	});

	todoArea.on('click', 'li', function(event){
		event.preventDefault();
		var thisTask = event.target;
		var thisTaskId = Number(thisTask.id);
		var thisTaskInstance = _.findWhere(app.allTodos, {id: thisTaskId });
		thisTaskInstance.toggleStatus();
		$(thisTask).removeClass().addClass(thisTaskInstance.status);
	});



})();