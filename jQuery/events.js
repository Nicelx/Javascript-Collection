const foo = () => console.log("foo function fired");

// Event setup using a convenience method
// $( "p" ).click(function() {
// 	alert( "You clicked a paragraph!" );
// });

// Equivalent event setup using the `.on()` method
// $( "p" ).on( "click", function() {
//     alert( "click" );
// });

// $( "input:first" ).on(
//     "click change", // Bind handlers for multiple events
//     function() {
//         alert( "An input was clicked or changed!" );
//     }
// );

// Binding multiple events with different handlers
// $( "input[type = text]" ).on({
//     "click": function() { alert( "clicked!" ); },
//     "mouseover": function() { console.log( "hovered!" ); }
// });

// Namespacing events
// $( "p.content" ).on( "click.contentNamespace", function() {alert('p.content clicked')} );
// $( "p" ).off( "click.contentNamespace" );
// $( "p" ).off( ".contentNamespace" ); // Unbind all events in the namespace

// we can pass a specific function to remove
// $('p.content').on('click', foo);
// $('button').click(() => {
//     $( "p" ).off( "click", foo );
//     alert('event removed')
// })

// only one time
// $("p.content").one("click", foo);
// $("p.content").one("click, mouseover", (event) => console.log(event.type));

// // hover can receive 1|2 functions
// $("p.content").hover(
// 	function () {
// 		$(this).addClass("magic");
// 	},
// 	function () {
// 		$(this).addClass("secondMagic");
// 	}
// );

// we can bidn events
// $( "p.content" ).bind( "click", function( event ) {
//     alert( "Hello." );
// });

// jQuery wrap event with own version
// $('p.content').click(event => console.log(event))
// $('p.content').click(event => console.log(event.originalEvent))

// many events and handlers
// $( "p.content" ).on({
//     mouseenter: function() {
//         $(this).addClass('magic');
//     },
//     mouseleave: function() {
// 		$(this).addClass('secondMagic')
// 	},
//     click: function(event) {
// 		console.dir( event );
// 		$(this).removeClass(['magic', 'secondMagic'])
// 		$(this).off()
//     }
// });

// Binding events to elements that don't exist yet
// $( "ul" ).on( "click", "li", function() {
//     console.log( "Something in a <ul> was clicked, and we detected that it was an <li> element." );
// });

// trigger
// $( "p.content" ).click(() => alert('clicked'));
// $( "p.content" ).trigger( "click" ); // Don't use .trigger() simply to execute specific functions
// $( "p.content" ).triggerHandler( "click" ); // have some diff from .trigger()

// Triggering a native browser event using the simulate plugin NEED PLUGIN!
// $( "p.content" ).simulate( "click" );

// custom events
// example without customs events
// $( ".switch, .clapper" ).click(function() {
//     var light = $( this ).closest( ".room" ).find( ".lightbulb" );
//     if ( light.is( ".on" ) ) {
//         light.removeClass( "on" ).addClass( "off" );
//     } else {
//         light.removeClass( "off" ).addClass( "on" );
//     }
// });

// some example custom events
// $(".lightbulb").on("light:toggle", function (event) {
// 	var light = $(this);
// 	if (light.is(".on")) {
// 		light.removeClass("on").addClass("off");
// 	} else {
// 		light.removeClass("off").addClass("on");
// 	}
// });

// $(".switch, .clapper").click(function () {
// 	var room = $(this).closest(".room");
// 	room.find(".lightbulb").trigger("light:toggle");
// });

// with master switch
// $(".lightbulb")
// 	.on("light:toggle", function (event) {
// 		var light = $(this);
// 		if (light.is(".on")) {
// 			light.trigger("light:off");
// 		} else {
// 			light.trigger("light:on");
// 		}
// 	})
// 	.on("light:on", function (event) {
// 		$(this).removeClass("off").addClass("on");
// 	})
// 	.on("light:off", function (event) {
// 		$(this).removeClass("on").addClass("off");
// 	});

// $(".switch, .clapper").click(function () {
// 	var room = $(this).closest(".room");
// 	room.find(".lightbulb").trigger("light:toggle");
// });

// $("#master_switch").click(function () {
// 	var lightbulbs = $(".lightbulb");

// 	// Check if any lightbulbs are on
// 	if (lightbulbs.is(".on")) {
// 		lightbulbs.trigger("light:off");
// 	} else {
// 		lightbulbs.trigger("light:on");
// 	}
// });

