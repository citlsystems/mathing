// JavaScript Document

// This function helps with (user input)  - - Proper equation Step Form 
// Listeners are toggled between the Newline and Equal Sign buttons
// User cannot enter consecutive  equal signs per Equation Step
// User cannot enter consecutive new lines after an Equation Step
// user enters equal sign - Listener added to new line and listener removed from Equal Sign
// user enters newline - Listener removed from new line and listener added to Equal Sign


//Initalize elements
$(document).ready(function() {
	document.getElementById("newLine").style.opacity=.3;
	document.getElementById('newLine').style.cursor = "default"; 
 	$("#equal").bind("click",equalEventHandler);//equal btn
	//$("#equal").bind("click",equalEventHandler);//numpad "="
});//end document.ready


var equationStepFeedBack1="";
function  newLineHandler(){
	//removes the numpad "=" listener - numberPadInput.js
	window.addEventListener("keypress", checkKeyPressed, false);
	
	$("#equal").bind("click",equalEventHandler);//add listener
	document.getElementById("equal").style.opacity=1;
	document.getElementById('equal').style.cursor = "pointer"; 
	document.getElementById("newLine").style.opacity=.3;
	document.getElementById('newLine').style.cursor = "default";  
	getEquationItem =  "\\\\"  + "[1mm]";
	mathOutputArray.push(getEquationItem);//push to array
	concatEquationItems += getEquationItem;//concat items
	mainUpdateMathjax(concatEquationItems);//update queue
	$("#newLine").unbind("click");//remove listener	
			
	//equationStepFeedBack = mathOutputArray; --- This won't actually copy mathOutputArray but instead reference it, which is why the original array is modified. You can use Array.slice() to create a so-called shallow copy of the array.
					
	var equationStepFeedBack = mathOutputArray.slice(0);
	equationStepFeedBack.reverse();//reverse array and grab elements between the first two "\\\\[1mm]" this will always give us the last line of the equation
	
	for (i = 0; i < equationStepFeedBack.length; i++) {//strip the first element - "\\\\[1mm]" if there
		if (equationStepFeedBack[0] == "\\\\[1mm]") { 
			equationStepFeedBack = equationStepFeedBack.slice(1);// ignore/skip the first element.
			//equationStepFeedBack.reverse();
		}
	}			
	//console.log("mathOutputArray = " + mathOutputArray);
	//console.log("equationStepFeedBack = " + equationStepFeedBack);
	
	equationStepFeedBack1="";//reset string
	//iterate to find next element - "\\\\[1mm]" -- all elements before this element ("\\\\[1mm]") store in var , reverse() and break from function
	for (q = 0; q < equationStepFeedBack.length; q++) {
		if (equationStepFeedBack[q] == "\\\\[1mm]") { 
			break;
			//equationStepFeedBack.reverse();
			//i--; //decrement
		}else{
		console.log("test q = " + q)
		equationStepFeedBack1 += equationStepFeedBack[q] ;// ignore/skip the first element.	
		//console.log("equationStepFeedBack1 = " + equationStepFeedBack1);
			
		}
	}
					
	//console.log("mathOutputArray = " + mathOutputArray);
	//console.log("equationStepFeedBack = " + equationStepFeedBack);
	//console.log("equationStepFeedBack.reverse() = " + equationStepFeedBack.reverse());
	//reverse() is a method of array instances. It won't directly work on a string. You should first split the characters of the string into an array, reverse the array and then join back into a string:
	var backway = equationStepFeedBack1.split("").reverse().join("");
	
	//The following used for realtime feedback
	//Condition to set which questiontype feedback and call to function
	if(document.questionTypeForm.questionFeed.value == "linearEquation"){
		console.log("This is linearEquation Feedback already  implemented")
		document.getElementById("feedBackTextField").innerHTML =LEgetFeedbackBarMsg(inputLinEqn + '\\\\[1mm]' + concatEquationItems);
	
	}else if(document.questionTypeForm.questionFeed.value == "quadraticExpression"){
		
		//console.log("This is quadraticExpression Feedback to be implemented")
		//document.getElementById("feedBackTextField").innerHTML ="This is quadraticExpression Feedback to be implemented";
		
	}//end else
	 
}//end function


function  equalEventHandler(){
	getEquationItem =  ampersand + "=";//get item
	mathOutputArray.push(getEquationItem);//push to array
	concatEquationItems += getEquationItem;//concat items
	mainUpdateMathjax(concatEquationItems);//update queue
	document.getElementById("equal").style.opacity=.3;
	document.getElementById('equal').style.cursor = "default";
	document.getElementById("newLine").style.opacity=1;
	document.getElementById('newLine').style.cursor = "pointer"; 
	$("#newLine").bind("click",newLineHandler);
	$("#equal").unbind("click");//remove listener
	
	//removes the numpad "=" listener - numberPadInput.js
	//re-added using the newLineHandler() above
	window.removeEventListener("keypress", checkKeyPressed, false);
	
}
