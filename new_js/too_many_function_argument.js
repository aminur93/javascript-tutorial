/*
This is too many function argumnets example in javascript
*/

function adds(a,b) {
	
	document.write("A : "+a+" B : "+b+"<br>");
	document.write("C : "+arguments[2]+" D : "+arguments[3]+"<br>");
}

adds(10,20,30,40);