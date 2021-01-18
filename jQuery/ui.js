$("#elemForUi").progressbar({ value: 20 });
result = $("#elemForUi").progressbar("value");

$("#elemForUi").progressbar("value", 40).addClass("almost-done");
$("#elem").progressbar("option", "value", 30); //we're calling the option method and saying that we want to change the value option to 30
$("#elem").progressbar("option", "value"); // We can also get the current value for an option.

// In addition, we can update multiple options at once by passing an object to the option method.
// $( "#elem" ).progressbar( "option", {
//     value: 100,
//     disabled: true
// });

// For most widgets, when the events are triggered, the names are prefixed with the widget name.
$("#elem").bind("progressbarchange", function () {
	alert("The value has changed!");
});
$( "#elem" ).progressbar({
    change: function() {
        alert( "The value has changed!" );
    }
});

$("#widgetTest").click(function () {
	$("#elemForUi").progressbar("value", 60);
	console.log("we call it");
});

console.log(result);
