function prepareSlideshow(){
	//检查浏览器是否支持Dom方法
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	//确保元素是否存在
	if(!document.getElementById("linklist")) return false;
	if(!document.getElementById("preview")) return false;
	//为图片应用样式
	var preview	= document.getElementById("preview");
	preview.style.position	="absolute";
	preview.style.left	="0px";
	preview.style.top	="0px";
	//取得列表中的所有连接
	var list	= document.getElementById("linklist");
	var links	= list.getElementsByTagName("a");
	//为mouseover事件添加动画效果
	links[0].onmouseover	=	function(){
		moveElement("preview",-100,0,10);
	}
	links[1].onmouseover	=	function(){
		moveElement("preview",-200,0,10);
	}
//	links[2].onmouseover	=	function(){
//		moveElement("preview",-300,0,10);
//	}
}
addLoadEvent(prepareSlideshow);
