var Mobile = function(model_no,sprice) {
	
	this.model = model_no;
	this.price = 300;
	this.color = 'White';
	this.sp = sprice;

	this.sellingPrice = function() {
		 return (this.price + this.sp);
	};

	this.data = function(){
		document.write("Model No : "+this.model+" Price : "+this.sellingPrice()+"<br>");
	};
};

var samsung = new Mobile('Galaxy',2000);
var nokia = new Mobile("Lumia",3000);
samsung.data();
nokia.data();