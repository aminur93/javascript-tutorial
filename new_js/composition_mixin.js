/*
This is Composition and Mixins example in javascript
*/

//Function for Inheritance
function extend(child,parent)
{
	child.prototype = Object.create(parent.prototype);
	child.prototype.constructor = child;
}

//Super Class
var Human = function()
{

}

//Prototype Member
Human.prototype.eat = function(){
	return "Super class eat method";
}

Human.prototype.walk = function(){
	return "Super class walk method";
}

Human.prototype.talk = function(){
	return "Super class Talk method";
}

//Sub class
var Animal = function(){

}

//Animal sub class extend super class
extend(Animal,Human);

//Sub class
var Robot = function(){

}

//Robot Sub class extend super class
extend(Robot,Human);


// New way to know composition or mixin
function mixin(target, ...sources)
{
	Object.assign(target, ...sources);
}

var eating = {
	eat: function(){
		return "I can eat <br>";
	}
};

var walking = {
	walk: function(){
		return "I can walk <br>";
	}
};

var talking = {
	talk: function(){
		return "I can talk <br>";
	}
};

var starting = {
	start: function(){
		return "RoboCop Start";
	}
};

var Stoping = {
	stop: function(){
		return "RoboCop Stop <br>";
	}
};

//Human Class
var Humans = function(){

}

//RoboCop Class
var Robo = function(){

}

//Compositing for Human
mixin(Humans.prototype, eating,walking,talking);
//Composition for robocop
mixin(Robo.prototype, walking,talking,starting);

var Rahul = new Humans();
var Sonam = new Humans();

var RoboCop = new Robo();

document.write(Rahul.eat());
document.write(Rahul.walk());
document.write(Rahul.talk());

document.write(RoboCop.walk());
document.write(RoboCop.talk());
document.write(RoboCop.start());