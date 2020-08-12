/*
This is Nested While loop example in javascript
*/

let i = 0;
while(i < 3)
{
	document.write("<strong>Outer While Loop</strong>");
	document.write(i);
	i++;
	document.write("<br>");

	let j = 0;
	while(j < 5)
	{
		document.write("Inner While Loop");
		document.write(j);
		j++;
		document.write("<br>");
	}
}