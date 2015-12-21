$(document).ready(function() {
    $('#map').usmap({
	mouseover: function(event, data) {
	    //$('#hover-div').text('You clicked ' + data.name + "!")
            $.ajax({
	        type: "POST",
	        url: 'usdbstate.php',
	        dataType: 'json',
	        data: {functionname: 'hover', arguments: ["California"]},
	    
	        success: function (obj) {
	                      if( !('error' in obj) ) {
	                          $('#hover-div').text(obj.result.Name + " this is from the database!!");
	 			console.log(obj.result)
	                      }
	                      else {
	                          console.log(obj.error);
			       	console.log("err")
					
	                      }
	        }, error: function (err) {
			console.log(err.responseText)
			console.log("error not success")
		}
	    });


	},
	
	click: function(event, data) {
	    //$('#clicked-div').text('You clicked ' + data.name + "!")
	}
    });
  });

