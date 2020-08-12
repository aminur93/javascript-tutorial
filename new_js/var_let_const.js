/*
This is var let const example in javscript
*/

var a = 10;
let b = 20;
const c = 30;

document.write(a + "<br>");
document.write(b + "<br>");
document.write(c + "<br><br><br>");


// var key word function
function myvar()
{
	var a = 20;
	if (true) {
		var a = 30;
		document.write(a + "<br>");
	}
	document.write(a + "<br><br><br>");
}
myvar();

// let key word function
function mylet()
{
	let a = 70;
	if (true) {
		let a = 90;
		document.write(a + "<br>");
	}

	document.write(a + "<br>");
}

mylet();