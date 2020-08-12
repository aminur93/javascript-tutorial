function show() {
    var j=" j is a local varibale of outer function";
    document.write(j+" <br>");

    function innerfun() {
        var k = "K is a local variable of inner function";
        document.write(k+" <br>");
        document.write(j+" <br>");
    }
    innerfun();
}
show();