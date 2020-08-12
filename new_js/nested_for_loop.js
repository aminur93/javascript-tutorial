/*
This is for Nested for loop example in javascript
*/

for(let i=0; i<3; i++)
{
	document.write("<strong>Outer Loop</strong>"+ i + "<br>");

	for(let j=0; j<5; j++)
	{
		document.write("Inner Loop"+ j + "<br>");
	}
}