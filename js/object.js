/*
start object in javascript
 */

var fees = {};

    fees.anim = 100;
    fees.pavel = 200;
    fees.khan = 300;
    fees.total = function () {
        return 200+300;
    };

    document.write(fees.total());

    var payment = {
        anim: 100,
        pavel: 200,
        khan: 300,
        total: function () {
            return 100+200+500;
        }
    };
    
    document.write(payment.total());

/*
end
 */

/*
start object constructor
 */

var fees = new Object();
    fees.anim = 100;
    fees.khan = 200;
    fees.total = function () {
        return fees.anim + fees.khan;
    };

    document.write(fees.total());

/*
end
 */

/*
start addiding property
 */

var fees = {
    rahul: 100,
    pavel: 200,
    anim: 300
};

fees.sonam = 400;

document.write(fees.sonam+" "+fees.rahul+" "+fees.pavel+" "+fees.anim);
delete fees.anim;

console.log(fees);

/*
end
 */

/*
start factory function
 */

function mobile(model_no,price) {
    return{
        model: model_no,
        price: price
    }
}

var samsung = mobile('Galaxy',3000);
var nokia = mobile("3310",2000);

document.write(samsung.model+" "+samsung.price+"<br>");
document.write(nokia.model+" "+nokia.price);

console.log(samsung);

/*
end
 */

/*
start javascript constructor
 */

function Mobile(model_no) {
    this.model = model_no,
        this.price = function () {
            document.write(this.model+" Price is Tk 3000"+"<br>");
        }
}

var samsung = new Mobile('Galaxy');
var lg = new Mobile('Lg234');
samsung.price();
lg.price();

/*
end
 */

/*
start property exist or not
 */

function Mobile(model_no,memory) {
    this.model = model_no;
    this.space = memory;
}

var samsung = new Mobile('Galaxy',2);
var Lg = new Mobile('Lg',10);

if (samsung.hasOwnProperty('space'))
{
    document.write(samsung.space);
}else {
    document.write("Wrong");
}



