/*
This is Multidimensoanl array example in javascript
*/

//Array literal
var geek = [
		
		["rahul","hp",10],
		["Anik","dell",20],
		["Sonam","Lenevo",30]
];

//Array COnstructor
var student = new Array(
		["rahul","hp",10],
		["Anik","dell",20],
		["Sonam","Lenevo",30]
	);

for(let i=0; i<3; i++)
{
	for(let j=0; j<3; j++)
	{
		document.write(i+" "+j+" "+student[i][j] + " ");
	}

	document.write("<br>");
}