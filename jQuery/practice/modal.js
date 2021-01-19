function toggleModal() {
	$('div.modal-body, div.backdrop').toggleClass('modal-active')
}

$('#modal').on('click', toggleModal)
$('div.backdrop').on('click', toggleModal)