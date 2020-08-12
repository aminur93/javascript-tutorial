// var geek = [[],[],[]];

// 	geek[0][0] = "Rahul";
// 	geek[0][1] = "Dell";
// 	geek[0][2] = 10;

// 	geek[1][0] = "Sonam";
// 	geek[1][1] = "Hp";
// 	geek[1][2] = 20;

// 	geek[2][0] = "Jatin";
// 	geek[2][1] = "Apple";
// 	geek[2][2] = 30;


//array Literal
var geek = [
		["Rahul","Dell",10],
		["Sonam","Hp",20],
		["Jay","Lenevo",30]
	];
//array constructor
// var geek = new Array(
// 	["Rahul","Dell",10],
// 	["Sonam","Hp",20],
// 	["Jay","Lenevo",30]
// 	);

for(let i=0; i<3; i++)
{
	for(let j=0; j<3; j++)
	{
		//document.write(geek[i][j]+ " ");
		document.write(i+" "+j+" | "+geek[i][j]+" | ");
	}

	document.write("<br>");
}