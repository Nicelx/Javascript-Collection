let result;

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

// result =$('input[type=checkbox]').parent();
// result =$('input[type=checkbox]').parents();
// result =$('input[type=checkbox]').parentsUntil('body');
// result =$('input[type=checkbox]').closest();

// result = $('div.apple').children()  			// look only 1 lvl
// result = $('div.apple').find('a')			//	look all childs

// result = $('div.apple').next();
// result = $('div.apple').prev();
// result = $('div.apple').siblings();
// result = $('div.apple').nextAll();
// result = $('div.apple').nextUntil('p');
// result = $('div.apple').prevAll();
// result = $('div.apple').prevUntil();

// result = $('p').css('border')
// $('div.apple p').css('color', 'red')

// .css setter generally should be avoided
// $('div.apple p').css({
// 	fontSize: '30px',
// 	color: 'red',
// 	backgroundColor: 'gray'
// })

// $('div.apple p').addClass('magic secondMagic')
// $('div.apple p').removeClass('magic')
// $('div.apple p').toggleClass('magic')

// result = $("div.apple").data("keyName", {
// 	propertyName: "key",
// 	addSomeElse: "some else",
// }).data('keyName');

// Storing a relationship between elements using .data()
// $("div.apple p").each(function () {
// 	var p = $(this);
// 	var strong = p.find("strong");
// 	p.data("contentDiv", strong);
// });
// // Later, we don't have to find the div again;
// // we can just read it from the list item's data
// var firstP = $("div.apple p:first");

// firstP.data("contentDiv").html("new content");


// result = $.trim('  testtts t s tst s t  ');
// $.each([1,2,3], function(idx, val) {
// 	console.log(`${idx} = ${val}`)
// })
// $.each({name:'nikolay', hair: 'black'}, function(k, v) {
// 	console.log(`${k} = ${v}`)
// })


// result = $.inArray(2, [1,2,3])		//return index!

// let firstObj = {name: 'first', age: 10}
// let secondObj = {name: 'second', color: 'black'}
// result = $.extend(firstObj, secondObj)
// result = $.extend({}, firstObj, secondObj)

//proxy Returns a function that will always run in the provided scope
// const myFunction = () => this
// const myObject = {method: function() {return this}}
// var myProxyFunction = $.proxy( myFunction, myObject );
// console.log(myProxyFunction)



// $.isArray([]); // true
// $.isFunction(function() {}); // true
// $.isNumeric(3.14); // true

// $.type( true ); // "boolean"
// $.type( 3 ); // "number"
// $.type( "test" ); // "string"
// $.type( function() {} ); // "function"
 
// $.type( new Boolean() ); // "boolean"
// $.type( new Number(3) ); // "number"
// $.type( new String('test') ); // "string"
// $.type( new Function() ); // "function"
 
// $.type( [] ); // "array"
// $.type( null ); // "null"
// $.type( /test/ ); // "regexp"
// $.type( new Date() ); // "date"


console.log(result);

