//Array Literal

var geek = [10]; 
document.write(geek);

//Array Constructor

var geek = new Array(50);
document.write(geek[0]);


//Accessing Array Element

var geek = ["Rahul","Sharma",56,"Jay"];
document.write(geek);

//Modifying Array

var geek = ["Rahul","sharma",56,"jay"];
var geekshows = geek;
document.write(geekshows+" <br>");
document.write(geek+" <br>");
geekshows[0] = "Rohit";
document.write(geek+" <br>");

//Array Eelement Remove

var geek = ["Rahul","Sharma",56,"Jay"];
delete geek[0];
document.write(geek+" <br>");
document.write(geek[0]+" <br>");

//Array Length Property

 var geek = ["Rahul","Sharma",56,"Jay"];
 document.write(geek.length);

 //Iteration of Array using for Loop

  var geek = ["Rahul","Sharma",56,"Jay"];

  for (let i = 0; i < geek.length; i++) {
  		document.write(i +" = "+geek[i]+" <br>");
  }

  //For Each Loop in Array

  var geek = ["Rahul","Sharma",56,"Jay"];

  geek.forEach(function(value, index) {
  		document.write(index+" "+value+" <br>");
  });

  //For off loop

  var geek = ["Rahul","Sharma",56,"Jay"];
  for(let value of geek)
  {
  	document.write(value + "<br>");
  }

  //Input Array form user

  //Defining Array
  var elm = prompt('Enter Your Element : ');
  var geek = [];

  var geek = new Array(3);
  var ln = geek.length;
  console.log(ln);

  //Input
  for(i = 0; i< ln; i++)
  {
  	geek[i] = prompt("Enter Name : ");
  }

  //Display
  for(let value of geek)
  {
  	document.write(value + "<br>");
  }