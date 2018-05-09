//function moveMessage(){
//	if(!document.getElementById) return false;
//	if(!document.getElementById("message")) return false;
//	var elem	= document.getElementById("message");
//	var XPos	=	parseInt(elem.style.left);
//	var YPos	=	parseInt(elem.style.top);
//	if(XPos== 200&&	YPos	==100){
//		return true;
//	}	
//	if(XPos< 200){
//		XPos++;
//	}
//	if(XPos> 200){
//		XPos--;
//	}
//	if(YPos	<100){
//		YPos++;
//	}
//	if(YPos >100){
//		YPos--;
//	}
//	elem.style.left		=XPos + "px";
//	elem.style.top		=YPos + "px";
// movement	=setTimeout("moveMessage()",10);
//	
//}

function positionMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem	= document.getElementById("message");
	elem.style.position	= "absolute";
	elem.style.left	=		"50px";
	elem.style.top	=		"100px";
	moveElement("message",125,25,20);
	if(!document.getElementById("message1")) return false;
	var elem	= document.getElementById("message1");
	elem.style.position	= "absolute";
	elem.style.left		= "50px";
	elem.style.top		= "50px";
	moveElement("message1",125,125,20);
}

function moveElement(elementID,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem	= document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	var XPos	=parseInt(elem.style.left);
	var YPos	=parseInt(elem.style.top );
	var dist	=0;
	if(XPos == final_x && YPos == final_y	){
		return true;
	}
	if(XPos <final_x){
		dist	= Math.ceil((final_x -XPos)/10);
		XPos = XPos +dist;
		
	}
	if(XPos >final_x){
		dist	= Math.ceil((XPos-final_x)/10);
		XPos = XPos	-dist;
	}
	if(YPos <final_y){
		dist	= Math.ceil((final_y-YPos)/10);
		YPos	=YPos+dist;
		
	}
	if(YPos  >final_y){
		dist	= Math.ceil((YPos-final_y)/10);
		YPos 	=YPos-dist;
	}
	elem.style.left	= XPos + "px";
	elem.style.top	= YPos + "px";
 	var repeat	= "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
   	elem.movement	= setTimeout(repeat,interval);
}

addLoadEvent(positionMessage);
addLoadEvent(moveElement);