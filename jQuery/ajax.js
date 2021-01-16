let url = "https://jsonplaceholder.typicode.com/todos";

// $.get(url, (res) => {
// 	console.log(res)
// 	for (let i=0; i<10; i++) {
// 		$(`<p>${res[i].title}</>`).insertAfter('button')
// 	}
// })

// Using the core $.ajax() method
// $.ajax({
//     // The URL for the request
//     url: url,
//     // The data to send (will be converted to a query string)
//     data: {
//         id: 5
//     },
//     // Whether this is a POST or GET request
//     type: "GET",
//     // The type of data we expect back
//     dataType : "json",
// })
//   // Code to run if the request succeeds (is done);
//   // The response is passed to the function
//   .done(function( json ) {
// 	 $( "<h1>" ).text( json[0].title ).appendTo( "body" );
// 	console.log(json)
//   })
//   // Code to run if the request fails; the raw request and
//   // status codes are passed to the function
//   .fail(function( xhr, status, errorThrown ) {
//     alert( "Sorry, there was a problem!" );
//     console.log( "Error: " + errorThrown );
//     console.log( "Status: " + status );
//     console.dir( xhr );
//   })
//   // Code to run regardless of success or failure;
//   .always(function( xhr, status ) {
//     alert( "The request is complete!" );
//   });

// load content or parts of page from html url
// $('#forLoad').load('forLoad.html', ()=> alert('load complete'))

// Serialization
// $("#myForm").submit(function (e) {
// 	result = $("#myForm").serialize();
// });

// Validate a phone number field
// $("#myForm").submit(function (event) {
// 	var inputtedPhoneNumber = $("#phone").val();
// 	// Match only numbers
// 	var phoneNumberRegex = /^\d*$/;
// 	// If the phone number doesn't match the regex
// 	if (!phoneNumberRegex.test(inputtedPhoneNumber)) {
// 		// Usually show some kind of error message here
// 		// Prevent the form from submitting
// 		event.preventDefault();
// 	} else {
// 		alert("good");
// 		// Run $.ajax() here
// 	}
// });

// JSONP
// $.ajax({
// 	url: "https://jsonplaceholder.typicode.com/todos/",

// 	jsonp: "callback",

// 	// Tell jQuery we're expecting JSONP
// 	dataType: "jsonp",

// 	// Tell what we want and that we want JSON
// 	data: {
// 		userId: 4,
// 		format: "json",
// 	},

// 	// Work with the response
// 	success: function (response) {
// 		console.log(response); // server response
// 	},
// });

// Setting up a loading indicator using Ajax Events
// $("#loading_indicator")
// 	.hide()
// 	.ajaxStart(function () {
// 		$(this).show();
// 	})
// 	.ajaxStop(function () {
// 		$(this).hide();
// 	});

// $("#ajax").click(() => {
// 	$.get(url, (response) => {
// 		console.log(response);
// 	});
// });
