/*
This is adding properties example in javascript
*/

var fees = {

	Rahul: 100,
	Sonam: 200
};

document.write(fees.Rahul + " " + fees.Sonam + "<br>");

fees.Sumit = 300;

fees.show = function (){
	document.write("Hello Geekyshows");
};

fees.show();

console.log(fees);