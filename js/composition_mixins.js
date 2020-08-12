//Mixin function
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


//Human class
var Human = function(){

}

//Robocop class
var RobpCop = function(){

}

//compositing features to human
mixin(Human.prototype, eating,walking,talking);

//Compositing features to robocop
mixin(RobpCop.prototype, walking,talking);

var Rahul = new Human();

var Robot = new RobpCop();

document.write(Rahul.eat());
document.write(Rahul.walk());
document.write(Rahul.talk());

document.write(Robot.walk());
document.write(Robot.talk());