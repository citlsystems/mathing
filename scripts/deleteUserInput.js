// JavaScript Document

 //Delete User Input - backup through equation - 1 item at a time using the Back btn in the main panel
 // Build an array of items entered by user.
 var mathOutputArray = [];

 // Pop the element off of the end of the array.
 function popMathOutputArray(){
	
	//console.log("mathOutputArray[mathOutputArray.length - 1] = "+ mathOutputArray[mathOutputArray.length - 1])
	//Reset equal and newline listeners when deleting items via array  
	if(mathOutputArray[mathOutputArray.length-1] == "&="){
		//re-adds the numpad "=" listener - numberPadInput.js
		window.addEventListener("keypress", checkKeyPressed, false);
		
		//console.log( $("#equal"))
		$("#equal").bind("click",equalEventHandler);
		document.getElementById("equal").style.opacity=1;
		document.getElementById("newLine").style.opacity=.3;
		$("#newLine").unbind("click",newLineHandler);
	}//end if
		  
	if(mathOutputArray[mathOutputArray.length-1] == "\\\\[1mm]"){
		 
		$("#equal").unbind("click",equalEventHandler);
		document.getElementById("equal").style.opacity=.3;
		document.getElementById("newLine").style.opacity=1;
		$("#newLine").bind("click",newLineHandler);
		mathOutputArray.pop()//this will pop the new line characters - while mathOutputArray.pop() below will pop the next character to the left	 
	}//end if
				
	mathOutputArray.pop()//this pops the Last element in the array
	concatEquationItems=mathOutputArray.join("");//no characters between items in Array
	//console.log("mathOutputArray.pop() = "+ mathOutputArray.pop())
	//console.log("mathOutputArray = "+mathOutputArray)
	//console.log("concatEquationItems = "+concatEquationItems)
	mainUpdateMathjax(mathOutputArray.join(""));//re-typeset equation using array
	document.getElementById("feedBackTextField").innerHTML="";//empty text field 
 }//end function