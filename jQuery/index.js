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




// $(() => {
// 	$('a, div').click(() => {
// 		console.log('a or div clicked')
// 	})
// })

// all except two first
// $(() => {
// 	$('div:gt(2)').html('changed')
// })

// Testing whether a selection contains elements.
// if ( $( "div" ).length ) {
//     console.log($('div').length) 
// }

// let div = $('div') // saving selections
// console.log(div)


// filtering
// $( "div" ).has( "p" ).html('div that has p');        
// $( "div" ).not( ".catchme" ).html('div withouts catchMe class');         
// $( "div" ).filter( ".apple" ).html('apple'); 
// $( "div" ).first().html('first haha');             
// $( "div" ).eq( 2 ).html('third hhaahhaahhaa');    // 3      



$( "form :checked" )
$( "form :disabled" )
$( "form :enabled" )
$( "form :input" )
$( "form :selected" )

