/*
This is Array  Literal example in javascript
*/

var geek = []  //Empty array

geek[0] = "Rahul";
geek[1] = "Sonam";
geek[2] = 56;
geek[3] = "Ankit";

for(let i = 0; i < geek.length ; i++)
{
	document.write(i + " : " + geek[i] + "<br>");
}

document.write("<br><br>");
document.write("========================== <br>");

var student = [
	
	"Anik",
	"Anim",
	"Jhon",
	"Nadiya"
];

for(let j = 0; j < student.length; j++)
{
	document.write(j + " : " + student[j] + "<br>");
}

