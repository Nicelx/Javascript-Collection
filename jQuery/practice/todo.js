function addToDo() {
	let content = $('.todo-input').val();
	$('.todo-list').append(`<li>${content}</li>`)
}

$('.todo-btn').on('click', addToDo)