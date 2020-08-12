var noofticket = 5;
var buyticket = prompt("Enter Your Total Ticket : ");
var eachprice = 200;
var disprice = 50;

function ticket(theory, ...rest) {
	if(rest[2] < 5)
	{
		rest[3] = 0;
		return `${theory[0]} ${rest[0]} ${theory[1]} ${rest[1]} 
		${theory[2]} ${rest[2]} ${theory[3]} ${rest[3]} ${theory[4]}`;
	}else{
		return `${theory[0]} ${rest[0]} ${theory[1]} ${rest[1]} 
		${theory[2]} ${rest[2]} ${theory[3]} ${rest[3]} ${theory[4]}`;
	}
}

document.write(ticket `There are ${noofticket} movie tickets Each Rs ${eachprice} 
and if You buy ${buyticket} tickets get discount Rs. ${disprice} Each <br>`)

//string length property
var str = "Hello GeekyShows";
document.write(str.length+"<br>");

//char At property
var str = "Hello GeekyShows";
document.write(str.charAt(7)+"<br>");

//char Code At property
var str = "Hello GeekyShows";
document.write(str.charCodeAt(7));