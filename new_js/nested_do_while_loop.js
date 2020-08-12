/*
This is Nested DO While loop example in javascript
*/

let i = 0;
do{
	document.write("<strong>Outer Loop</strong>");
	document.write(i);
	i++;
	document.write("<br>");

	let j = 0;
	do{
		document.write("Inner Loop");
		document.write(j);
		j++;
		document.write("<br>");
	}while(j < 5);
}while(i < 3);