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
$("p.content").one("click", foo);
$("p.content").one("click, mouseover", (event) => console.log(event.type));

// hover can receive 1|2 functions
$("p.content").hover(
	function () {
		$(this).addClass("magic");
	},
	function () {
		$(this).addClass("secondMagic");
	}
);
