var Mobile = function(model_no,sprice){

	//Instance member
	this.model = model_no;
	this.price = sprice;
};

var samsung = new Mobile('Galaxy',2000);

//prototype member
Mobile.prototype.color = 'White';

for(var key in samsung){
	document.write(key);
}
