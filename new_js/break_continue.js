/*
This is Break and Continue example in javascript
*/

//Break statement example
for (let i = 1; i <= 10; i++) {
	
	if (i == 8) {
		break;
	}

	document.write(i);
	document.write("<br>");
}

document.write("Rest of Code <br> <br>");

//Continue Statement example
for (let j = 1; j <= 10; j++) {

	if (j == 5) {
		continue;
	}

	document.write(j);
	document.write("<br>");
	
}