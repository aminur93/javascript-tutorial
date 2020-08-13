/*
This is Parametrised Constructor example in javascript
*/

class Mobile{

	constructor(model_no,price)
	{
		this.model_no = model_no;
		this.price = price;
	}

	show()
	{
		document.write(this.model_no + " price is " + this.price);
	}
}

var nokia = new Mobile("Galaxy",4000);
nokia.show();