var radians = true;
var arc= true;

var cambioModo = function() {
   
   radians = !radians;
   
   if (radians === true) {
       document.getElementById("btncambio").innerHTML="Rad";
   }
   else {
       document.getElementById("btncambio").innerHTML="Deg";
   }
};


var mostrararc = function () {
   
   arc = !arc;
   
   if (arc === true) {
       	document.getElementById('btnarcsen').style.visibility="hidden";
		document.getElementById('btnarccos').style.visibility="hidden";
		document.getElementById('btnarctan').style.visibility="hidden";
   }
   else {
        document.getElementById('btnarcsen').style.visibility="visible";
		document.getElementById('btnarccos').style.visibility="visible";
		document.getElementById('btnarctan').style.visibility="visible";
   }
};



var calcula = function (action) {
	if (action === "") { //borra caja texto
		document.getElementById("txt1").value="";
		document.getElementById("txt2").value="";
	}
	else if (action === "=") { //hacer cálculos
		var cad=document.getElementById("txt1").value;
		var pos=cad.indexOf("^");
		
		if (pos === -1) { // ^ no está en cad
		  pos = cad.indexOf("sin");
		      if (pos === -1) { // sin no está en cad
		          pos = cad.indexOf("cos");
		          if (pos === -1) { // cos no está en cad
			         pos = cad.indexOf("tan");
		             if (pos === -1) { // tan no está en cad
		               pos = cad.indexOf("ln");
		               if (pos === -1) { // log no esta
		                pos = cad.indexOf("√");
		                 if (pos === -1) { // raiz no esta
		                   pos = cad.indexOf("arcsen")
		                   	 if (pos === -1) { //arcseno no esta
		                   	   pos = cad.indexOf ("arccos")
		                   	     if (pos === -1) { //arccos no esta
		                   	      pos = cad.indexOf ("arctan")
		                   	       if (pos === -1) { //arctan no esta
		                   	        pos = cad.indexOf ("E")
		                   	         if (pos ===-1) { //E no esta
		                   	          document.getElementById("txt2").value=eval(cad);
		                   	         }
		                   	         else {
		                   	         var number = cad.substring(pos+1,cad.length);
					                 document.getElementById("txt2").value=Math.exp(number);
		                   	         }
		                   	       }
		                   	       else {
		                   	       var angle = cad.substring(pos+7,cad.length-1);
				                   if (!radians) {
					               angle *= Math.PI/180 ;
					               }
				                   document.getElementById("txt2").value=Math.atan(angle);  
		                   	       }
		                   	     }
		                   	     
		                   	     else{
		                   	     var angle = cad.substring(pos+7,cad.length-1);
				                 if (!radians) {
					             angle *= Math.PI/180 ;
					             }
				                 document.getElementById("txt2").value=Math.acos(angle);
		                   	     }
		                   	   }
                            
                             else { //calculo el arcseno
                                var angle = cad.substring(pos+7,cad.length-1);
				                if (!radians) {
					            angle *= Math.PI/180 ;
					            }
				                document.getElementById("txt2").value=Math.asin(angle);
                                }
		                
		                 }
		                 else {
						   var number = cad.substring(pos+1,cad.length);
					       document.getElementById("txt2").value=Math.sqrt(number);
						 } 
							 } 
		             else{ //calculo log
				       var number = cad.substring(pos+3,cad.length-1);
					   document.getElementById("txt2").value=Math.log(number);
						 } 
					 }   
		             else { //calculo de la tan
				       var angle = cad.substring(pos+4,cad.length-1);
				        if (!radians) {
					   angle *= Math.PI/180 ;
					   }
				       document.getElementById("txt2").value=Math.tan(angle);
				     } 
		          }    
		          else { //calculo del coseno
				       var angle = cad.substring(pos+4,cad.length-1);
				        if (!radians) {
					   angle *= Math.PI/180 ;
					   }
				       document.getElementById("txt2").value=Math.cos(angle);
				  } 
			  }
		      else { // calculo del seno
			       var angle = cad.substring(pos+4,cad.length-1);
			       if (!radians) {
					   angle *= Math.PI/180 ;
					   }
			       document.getElementById("txt2").value=Math.sin(angle);
		     }
		  }
		  else { //calculando la potencia
			   var base=cad.substring(0,pos);
			   var exponente=cad.substring(pos+1,cad.length);
			   document.getElementById("txt2").value=Math.pow(base,exponente);
		  }
		
	}
	else { //rellena caja
		document.getElementById("txt1").value+=action;
	}
};


var defecto = function () {
document.getElementById("btnshift").setDefaultButton;
}
