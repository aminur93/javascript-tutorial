//date Method In Javascript
// var tarikh = new Date();
// document.write(tarikh);

//creating new date object
// var tarikh = new Date(2019,10,17);
// document.write(tarikh);

//create date string object
// var tarikh = new Date("Nov 17, 2019 4:24:12");
// document.write(tarikh);

//Iso date
// var tarikh = new Date("2019-11-17T12:00:00Z");
// document.write(tarikh);

//Short date
// var tarikh = new Date("11-17-2019");
// document.write(tarikh);

//Long date
// var tarikh = new Date("March 10 2019");
// document.write(tarikh);

//Set date Method
// var tarikh = new Date();
// document.write(tarikh + "<br>");

// tarikh.setHours(22);
// document.write(tarikh + "<br>");

// tarikh.setMinutes(56);
// document.write(tarikh + "<br>");

// tarikh.setSeconds(40);
// document.write(tarikh + "<br>");

// tarikh.setDate(10);
// document.write(tarikh + "<br>");

// tarikh.setMonth(5);
// document.write(tarikh + "<br>");

// tarikh.setFullYear(2018);
// document.write(tarikh + "<br>");

// tarikh.setFullYear(2019,11,17);
// document.write(tarikh + "<br>");

//Get date in javascript

// var tarikh = new Date();
// document.write(tarikh + "<br>");

// document.write("Hours : "+ tarikh.getHours() + "<br>");

// document.write("Minutes : "+ tarikh.getMinutes() + "<br>");

// document.write("Seconds : "+ tarikh.getSeconds() + "<br>");

// document.write("Date : "+ tarikh.getDate() + "<br>");

// document.write("Month : "+ tarikh.getMonth() + "<br>");

// document.write("Years : "+ tarikh.getFullYear() + "<br>");

// document.write("Day : "+ tarikh.getDay() + "<br>");

//Retrive Month And Date
var tarikh = new Date();
var month = tarikh.getMonth();
var day = tarikh.getDay();

document.write(getMonthName(month)+"<br>");
document.write(getDay(day)+"<br>");

function getMonthName(monthnumber) {
	var monthname = [
             "January","Feburay","March",
             "April","May","June","July","August","September","Octobor","November","December"
	]

	return monthname[monthnumber];
}

function getDay(daynumber) {
	var dayname = ["Sunday","Monday","Tuseday","Wednesday","Turseday","Friday","Saturday"];

	return dayname[daynumber];
}


//Format Date
var tarikh = new Date();
document.write(formatDate(tarikh)+"<br>");

function formatDate(pd) {
	var date = pd.getDate();
	var month = pd.getMonth();
			month++;
	var year = pd.getFullYear();

	return date + " - " + getMonthName(month) + " - " + year;
}