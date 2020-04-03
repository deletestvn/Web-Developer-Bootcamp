//Marking Completion
function markCompletion(todo){
	$(todo).toggleClass("todoCompleted");
}
//Deleting Todo
function deleteTodo(todo){
	$(todo).parent().fadeOut(500, function(){
		$(this).remove();
	});
}
//Creating Todo
function createTodo(todo){
	var todoText = $(todo).val();
	$(todo).val("");
	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
}

$("ul").on("click", "li", function(){markCompletion(this);});
$("ul").on("click", "span", function(event){
	deleteTodo(this);
	event.stopPropagation;
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		createTodo(this);
	}
});
