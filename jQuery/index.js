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



// $( "form :checked" )
// $( "form :disabled" )
// $( "form :enabled" )
// $( "form :input" )
// $( "form :selected" )



//
// $( "body" )
//     .find( "div" )
//     .eq( 2 )
//         .html( "new text for the third div" )
//         .end() // Restores the selection
//     .eq( 0 )
// 		.html( "new text for the first div" )
// 		.end().width('10px');


// $('div').position()
// $('input[type = text]').val('changed')


// $('div:first').appendTo('form')			//add 'div:first' selector content into selector 'form'
// $('div:first').insertAfter('p')
// $('div').append('appendet text')			//add content append method to selector div
// $('div:first').clone().insertAfter('p')	//clone first div and insert it after p
// $('div').remove(); 	// delete
// $('div').detach(); 	// temporaly delete
// $('div').empty();  	// clear content



// $( "<p>This is a new paragraph</p>" ).insertAfter('p'); //creating new element and pass it after 'p' selector
// Creating a new element with an attribute object.
// $( "<a/>", {
//     html: "This is a <strong>new</strong> link",
//     "class": "new",
//     href: "foo.html"
// }).appendTo('body');

// perfomance
// var myItems = [];
 
// for ( var i = 0; i < 100; i++ ) {
//     myItems.push( "<li>item " + i + "</li>" );
// }
 
// $('body').append( myItems.join( "" ) );



// $( "a:first" ).attr( "href", function( idx, href ) {
//     return "/new/" + href;
// });


// console.log($('div').get(0))
// console.log($('div').html())
// console.log($('div')[0])





