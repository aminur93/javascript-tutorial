var Mobile = function(model_no,sprice){
	
	this.model = model_no;
	this.color = 'White';
	var price = 1000;
	this.sp = sprice;

	this.show = function(){
		return "Hello World";
	};
};

var samsung = new Mobile('Galaxy',2000);

document.write(samsung.price);