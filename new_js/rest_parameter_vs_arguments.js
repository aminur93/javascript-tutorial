/*
This is rest parameter vs argument example in javascript
*/

//rest parameter function
function restPara(a, ...args)
{
	document.write(" A = "+a+"<br>");
	document.write("Rest Parameter = "+args+"<br>");

	console.log(a);
	console.log(args);
}

//rest parameter function calling
restPara(10,20,30,40,50);

//arguments function
function show(num1)
{
	document.write(" B = "+num1+"<br>");
	document.write(" Argument = "+arguments+"<br>");

	console.log(num1);
	console.log(arguments);
}
//arguments function calling
show(10,20,30,40,50);