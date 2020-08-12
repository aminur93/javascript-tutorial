/*
This is Object Constructor example in javascript
*/

var fees = new Object();

fees.Rahul = 100;
fees.Sonam = 200;
fees.Sumit = 300;

fees.total = function (){
	return (100+200+300);
}

document.write(fees.total());