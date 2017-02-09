// JavaScript Document



//showAnswer2() vars --- some vars used in showAnswer1()
	//var leftOfEqualNumerator;
	//var leftOfEqualDenominator;
	
	//the secon fraction on the left side -- 3/8
	var leftOfEqualNumerator2;
	var leftOfEqualDenominator2;
	
	//the first fraction on the right side -- 6/8
	//var rightOfEqualNumerator;
	//var rightOfEqualDenominator;



function showAnswer2(){//1 var with fraction and whole Numbers linear




	//var leftOperationTop = rightOfEqualNumerator * leftOfEqualDenominator;
	//var leftOperationBottom = rightOfEqualDenominator * leftOfEqualNumerator;
	
	//var leftOperationTop1 = rightOfEqualNumerator * leftOfEqualDenominator;
	//var leftOperationBottom1 = rightOfEqualDenominator * leftOfEqualNumerator;
	
	//var rightOperationTop = rightOfEqualNumerator * leftOfEqualDenominator;
	//var rightOperationBottom = rightOfEqualDenominator * leftOfEqualNumerator;
	
	
	/* Show Equation*/
	
	//console.log("rightOfEqualNumerator = "+ rightOfEqualNumerator)
	
	
	
	//this part gets displayed
		  //concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+ 'x'   + "+" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+  '=' +backSlash +'frac{'+ rightOfEqualNumerator +'}{'+rightOfEqualDenominator+'}'+ backSlash + backSlash;
	
	
		  concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+ 'x'   + "+" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+      "-" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+     '&=' +backSlash +'frac{'+ rightOfEqualNumerator +'}{'+rightOfEqualDenominator+'}'+ "-" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+ backSlash + backSlash;
		  
		 feedBackArray.push(concatFeedbackItems);
	//	  
	
	//Find the GCF of the denominators on right side --- rightOfEqualDenominator leftOfEqualDenominator2 ---
	
	//console.log("test gcd ======== "+gcd_rec(2, 6));
	
	//multiply denominators and Divide by gcd ------ rightOfEqualDenominator * leftOfEqualDenominator2 / gcd == LCD
	
	//Rename Fraction to use LCD ---- multiply numerators by GCD
	
	//  a*GCD/LCD - b*GCD/LCD
	
	
	//Subtract the numerators and put difference over LCD
	//a-b/LCD
	
	
	//if(GCD ==1)we follow a different process from above
	//3/4 - 1/3
	//3.3/4.3 - 1.4/3.4
	//9/12 - 4/12
	//5/12
	
	if(rightOfEqualDenominator == leftOfEqualDenominator2){
		
		//console.log("rightOfEqualDenominator == leftOfEqualDenominator2")
		
		}
	
	var gcd = gcd_rec(rightOfEqualDenominator, leftOfEqualDenominator2);
	var LCD = rightOfEqualDenominator * leftOfEqualDenominator2 / gcd;
	
	console.log("LCD == " + LCD)
	console.log("gcd == " + gcd)
	//console.log("rightOfEqualDenominator = " + rightOfEqualDenominator)
	//console.log("leftOfEqualNumerator2 = " + leftOfEqualNumerator2)
	
	var newRightOfEqualNumerator = rightOfEqualNumerator * (LCD / rightOfEqualDenominator)
	var newRightOfEqualNumerator2 = leftOfEqualNumerator2 * (LCD / leftOfEqualDenominator2)
	//console.log(leftOfEqualNumerator2 * LCD / leftOfEqualDenominator2)
	
	if(rightOfEqualDenominator != leftOfEqualDenominator2){//if rightOfEqualDenominator == leftOfEqualDenominator2 ...... they already have a LCD
		
		
				  	concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+ 'x'   + "+" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+      "-" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+     '&=' +backSlash +'frac{'+ newRightOfEqualNumerator +'}{'+LCD+'}'+ "-" + backSlash +'frac{'+newRightOfEqualNumerator2+'}{'+LCD+'}'+ backSlash + backSlash;
					
					feedBackArray.push(concatFeedbackItems);
		
		
		  	//concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+ 'x'   + "+" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+      "-" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+     '=' +backSlash +'frac{'+ rightOfEqualNumerator*gcd +'}{'+LCD+'}'+ "-" + backSlash +'frac{'+leftOfEqualNumerator2*gcd+'}{'+LCD+'}'+ backSlash + backSlash;
	}
	
	////////////////////////////////EndGCF//////////////////////////////////////
	
	
	
	
	rightOfEqualNumerator1 = newRightOfEqualNumerator-newRightOfEqualNumerator2;
	rightOfEqualDenominator1 = LCD;

	  concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+ 'x' + '&=' +backSlash +'frac{'+ rightOfEqualNumerator1 +'}{'+rightOfEqualDenominator1+'}'+ backSlash + backSlash;
	  
	  feedBackArray.push(concatFeedbackItems);
	  
	  
	  
	  
	 
	 
	 //output fractions on this line with reciprocal 
	 concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+leftOfEqualDenominator+'}{'+leftOfEqualNumerator+'}'+  backSlash +"cdot"  +backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+   "x" + "&=" +backSlash +'frac{'+ rightOfEqualNumerator1 +'}{'+rightOfEqualDenominator1+'}'+  backSlash +"cdot"  +backSlash +'frac{'+leftOfEqualDenominator+'}{'+leftOfEqualNumerator+'}'+ backSlash + backSlash;
	 
	 feedBackArray.push(concatFeedbackItems);
	 
	 
	 
	 
	 
	 
	 	var rightOperationTop = rightOfEqualNumerator1 * leftOfEqualDenominator;
	var rightOperationBottom = rightOfEqualDenominator1 * leftOfEqualNumerator;
	 
	 

	 concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + backSlash +'frac{'+ rightOperationTop +'}{'+ rightOperationBottom +'}'+ backSlash + backSlash;
	 
	 feedBackArray.push(concatFeedbackItems);
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 //find negative
	 //rightOperationBottom>1   ---- We have to deal with the negative
	 
			 
		if(rightOperationBottom == "1"){//e.g. fraction 8/1 == 8
			concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + rightOperationTop;
			feedBackArray.push(concatFeedbackItems);
		}else if((rightOperationTop > rightOperationBottom) && (rightOperationBottom>1)){//We have a mixed fraction
			
				
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
			}else{
				//if gcd === 1... different process to solving the right side
				
				alert("gcd = "+ gcd)
				
			}
		}//end else
		
		
		
		feedbackDisplay();
		
		
		
	 
	 //feedback_UpdateMathjax(concatFeedbackItems)


	 
	 //document.getElementById("showAnswer").disabled = true; //disable showAnswer Button
	 
	 
	 
}//end showAnswer2 function