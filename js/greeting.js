/*

	Description: script to generate greeting based on time of day
	and to get the time and date of users browser and display on the webpage

*/



document.getElementById("greeting").innerHTML = greeting;


var updateGreeting = function(hour) {

	var currentTime = new Date();
//alert(currentTime);//example output mon Feb 22 2016 17:25:22 GMT-0800 (PST)

var currentHours24 = currentTime.getHours();//get hours from date()
//console.log("hours: "+currentMinutes);

	var greeting;


	if (currentHours24 >= 18) {
		greeting = "Good Evening!!";
		document.getElementById("container").style.backgroundColor = "black";
		document.getElementById("container").style.color = "white";
	}
	else if ( currentHours24 >= 13) {
		greeting = "Good Afternoon";
		document.getElementById("container").style.backgroundColor = "turquoise";
	}
	else if( currentHours24 >= 0) {
		greeting ="Good Morning";
		document.getElementById("container").style.backgroundColor = "purple";
	}
	else {
		greeting = "Welcome!!";
	}


	
	return greeting;

}


var updateClock = function() {

	var currentTime = new Date();
	//alert(currentTime);//example output mon Feb 22 2016 17:25:22 GMT-0800 (PST)

	var currentHours24 = currentTime.getHours();//get hours from date()
	//console.log("hours: "+currentMinutes);
	var currentMinutes = currentTime.getMinutes();
	//console.log("minutes: "+currentMinutes);
	var currentSeconds = currentTime.getSeconds();

	//If it is less than 12 then AM if it's more than 12 than PM
	var amOrPm = ( currentHours24 < 12 ) ?"AM" : "PM" ;

	//If the hour is more than 12  subtract 12 to convert to 12 hour clock  otherwise keep the time
	var currentHours12 = (currentHours24 > 12 ) ? currentHours24-12 : currentHours12;

	currentHours12 =  ( currentHours12 ==0 ) ? 12 : currentHours12

	//"0" == 0 true
	//"0" ==== 0 false

	var currentTimeString = "Current time is " + currentHours12 + " : " + currentMinutes + " : " + currentSeconds + " : "
	 + amOrPm;

	 document.getElementById("greeting").innerHTML = updateGreeting(currentHours24);
	 document.getElementById("clock").innerHTML = currentTimeString;
}