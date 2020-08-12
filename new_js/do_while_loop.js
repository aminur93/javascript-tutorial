/*
This is DO While loop example in javascript
*/

let i = 0;

do
{
	document.write(i);
	i++;
	document.write("<br>");
}while(i < 5);
document.write("Rest of Code <br><br>");

//Another way of do while loop

let j = 0;
do{
	if (j == 3) {
		break;
	}

	document.write(j);
	j++;
	document.write("<br>");
}while(true);