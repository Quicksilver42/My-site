var keys = document.querySelectorAll('div.button');
var output = document.getElementById("display");
var hasOpp = false;
var btnVal1 = 0;
var btnVal2 = 0;
console.log(keys);


for(var i = 0; i < keys.length; i++){
	keys[i].addEventListener("click", mathify, false);
};

function mathify(){
    
	if(this.classList.contains("opp")){
		var btnVal = output.innerHTML;
		output.insertAdjacentHTML('beforeend', this.innerHTML);
		hasOpp = true;
	} 
	
	else if(this.innerHTML === "="){
output.innerHTML=eval(output.innerHTML);
    if(output.innerHTML==="42"){
        confirm("the answer to life");
        }
      else if (output.innerHTML==="1984"){
        confirm("big brother is watching you");  
      }
       else if (output.innerHTML==="3.14"){
        confirm("apple");  
      }
       else if (output.innerHTML==="666"){
        confirm(":(");  
      }
        
	}
 else if(this.innerHTML === "π"){
output.insertAdjacentHTML('beforeend',eval(Math.PI));
		}
else if(this.innerHTML === "e"){
output.insertAdjacentHTML('beforeend',eval( 2.71828));
		}
else if(this.innerHTML === "√"){
output.innerHTML=eval(Math.sqrt(output.innerHTML));
		}   
else if(this.innerHTML === "cos"){
output.innerHTML=eval(Math.cos(output.innerHTML));
		}   
else if(this.innerHTML === "sin"){
output.innerHTML=eval(Math.sin(output.innerHTML));
		}   
else if(this.innerHTML === "tan"){
output.innerHTML=eval(Math.tan(output.innerHTML));
		}  
else if(this.innerHTML === "log"){
output.innerHTML=eval(Math.log(output.innerHTML));
		}   
else if(this.innerHTML === "Clear"){
    output.innerHTML="";
	}
else{
	output.insertAdjacentHTML('beforeend', this.innerHTML);
	var btnVal = output.innerHTML;

}
};