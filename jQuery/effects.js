$("#effects").click(clickHandler);

// function clickHandler() {
// 	$("p").hide('slow');  //slow, normal, fast
// 	setTimeout(() => {
// 		$("p").show(1200); // we can pass time
// 	}, 2000);
// }

// slideUp, slideDown changes height
// function clickHandler() {
// 	$("p").slideUp('slow');
// 	setTimeout(() => {
// 		$("p").slideDown(1200); // we can pass time
// 	}, 2000);
// }

// fadeOut, fadeIn  changes opacity
// function clickHandler() {
// 	$("p").fadeOut('slow');
// 	setTimeout(() => {
// 		$("p").fadeIn(1200); // we can pass time
// 	}, 2000);
// }

// function clickHandler() {
// $("p").toggle('slow')
// $("p").slideToggle('slow')
// $("p").fadeToggle('slow')

// callback for waiting completion
// $("p").fadeToggle('1200', () => {
// 	alert('we done here')
// })

// $('p').slideToggle(2500)
// $("<button type = 'button'></button").text('stop animation').on('click', function() {
// 	$('p').stop()
// }).appendTo('body')

//delay
// 	$('p').hide(500).delay(2000).show(600)
// }

// we can modify our speeds methods
// jQuery.fx.speeds.fast = 300;
// jQuery.fx.speeds.blazing = 100;
// jQuery.fx.speeds.excruciating = 4000;

// jQuery.fx.interval = 20 // how many frames per second. default 13

// function clickHandler() {
// 	$('p').toggle('excruciating');
// 	jQuery.fx.off = true // disabling all animations
// }

// custom effects via animate method
// function clickHandler() {
// 	$('p.content').animate({
// 		left: "+=50",
//         opacity: 0.25
// 	}, 1000)
// }
// function clickHandler() {
// 	$('p.content').animate({
// 		marginLeft: ["+=500", 'swing'], // we can specify animate function
//         opacity: [0.25, 'linear']
// 	}, 1000)
// }

// queue
// function clickHandler() {
// 	$("p.content")
// 		.animate(
// 			{
// 				height: 200,
// 			},
// 			"slow"
// 		)
// 		.queue(function () {
// 			$("p.content").html("We're in the animation, baby!");

// 			// This tells jQuery to continue to the next item in the queue
// 			$(this).dequeue();
// 		})
// 		.animate({ height: 50 }, "slow")
// 		.queue(() => $("p.content").html("we donw second time"));
// }

// // custom queue
// function clickHandler() {
// 	$("p")
// 		.queue("steps", function (next) {
// 			$("p").html("first queue");
// 			next();
// 		})
// 		.queue("steps", function (next) {
// 			$("p").html("second queue");
// 			next();
// 		})
// 		.dequeue("steps");
// }
