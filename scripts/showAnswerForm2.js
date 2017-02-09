// JavaScript Document




//showAnswer1() vars
	var leftOfEqualNumerator;
	var leftOfEqualDenominator;
	
	var rightOfEqualNumerator;
	var rightOfEqualDenominator;



function showAnswer1(){//1 var with fraction and whole Numbers linear






 	

	
	 
	 
	var leftOperationTop = rightOfEqualNumerator * leftOfEqualDenominator;
	var leftOperationBottom = rightOfEqualDenominator * leftOfEqualNumerator;
	var rightOperationTop = rightOfEqualNumerator * leftOfEqualDenominator;
	var rightOperationBottom = rightOfEqualDenominator * leftOfEqualNumerator;
	
	
	/* Show Equation*/
		//This part gets displayed
	  //concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+ 'x' + '=' +backSlash +'frac{'+ rightOfEqualNumerator +'}{'+rightOfEqualDenominator+'}'+ backSlash + backSlash;
	 
	 //step 1
	 //output fractions on this line with reciprocal 
	 concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+leftOfEqualDenominator+'}{'+leftOfEqualNumerator+'}'+  backSlash +"cdot"  +backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+   "x" + "&=" +backSlash +'frac{'+ rightOfEqualNumerator +'}{'+rightOfEqualDenominator+'}'+  backSlash +"cdot"  +backSlash +'frac{'+leftOfEqualDenominator+'}{'+leftOfEqualNumerator+'}'+ backSlash + backSlash;
	 
	 feedBackArray.push(concatFeedbackItems);
	 
	 //step 2
	 concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + backSlash +'frac{'+ rightOperationTop +'}{'+ rightOperationBottom +'}'+ backSlash + backSlash;
	 
	 feedBackArray.push(concatFeedbackItems);
	 
	 
			 
		if(rightOperationBottom == "1"){//e.g. fraction 8/1 == 8
			concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + rightOperationTop;
			feedBackArray.push(concatFeedbackItems);
		}else if(rightOperationTop > rightOperationBottom){//We have a mixed fraction
			
				
				if (findModulus(rightOperationTop, rightOperationBottom) == 0){//if the remainder == 0       e.g. 36/12 outputs as 3, not 3 0/12 
				//we only need the whole number
					mixFractionWholeNum = Math.floor(rightOperationTop/rightOperationBottom);
					concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + mixFractionWholeNum + backSlash + backSlash;
					feedBackArray.push(concatFeedbackItems);
				}else{//display the mixed fraction
				//console.log("modulus = " + findModulus(rightOperationTop, rightOperationBottom));
				//this provides the whole number to the mix fraction
				mixFractionWholeNum = Math.floor(rightOperationTop/rightOperationBottom);
				concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + mixFractionWholeNum + backSlash +'frac{'+ findModulus(rightOperationTop, rightOperationBottom) +'}{'+ rightOperationBottom +'}'+ backSlash + backSlash;
				
				feedBackArray.push(concatFeedbackItems);
				
				
					//Here the mixed fraction may need to be reduced - e.g. x= 1 2/22 ===== 1 1/11
					var gcd = gcd_rec(rightOperationTop, rightOperationBottom);
				
					if(gcd != 1){
					
						//output simplified fractions 
					rightOperationTop = rightOperationTop / gcd;
					rightOperationBottom = rightOperationBottom / gcd;
					concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + mixFractionWholeNum + backSlash +'frac{'+ findModulus(rightOperationTop, rightOperationBottom) +'}{'+ rightOperationBottom +'}'+ backSlash + backSlash;
					
					feedBackArray.push(concatFeedbackItems);
					
					}
				
				
				}
			
			
		}else{
		
			
			var gcd = gcd_rec(rightOperationTop, rightOperationBottom);
				
			if(gcd != 1){
				
				//output simplified fractions 
				rightOperationTop = rightOperationTop / gcd;
				rightOperationBottom = rightOperationBottom / gcd;
				concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + backSlash +'frac{'+ rightOperationTop +'}{'+ rightOperationBottom +'}'+ backSlash + backSlash;
				
				feedBackArray.push(concatFeedbackItems);
				
			}
		}//end else
		
		
		feedbackDisplay();
		
	 
	 //feedback_UpdateMathjax(concatFeedbackItems)
	 
	// document.getElementById("showAnswer").disabled = true; //disable showAnswer Button
	 
}//end showAnswer1 function