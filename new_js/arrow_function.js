/*
This is arrow function example in javascript
*/

// Function expression
var myfun1 = function show() {
	document.write("This is function expression <br>");
};
myfun1();

// Anonymous function
var myfun2 = function(){
	document.write("This is Anonymous function <br>");
};
myfun2();


// Arrow function
var myfun3 = () => {
	document.write("This is Arrow function <br>");	
};
myfun3();

// Arrow function parameter
var myfun4 = (a,b) => {
	document.write(a + " " + b + "<br>");
};

myfun4(10,20);

// Arrow function with default parameter
var myfun5 = (a, b=20) => {
	document.write(a + " "+b + "<br>");
};
myfun5(40);


//arrow function with rest parameter
var myfun6 = (a,...args) => {
	document.write(" A = " + a + " <br> ");
	document.write(" Rest Parameter = " + args + " <br> ");
};
myfun6(10,20,30,40,50);

// Arrow function new way
var myfun7 = a => document.write(a + "<br>");
myfun7(200);

// Arrow function another way
var myfun8 = c => c+"<br>";
document.write(myfun8(400));

//Arrow function with retrun
var myfun9 = (e,f) => {
	return e+f ;
};

document.write(myfun9(300,400));