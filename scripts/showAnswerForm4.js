// JavaScript Document



//showAnswer2() vars --- some vars used in showAnswer1()
	//var leftOfEqualNumerator;
	//var leftOfEqualDenominator;
	
	//the secon fraction on the left side -- 3/8
	var exponent1;
	var exponent2;
	
	//the first fraction on the right side -- 6/8
	//var rightOfEqualNumerator;
	//var rightOfEqualDenominator;



function showAnswer3(){//expression #1





		concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'times'    +backSlash+'frac{'+ 'x' + '^{' + exponent1 + '}' + '}{'+ 'x' + '^{' + exponent2 + '}' +  '}' +backSlash+   'times'    +backSlash+'frac{'+ 'y' + '^{' + '1' + '}' + '}{'+ 'y' + '^{' + '1' + '}' +  '}'+  backSlash + backSlash;
		
		
		concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'times'   +' '+  'X' + '^{' + exponent1  + '-' + '(' +exponent2 + ')'      +  '}' +     backSlash+   'times'    +' '+  'Y' + '^{' + 1 + '-' + 1     +  '}' +  backSlash + backSlash;
		
			console.log( exponent1-(exponent2));
	
			var exponent3 = exponent1-(exponent2);
	
		concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'times'   +' '+  'X' + '^{' + exponent3  +  '}' +     backSlash+   'times'    +' '+  'Y' + '^{' + '0'   +  '}' +  backSlash + backSlash;
		
		
		
		
		
		
		
		
		
			//reduce coefficient using LCM -- no mixed fractions used here 
	 		var numerator = leftOfEqualNumerator/gcd_rec(leftOfEqualNumerator, leftOfEqualDenominator);
			var denominator = leftOfEqualDenominator /gcd_rec(leftOfEqualNumerator, leftOfEqualDenominator);
			
			console.log("numerator = " + numerator)
			console.log("denominator = " + denominator)
		
			//invert the exponent (multiply anything by -1 will give you the inverse)
			//var exponent3Inverse = exponent3 * -1;
			
			//console.log("exponent3Inverse = "+ exponent3Inverse)
			
			if(exponent3==0){
				
			concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ denominator +  '}'  +  backSlash + backSlash;
			
					//final step with coeff
					if ((numerator==1)&&(denominator==1)){
						//console.log("(numerator==1)&&(denominator==1)")
						//   1/1=1
						concatFeedbackItems = concatFeedbackItems +  '&=' + '1'  +  backSlash + backSlash;
					
					}else if ((numerator==1)&&(denominator!=1)){
						//console.log("((numerator==1)&&(denominator!=1))")
						//This is OK
						
					}else if ((numerator!=1)&&(denominator==1)){
						//console.log("((numerator!=1)&&(denominator==1))")
						concatFeedbackItems = concatFeedbackItems +  '&=' + numerator  +  backSlash + backSlash;
					}
					
			
			}else if (exponent3==1){
			//no exponent 1 in answer
			concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator +  'x' + '}{'+ denominator  + '}'  +  backSlash + backSlash;
			
					////final step with coeff
					if ((numerator==1)&&(denominator==1)){
						//console.log("(numerator==1)&&(denominator==1)")
						//   1/1=1
						concatFeedbackItems = concatFeedbackItems +  '&=' + 'x'  +  backSlash + backSlash;
					
					}else if ((numerator==1)&&(denominator!=1)){
						//console.log("((numerator==1)&&(denominator!=1))")
						concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{' +  'x' + '}{'+ denominator  + '}'  +  backSlash + backSlash;
						
					}else if ((numerator!=1)&&(denominator==1)){
						//console.log("((numerator!=1)&&(denominator==1))")
						concatFeedbackItems = concatFeedbackItems +  '&=' + numerator + 'x' +  backSlash + backSlash;
					}
			
			
			
			}else if (exponent3==-1){
			//no exponent -1 in answer	
			concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ denominator  + 'x' +'}'  +  backSlash + backSlash;
			
					////final step with coeff
					if ((numerator==1)&&(denominator==1)){
						//console.log("(numerator==1)&&(denominator==1)")
						concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ 'x' +'}'  +  backSlash + backSlash;
					
					}else if ((numerator==1)&&(denominator!=1)){
						//console.log("((numerator==1)&&(denominator!=1))")
						//This is OK
						
					}else if ((numerator!=1)&&(denominator==1)){
						//console.log("((numerator!=1)&&(denominator==1))")
						//concatFeedbackItems = concatFeedbackItems +  '&=' + numerator + 'x' +  backSlash + backSlash;
						concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ 'x' +'}'  +  backSlash + backSlash;
						
					}
			
				
			}else{
			//!= 0 or 1
			
			//if exponent4 is negative in the previous step - x^{exponent4} goes on bottom as positive
			//if exponent4 is positive in the previous step - x^{exponent4} goes on top as positive
			//no negative exponents in final answer
			console.log("exponent3333333333 " + exponent3)
					if(exponent3 > 0){
					console.log("test 111111111 ")
					//if exponent4 is positive in the previous step - x^{exponent4} goes on top as positive
					concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + 'x' + '^{' +  Math.abs(exponent3)  +  '}' + '}{'+ denominator +   '}'  +  backSlash + backSlash;
					
					
							////final step with coeff
							if ((numerator==1)&&(denominator==1)){
								//console.log("(numerator==1)&&(denominator==1)")
								concatFeedbackItems = concatFeedbackItems +  '&=' + 'x' + '^{' +  Math.abs(exponent3)  +  '}' +  backSlash + backSlash;	

							}else if ((numerator==1)&&(denominator!=1)){
								//console.log("((numerator==1)&&(denominator!=1))")
								concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ 'x' + '^{' +  Math.abs(exponent3)  +  '}' + '}{'+ denominator +   '}'  +  backSlash + backSlash;
								
							}else if ((numerator!=1)&&(denominator==1)){
								//console.log("((numerator!=1)&&(denominator==1))")
								//This is OK
								//console.log(";akjsdf;aksjdf;aksjfa;ksjfa;skdfjh")
								concatFeedbackItems = concatFeedbackItems +  '&=' + numerator + 'x' + '^{' +  Math.abs(exponent3)  +  '}'   +  backSlash + backSlash;
								
							}
					
							
						
					}else{
						console.log("test 2222222222 ")
						//if exponent4 is negative in the previous step - x^{exponent4} goes on bottom as positive
						
						concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ denominator +  'x' + '^{' + Math.abs(exponent3)  +  '}' + '}'  +  backSlash + backSlash;

							////final step with coeff
							if ((numerator==1)&&(denominator==1)){
								//console.log("(numerator==1)&&(denominator==1)")
								concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ 'x' + '^{' + Math.abs(exponent3)  +  '}' + '}'  +  backSlash + backSlash;

							}else if ((numerator==1)&&(denominator!=1)){
								//console.log("((numerator==1)&&(denominator!=1))")
								//This is OK
								
								
							}else if ((numerator!=1)&&(denominator==1)){
								//console.log("((numerator!=1)&&(denominator==1))")
								concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+  'x' + '^{' + Math.abs(exponent3)  +  '}' + '}'  +  backSlash + backSlash;
								
							}
						
						
					}
			
			
			}
		
	







/*
If you add a positive number with another positive number, the sum is always a positive number.

If you add a negative number with another negative number, the sum is always a negative number.

In both of the above rules, when the signs are the same, you find the sum, and the sign of the sum is the same.

Subtracting 2 negative numbers (same as negative - positive)
-17 - (-7) = -10
-50 - (-5) = -45
When the signs of two numbers that you are adding together are different, forget the signs and find the difference between the numbers (the difference between their absolute values). The number farther from zero determines the sign of the answer.


negative exponents mean to move the base to the other side of the fraction line. For instance:
with 2 negative exponents.............

x^-4 = 1x^-4/1 = 1/x^4

1/x^-3 = 1/1x^-3 =1x^3/1 = x^3

x^-3/x^-7 = x^7/x^3 = x^4

x^-3/x^-7 = x^-3/1 * 1/x^-7 = 1/x^3 * x^7/1  = x^7/x^3 = x^4


with 1 negative exponent................

x^-3/x^7 = 1/x^7 * x^-3/1  = 1/x^7 * 1/x^3  = 1/x^10 

x^3/x^-7 = x^3/1 * 1/x^-7 = x^3/1 * x^7/1 = x^10 


*/
	
	/* Show Equation
	
	console.log("exponent1 = "+ exponent1)
	console.log("exponent2 = "+ exponent2)
	
		if ((exponent1 < 0)&&(exponent2 < 0)){
		console.log("negative - negative")
		console.log("exponent1 - exponent2 = " + (exponent1 - exponent2))
		
		negativeExponents();
		
		}else if ((exponent1 > 0)&&(exponent2 > 0)){
		console.log("positive - positive")
		console.log("exponent1 - exponent2 = " + (exponent1 - exponent2))
		
		positiveExponents();
		
		}else if ((exponent1 < 0)&&(exponent2 > 0)){
		console.log("negative - positive")
		console.log("exponent1 - exponent2 = " + (exponent1 - exponent2))
		
		//negPosExponents();
		
		}else if ((exponent1 > 0)&&(exponent2 < 0)){
		console.log("positive - negative")
		console.log("exponent1 - exponent2 = " + (exponent1 - exponent2))
		
		//posNegExponents();
		
		}
		
		*/
		
		
		
		function positiveExponents(){	
	

			//subtract 2 positive exponents
			var test = Math.abs(exponent1) - Math.abs(exponent2);//Math.abs() converts negative numbers to positive 
	
				//this part gets displayed randomly
				//showQuestion = backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + exponent1 + '}' + 'y' +     '}{'+leftOfEqualDenominator+     'x' + '^{' + exponent2 + '}' + 'y' +       '}';
	
			console.log("test = "+ test)
			console.log("Math.abs(test) = "+ Math.abs(test))//Math.abs(test) converts negative numbers to positive - abs() left in but not needed
	
	
				if(exponent1 > exponent2){
					if (test=="1"){
						concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+ 	'x' +   'y' +'}{'+leftOfEqualDenominator+ 'y' +       '}' +  backSlash + backSlash;
					}else{
						concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + test + '}' + 'y' +     '}{'+leftOfEqualDenominator+ 'y' +       '}' +  backSlash + backSlash;
					}
				}else if(exponent1 < exponent2){

					if (test=="1"){
						concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+ 'y' + 	    '}{'+leftOfEqualDenominator+      'x' +  'y' +      '}' +  backSlash + backSlash;
						}else{
						concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+ 'y' + 	    '}{'+leftOfEqualDenominator+      'x' + '^{' + Math.abs(test) + '}' + 'y' +       '}' +  backSlash + backSlash;	
					}
				}else if(exponent1 == exponent2){
					//exponents are equal
					concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+  'y'  +	    '}{'+leftOfEqualDenominator+       'y' +       '}' +  backSlash + backSlash;
				}
	
	
	
	
		  //concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+  backSlash + backSlash;
		  
		 feedBackArray.push(concatFeedbackItems);
	
	
	
	
			
		}
		
		

		function negativeExponents(){	
		
		
		
		
		//Start Tara's format
		
		
		
		
		/*
		
		concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'times'    +backSlash+'frac{'+ 'x' + '^{' + exponent1 + '}' + '}{'+ 'x' + '^{' + exponent2 + '}' +  '}' +backSlash+   'times'    +backSlash+'frac{'+ 'y' + '^{' + '1' + '}' + '}{'+ 'y' + '^{' + '1' + '}' +  '}'+  backSlash + backSlash;
		
		
		concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'times'   +' '+  'X' + '^{' + exponent1  + '-' + '(' +exponent2 + ')'      +  '}' +     backSlash+   'times'    +' '+  'Y' + '^{' + 1 + '-' + 1     +  '}' +  backSlash + backSlash;
		
	
	
	console.log( exponent1-(exponent2));
	
	var exponent3 = exponent1-(exponent2);
	
		concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'times'   +' '+  'X' + '^{' + exponent3  +  '}' +     backSlash+   'times'    +' '+  'Y' + '^{' + '0'   +  '}' +  backSlash + backSlash;
		
		
		//need to invert the exponent (multiply anything by -1 will give you the inverse)
		
		exponent3 = exponent3 * -1;
		
		concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  'X' + '^{' + exponent3  +  '}' + '}'  +  backSlash + backSlash;
	
		
		*/
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'times'    +backSlash+'frac{'+ 'x' + '^{' + exponent1 + exponent2       +  '}' + '}{'+ 'x' + '^{' + exponent2 + '}' +  '}' +backSlash+   'times'    +backSlash+'frac{'+ 'y' + '^{' + '1' + '}' + '}{'+ 'y' + '^{' + '1' + '}' +  '}'+  backSlash + backSlash;
		
		//'x' + '^{' + exponent1 + '}'
		
		
		
		
		
		
		
		//End Tara's format
		
			
			//x^-3/x^-7 = x^-3/1 * 1/x^-7 = 1/x^3 * x^7/1  = x^7/x^3 = x^4
			
			
			//9x^-5y/3x^-13y = 9x^-5/1 * y/1 * 1/3x^-13 * 1/y = 1/9x^5 * 3x^13/1  = 1/3 x^8 
			//9x^-13y/3x^-5y = 9x^-13/1 * y/1 * 1/3x^-5 * 1/y = 1/9x^13 * 3x^5/1  = 1/3 x^8 
			
			/*
			concatFeedbackItems = concatFeedbackItems +     '&=' +backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + exponent1 + '}' + 'y' +     '}{'+leftOfEqualDenominator+ 'x' + '^{' + exponent2 + '}' + 'y' +       '}' +  backSlash + backSlash;
			
			
			concatFeedbackItems = concatFeedbackItems +     '&=' +backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + exponent1 + '}' + 'y' +     '}{'+leftOfEqualDenominator+ 'x' + '^{' + exponent2 + '}' + 'y' +       '}' + '*' + backSlash +'frac{'+ 'y' + '}{'+ '1' + '}' + '*'		   +backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + exponent1 + '}' + 'y' +     '}{'+leftOfEqualDenominator+ 'x' + '^{' + exponent2 + '}' + 'y' +       '}' + '*' + backSlash +'frac{'+ 'y' + '}{'+ '1' + '}'				+  backSlash + backSlash;
			*/
			
			
			//9x^-5y/3x^-13y 
			
		
		
		
		
		
		/*	Working....................
			concatFeedbackItems = concatFeedbackItems +     '&=' +backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + exponent1 + '}' +  '}{'+ '1' +  '}' + '*' + backSlash +'frac{'+ 'y' + '}{'+ '1' + '}' + '*'		   +backSlash +'frac{'+ '1'  +     '}{'+leftOfEqualDenominator+ 'x' + '^{' + exponent2 + '}' +   '}' + '*' + backSlash +'frac{'+ '1' + '}{'+ 'y' + '}'				+  backSlash + backSlash;
			
			//= 9x^-5/1 * y/1 * 1/3x^-13 * 1/y 
			concatFeedbackItems = concatFeedbackItems +     '&=' +backSlash +'frac{' + '1' +  '}{' +leftOfEqualNumerator+ 	'x' + '^{' + Math.abs(exponent1) + '}' + '}' + '*' + backSlash +'frac{'+leftOfEqualDenominator+ 'x' + '^{' + Math.abs(exponent2) + '}' + '}{' + '1' +  '}'  +  backSlash + backSlash;
			
			//= 1/9x^5 * 3x^13/1  
			concatFeedbackItems = concatFeedbackItems +     '&=' +backSlash +'frac{' +leftOfEqualDenominator+ 'x' + '^{' + Math.abs(exponent2) + '}' +  '}{' +leftOfEqualNumerator+ 	'x' + '^{' + Math.abs(exponent1) + '}' + '}'   +  backSlash + backSlash;
			
			
			//= 1/3 x^8
			
				 //output simplified fractions 
	 		var numerator = leftOfEqualNumerator/gcd_rec(leftOfEqualNumerator, leftOfEqualDenominator);
			var denominator = leftOfEqualDenominator /gcd_rec(leftOfEqualNumerator, leftOfEqualDenominator);
			
			var exponent3=exponent1-exponent2; //if exponents are the same (9 and 9 = 0)
			
			
			//concatFeedbackItems = concatFeedbackItems +     '&=' +backSlash +'frac{' +denominator+ 'x' + '^{' + Math.abs(exponent2) + '}' +  '}{' +numerator+ 	'x' + '^{' + Math.abs(exponent1) + '}' + '}'   +  backSlash + backSlash;
			
			if (exponent2==0){//if exponents are the same (9 and 9 = 0)
				concatFeedbackItems = concatFeedbackItems +     '&=' +backSlash +'frac{' +denominator+   '}{' +numerator+  '}'   +  backSlash + backSlash;
				
						//Solve for mixed fractions --- see first question for how it was done
					if(numerator != 1){
								if(( denominator > numerator)&&(numerator != 1)){
								//this provides the base to the mix fraction
								var mixFractionWholeNum = Math.floor(denominator/numerator);
						
								concatFeedbackItems = concatFeedbackItems   + '&=' + mixFractionWholeNum + backSlash +'frac{'+ findModulus(numerator, denominator) +'}{'+ denominator +'}' +  "&&" + backSlash + "small{ "   + " Result "  + "}" + backSlash + backSlash + "[1mm]";
							
								}
					}else{
						
						
						concatFeedbackItems = concatFeedbackItems +     '&=' + denominator+  backSlash + backSlash;
					}
				
			}else{
				
				
				if(Math.abs(exponent1) > Math.abs(exponent2)){
						console.log("Math.abs(exponent1) > Math.abs(exponent2)")
						concatFeedbackItems = concatFeedbackItems +     '&=' +backSlash +'frac{' +denominator+  '}{' +numerator+ 'x' + '^{' + Math.abs(exponent3) + '}' + '}'  +  backSlash + backSlash;
					}else{
						
						concatFeedbackItems = concatFeedbackItems +     '&=' +backSlash +'frac{' +denominator+ 'x' + '^{' + Math.abs(exponent3) + '}' +  '}{' +numerator+  '}'   +  backSlash + backSlash;	
					}
				
				console.log("exponent1 ========== " + Math.abs(exponent1))
				console.log("exponent2 ========== " + Math.abs(exponent2))
				//see above for this line
				//concatFeedbackItems = concatFeedbackItems +     '&=' +backSlash +'frac{' +denominator+ 'x' + '^{' + Math.abs(exponent3) + '}' +  '}{' +numerator+  '}'   +  backSlash + backSlash;
				
						if(numerator != 1){
								//Solve for mixed fractions --- se first question for how it was done
								if(( denominator > numerator)&&(numerator != 1)){
								//this provides the base to the mix fraction
								var mixFractionWholeNum = Math.floor(denominator/numerator);
						
								concatFeedbackItems = concatFeedbackItems   + '&=' + mixFractionWholeNum + backSlash +'frac{'+ findModulus(denominator,numerator) +'}{'+ denominator +    'x' + '^{' + Math.abs(exponent3) + '}' +    '}' +  "&&" + backSlash + "small{ "   + " Result "  + "}" + backSlash + backSlash + "[1mm]";
							
								}
						}else{
							
							concatFeedbackItems = concatFeedbackItems +     '&='  +denominator+ 'x' + '^{' + Math.abs(exponent3) + '}'  +  backSlash + backSlash;
						}
				
				
			}
			
			
			End Working....................
			
*/
			//questions that work
			//\textstyle{\frac{6x^{-5}y}{8x^{-9}y}}
			
			
			
			
			
			
			/*

			//e.g.
			//exponent1 = -5;
			//exponent2 = -13;
			//find which exponent is less top or bottom exponent
			var flag;
			if(Math.abs(exponent1) < Math.abs(exponent2)){//convert negative numbers to abs() numbers
				//flag=false; //13 > 5 ...... -13 < -5
				flag=true; //exponent1 > exponent2 ..... 5 < 13 however -5 > -13
				console.log("true")
			}else{
				//flag=true; //5 < 13 ...... -5 > -13
				flag=false; //exponent1 > exponent2  ...... -5 < -13
				console.log("false")
			}
			
			
			if(flag==true){//exponent1 > exponent2
				console.log("exponent1 > exponent2")
				
				//find the difference between exponents - we know exponent1 > exponent2 ......... -5 > -13
				
				var test = Math.abs(exponent1) - Math.abs(exponent2);
				
				if (test=="1"){
						concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+ 	'x' +   'y' +'}{'+leftOfEqualDenominator+ 'y' +       '}' +  backSlash + backSlash;
				}else{
						concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + test + '}' + 'y' +     '}{'+leftOfEqualDenominator+ 'y' +       '}' +  backSlash + backSlash;
				}
			}
			
			*/
			
			
			
			
			/*
			
			
			//subtract 2 positive exponents
			var test = Math.abs(exponent1) - Math.abs(exponent2);//Math.abs() converts negative numbers to positive 
	
				//this part gets displayed randomly
				//showQuestion = backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + exponent1 + '}' + 'y' +     '}{'+leftOfEqualDenominator+     'x' + '^{' + exponent2 + '}' + 'y' +       '}';
	
			console.log("test = "+ test)
			console.log("Math.abs(test) = "+ Math.abs(test))//Math.abs(test) converts negative numbers to positive - abs() left in but not needed
	
	
				if(exponent1 > exponent2){
					console.log("exponent1 > exponent2")
					if (test=="1"){
						concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+ 	'x' +   'y' +'}{'+leftOfEqualDenominator+ 'y' +       '}' +  backSlash + backSlash;
					}else{
						concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + test + '}' + 'y' +     '}{'+leftOfEqualDenominator+ 'y' +       '}' +  backSlash + backSlash;
					}
				}else if(exponent1 < exponent2){
					console.log("exponent2 > exponent1")
					if (test=="1"){
						concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+ 'y' + 	    '}{'+leftOfEqualDenominator+      'x' +  'y' +      '}' +  backSlash + backSlash;
						}else{
						concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+ 'y' + 	    '}{'+leftOfEqualDenominator+      'x' + '^{' + Math.abs(test) + '}' + 'y' +       '}' +  backSlash + backSlash;	
					}
				}else if(exponent1 == exponent2){
					//exponents are equal
					concatFeedbackItems = concatFeedbackItems +backSlash +'frac{'+leftOfEqualNumerator+  'y'  +	    '}{'+leftOfEqualDenominator+       'y' +       '}' +  backSlash + backSlash;
				}
	
	
	
	
		  //concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+  backSlash + backSlash;
		  
		  
		  */
		  
		 feedBackArray.push(concatFeedbackItems);
	
	
	
	
			
		}
	
	
	
		
		feedbackDisplay();
		
		
		
	 
	 //feedback_UpdateMathjax(concatFeedbackItems)


	 
	 //document.getElementById("showAnswer").disabled = true; //disable showAnswer Button
	 
	 
	 
}//end showAnswer2 function