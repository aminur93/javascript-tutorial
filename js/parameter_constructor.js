class Mobile {

	constructor(model_no, sprice)
	{
		this.model = model_no;
		this.price = sprice;
	}

	show()
	{
		return this.model+" "+this.price;
	}
};

var nokia = new Mobile('Galaxys9', 1000);
document.write(nokia.show());

//class unamed experssion
var Mobile = class {

	constructor(model_no, sprice)
	{
		this.model = model_no;
		this.price = sprice;
	}

	show()
	{
		return this.model+" "+this.price;
	}
};

var nokia = new Mobile('Galaxys9', 1000);
document.write(nokia.show());

//class experssion named
var Mobile = class Mobile2 {

	constructor(model_no, sprice)
	{
		this.model = model_no;
		this.price = sprice;
	}

	show()
	{
		return this.model+" "+this.price;
	}
};

var nokia = new Mobile('Galaxys9', 1000);
document.write(nokia.show());