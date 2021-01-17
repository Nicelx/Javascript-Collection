// make a plugin
// $.fn.greenify = function() {
// 	this.css( "color", "green" );
// 	return this
// };

// $( "p" ).greenify().addClass('greenified'); // Makes all the links green.

// protecting $ alias and adding scope
// (function ( $ ) {

//     var shade = "#556b2f";

//     $.fn.greenify = function() {
//         this.css( "color", shade );
//         return this;
//     };

// }( jQuery ));

// $('p').greenify();

//It would be much better to have one slot, and use parameters to control what action that one slot performs.
// (function( $ ) {
//     $.fn.popup = function( action ) {
//         if ( action === "open") {
// 			// Open popup code.
// 			alert('open')
//         }
//         if ( action === "close" ) {
// 			// Close popup code.
// 			alert('close')
//         }

//     };

// }( jQuery ));

// when we want do something with each element of collection
// $.fn.myNewPlugin = function() {
//     return this.each(function() {
//         // Do something to each element here.
//     });
// };

// accepting options
// (function ($) {
// 	$.fn.greenify = function (options) {
// 		// This is the easiest way to have default options.
// 		var settings = $.extend(
// 			{
// 				// These are the defaults.
// 				color: "#556b2f",
// 				backgroundColor: "white",
// 			},
// 			options
// 		);

// 		// Greenify the collection based on the settings variable.
// 		return this.css({
// 			color: settings.color,
// 			backgroundColor: settings.backgroundColor,
// 		});
// 	};
// })(jQuery);

// $("p").greenify({
// 	color: "orange",
// });

//puting all together
// (function( $ ) {

//     $.fn.showLinkLocation = function() {

//         this.filter( "a" ).each(function() {
//             var link = $( this );
//             link.append( " (" + link.attr( "href" ) + ")" );
//         });

//         return this;

//     };

// }( jQuery ));

// optimized version
// (function( $ ) {

//     $.fn.showLinkLocation = function() {

//         this.filter( "a" ).append(function() {
//             return " (" + this.href + ")";
//         });

//         return this;

//     };

// }( jQuery ));

// // Usage example:
// $( "a" ).showLinkLocation();

// Plugin definition.
// $.fn.hilight = function( options ) {

//     // Extend our default options with those provided.
//     // Note that the first argument to extend is an empty
//     // object – this is to keep from overriding our "defaults" object.
//     var opts = $.extend( {}, $.fn.hilight.defaults, options );

// 	// Our plugin implementation code goes here.
// 	return this.css({
// 		color: opts.foreground,
// 		background: opts.background
// 	})

// };

// // Plugin defaults – added as a property on our plugin function.
// $.fn.hilight.defaults = {
//     foreground: "red",
//     background: "yellow"
// };

// // now we can adjust our plugin options and uses it like theme
// $.fn.hilight.defaults.foreground = "blue";
// $('p').hilight();

// Provide Public Access to Secondary Functions as Applicable
// $.fn.hilight = function( options ) {
//     // Iterate and reformat each matched element.
//     return this.each(function() {
//         var elem = $( this );
//         // ...
//         var markup = elem.html();
//         // Call our format function.
//         markup = $.fn.hilight.format( markup );
//         elem.html( markup );

//     });

// };

// // Define our format function.
// $.fn.hilight.format = function( txt ) {
//     return "<strong>" + txt + "</strong>";
// };

// Keep Private Functions Private
// Create closure.
// (function( $ ) {

//     // Plugin definition.
//     $.fn.hilight = function( options ) {
//         debug( this );
//         // ...
//     };

//     // Private function for debugging.
//     function debug( obj ) {   // our debug function cannot be overwritten
//         if ( window.console && window.console.log ) {
//             window.console.log( "hilight selection count: " + obj.length );
//         }
//     };
// // End of closure.

// })( jQuery );

// Widget Factory
$.widget("nmk.progressbar", {
	// Default options.
	options: {
		value: 0,
	},
	_create: function () {
		this.element.addClass("progressbar");
		this._update();
	},

	_setOption: function (key, value) {
		this.options[key] = value;
		this._update();
	},

	_update: function () {
		var progress = this.options.value + "%";
		this.element.text(progress);
		if (this.options.value == 100) {
			this._trigger("complete", null, { value: 100 });
		}
    },
    _destroy: function() {
        this.element
            .removeClass( "progressbar" )
            .text( "" );
    },

	// Create a public method.
	value: function (value) {
		// No value passed, act as a getter.
		if (value === undefined) {
			return this.options.value;

			// Value passed, act as a setter.
		} else {
			this.options.value = this._constrain(value);
			var progress = this.options.value + "%";
			this.element.text(progress);
		}
	},
	// Create a private method.
	_constrain: function (value) {
		if (value > 100) {
			value = 100;
		}

		if (value < 0) {
			value = 0;
		}

		return value;
	},
});

// $( "<div />" ).appendTo( "body" ).progressbar({ value: 20 });
// $( "<div />" ).appendTo( "body" ).progressbar();
// $( "<div />" ).appendTo( "body" ).progressbar({value: 120});

// var bar = $( "<div />" ).appendTo( "body").progressbar({ value: 20 });

// // Get the current value.
// alert( bar.progressbar( "value" ) );

// // Update the value.
// bar.progressbar( "value", 50 );

// // Get the current value again.
// alert( bar.progressbar( "value" ) );

// binding to widget event
var bar = $("<div />")
	.appendTo("body")
	.progressbar({
		complete: function (event, data) {
			alert("Callbacks are great!");
		},
	})
	.bind("progressbarcomplete", function (event, data) {
		alert(
			"Events bubble and support many handlers for extreme flexibility."
		);

		alert("The progress bar value is " + data.value);
	});

// bar.progressbar("option", "value", 100);

$.nmk.progressbar.prototype.reset = function() {
    this._setOption( "value", 0 );
};

$("#plugins").click(() => {
	// $('p').popup('open');
    // $('p').popup('close');
    bar.progressbar("option", "value", 100);
});
