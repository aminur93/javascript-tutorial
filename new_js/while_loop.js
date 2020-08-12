/*
This is While loop example in javascript
*/

let i = 0;
while(i < 5)
{
	document.write(i);
	i++;
	document.write("<br>");
}
document.write("Rest of code <br> <br>");


//Another way of while loop

let j =0;
while(true)
{
	if (j == 5) {
		break;
	}
	document.write(j);
	j++;
	document.write("<br>");
}