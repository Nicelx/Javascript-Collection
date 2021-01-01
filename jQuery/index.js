$(document).ready(() => {
	$('a').click((event) => {
		event.preventDefault();
		$(this).hide('slow')
	})
	$('div').click(function() {
		$(this).hide('slow')
	})
	$('a').addClass('test');
})