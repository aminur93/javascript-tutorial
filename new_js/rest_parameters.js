/*
This is rest parameter example in javascript
*/

//rest parameter function creating
function show(a,...args) {

	document.write(" A = "+a+"<br>");
	document.write("Rest Paramisters = "+args+"<br>");
}

//calling function
show(10,20,30,40,50);