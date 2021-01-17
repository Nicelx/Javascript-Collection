var frag = document.createDocumentFragment();
var myArray = ['asdf', 'asdfasfd', 'three']
 
// $.each( myArray, function( i, item ) {
 
//     var newListItem = document.createElement( "li" );
//     var itemText = document.createTextNode( item );
 
//     newListItem.appendChild( itemText );
 
//     frag.appendChild( newListItem );
 
// });
 
// $( "#simpleUl" ).get(0).appendChild( frag );

// using one big string
// var myHtml = "";
 
// $.each( myArray, function( i, item ) {
 
//     myHtml += "<li>" + item + "</li>";
 
// });
 
// $( "#simpleUl" ).html( myHtml );

// In a for loop, don't access the length property of an array every time; cache it beforehand
// var myLength = myArray.length;

// for ( var i = 0; i < myLength; i++ ) {
//     // do stuff
// }

// Detach Elements to Work with Them
// var table = $( "#myTable" );
// var parent = table.parent();
 
// table.detach();
 
// // ... add lots and lots of rows to table
 
// parent.append( table );

// Don’t Act on Absent Elements
// Best: Add a doOnce plugin.
// jQuery.fn.doOnce = function( func ) {
 
//     this.length && func.apply( this );
 
//     return this;

// }
 
// $('p').doOnce(function() {
// 	// do some
// })

// Optimize Selectors
// Slower (the zero-based :even selector is a jQuery extension)
$( "#my-table tr:even" );
// Better, though not exactly equivalent
$( "#my-table tr:nth-child(odd)" );

// Avoid Excessive Specificity
$( ".data table.attendees td.gonzalez" );
// Better: Drop the middle if possible.
$( ".data td.gonzalez" );

// Beginning your selector with an ID is a safe bet.
// Fast:
$( "#container div.robotarm" );
// Super-fast:
$( "#container" ).find( "div.robotarm" );

//Be specific on the right-hand side of your selector, and less specific on the left.
// Unoptimized:
$( "div.data .gonzalez" );
// Optimized:
$( ".data td.gonzalez" );

// Selections that specify or imply that a match could be found anywhere can be very slow.
$( ".buttons > *" ); // Extremely expensive.
$( ".buttons" ).children(); // Much better.
 
$( ":radio" ); // Implied universal selection.
$( "*:radio" ); // Same thing, explicit now.
$( "input:radio" ); // Much better.


// Use Stylesheets for Changing CSS on Many Elements
// Fine for up to 20 elements, slow after that:
$( "a.swedberg" ).css( "color", "#0769ad" );
// Much faster:
$( "<style type=\"text/css\">a.swedberg { color: #0769ad }</style>")
    .appendTo( "head" );