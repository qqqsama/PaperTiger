function stripeTables(){
	if(!document.getElementsByTagName) return false;
	var tables	= document.getElementsByTagName("table");
 	var odd,rows;
 	for(var i=0;i<tables.length;i++){
 		 odd= false;
 		 rows=	tables[i].getElementsByTagName("tr");
 		  for(var j=0;j<rows.length;j++){
 		  	if(odd == true){
 		  		rows[j].style.backgroundColor	="yellow";
 		  		odd=false;
 		  	}
 		  	else{
 		  		odd=true;
 		  	}
 		  }
 	}
}

function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows	=  document.getElementsByTagName("tr");
	for(var i=0;i<rows.length;i++){
		rows[i].onmouseover	= function(){
			this.style.fontWeight	= "bold";
		
		}
		rows[i].onmouseout	= function(){
			this.style.fontWeight	="normal";
		}
	}
	
}
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);