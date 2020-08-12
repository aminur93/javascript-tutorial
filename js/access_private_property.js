var Mobile = function(model_no,sprice){

	this.model = model_no;
	this.color = 'White';
	this.sprice = price;
	var price = 2000;

	this.sellingPrice = function(){
		return (price);
	}
};

var samsung = new Mobile('Galaxy',3000);

document.write(samsung.sellingPrice());