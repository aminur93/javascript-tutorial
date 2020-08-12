/*
This is passing anonymous function as argument example in
javascript
*/

function disp(myfun)
{
	return myfun();
}
document.write(disp(function(){
	return "GeekyShows";
}));