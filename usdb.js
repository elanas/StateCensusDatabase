$(document).ready(function() {
    $('#map').usmap({
	mouseover: function(event, data) {
	    //$('#hover-div').text('You clicked ' + data.name + "!")
            $.ajax({
	        type: "POST",
	        url: 'usdbstate.php',
	        dataType: 'json',
	        data: {functionname: 'hover', arguments: [stateDict[data.name]]},
	    
	        success: function (obj) {
	                      if( !('error' in obj) ) {
	                          $('#hover-state').text(obj.result.Name);
				  $('#hover-pop').text("Population: " + numberWithCommas(obj.result.Population));
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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var stateDict = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
};
