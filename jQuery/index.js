// $(document).ready(() => {
// 	$('a').click((event) => {
// 		event.preventDefault();
// 		$(this).hide('slow')
// 	})
// 	$('div').click(function() {
// 		$(this).hide('slow')
// 	})
// 	$('a').addClass('test');
// })




// $(() => {
// 	$('div').html('ready')
// })

// $( document ).ready(function() {
// 	console.log( "document loaded" );
// });

// $( window ).on( "load", function() {
// 	console.log( "window loaded" );
// });



// let $j = jQuery.noConflict();
// console.log($j)

// $j('div').click(function() {
// 	this.fadeToggle('slow', "linear")
// })


// $(() => {
// 	$('a').attr({
// 		href: "https://api.jquery.com/fadeToggle/",
// 		style: "text-decoration: none" 
// 	})
// })




$(() => {
	$('a, div').click(() => {
		console.log('a or div clicked')
	})
})




