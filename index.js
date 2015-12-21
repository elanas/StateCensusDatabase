
var sdk, census;
// $(document).ready(function() {
//     sdk = new CitySDK();
//     census = sdk.modules.census;
//     // var apiKey = prompt("Please enter your Census API Key", "API key");
//     census.enable("be0ca37c77bd4d4d073f912c7fc535d13855f274");
// });

function JSON2CSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';

        if ($("#quote").is(':checked')) {
            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[i]) {
                line += array[i][index] + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;
    
}

function parseForDatabase(response, tablename) {
        var data = JSON.stringify(response.data)
        var csv = JSON2CSV(response.data);

        var dataArray = csv.split("\n")

        for (x = 0; x < dataArray.length; x++) {
            var row = dataArray[x].split(",")

            var newString = "insert into " + tablename + " values (";

            for (y = 0; y < row.length; y++) {
                row[y] = row[y].replace("'","/'");
		row[y] = "'" + row[y] +"'"
            }

            newString += row.join()
            newString += ");"

            dataArray[x] = newString
        }
	var sqlString = dataArray.join("\n")
	console.log(sqlString)
	return sqlString
}

function submitState() {
    sdk = new CitySDK();
    census = sdk.modules.census;
    // var apiKey = prompt("Please enter your Census API Key", "API key");
    census.enable("be0ca37c77bd4d4d073f912c7fc535d13855f274");


    var request = {
        variables: [
            "population",
            "income",
	    "population_white_alone",
            "population_black_alone",
            "population_hispanic_origin",
            "population_asian_alone",
            "population_other_alone",
            "poverty",
            "age",
            "education_bachelors",
            "education_masters",
            "education_professional",
            "education_doctorate",
	    "employment_unemployed"
        ],
        level: "us",
        sublevel: "true"
    }
    
    census.APIRequest(request, function(response) {
	
	var sqlString = parseForDatabase(response, "State")       
        //var data = JSON.stringify(response.data)
        //var csv = JSON2CSV(response.data);

        //var dataArray = csv.split("\n")

        //for (x = 0; x < dataArray.length; x++) {
        //    var row = dataArray[x].split(",")

        //    var newString = "insert into State values (";

        //    for (y = 0; y < row.length; y++) {
        //        row[y] = row[y].replace("'","/'");
	//	row[y] = "'" + row[y] +"'"
        //    }

        //    newString += row.join()
        //    newString += ");"

        //    dataArray[x] = newString
        //}
	//var sqlString = dataArray.join("\n")
	//console.log(sqlString)

	var output = $('#state-output');
	//output.width(400).height(600);
	//output.css('overflow','hidden');
	$('.block').css('display','inline-block');
	//output.append(sqlString);
	
	$('#state-text').val(sqlString);
    });
}


function submitCounty() {
    sdk = new CitySDK();
    census = sdk.modules.census;
    // var apiKey = prompt("Please enter your Census API Key", "API key");
    census.enable("be0ca37c77bd4d4d073f912c7fc535d13855f274");

    for(state in census.stateCapitals) {
	console.log(state)
	console.log("*");
    }

//    var request = {
//        variables: [
//            "population",
//            "income",
//	    "population_white_alone",
//            "population_black_alone",
//            "population_hispanic_origin",
//            "population_asian_alone",
//            "population_other_alone",
//            "poverty",
//            "age",
//            "education_bachelors",
//            "education_masters",
//            "education_professional",
//            "education_doctorate",
//	    "employment_unemployed"
//        ],
//        level: "us",
//        sublevel: "true"
//    }
//    
//    census.APIRequest(request, function(response) {
//       
//        var data = JSON.stringify(response.data)
//        var csv = JSON2CSV(response.data);
//
//        var dataArray = csv.split("\n")
//
//        for (x = 0; x < dataArray.length; x++) {
//            var row = dataArray[x].split(",")
//
//            var newString = "insert into State values (";
//
//            for (y = 0; y < row.length; y++) {
//                row[y] = '"' + row[y] +'"'
//            }
//
//            newString += row.join()
//            newString += ");"
//
//            dataArray[x] = newString
//        }
//	var sqlString = dataArray.join("\n")
//	console.log(sqlString)
//
//	var output = $('#state-output');
//	//output.width(400).height(600);
//	//output.css('overflow','hidden');
//	$('.block').css('display','inline-block');
//	//output.append(sqlString);
//	
//	$('#state-text').val(sqlString);
//    });
}
submitState()
