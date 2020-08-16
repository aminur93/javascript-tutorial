/*
This is Array Constructor example in javascript
*/

var geek = new Array();
geek[0] = "Rahul";
geek[1] = "Sunmit";
geek[2] = 59;
geek[3] = "Sonam";

for(let i = 0; i < geek.length; i++)
{
	document.write(i + " : " + geek[i] + " <br> ");
}

document.write("===================== <br>");

var student = new Array("Nadiya","Lily","Anika","Urmi");

for(let j = 0; j < student.length ; j++)
{
	document.write(j + " : " + student[j] + "<br>");
}