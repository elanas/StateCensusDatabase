$(document).ready(function() {
    $('#map').usmap({
	mouseover: function(event, data) {
	    $('#hover-div').text('You clicked ' + data.name + "!")
	},
	
	click: function(event, data) {
	    $('#clicked-div').text('You clicked ' + data.name + "!")
	}

    });


  });

