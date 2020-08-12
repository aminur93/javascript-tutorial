/*
This is Object Literals example in javascript
*/

var fees = { };

fees['rahul'] = 100;
fees['sonam'] = 200;
fees['sumit'] = 300;
fees["Super Man"] = 400;

fees.Rahul = 100;
fees.Sumit = 200;
fees.Sonam = 300;

fees.total = function (){
	return (100+200+300);	
};

document.write(fees.total() + "<br><br>");

// user object literal another way

var bill = {

	mobile: 200,
	indata: 300,
	loan: 500,

	total: function(){

		return(200+300+400);
	}
};

document.write(bill.total());