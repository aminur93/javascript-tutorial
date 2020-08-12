/*
This is arguments object example in javascript
*/

function display(name1, name2) {
	
	arguments[0] = "Aminur Rashid"
	document.write(name1 +"<br>");
	// document.write(arguments[0] +" ");
	// document.write(arguments[1]);
}

//calling functon

display("Hello Javascript","Power full programming language");

//new function
function disp(fname,num,lname) {
	
		document.write(arguments.length+"<br>");

		arguments[0] = "hello";

		for(let i=0; i<arguments.length; i++)
		{
			document.write(arguments[i]+"<br>");
		}
}

//calling function
disp("Aminur Rashid",120,"World");


//argument callee property
function add(num1,num2)
{
	document.write(arguments.callee);
}

add(10,20);