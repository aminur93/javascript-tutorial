/*
This is for loop example in javascript
*/

// first for loop example
for (let i = 0; i <= 5; i++) {
	document.write("this is loop " + i + "<br>");
}
document.write("rest of the code <br> <br>");

//another way for loop example
let j = 0;
for (; j <= 5; j++) {
	document.write("Another for Loop Example : " + j + "<br>");
}
document.write("Another Example Rest of the code <br> <br>");

//Third way of for loop example

let x = 0;
for(; x<5; )
{
	x++;
	document.write("third Example of for loop : " + x + "<br>");
}
document.write("Third Example Rest of the code <br> <br>");

//Forth way of for loop example

let y = 0;
for(; y<=5; )
{
	
	document.write("Forth Example of for loop : " + y + "<br>");
	y++;
}
document.write("Forth Example Rest of the code <br> <br>");

//fifth way of for loop example
let z = 0;
for(; ; z++)
{
	if (z == 5) {
	
		break;
	}
	document.write("Fifthe Example of for loop : "+ z +"<br>");
}

document.write("Fifthe Example Rest of the code <br> <br>");