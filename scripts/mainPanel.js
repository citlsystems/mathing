// JavaScript Document

   var numeratorActive=null;
   var exponentBaseActive=null;
   var concatEquationItems="";
   var getEquationItem;
   var backSlash = String.fromCharCode('92');
   var ampersand = String.fromCharCode('38');

   
  function equationBuilder(item_id){
	 
	 
	var backSlash = String.fromCharCode('92');
	var ampersand = String.fromCharCode('38');
	 
				 if(item_id == "openFractionPanel"){
							showfractionBuilder();//this pops up the panel to build fractions
							numeratorActive=true;//numerator input to true
							document.getElementById("numeratorid").style.color = "#e4f6fe";//style numerator button
							document.getElementById("denominatorid").style.color = "#727272"//style denominator button
							getFractionItem =  backSlash +'frac{'+numerator+'}{'+denominator+'}';//updateViewer
							return;//break from function
							
				  }else if(item_id == "square"){
							showSquareRootBuilder();//this pops up the panel to build SquareRoot
					  		return;//break from function
							
				  }else if(item_id == "power"){
					  		showExponentBuilder();//this pops up the panel to build Exponents
							exponentBaseActive=true;//base input to true
							document.getElementById("baseId").style.color = "#e4f6fe";//style numerator button
							document.getElementById("exponentId").style.color = "#727272"//style denominator button
					  		return;//break from function		
	
				  }else if(item_id == "leftBracket"){
					 getEquationItem = "\\left(\\right.";
				  }else if(item_id == "rightBracket"){
					 getEquationItem = "\\left.\\right)";
				  }else if(item_id == "x"){
					 getEquationItem =  "x";
				  }else if(item_id == "y"){
					 getEquationItem =  "y";
				  }else if(item_id == "z"){
					 getEquationItem =  "z";
				  }else if(item_id == "0"){
					 getEquationItem =  "0";
				  }else if(item_id == "1"){
					 getEquationItem =  "1";
				  }else if(item_id == "2"){
					 getEquationItem =  "2";
				  }else if(item_id == "3"){
					 getEquationItem =  "3"; 
				  }else if(item_id == "4"){
					 getEquationItem =  "4";
				  }else if(item_id == "5"){
					 getEquationItem =  "5";
				  }else if(item_id == "6"){
					 getEquationItem =  "6";
				  }else if(item_id == "7"){
					 getEquationItem =  "7";
				  }else if(item_id == "8"){
					 getEquationItem =  "8";
				  }else if(item_id == "9"){
					 getEquationItem =  "9";
				  }else if(item_id == "equal"){
					 //getEquationItem =  ampersand + "=";
					 //equalEventHandler Listener
				  }else if(item_id == "+"){
					 getEquationItem =  "+";
				  }else if(item_id == "-"){
					 getEquationItem =  "-";
				  }else if(item_id == "*"){
					  getEquationItem = backSlash +"cdot"; //(cdot) = latex for . used in multiplication
				  }else if(item_id == "/"){
					  getEquationItem = backSlash +"div"; //(div) = latex for - division sign . used in used for division
				  }else if(item_id == "newLine"){
					//see newLineListener
					var startIndex = mathOutputArray.indexOf("\\\\[1mm]");
					console.log("startIndex = " + startIndex);
					var equationStepFeedBack = new Array();
					for (i = 0; i < mathOutputArray.length; i++) {
						//find index of of the new line characters in the mathOutputArray
						//once you find that number loop mathOutputArray starting with that number
      					if (mathOutputArray[i] > startIndex) { 
          					equationStepFeedBack.push(mathOutputArray[i]);
          					i--; //decrement
      					}
					}
				  }
				  else if(item_id == "reset"){
					  //re-add = sign listener
					  window.addEventListener("keypress", checkKeyPressed, false);

					//Set equal and newline to default
					//detect if listener added to #equal
					//if true - do not add it again
					//because it will add a double equal sign
					//happens when you add a single digit and reset
					// instead of turning off the listener - In future track if listener is added or not
					$("#equal").unbind("click",equalEventHandler);//find better way of doing this
					//bind listener
					$("#equal").bind("click",equalEventHandler);
					document.getElementById("equal").style.opacity=1;
					document.getElementById('equal').style.cursor = "pointer"; 
					document.getElementById("newLine").style.opacity=.3;
					document.getElementById('newLine').style.cursor = "default"; 
					$("#newLine").unbind("click",newLineHandler);
					  
					getEquationItem="";
					concatEquationItems ="";
					//Empty array
					mathOutputArray = [];
					
				  }
				  
				    
		//Push Item to Array --- which is used to delete items entered by user --- see deleteUserInput.js
		mathOutputArray.push(getEquationItem);

		//concat items		
		concatEquationItems += getEquationItem;
		//update queue
	  	mainUpdateMathjax(concatEquationItems);

		//empty feed back text field
		document.getElementById("feedBackTextField").innerHTML="";
		//check user input - syntax
		//checkSyntaxForm();This will be implemented later srk
		

		//this sets the width of #showRandonmQuestion to #MathOutput as it is dynamically widen
		var MathOutputWidth = document.getElementById("MathOutput");
		var width = (MathOutputWidth.clientWidth + 1) + "px";

		var elem1 = document.getElementById('p1');
    	elem1.style.width = width;

	  }//end equationBuilder()
	 
	 
	  
$(window).load(function(){	
		//if user navigates away from application page and back again
		//reset form to default
		//Reset history select menu and fields 
		//set item in select menu
		document.getElementById('questionFeed').value = "QuestionTypes";
	  	//Reset history counter fields
		document.questionTypeForm.currentQuestion.value= "";
		document.questionTypeForm.questionTotal.value= "";
		
		
});  
	
