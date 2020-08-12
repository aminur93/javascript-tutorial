/*
This is variable scope example in javascript
*/

var i = " I am Global variable"; // Global Variable

function show() {
	
	document.write(i+"<br>"); // Inside Function
}

show();

document.write(i+"<br>"); // Outside function

function disp() {
	
	document.write(i+"<br>"); // Inside Function
}

disp();

if (true) {
	document.write(i+"<br>"); // Inside Block
}


// Local variable example
function show1() {
	
	var j = "I am local variable"; // local varibale
	document.write(j+"<br>");
}

show1();


// function show2() {
	
// 	document.write(j+"<br>");
// }

// show2();

// if (true) {
// 	document.write(j+"<br>");
// }


// Global varibale declare in inside function
function show3() {
	
	k = "I am Global Inside Function";
	document.write(k+"<br>");
}

show3();
document.write(k+"<br>");

if (true) {
	document.write(k+"<br><br><br>");
}


//Nested function in local varibale
function show4() {
	
	//local variable
	var a = "A is a local varibale of outer function";

	document.write(a+"<br>");

	function innerShow()
	{
		//local varibale
		var b = " B is a local varibale of inner function";
		document.write(b+"<br>");
		document.write(a+"<br>");
	}

	innerShow();
}
show4();
