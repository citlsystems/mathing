// JavaScript Document


//var activeQuestion;
function selectQuestion1(){//call for this function in the index file under question menu selector

		//Reset display for all questBtns to none
		//document.getElementById('hideBtn').style.display = "none";
		document.getElementById('linearEquationBtn').style.display = "none";
		document.getElementById('quadraticExpressionBtn').style.display = "none";
	
	if(document.questionTypeForm.questionFeed.value == "linearEquation"){
		
		document.getElementById("solveQuestType").innerHTML="Solve";
		hideAnswer();//hide any previous answers from other QuestionTypes
		newQuestion();
		//document.getElementById('hideBtn').style.display = "block";
		//document.getElementById('quadraticExpressionBtn').style.display = "none";
		document.getElementById('linearEquationBtn').style.display = "block";
		
		//show btns using functin below when questionHistory.length = 2;
		//document.getElementById('nextQuestion').style.display = "none";
		//document.getElementById('prevQuestion').style.display = "none";
		
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		if(questionHistory.length >= 1){//show previous btn
			document.getElementById("prevQuestion").disabled = false; 
			//document.getElementById('prevQuestion').style.display = "none";
			document.getElementById('prevQuestion').style.opacity = 1;
			document.getElementById('prevQuestion').style.cursor = "pointer";
		}else{
			document.getElementById("prevQuestion").disabled = true; 
			//document.getElementById('prevQuestion').style.display = "none";
			document.getElementById('prevQuestion').style.opacity = .2;
			document.getElementById('prevQuestion').style.cursor = "default";
		}
			
		document.getElementById("nextQuestion").disabled = true; 
		document.getElementById('nextQuestion').style.opacity = .2;
		document.getElementById('nextQuestion').style.cursor = "default";
		
		document.getElementById("hideAnswer").disabled = true; 
		document.getElementById('hideAnswer').style.opacity = .2;
		document.getElementById('hideAnswer').style.cursor = "default";

		
		
		/*inputLinEqn=randNiceIntLinTexEq(); document.getElementById('p1').innerHTML = '$'+inputLinEqn+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']); ........old June 4*/
		
		//display random linear equation --- tara's line
		inputLinEqn=LErandomLinearEquation(); document.getElementById('p1').innerHTML = '$'+inputLinEqn+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);//uncommen tfor random
		//activeQuestion=randNiceIntLinTexEq(); document.getElementById('p1').innerHTML = '$'+activeQuestion+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);//uncommen tfor random
		//inputLinEqn='8x+2=16'; document.getElementById('p1').innerHTML = '$'+inputLinEqn+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);//hard coded question
		//console.log("inputLinEqn ======   "+ inputLinEqn)
		
		getInputLine(inputLinEqn);
		
	}else if (document.questionTypeForm.questionFeed.value == "quadraticExpression"){
		document.getElementById("solveQuestType").innerHTML="Factor";
		hideAnswer();//hide any previous answers from other QuestionTypes
		newQuestion();

		document.getElementById('quadraticExpressionBtn').style.display = "block";
		
		
		if(questionHistory.length >= 1){//show previous1 btn
		
			document.getElementById("prevQuestion1").disabled = false; 
			//document.getElementById('prevQuestion').style.display = "none";
			document.getElementById('prevQuestion1').style.opacity = 1;
			document.getElementById('prevQuestion1').style.cursor = "pointer";
		}else{
			document.getElementById("prevQuestion1").disabled = true; 
			//document.getElementById('prevQuestion').style.display = "none";
			document.getElementById('prevQuestion1').style.opacity = .2;
			document.getElementById('prevQuestion1').style.cursor = "default";
		}
			
		document.getElementById("nextQuestion1").disabled = true; 
		document.getElementById('nextQuestion1').style.opacity = .2;
		document.getElementById('nextQuestion1').style.cursor = "default";
		

		document.getElementById("hideAnswer1").disabled = true; 
		document.getElementById('hideAnswer1').style.opacity = .2;
		document.getElementById('hideAnswer1').style.cursor = "default";
	
	
		inputQuadratic=type3FactorableQuadratic(); document.getElementById('p1').innerHTML = '$'+inputQuadratic+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);
		
		
		
		getInputLine(inputQuadratic)
	}
 
};

function showHideBtn(){
	
	document.getElementById('hideAnswer').style.display = "inline-block";
	
		//activate linear hideAnswer
		
		document.getElementById("hideAnswer").disabled = false; 
		//document.getElementById('prevQuestion').style.display = "none";
		document.getElementById('hideAnswer').style.opacity = 1;
		document.getElementById('hideAnswer').style.cursor = "pointer";
		
		
		document.getElementById('hideAnswer1').style.display = "inline-block";
		//activate quadratic hideAnswer 
		document.getElementById("hideAnswer1").disabled = false; 
		//document.getElementById('prevQuestion').style.display = "none";
		document.getElementById('hideAnswer1').style.opacity = 1;
		document.getElementById('hideAnswer1').style.cursor = "pointer";
		
		
		//deactivate linear showAnswer btn
		document.getElementById("showAnswer").disabled = true; 
		document.getElementById('showAnswer').style.opacity = .2;
		document.getElementById('showAnswer').style.cursor = "default";
		
		
		//deactivate quadratic showAnswer btn
		document.getElementById("showAnswer1").disabled = true; 
		document.getElementById('showAnswer1').style.opacity = .2;
		document.getElementById('showAnswer1').style.cursor = "default";
	
	}
	
	
	
	
function hideAnswer(){
		document.getElementById("p2").innerHTML=""; //clear feedback field
		
		//deactivate linear hideAnswer 
		document.getElementById("hideAnswer").disabled = true; 
		//document.getElementById('prevQuestion').style.display = "none";
		document.getElementById('hideAnswer').style.opacity = .2;
		document.getElementById('hideAnswer').style.cursor = "default";
		
		
		//deactivate quadratic hideAnswer 
		document.getElementById("hideAnswer1").disabled = true; 
		//document.getElementById('prevQuestion').style.display = "none";
		document.getElementById('hideAnswer1').style.opacity = .2;
		document.getElementById('hideAnswer1').style.cursor = "default";
		
		
		//activate linear showAnswer btn
		document.getElementById("showAnswer").disabled = false; 
		document.getElementById('showAnswer').style.opacity = 1;
		document.getElementById('showAnswer').style.cursor = "pointer";
		
		//activate quadratic showAnswer btn
		document.getElementById("showAnswer1").disabled = false; 
		document.getElementById('showAnswer1').style.opacity = 1;
		document.getElementById('showAnswer1').style.cursor = "pointer";

}

	
function newQuestion(){
	
	//hide all panel overlays and show main panel
	//Reset all global and local vars
	
		//Fraction
			numerator ="";
			denominator="";
			getFractionItem="";
			document.getElementById('fractionPanel').style.display = "none";
		//FractionFraction
			fractionFractionNumerator ="";
			fractionFractionDenominator="";
			getFractionFractionItem="";
			document.getElementById('fractionFractionPanel').style.display = "none";
		//FractionPower	
			getFractionPowerItem="";
			fractionExponent="";
			fractionBase="";
			document.getElementById('fractionExponentPanel').style.display = "none";
		//FractionFractionPower
			getFractionFractionPowerItem="";
			fractionFractionExponent="";
			fractionFractionBase="";
			document.getElementById('fractionFractionExponentPanel').style.display = "none";
		//FractionFractionSquareRoot
			getFractionFractionSquareRootItem="";
			fractionFractionSquareRoot="";
			document.getElementById('fractionFractionSquareRootPanel').style.display = "none";
		//FractionSquareRoot	
			getFractionSquareRootItem="";
			fractionSquareRoot="";
			document.getElementById('fractionSquareRootPanel').style.display = "none";
		//FractionSquareRootFraction	
			fractionSquareRootFractionNumerator ="";
			fractionSquareRootFractionDenominator="";
			getFractionSquareRootFractionItem="";
			document.getElementById('fractionSquareRootFractionPanel').style.display = "none";
		//FractionSquareRootExponent
			getFractionSquareRootExponentItem="";
			fractionSquareRootExponent="";
			fractionSquareRootBase="";
			document.getElementById('fractionSquareRootExponentPanel').style.display = "none";
		//SquareRoot	
			getSquareRootItem="";
			squareRoot="";
			document.getElementById('squareRootPanel').style.display = "none";
		//squareRootFraction	
			squareRootFractionNumerator ="";
			squareRootFractionDenominator="";
			getSquareRootFractionItem="";
			document.getElementById('squareRootFractionPanel').style.display = "none";
		//SquareRootFractionExponent	
			getSquareRootFractionExponentItem="";
			squareRootFractionExponent="";
			squareRootFractionBase="";
			document.getElementById('squareRootFractionExponentPanel').style.display = "none";
		//SquareRootExponent	
			getSquareRootExponentItem="";
			squareRootExponent="";
			squareRootBase="";
			document.getElementById('squareRootExponentPanel').style.display = "none";
		//SquareRootExponentFraction	
			squareRootExponentFractionNumerator ="";
			squareRootExponentFractionDenominator="";
			getSquareRootExponentFractionItem="";
			document.getElementById('squareRootFractionExponentPanel').style.display = "none";
		//Exponent	
			getExponentItem="";
			exponent="";
			base="";
			document.getElementById('exponentPanel').style.display = "none";
			
		//reverseItem - used to detect and delete duplicated letex when resetting panel input 
			reverseGetFractionItem = "";
			
		//Clear main panel feedback viewer and builder
			getEquationItem="";
			concatEquationItems ="";
			//Empty array
			mathOutputArray = [];
			mainUpdateMathjax(concatEquationItems); //update builder input
			document.getElementById("p2").innerHTML=""; //Clear show Question Field
			
			document.getElementById("feedBackTextField").innerHTML="";//Clear Realtime feedback
			
			
			
				//show btns using functin below when questionHistory.length = 2;
				if(questionHistory.length >= 1){
				
					//linear
					document.getElementById("prevQuestion").disabled = false; 
					document.getElementById('prevQuestion').style.opacity = 1;
					document.getElementById('prevQuestion').style.cursor = "pointer";
					
			
					//quadraticExpression
					document.getElementById("prevQuestion1").disabled = false; 
					document.getElementById('prevQuestion1').style.opacity = 1;
					document.getElementById('prevQuestion1').style.cursor = "pointer";
				
				}
				//end show btns
			
		
		//linear
		//disable linear next btn when creating new question
		document.getElementById("nextQuestion").disabled = true; 
		document.getElementById('nextQuestion').style.opacity = .2;
		document.getElementById('nextQuestion').style.cursor = "default";
		
		//activate linear showAnswer btn when creating new question
		document.getElementById("showAnswer").disabled = false; 
		document.getElementById('showAnswer').style.opacity = 1;
		document.getElementById('showAnswer').style.cursor = "pointer";
		
		
		//deactivate linear hideAnswer btn when creating new question
		document.getElementById("hideAnswer").disabled = true; 
		document.getElementById('hideAnswer').style.opacity = .2;
		document.getElementById('hideAnswer').style.cursor = "default";
		
		
		//quadratic
		//disable quadratic next btn when creating new question
		document.getElementById("nextQuestion1").disabled = true; 
		document.getElementById('nextQuestion1').style.opacity = .2;
		document.getElementById('nextQuestion1').style.cursor = "default";
		
		//activate quadratic showAnswer btn when creating new question
		document.getElementById("showAnswer1").disabled = false; 
		document.getElementById('showAnswer1').style.opacity = 1;
		document.getElementById('showAnswer1').style.cursor = "pointer";
		
		
		//deactivate quadratic hideAnswer btn when creating new question
		document.getElementById("hideAnswer1").disabled = true; 
		document.getElementById('hideAnswer1').style.opacity = .2;
		document.getElementById('hideAnswer1').style.cursor = "default";
		
		
			
	
}





var questionHistory = [];//Array to gather history
var q = 0;
var questionType;
var questionValue;
function getInputLine(equationLine){
	 
					// object constructor
				function questionObject(questionType,questionValue){//use this
				
				this.questionType=questionType;
				this.questionValue=questionValue
				}//end function
				
				
				// object arrays
				/*questionListArray = new Array()
				questionListArray[0]=new questionObject("billy","bob")
				questionListArray[1]=new questionObject("joe","butthead")*/
				
				
				
				//Assign values
				questionType = document.questionTypeForm.questionFeed.value;
				questionValue = equationLine;
				//console.log("questionValue = "+ questionValue)
				
				questionHistory[q]=new questionObject(questionType,equationLine)
				q++;
				
				// list history
/*				for(var i=0;i<questionHistory.length;i++){
				console.log(questionHistory[i].questionType + '  , ' + questionHistory[i].questionValue)
				}*/
		
	
				numQuestions = questionHistory.length-1;//get the num of questions for navigating question history using the function below
				console.log("numQuestions = " + numQuestions)
				
				
				counter = numQuestions;
				
				//document.questionTypeForm.questionFeed.options.length=2
				
				//Remove opening (ghost menu selection) - "Question Types" only need at the beginning to prompt user to select a question type from the menu
				$("#questionFeed option[value='QuestionTypes']").remove();
				
				//document.questionTypeForm.questionFeed.value
				document.questionTypeForm.currentQuestion.value= counter + 1 + ' of ';//counter for history e.g. 2 of 10
				document.questionTypeForm.questionTotal.value= questionHistory.length;
				
				
				console.log("questionHistory.length" + questionHistory.length)
				
				console.log("numQuestions = " + numQuestions)
		//might use objects here
		//Array to display question using history apperatus
		//get questionType via Id
		//get question InputLine
		//Display history using Back/Next
		
		
		//Reset display for all questBtns to none
		//document.getElementById('linearEquationBtn').style.display = "none";
		//document.getElementById('quadraticExpressionBtn').style.display = "none";
	
	//get the value of the selected item in the menu
	//show btns associate with that question type value
	
	
	/*if(document.questionTypeForm.questionFeed.value == "linearEquation"){
		
		document.getElementById("solveQuestType").innerHTML="Solve the following Linear Equation";
		hideAnswer();//hide any previous answers from other QuestionTypes
		//document.getElementById('hideBtn').style.display = "block";
		document.getElementById('linearEquationBtn').style.display = "block";
		
		console.log("Linear Equation = " + equationLine)
		
		questionHistory.push(equationLine + document.questionTypeForm.questionFeed.value);
		
		console.log("Array questionHistory = " + questionHistory)
		
	}else if (document.questionTypeForm.questionFeed.value == "quadraticExpression"){
		document.getElementById("solveQuestType").innerHTML="Factor the following Quadratic Expression";
		hideAnswer();//hide any previous answers from other QuestionTypes
		//document.getElementById('hideBtn').style.display = "block";
		document.getElementById('quadraticExpressionBtn').style.display = "block";
		
		console.log("quadratic Expression = " + equationLine)
		
		
	}
		
		
		
	*/	

	
}




		function closeAllPanels(){
					
						//hide all panel overlays and show main panel
						//Reset all global and local vars
						
							//Fraction
								numerator ="";
								denominator="";
								getFractionItem="";
								document.getElementById('fractionPanel').style.display = "none";
							//FractionFraction
								fractionFractionNumerator ="";
								fractionFractionDenominator="";
								getFractionFractionItem="";
								document.getElementById('fractionFractionPanel').style.display = "none";
							//FractionPower	
								getFractionPowerItem="";
								fractionExponent="";
								fractionBase="";
								document.getElementById('fractionExponentPanel').style.display = "none";
							//FractionFractionPower
								getFractionFractionPowerItem="";
								fractionFractionExponent="";
								fractionFractionBase="";
								document.getElementById('fractionFractionExponentPanel').style.display = "none";
							//FractionFractionSquareRoot
								getFractionFractionSquareRootItem="";
								fractionFractionSquareRoot="";
								document.getElementById('fractionFractionSquareRootPanel').style.display = "none";
							//FractionSquareRoot	
								getFractionSquareRootItem="";
								fractionSquareRoot="";
								document.getElementById('fractionSquareRootPanel').style.display = "none";
							//FractionSquareRootFraction	
								fractionSquareRootFractionNumerator ="";
								fractionSquareRootFractionDenominator="";
								getFractionSquareRootFractionItem="";
								document.getElementById('fractionSquareRootFractionPanel').style.display = "none";
							//FractionSquareRootExponent
								getFractionSquareRootExponentItem="";
								fractionSquareRootExponent="";
								fractionSquareRootBase="";
								document.getElementById('fractionSquareRootExponentPanel').style.display = "none";
							//SquareRoot	
								getSquareRootItem="";
								squareRoot="";
								document.getElementById('squareRootPanel').style.display = "none";
							//squareRootFraction	
								squareRootFractionNumerator ="";
								squareRootFractionDenominator="";
								getSquareRootFractionItem="";
								document.getElementById('squareRootFractionPanel').style.display = "none";
							//SquareRootFractionExponent	
								getSquareRootFractionExponentItem="";
								squareRootFractionExponent="";
								squareRootFractionBase="";
								document.getElementById('squareRootFractionExponentPanel').style.display = "none";
							//SquareRootExponent	
								getSquareRootExponentItem="";
								squareRootExponent="";
								squareRootBase="";
								document.getElementById('squareRootExponentPanel').style.display = "none";
							//SquareRootExponentFraction	
								squareRootExponentFractionNumerator ="";
								squareRootExponentFractionDenominator="";
								getSquareRootExponentFractionItem="";
								document.getElementById('squareRootFractionExponentPanel').style.display = "none";
							//Exponent	
								getExponentItem="";
								exponent="";
								base="";
								document.getElementById('exponentPanel').style.display = "none";
								
							//reverseItem - used to detect and delete duplicated letex when resetting panel input 
								reverseGetFractionItem = "";
								
							//Clear main panel feedback viewer and builder
								getEquationItem="";
								concatEquationItems ="";
								//Empty array
								mathOutputArray = [];
								mainUpdateMathjax(concatEquationItems); //update builder input
								document.getElementById("p2").innerHTML=""; //Clear show Question Field
								
								document.getElementById("feedBackTextField").innerHTML="";//Clear Realtime feedback
	
			
			
			}



		var numQuestions
		var counter; //counter is used to display e.g. 2 of 10
		function prevQuestion(){

					if(questionHistory.length == null){//dont need this null
						
							console.log("No questions in history")//No more question in history
					}else{


						//console.log(questionHistory[numQuestions-1].questionType + '  , ' + questionHistory[numQuestions-1].questionValue)
						

						
						//linear Equation
						if(questionHistory[numQuestions-1].questionType == "linearEquation"){
							
							//console.log("AAAAAAAAAAAAAAAAAA")
							
							document.getElementById("solveQuestType").innerHTML="Solve";
							
							//display linear equation btns
							document.getElementById('linearEquationBtn').style.display = "block";
							//hide quadratic Expressions btns
							document.getElementById('quadraticExpressionBtn').style.display = "none";
							
							//set item in select menu
							document.getElementById('questionFeed').value = "linearEquation";
							
								
							inputLinEqn = questionHistory[numQuestions-1].questionValue;
							document.getElementById('p1').innerHTML = '$'+inputLinEqn+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);
							
							closeAllPanels();
							
						}
						
						
						//Quadratic Expression
						if(questionHistory[numQuestions-1].questionType == "quadraticExpression"){
							
							document.getElementById("solveQuestType").innerHTML="Factor";
							//display quadratic Expressions btns
							document.getElementById('quadraticExpressionBtn').style.display = "block";
							//hide linear equation btns
							document.getElementById('linearEquationBtn').style.display = "none";
							
							
							//set item in select menu
							document.getElementById('questionFeed').value = "quadraticExpression";

							inputQuadratic = questionHistory[numQuestions-1].questionValue;
							document.getElementById('p1').innerHTML = '$'+inputQuadratic+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);
							
							closeAllPanels();
						}
						
						


						numQuestions--;
						counter = numQuestions;
						console.log("numQuestions = " + numQuestions)
						document.questionTypeForm.currentQuestion.value = counter + 1  + ' of ';//counter for history e.g. 2 of 10
						
							if(numQuestions == 0){
								console.log("No more question in history")//No more question in history
								//deactivate next Btn
								//fade btn
								//linear
								document.getElementById("prevQuestion").disabled = true; 
								//document.getElementById('prevQuestion').style.display = "none";
								document.getElementById('prevQuestion').style.opacity = .2;
								document.getElementById('prevQuestion').style.cursor = "default";
								
								//quadraticExpression
								document.getElementById("prevQuestion1").disabled = true; 
								//document.getElementById('prevQuestion1').style.display = "none";
								document.getElementById('prevQuestion1').style.opacity = .2;
								document.getElementById('prevQuestion1').style.cursor = "default";
								
								
							}
							
								//linear
								document.getElementById('nextQuestion').style.display = "inline-block";
								//Reactivate next btn
								document.getElementById("nextQuestion").disabled = false; 
								document.getElementById('nextQuestion').style.opacity = 1;
								document.getElementById('nextQuestion').style.cursor = "pointer";
								
								//quadraticExpression
								document.getElementById('nextQuestion1').style.display = "inline-block";
								//Reactivate next btn
								document.getElementById("nextQuestion1").disabled = false; 
								document.getElementById('nextQuestion1').style.opacity = 1;
								document.getElementById('nextQuestion1').style.cursor = "pointer";
						
					}
					
	
					
					//document.getElementById("p2").innerHTML=""; //clear feedback field
		
					//deactivate linear hideAnswer 
					document.getElementById("hideAnswer").disabled = true; 
					//document.getElementById('prevQuestion').style.display = "none";
					document.getElementById('hideAnswer').style.opacity = .2;
					document.getElementById('hideAnswer').style.cursor = "default";
					
					
					//deactivate quadratic hideAnswer 
					document.getElementById("hideAnswer1").disabled = true; 
					//document.getElementById('prevQuestion').style.display = "none";
					document.getElementById('hideAnswer1').style.opacity = .2;
					document.getElementById('hideAnswer1').style.cursor = "default";
					
					
					//activate linear showAnswer btn
					document.getElementById("showAnswer").disabled = false; 
					document.getElementById('showAnswer').style.opacity = 1;
					document.getElementById('showAnswer').style.cursor = "pointer";
					
					//activate quadratic showAnswer btn
					document.getElementById("showAnswer1").disabled = false; 
					document.getElementById('showAnswer1').style.opacity = 1;
					document.getElementById('showAnswer1').style.cursor = "pointer";

					
					
					
				
				
			}//end function


			function nextQuestion(){
									
					if(questionHistory.length == null){//dont need this null
							console.log("No questions in history")//No more question in history
					}else{

						//console.log(questionHistory[numQuestions+1].questionType + '  , ' + questionHistory[numQuestions+1].questionValue)

						//inputLinEqn = questionHistory[numQuestions+1].questionValue;
						
						//document.getElementById('p1').innerHTML = '$'+inputLinEqn+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);
						
						
						
						//linear Equation
						if(questionHistory[numQuestions+1].questionType == "linearEquation"){
							
							document.getElementById("solveQuestType").innerHTML="Solve";
							
							//display linear equation btns
							document.getElementById('linearEquationBtn').style.display = "block";
							//hide quadratic Expressions btns
							document.getElementById('quadraticExpressionBtn').style.display = "none";
							

							//set item in select menu
							document.getElementById('questionFeed').value = "linearEquation";

							inputLinEqn = questionHistory[numQuestions+1].questionValue;
							document.getElementById('p1').innerHTML = '$'+inputLinEqn+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);
							
							closeAllPanels();
						}
						
						
						//Quadratic Expression
						if(questionHistory[numQuestions+1].questionType == "quadraticExpression"){
							
							document.getElementById("solveQuestType").innerHTML="Factor";
							//display quadratic Expressions btns
							document.getElementById('quadraticExpressionBtn').style.display = "block";
							//hide linear equation btns
							document.getElementById('linearEquationBtn').style.display = "none";
							
							//set item in select menu
							document.getElementById('questionFeed').value = "quadraticExpression";

							inputQuadratic = questionHistory[numQuestions+1].questionValue;
							document.getElementById('p1').innerHTML = '$'+inputQuadratic+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);
							
							closeAllPanels();
						}
						
						
						
						
						
						
						//console.log("numQuestions test = " + numQuestions)
						//console.log("questionHistory.length = " + questionHistory.length)
						numQuestions++;
						counter = numQuestions;
						document.questionTypeForm.currentQuestion.value= counter + 1 + ' of ';//counter for history e.g. 2 of 10
						
						console.log("numQuestionsxxxxxxxxxx = " + numQuestions)
						
							if(numQuestions == questionHistory.length -1 ){
								console.log("No more question in history")//No more question in history
								//deactivate next Btn
								//fade btn
								//linear
								document.getElementById("nextQuestion").disabled = true; 
								//document.getElementById('prevQuestion').style.display = "none";
								document.getElementById('nextQuestion').style.opacity = .2;
								document.getElementById('nextQuestion').style.cursor = "default";
								
								
								//quadraticExpression
								document.getElementById("nextQuestion1").disabled = true; 
								//document.getElementById('prevQuestion1').style.display = "none";
								document.getElementById('nextQuestion1').style.opacity = .2;
								document.getElementById('nextQuestion1').style.cursor = "default";
								
							}
							
							
								//Reactivate Previous btn
								//linear
								document.getElementById("prevQuestion").disabled = false; 
								//document.getElementById('prevQuestion').style.display = "none";
								document.getElementById('prevQuestion').style.opacity = 1;
								document.getElementById('prevQuestion').style.cursor = "pointer";
								
								
								//quadraticExpression
								document.getElementById("prevQuestion1").disabled = false; 
								//document.getElementById('prevQuestion1').style.display = "none";
								document.getElementById('prevQuestion1').style.opacity = 1;
								document.getElementById('prevQuestion1').style.cursor = "pointer";
							
						
						
					}
					
					
					//document.getElementById("p2").innerHTML=""; //clear feedback field
		
					//deactivate linear hideAnswer 
					document.getElementById("hideAnswer").disabled = true; 
					//document.getElementById('prevQuestion').style.display = "none";
					document.getElementById('hideAnswer').style.opacity = .2;
					document.getElementById('hideAnswer').style.cursor = "default";
					
					
					//deactivate quadratic hideAnswer 
					document.getElementById("hideAnswer1").disabled = true; 
					//document.getElementById('prevQuestion').style.display = "none";
					document.getElementById('hideAnswer1').style.opacity = .2;
					document.getElementById('hideAnswer1').style.cursor = "default";
					
					
					//activate linear showAnswer btn
					document.getElementById("showAnswer").disabled = false; 
					document.getElementById('showAnswer').style.opacity = 1;
					document.getElementById('showAnswer').style.cursor = "pointer";
					
					//activate quadratic showAnswer btn
					document.getElementById("showAnswer1").disabled = false; 
					document.getElementById('showAnswer1').style.opacity = 1;
					document.getElementById('showAnswer1').style.cursor = "pointer";

					
					
					
					
					
					
					
				
			}



		/*var w = 0;
		function NextQuestion(){
			console.log("questionHistory.length = " + questionHistory.length)
					
					if(questionHistory.length == 0){
							console.log("No questions in history")//No more question in history
					}else{
						console.log(questionHistory[w].questionType + '  , ' + questionHistory[w].questionValue)
						//console.log("w = " + w)
						w++;
						
						if(w >= questionHistory.length){
							console.log("No more question in history")//No more question in history
							//deactivate next Btn
							//fade btn
							document.getElementById("nextQuestion").disabled = true; 
							document.getElementById('nextQuestion').style.display = "none";
							
						}
						
					}
					
				
				
			}*/