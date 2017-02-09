// JavaScript Document



//showAnswer2() vars --- some vars used in showAnswer1()
	//var leftOfEqualNumerator;
	//var leftOfEqualDenominator;
	
	//the secon fraction on the left side -- 3/8
	var exponent1;
	var exponent2;
	var exponent4;
	
	//the first fraction on the right side -- 6/8
	//var rightOfEqualNumerator;
	//var rightOfEqualDenominator;



function showAnswer4(){//expression #2

console.log("exponent4  = = "+ exponent4)
		//step 1
		concatFeedbackItems = concatFeedbackItems +  '&=' + backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + exponent1 + '}' + 'y' +     '}{'+leftOfEqualDenominator+     'x' + '^{' + exponent4 + '}' + 'y' + '}'    +  '+'     + backSlash +'frac{'+leftOfEqualNumerator1+ 	'x' + '^{' + exponent2 + '}' + 'y' +     '}{'+leftOfEqualDenominator+     'x' + '^{' + exponent4 + '}' + 'y' + '}'       +  backSlash + backSlash;
		
		
		
		//step 2

		concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'cdot'    +backSlash+'frac{'+ 'x' + '^{' + exponent1 + '}' + '}{'+ 'x' + '^{' + exponent4 + '}' +  '}' +backSlash+   'times'    +backSlash+'frac{'+ 'y' + '^{' + '1' + '}' + '}{'+ 'y' + '^{' + '1' + '}' +  '}'+ 
		
		'+'
		
		+backSlash+'frac{'+ leftOfEqualNumerator1 + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'cdot'    +backSlash+'frac{'+ 'x' + '^{' + exponent2 + '}' + '}{'+ 'x' + '^{' + exponent4 + '}' +  '}' +backSlash+   'cdot'    +backSlash+'frac{'+ 'y' + '^{' + '1' + '}' + '}{'+ 'y' + '^{' + '1' + '}' +  '}'+
		
		
		 backSlash + backSlash;
		
		
		
		//step 3
		concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'cdot'   +' '+  'X' + '^{' + exponent1  + '-' + '(' +exponent4 + ')'      +  '}' +     backSlash+   'cdot'    +' '+  'Y' + '^{' + 1 + '-' + 1     +  '}' + 
		
		
		'+'
		
		+backSlash+'frac{'+ leftOfEqualNumerator1 + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'cdot'   +' '+  'X' + '^{' + exponent2  + '-' + '(' +exponent4 + ')'      +  '}' +     backSlash+   'cdot'    +' '+  'Y' + '^{' + 1 + '-' + 1     +  '}' +  backSlash + backSlash;
		
		
		
		
		
		//Step 4
			console.log( exponent1-(exponent4));
			var exponent3 = exponent1-(exponent4);
			
			console.log( exponent2-(exponent4));
			var exponent5 = exponent2-(exponent4);
	
		concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ leftOfEqualNumerator + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'cdot'   +' '+  'X' + '^{' + exponent3  +  '}' +     backSlash+   'cdot'    +' '+  'Y' + '^{' + '0'   +  '}' +  
		
		'+'
		
		
		+ backSlash+'frac{'+ leftOfEqualNumerator1 + '}{'+ leftOfEqualDenominator +  '}' +backSlash+   'cdot'   +' '+  'X' + '^{' + exponent5  +  '}' +     backSlash+   'cdot'    +' '+  'Y' + '^{' + '0'   +  '}' +  backSlash + backSlash;
		
		
		
		
		
		
		
		
		//Step 5
		
			var leftExpression = []; // initialize leftExpression array
		
		
		
		
			//reduce coefficient using LCM -- no mixed fractions used here 
	 		var numerator = leftOfEqualNumerator/gcd_rec(leftOfEqualNumerator, leftOfEqualDenominator);
			var denominator = leftOfEqualDenominator /gcd_rec(leftOfEqualNumerator, leftOfEqualDenominator);
			
			console.log("numerator = " + numerator)
			console.log("denominator = " + denominator)
		
			//invert the exponent (multiply anything by -1 will give you the inverse)
			//var exponent3Inverse = exponent3 * -1;
			
			//console.log("exponent3Inverse = "+ exponent3Inverse)
			
			if(exponent3==0){//leftside of operation
				
			//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ denominator +  '}'  +  backSlash + backSlash;
			
			leftExpression.push('&=' +backSlash+'frac{'+ numerator + '}{'+ denominator +  '}');
			
					//final step with coeff
					if ((numerator==1)&&(denominator==1)){
						console.log("aaaaaaaaaaaaaaaaa")
						//concatFeedbackItems = concatFeedbackItems +  '&=' + '1'  +  backSlash + backSlash;
						leftExpression.push('&=' + '1' );
					
					}else if ((numerator==1)&&(denominator!=1)){
						console.log("bbbbbbbbbbbbbbbbbbb")
						//This is OK
						
					}else if ((numerator!=1)&&(denominator==1)){
						console.log("cccccccccccccccccccc")
						//concatFeedbackItems = concatFeedbackItems +  '&=' + numerator  +  backSlash + backSlash;
						leftExpression.push('&=' + numerator );
					}
					
			
			}else if (exponent3==1){
			//no exponent 1 in answer
			//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator +  'x' + '}{'+ denominator  + '}'  +  backSlash + backSlash;
			leftExpression.push('&=' +backSlash+'frac{'+ numerator +  'x' + '}{'+ denominator  + '}');
			
					////final step with coeff
					if ((numerator==1)&&(denominator==1)){
						console.log("dddddddddddddddddd")
						//concatFeedbackItems = concatFeedbackItems +  '&=' + 'x'  +  backSlash + backSlash;
						leftExpression.push('&=' + 'x');
					
					}else if ((numerator==1)&&(denominator!=1)){
						console.log("eeeeeeeeeeeeeeeee")
						//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{' +  'x' + '}{'+ denominator  + '}'  +  backSlash + backSlash;
						leftExpression.push('&=' +backSlash+'frac{' +  'x' + '}{'+ denominator  + '}');
						
					}else if ((numerator!=1)&&(denominator==1)){
						console.log("fffffffffffffffff")
						//concatFeedbackItems = concatFeedbackItems +  '&=' + numerator + 'x' +  backSlash + backSlash;
						leftExpression.push('&=' + numerator + 'x');
					}
			
			
			
			}else if (exponent3==-1){
			//no exponent -1 in answer	
			//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ denominator  + 'x' +'}'  +  backSlash + backSlash;
			leftExpression.push('&=' +backSlash+'frac{'+ numerator + '}{'+ denominator  + 'x' +'}');
			
					////final step with coeff
					if ((numerator==1)&&(denominator==1)){
						console.log("ggggggggggggggggg")
						//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ 'x' +'}'  +  backSlash + backSlash;
						leftExpression.push('&=' +backSlash+'frac{'+ numerator + '}{'+ 'x' +'}');
					
					}else if ((numerator==1)&&(denominator!=1)){
						//This is OK
						console.log("hhhhhhhhhhhhhhhh")
						
					}else if ((numerator!=1)&&(denominator==1)){
						console.log("iiiiiiiiiiiiiiiii")
						//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ 'x' +'}'  +  backSlash + backSlash;
						leftExpression.push('&=' +backSlash+'frac{'+ numerator + '}{'+ 'x' +'}');
						
					}
			
				
			}else{
			//!= 0 or 1
			
			//if exponent5 is negative in the previous step - x^{exponent5} goes on bottom as positive
			//if exponent5 is positive in the previous step - x^{exponent5} goes on top as positive
			//no negative exponents in final answer
			console.log("exponent3 " + exponent3)
					if(exponent3 > 0){
					console.log("test 111111111 ")
					//if exponent5 is positive in the previous step - x^{exponent5} goes on top as positive
					//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + 'x' + '^{' +  Math.abs(exponent3)  +  '}' + '}{'+ denominator +   '}'   // backSlash + backSlash;
					
					leftExpression.push('&=' +backSlash+'frac{'+ numerator + 'x' + '^{' +  Math.abs(exponent3)  +  '}' + '}{'+ denominator +   '}');
					
					
							////final step with coeff
							if ((numerator==1)&&(denominator==1)){
								console.log("jjjjjjjjjjjjjj")

								//concatFeedbackItems = concatFeedbackItems +  '&=' + 'x' + '^{' +  Math.abs(exponent3)  +  '}'   //backSlash + backSlash;	
								leftExpression.push('&=' + 'x' + '^{' +  Math.abs(exponent3)  +  '}');

							}else if ((numerator==1)&&(denominator!=1)){
								console.log("kkkkkkkkkkkkkkkkkkkk")
								//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ 'x' + '^{' +  Math.abs(exponent3)  +  '}' + '}{'+ denominator +   '}'    //backSlash + backSlash;
								
								leftExpression.push('&=' +backSlash+'frac{'+ 'x' + '^{' +  Math.abs(exponent3)  +  '}' + '}{'+ denominator +   '}');
								
							}else if ((numerator!=1)&&(denominator==1)){
								console.log("llllllllllllllllllll")
								concatFeedbackItems = concatFeedbackItems +  '&=' + numerator + 'x' + '^{' +  Math.abs(exponent3)  +  '}'   +  backSlash + backSlash;
								leftExpression.push('&=' + numerator + 'x' + '^{' +  Math.abs(exponent3)  +  '}');
								
							}
					
							
						
					}else{
						console.log("test 2222222222 ")
						//if exponent5 is negative in the previous step - x^{exponent5} goes on bottom as positive
						
						//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ denominator +  'x' + '^{' + Math.abs(exponent3)  +  '}' + '}'  +  backSlash + backSlash;
						
						leftExpression.push('&=' +backSlash+'frac{'+ numerator + '}{'+ denominator +  'x' + '^{' + Math.abs(exponent3)  +  '}' + '}');
						
							////final step with coeff
							if ((numerator==1)&&(denominator==1)){
								console.log("mmmmmmmmmmmmmmmmmmm")
								//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+ 'x' + '^{' + Math.abs(exponent3)  +  '}' + '}'  +  backSlash + backSlash;
								leftExpression.push('&=' +backSlash+'frac{'+ numerator + '}{'+ 'x' + '^{' + Math.abs(exponent3)  +  '}' + '}');
							}else if ((numerator==1)&&(denominator!=1)){
								//This is OK
								console.log("nnnnnnnnnnnnnnnn")
								
								
							}else if ((numerator!=1)&&(denominator==1)){
								console.log("ooooooooooooooooo")
								//concatFeedbackItems = concatFeedbackItems +  '&=' +backSlash+'frac{'+ numerator + '}{'+  'x' + '^{' + Math.abs(exponent3)  +  '}' + '}'  +  backSlash + backSlash;
								leftExpression.push('&=' +backSlash+'frac{'+ numerator + '}{'+  'x' + '^{' + Math.abs(exponent3)  +  '}' + '}');
							}
						
						
					}
			
			
			}
		
	

		console.log("leftExpression Array = "+ leftExpression)
		
		
		var rightExpression = []; // initialize rightExpression array
		var numerator1;
		var denominator1;


		rightSideOfOperation();
		function rightSideOfOperation(){
			
			
			//reduce coefficient using LCM -- no mixed fractions used here 
	 		numerator1 = leftOfEqualNumerator1/gcd_rec(leftOfEqualNumerator1, leftOfEqualDenominator);
			denominator1 = leftOfEqualDenominator /gcd_rec(leftOfEqualNumerator1, leftOfEqualDenominator);
			
			console.log("numerator1 = " + numerator1)
			console.log("denominator1 = " + denominator1)
		
			//invert the exponent (multiply anything by -1 will give you the inverse)
			//var exponent3Inverse = exponent3 * -1;
			
			//console.log("exponent3Inverse = "+ exponent3Inverse)
			
			if(exponent5==0){//leftside of operation
				
			//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{'+ numerator1 + '}{'+ denominator1 +  '}'  +  backSlash + backSlash;
			rightExpression.push(''+  '+' +backSlash+'frac{'+ numerator1 + '}{'+ denominator1 +  '}'  +  backSlash + backSlash);
			
					//final step with coeff
					if ((numerator1==1)&&(denominator1==1)){
						console.log("ppppppppppppppppppp")
						//concatFeedbackItems = concatFeedbackItems +  '+' + '1'  +  backSlash + backSlash;
						rightExpression.push(''+  '+' + '1'  +  backSlash + backSlash);
					
					}else if ((numerator1==1)&&(denominator1!=1)){
						console.log("qqqqqqqqqqqqqqqqqqqq")
						//This is OK
						
					}else if ((numerator1!=1)&&(denominator1==1)){
						console.log("rrrrrrrrrrrrrrrrrrr")
						//concatFeedbackItems = concatFeedbackItems +  '+' + numerator1  +  backSlash + backSlash;
						rightExpression.push(''+  '+' + numerator1  +  backSlash + backSlash);
					}
					
			
			}else if (exponent5==1){
			//no exponent 1 in answer
			//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{'+ numerator1 +  'x' + '}{'+ denominator1  + '}'  +  backSlash + backSlash;
			rightExpression.push(''+  '+' +backSlash+'frac{'+ numerator1 +  'x' + '}{'+ denominator1  + '}'  +  backSlash + backSlash);
			
					////final step with coeff
					if ((numerator1==1)&&(denominator1==1)){
						console.log("ssssssssssssssssss")
						//concatFeedbackItems = concatFeedbackItems +  '+' + 'x'  +  backSlash + backSlash;
						rightExpression.push(''+  '+' + 'x'  +  backSlash + backSlash);
					
					}else if ((numerator1==1)&&(denominator1!=1)){
						console.log("tttttttttttttttttt")
						//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{' +  'x' + '}{'+ denominator1  + '}'  +  backSlash + backSlash;
						rightExpression.push(''+  '+' +backSlash+'frac{' +  'x' + '}{'+ denominator1  + '}'  +  backSlash + backSlash);
						
					}else if ((numerator1!=1)&&(denominator1==1)){
						console.log("uuuuuuuuuuuuuuuuuuu")
						//concatFeedbackItems = concatFeedbackItems +  '+' + numerator1 + 'x' +  backSlash + backSlash;
						rightExpression.push(''+  '+' + numerator1 + 'x' +  backSlash + backSlash);
					}
			
			
			
			}else if (exponent5==-1){
			//no exponent -1 in answer	
			//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{'+ numerator1 + '}{'+ denominator1  + 'x' +'}'  +  backSlash + backSlash;
			rightExpression.push(''+  '+' +backSlash+'frac{'+ numerator1 + '}{'+ denominator1  + 'x' +'}'  +  backSlash + backSlash);
			
					////final step with coeff
					if ((numerator1==1)&&(denominator1==1)){
						console.log("vvvvvvvvvvvvvvvvvvvvv")
						//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{'+ numerator1 + '}{'+ 'x' +'}'  +  backSlash + backSlash;
						rightExpression.push(''+  '+' +backSlash+'frac{'+ numerator1 + '}{'+ 'x' +'}'  +  backSlash + backSlash);
					
					}else if ((numerator1==1)&&(denominator1!=1)){
						console.log("wwwwwwwwwwwwwwwwwwwwww")
						//This is OK
						
					}else if ((numerator1!=1)&&(denominator1==1)){
						console.log("xxxxxxxxxxxxxxxxxxxxxxxx")
						//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{'+ numerator1 + '}{'+ 'x' +'}'  +  backSlash + backSlash;
						rightExpression.push(''+  '+' +backSlash+'frac{'+ numerator1 + '}{'+ 'x' +'}'  +  backSlash + backSlash);
						
					}
			
				
			}else{
			//!= 0 or 1
			
			//if exponent5 is negative in the previous step - x^{exponent5} goes on bottom as positive
			//if exponent5 is positive in the previous step - x^{exponent5} goes on top as positive
			//no negative exponents in final answer
			console.log("exponent54444444 " + exponent5)
					if(exponent5 > 0){
					console.log("test 111111111 RightSide")
					//if exponent5 is positive in the previous step - x^{exponent5} goes on top as positive
					
					//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{'+ numerator1 + 'x' + '^{' +  Math.abs(exponent5)  +  '}' + '}{'+ denominator1 +   '}'  +  backSlash + backSlash;
					rightExpression.push(''+  '+' +backSlash+'frac{'+ numerator1 + 'x' + '^{' +  Math.abs(exponent5)  +  '}' + '}{'+ denominator1 +   '}'  +  backSlash + backSlash);
									
					
							////final step with coeff
							if ((numerator1==1)&&(denominator1==1)){
								console.log("yyyyyyyyyyyyyyyyy")
								//concatFeedbackItems = concatFeedbackItems +  '+' + 'x' + '^{' +  Math.abs(exponent5)  +  '}' +  backSlash + backSlash;	
								//'x' + '^{' +  Math.abs(exponent5)  +  '}' +  backSlash + backSlash;	//concat to leftside of operation
								rightExpression.push('' +  '+'   + 'x' + '^{' +  Math.abs(exponent5)  +  '}' +  backSlash + backSlash);

							}else if ((numerator1==1)&&(denominator1!=1)){
								//console.log("((numerator==1)&&(denominator!=1))")
								//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{'+ 'x' + '^{' +  Math.abs(exponent5)  +  '}' + '}{'+ denominator1 +   '}'  +  backSlash + backSlash;
								console.log("zzzzzzzzzzzzzzzzzz")
								//concatFeedbackItems = concatFeedbackItems + '+' +backSlash+'frac{'+ 'x' + '^{' +  Math.abs(exponent5)  +  '}' + '}{'+ denominator1 +   '}'  +  backSlash + backSlash; 
								rightExpression.push(''+ '+' +backSlash+'frac{'+ 'x' + '^{' +  Math.abs(exponent5)  +  '}' + '}{'+ denominator1 +   '}'  +  backSlash + backSlash);
	
								
							}else if ((numerator1!=1)&&(denominator1==1)){
								console.log("AAAAAAAAAAAAAAAAAA")
								//+ numerator1 +'x' + '^{' +  Math.abs(exponent5)  +  '}' +  backSlash + backSlash;	//concat to leftside of operation
								rightExpression.push('' + '+' + numerator1  + 'x' + '^{' +  Math.abs(exponent5)  +  '}' +  backSlash + backSlash);

								
							}
					
							//feedbackDisplay();
						
					}else{
						console.log("test 2222222222 ")
						//if exponent5 is negative in the previous step - x^{exponent5} goes on bottom as positive
						
							//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{'+ numerator1 + '}{'+ denominator1 +  'x' + '^{' + Math.abs(exponent5)  +  '}' + '}'  +  backSlash + backSlash;
							rightExpression.push(''+  '+' +backSlash+'frac{'+ numerator1 + '}{'+ denominator1 +  'x' + '^{' + Math.abs(exponent5)  +  '}' + '}'  +  backSlash + backSlash);

							////final step with coeff
							if ((numerator1==1)&&(denominator1==1)){
								console.log("(BBBBBBBBBBBBBBB")
								//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{'+ numerator1 + '}{'+ 'x' + '^{' + Math.abs(exponent5)  +  '}' + '}'  +  backSlash + backSlash;
								rightExpression.push(''+  '+' +backSlash+'frac{'+ numerator1 + '}{'+ 'x' + '^{' + Math.abs(exponent5)  +  '}' + '}'  +  backSlash + backSlash);
							}else if ((numerator1==1)&&(denominator1!=1)){
								console.log("CCCCCCCCCCCCCCCCC")
								//This is OK
								
								
							}else if ((numerator1!=1)&&(denominator1==1)){
								console.log("(DDDDDDDDDDDDDDDD")
								//concatFeedbackItems = concatFeedbackItems +  '+' +backSlash+'frac{'+ numerator1 + '}{'+  'x' + '^{' + Math.abs(exponent5)  +  '}' + '}'  +  backSlash + backSlash;
								rightExpression.push(''+  '+' +backSlash+'frac{'+ numerator1 + '}{'+  'x' + '^{' + Math.abs(exponent5)  +  '}' + '}'  +  backSlash + backSlash);
							}
						
						
					}
			
			
			}
		
	
			
		console.log("rightExpression Array = "+ rightExpression)	
			
			
			
			
}//end function

//var last = arr.slice(-1)




//find which array is longer
console.log("leftExpression.length "+ leftExpression.length + "rightExpression.length "+ rightExpression.length)
var longerArray
if(leftExpression.length > rightExpression.length){
	
	
	rightExpression.push(rightExpression.slice(-1));
	longerArray=leftExpression.length;
	//console.log("rightExpression.length.value "+ rightExpression.length.value)
	console.log("rightExpression Array ============== "+ rightExpression)
}else if(rightExpression.length > leftExpression.length){
	
	leftExpression.push(leftExpression.slice(-1));
	longerArray=rightExpression.length;	
	//console.log("leftExpression.length.value "+ leftExpression.length.value)
	console.log("leftExpression Array =============== "+ leftExpression)
}else if(rightExpression.length == leftExpression.length){
	
	
	longerArray=leftExpression.length;	
	//console.log("leftExpression.length.value "+ leftExpression.length.value)
	console.log("expressions are equal")
}
//Display Contents of both arrays
for (var i=0;i<longerArray;i++){ 
concatFeedbackItems = concatFeedbackItems +leftExpression[i] + rightExpression[i]  +  backSlash + backSlash
	
	
}









	//FACTOR OUT CONSTANTS
	//Reduce constants to lowest terms
	//greatest common devisor - denominators	
	var gcdDenominators = gcd_rec(denominator, denominator1);
	denominator= denominator/gcdDenominators;
	denominator1 = denominator1/gcdDenominators;
	
	//greatest common devisor - numerators	
	var gcdNumerators = gcd_rec(numerator, numerator1);
	numerator= numerator/gcdNumerators;
	numerator1 = numerator1/gcdNumerators;
	
	console.log("gcdDenominators == " + gcdDenominators)
	console.log("gcdNumerators == " + gcdNumerators)

	
	//if exponent 3 positive leave on top -- if negative put on bottom and convert to positive
	//if exponent 4 positive leave on top -- if negative put on bottom and convert to positive
	//console.log("exponent3 = " + exponent3)
	//console.log("exponent4 = " + exponent4)
	
	if((exponent3>0)&&(exponent5>0)){
		
		concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator +'x' + '^{' + Math.abs(exponent3)  +  '}' + '}{'+  denominator  + '}' +  '+' +backSlash+'frac{' + numerator1 + 'x' + '^{' + Math.abs(exponent5)  +  '}' + '}{'+ denominator1 +  '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
		
	}else if((exponent3<0)&&(exponent5<0)){
		concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator +  '}{'+  denominator  + 'x' + '^{' + Math.abs(exponent3)  +  '}' + '}' +  '+' +backSlash+'frac{' + numerator1 +   '}{'+ denominator1 + 'x' + '^{' + Math.abs(exponent5)  +  '}' + '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
	}else if((exponent3<0)&&(exponent5>0)){
		concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator +  '}{'+  denominator  + 'x' + '^{' + Math.abs(exponent3)  +  '}' + '}' +  '+' +backSlash+'frac{' + numerator1 + 'x' + '^{' + Math.abs(exponent5)  +  '}' +   '}{'+ denominator1  + '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
		
	}else if((exponent3>0)&&(exponent5<0)){
		concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator + 'x' + '^{' + Math.abs(exponent3)  +  '}' + '}{'+  denominator   + '}' +  '+' +backSlash+'frac{' + numerator1 +   '}{'+ denominator1 + 'x' + '^{' + Math.abs(exponent5)  +  '}' + '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
		
	}
	
	
		
		
	//FACTOR OUT (EXPONENTS) LOWEST POWER
	console.log("exponent1 =========== " + exponent1)	
	console.log("exponent2 =========== " + exponent2)
	console.log("exponent4 =========== " + exponent4)
	
	
	console.log("exponent3 =========== " + exponent3)
	console.log("exponent5 =========== " + exponent5)
	
	
	var exponentResult
	
	if((exponent3>0)&&(exponent5>0)){//both exponents on top - factor lowest power outside bracket
				
					if(exponent3>exponent5){
						//subtract  (exponent3 - exponent5)
						exponentResult = exponent3 - exponent5
						console.log("exponentResult ======= "+exponentResult)
						
						concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +   'x' + '^{' + Math.abs(exponent5)  + '}'  + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator +'x' + '^{' + Math.abs(exponentResult)  +  '}' + '}{'+  denominator  + '}' +  '+' +backSlash+'frac{' + numerator1  + '}{'+ denominator1 +  '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
					}else if (exponent3<exponent5){
						//subtract  (exponent5 - exponent3)
						exponentResult = exponent5 - exponent3
						console.log("exponentResult1 ======= "+exponentResult)
						
						concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +   'x' + '^{' + Math.abs(exponent3)  + '}'  + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator + '}{'+  denominator  + '}' +  '+' +backSlash+'frac{' + numerator1  +  'x' + '^{' + Math.abs(exponentResult)  +  '}' + '}{'+ denominator1 +  '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
					}else{
						console.log("Exponents are equal")
						//if exponents equal they cancel out
						exponentResult = exponent5 - exponent3//you can subtract exponent5 from exponent3  OR   exponent3 from exponent5 - both answers will be the same
						console.log("exponentResult1 ======= "+exponentResult)
						
						concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +   'x' + '^{' + Math.abs(exponent3)  + '}'  + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator + '}{'+  denominator  + '}' +  '+' +backSlash+'frac{' + numerator1   + '}{'+ denominator1 +  '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
						//
						
							//Reduce constants to lowest terms
							//greatest common devisor - denominators	
							var gcdDenominators1 = gcd_rec(denominator, denominator1);
							console.log("gcdDenominators1 ====== "+ gcdDenominators1)
							var LCD = denominator * denominator1 / gcdDenominators1;
							console.log("LCD == " + LCD)
							
							
							var numerator2 = (LCD/denominator) * numerator;
							var numerator3 = (LCD/denominator1) * numerator1;
							var product =  numerator2+numerator3;
	
						concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +   'x' + '^{' + Math.abs(exponent3)  + '}'  + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ product + '}{'+  LCD  + '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
						
						
					}
		
	}else if((exponent3<0)&&(exponent5<0)){//both exponents on bottom - factor lowest power outside bracket
	
					if(exponent3>exponent5){
						//subtract  (exponent3 - exponent5)
						exponentResult = exponent3 - exponent5
						console.log("exponentResultttttt ======= "+exponentResult)
						
						concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +  '}{'+ gcdDenominators +      'x' + '^{' + Math.abs(exponent5)  + '}' +      '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator + '}{'+  denominator  +     'x' + '^{' + Math.abs(exponentResult)  +  '}' +   '}' +  '+' +backSlash+'frac{' + numerator1  + '}{'+ denominator1 +  '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
					}else if (exponent3<exponent5){
						//subtract  (exponent5 - exponent3)
						exponentResult = exponent5 - exponent3
						console.log("exponentResult111 ======= "+exponentResult)
						
						concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators   + '}{'+ gcdDenominators +   'x' + '^{' + Math.abs(exponent5)  + '}'  + '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator + '}{'+  denominator+ 'x' + '^{' + Math.abs(exponentResult)  +  '}'  + '}' +  '+' +backSlash+'frac{' + numerator1  +   '}{'+ denominator1   +  '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
					}else{
							console.log("WWWWWWWWWWWWWwWWWWWWWWWWWWWwWWWWWWWWWWWWWwWWWWWWWWWWWWWwWWWWWWWWWWWWWwWWWWWWWWWWWWWwWWWWWWWWWWWWWwWWWWWWWWWWWWWw")
							//if exponents equal they cancel out
						
						
						
							exponentResult = exponent5 - exponent3//you can subtract exponent5 from exponent3  OR   exponent3 from exponent5 - both answers will be the same
							console.log("exponentResult66666666666666 ======= "+exponentResult)
						
							concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +  '}{'+ gcdDenominators +      'x' + '^{' + Math.abs(exponent5)  + '}'   + '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator + '}{'+  denominator  + '}' +  '+' +backSlash+'frac{' + numerator1   + '}{'+ denominator1 +  '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
						//
						
							//Reduce constants to lowest terms
							//greatest common devisor - denominators	
							var gcdDenominators1 = gcd_rec(denominator, denominator1);
							console.log("gcdDenominators1 ====== "+ gcdDenominators1)
							var LCD = denominator * denominator1 / gcdDenominators1;
							console.log("LCD == " + LCD)
							
							
							var numerator2 = (LCD/denominator) * numerator;
							var numerator3 = (LCD/denominator1) * numerator1;
							var product =  numerator2+numerator3;
	
							concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +   'x' + '^{' + Math.abs(exponent3)  + '}'  + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ product + '}{'+  LCD  + '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
						
						
						
						
						
						
						
						
						
					}
			
	}else if((exponent3<0)&&(exponent5>0)){//exponent3 on bottom ,,,,, exponent5 on top - cannot factor exponents
	
	console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
	
	
	
		//concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator +  '}{'+  denominator  + 'x' + '^{' + Math.abs(exponent3)  +  '}' + '}' +  '+' +backSlash+'frac{' + numerator1 + 'x' + '^{' + Math.abs(exponent5)  +  '}' +   '}{'+ denominator1  + '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
		
	}else if((exponent3>0)&&(exponent5<0)){//exponent3 on top ,,,,, exponent5 on bottom - cannot factor exponents
	
	console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
		//concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator + 'x' + '^{' + Math.abs(exponent3)  +  '}' + '}{'+  denominator   + '}' +  '+' +backSlash+'frac{' + numerator1 +   '}{'+ denominator1 + 'x' + '^{' + Math.abs(exponent5)  +  '}' + '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
		
	}
	
	
	/*
	
	
	if((exponent3==0)&&(exponent5>0)){//both exponents on top - factor lowest power outside bracket
				
					if(exponent3>exponent5){
						//subtract  (exponent3 - exponent5)
						exponentResult = exponent3 - exponent5
						console.log("exponentResult ======= "+exponentResult)
						
						concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +   'x' + '^{' + Math.abs(exponent5)  + '}'  + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator +'x' + '^{' + Math.abs(exponentResult)  +  '}' + '}{'+  denominator  + '}' +  '+' +backSlash+'frac{' + numerator1  + '}{'+ denominator1 +  '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
					}else if (exponent3<exponent5){
						//subtract  (exponent5 - exponent3)
						exponentResult = exponent5 - exponent3
						console.log("exponentResult1 ======= "+exponentResult)
						
						concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +   'x' + '^{' + Math.abs(exponent3)  + '}'  + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator + '}{'+  denominator  + '}' +  '+' +backSlash+'frac{' + numerator1  +  'x' + '^{' + Math.abs(exponentResult)  +  '}' + '}{'+ denominator1 +  '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
					}else{
						console.log("Exponents are equal")
						//if exponents equal they cancel out
						exponentResult = exponent5 - exponent3//you can subtract exponent5 from exponent3  OR   exponent3 from exponent5 - both answers will be the same
						console.log("exponentResult1 ======= "+exponentResult)
						
						concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +   'x' + '^{' + Math.abs(exponent3)  + '}'  + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ numerator + '}{'+  denominator  + '}' +  '+' +backSlash+'frac{' + numerator1   + '}{'+ denominator1 +  '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
						//
						
							//Reduce constants to lowest terms
							//greatest common devisor - denominators	
							var gcdDenominators1 = gcd_rec(denominator, denominator1);
							console.log("gcdDenominators1 ====== "+ gcdDenominators1)
							var LCD = denominator * denominator1 / gcdDenominators1;
							console.log("LCD == " + LCD)
							
							
							var numerator2 = (LCD/denominator) * numerator;
							var numerator3 = (LCD/denominator1) * numerator1;
							var product =  numerator2+numerator3;
	
						concatFeedbackItems = concatFeedbackItems +'&=' +     backSlash+'frac{'+ gcdNumerators +   'x' + '^{' + Math.abs(exponent3)  + '}'  + '}{'+ gcdDenominators +  '}' +         backSlash + 'left' + '('   +backSlash+'frac{'+ product + '}{'+  LCD  + '}' +    backSlash + 'right'  + ')' +  backSlash + backSlash;
						
						
					}
		
	}
	
	
	
	*/
	
	
	
		
		feedbackDisplay();
		
		
		
		
		
	 
	 //feedback_UpdateMathjax(concatFeedbackItems)


	 
	 //document.getElementById("showAnswer").disabled = true; //disable showAnswer Button
	 
	 
	 
}//end showAnswer2 function