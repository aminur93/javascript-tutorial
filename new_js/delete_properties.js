/*
This is Delete properties example in javascript
*/

var fees = {
	Rahul: 100,
	Sonam: 200,
	Sumit: 300
};

document.write(fees.Rahul + " " + fees.Sonam + " " + fees.Sumit + "<br>");

delete fees.Rahul;

document.write(fees.Rahul + " " + fees.Sonam + " " + fees.Sumit + "<br>");

console.log(fees);