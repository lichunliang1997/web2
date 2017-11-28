var picScroll = document.getElementById("picScroll");
var picScroll1 = document.getElementById("picScroll1");
var picScroll2 = document.getElementById("picScroll2");
picScroll2.innerHTML = picScroll1.innerHTML;
function changeToLeft(){
	if(picScroll2.offsetWidth-picScroll.scrollLeft<=0)
		picScroll.scrollLeft =0;
	else
	{
		picScroll.scrollLeft++;
	}
}
var changeToLeft1 = setInterval(changeToLeft,10);
picScroll.onmouseover = function(){
	clearInterval(changeToLeft1);
}
picScroll.onmouseout = function(){
	changeToLeft1 = setInterval(changeToLeft,10);
}