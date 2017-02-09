// JavaScript Document


var A;
var B;
var C;



function showAnswer(){//1 var whole Numbers linear
	
	//display question///////////////////
	//test hardcode
	//console.log("test hard code")
	//A=10;
	//B=32;
	//C=24;
	 

	var leftOperation = B - B;
	var rightOperation = C - B;
	
	var leftOperation1 = A/A;
	rightOperation1 = rightOperation/A;
	 
	var numerator="";
	var denominator="";
	
	
	
	 
	 
	 /* Show Equation*/
	 
	 
	 //To solve for a variable, use inverse operations to undo the operations in the equation. Be sure to gather like terms and to do the same operation to both sides of the equation.
	 
	 
	// concatFeedbackItems = A + "x" + "+" + B + "=" + C + backSlash + backSlash; //backSlash used for newLine
	 
	 
	 //concatEquationItems = concatFeedbackItems;
	 //mainUpdateMathjax(concatEquationItems)
	 /* Step 1*/
	 
	 //No text and style
	// concatFeedbackItems = concatFeedbackItems + A + "x" + "+" + B + "-" + B + "=" + C + "-" + B + backSlash + backSlash;
	 
	 //with text
	 //concatFeedbackItems =  concatFeedbackItems + A + "x" + "+" + B + "-" + B + "=" + C + "-" + B  +backSlash + "text{" + " (Subtract " + B + " from both sides)" + "}" +backSlash + backSlash;
	
	 //with text and style
	 //	 concatFeedbackItems =  concatFeedbackItems  + A + "x" + "+" + B + backSlash +  "color{red}"+ "{" +  "-"   + B  + "}" + "=" + C  + backSlash +  "color{red}"+ "{" +  "-" + B  + "}" +  backSlash + "text{"  + " Subtract "  + "}"  + backSlash  +  "color{red}" + "{" + B +  "}" + backSlash + "text{" + " from both sides" + "}" +backSlash + backSlash;
	 
	 /* Change font size
		\tiny
		\scriptsize
		\footnotesize
		\small
		\normalsize
		\large
		\Large
		\LARGE
		\huge
		\Huge
	*/
	/* Change char spacing
		
		\,	 a small space
		\:	 a medium space
		\;	 a large space
		\quad	 a really large space
		\qquad	 a huge space
		\!	 a negative space (moves things back to the left)
	*/
	
	/*
	change space after line
	
	[25mm]
	
	*/
	
	//with text Color  and font size and feed back text
	 concatFeedbackItems =  concatFeedbackItems  + A + "x" + "+" + B +  backSlash +   "color{red}"+ "{" +  "-"   + B  + "}"  +  " &=" + C  + backSlash +  "color{red}"+ "{" +  "-" + B  + "}" +  "&&" + backSlash + "small{ "   + " Subtract "  + "}" +  backSlash + "\:"  + backSlash  +  "color{red}" + "{" + B +  "}" +  backSlash + "\:" + backSlash + "small{" + "from \\  both \\ sides" + "}" +backSlash + backSlash + "[1mm]";
	 
	 
	  //concatFeedbackItems =  concatFeedbackItems  + A + "x" + "+" + B + backSlash +  "color{red}"+ "{" +  "-"   + B  + "}"  +  " =" + C  + backSlash +  "color{red}"+ "{" +  "-" + B  + "}" + backSlash + backSlash;
	 

	 feedBackArray.push(concatFeedbackItems);
	 
	 

	  //feedBackText = feedBackText+ backSlash + "quad" +  "..." + backSlash + "small{ "   + " Subtract "  + "}" +  backSlash + "\:"  + backSlash  +  "color{red}" + "{" + B +  "}" +  backSlash + "\:" + backSlash + "small{" + "from \\  both \\ sides" + "}" +backSlash + backSlash;
	// 
	//feedBackArray1.push(feedBackText);
	 

	 /* Step 2*/
	 
	// concatFeedbackItems = concatFeedbackItems + A + "x"  + "=" + rightOperation + backSlash + backSlash;
	 
	 //with  font size and feed back text
	 concatFeedbackItems = concatFeedbackItems + A + "x"  +  "&=" +  rightOperation  +  "&&" + backSlash + "small{ "   + " Result "  + "}" + backSlash + backSlash + "[1mm]";
	 
	 
	 
	//concatFeedbackItems = concatFeedbackItems + A + "x"  +  "=" +  rightOperation +  backSlash + backSlash;
	 
	feedBackArray.push(concatFeedbackItems);
	 
	 
	//feedBackText = feedBackText + backSlash + "quad" +  "..." + backSlash + "small{ "   + " Result "  + "}" + backSlash + backSlash;
	 
	//feedBackArray1.push(feedBackText);
	 
	 
	 
	 
	 
	 
	 
	 /*
	 //Step 3a or 3b
	 //output fractions on this line with reciprocal 
	 concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+"1"+'}{'+A+'}'+  backSlash +"cdot"  +backSlash +'frac{'+A+'}{'+"1"+'}'+   "x" + "=" +backSlash +'frac{'+ rightOperation +'}{'+"1"+'}'+  backSlash +"cdot"  +backSlash +'frac{'+"1"+'}{'+A+'}'+ backSlash + backSlash;
	 */
	 
	 /* Step 3b*/
	 //output fractions 
	 //concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+A+'}{'+A+'}'+ 'x' + '=' +backSlash +'frac{'+ rightOperation +'}{'+A+'}'+ backSlash + backSlash;
	
	concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+A+'}{'+   backSlash +'color{red}{'+ A +'}'   +'}'+ 'x' + '&=' +backSlash +'frac{'+ rightOperation +'}{'+     backSlash +'color{red}{'+A +'}'  +'}'   +  "&&" + backSlash + "small{ "   + " Divide "  + "}" +   backSlash + "\:" + backSlash + "small{" + " both \\ sides \\ by" + "}"  +    backSlash + "\:"  + backSlash  +  "color{red}" + "{" + A +  "}"+    backSlash + "\:" + backSlash + "small{" + " and \\ Simplify" + "}"+ backSlash + backSlash + "[1mm]";
	
	
		 //concatFeedbackItems = concatFeedbackItems  +backSlash +'frac{'+A+'}{'+A+'}'+ 'x' + '=' +backSlash +'frac{'+ rightOperation +'}{'+A+'}' + backSlash + backSlash;
	 
	 feedBackArray.push(concatFeedbackItems);
	 
	 
	 //feedBackText = feedBackText +  backSlash + "quad" +  "..." + backSlash + "small{ "   + " Divide "  + "}" +   backSlash + "\:" + backSlash + "small{" + " both \\ sides \\ by" + "}"  +    backSlash + "\:"  + backSlash  +  "color{red}" + "{" + A +  "}"+    backSlash + "\:" + backSlash + "small{" + " and \\ Simplify" + "}"+ backSlash + backSlash;;
	 
	//feedBackArray1.push(feedBackText);
	 
	 
	 
	 
	 
	 /* Step 4*/
	 //output simplified fractions 
	 numerator = rightOperation/gcd_rec(rightOperation, A);
	 denominator = A /gcd_rec(rightOperation, A);
	 
	if(denominator == "1"){
		concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + numerator    +   "&&" + backSlash + "small{ "   + " Result "  + "}";
		
		//concatFeedbackItems = concatFeedbackItems  + 'x' + '=' + numerator;
		feedBackArray.push(concatFeedbackItems);
		
		
		//feedBackText = feedBackText + backSlash + "quad" +  "..." + backSlash + "small{ "   + " Result "  + "}";
	 
		//feedBackArray1.push(feedBackText);
		
		
		
	}else if(numerator > denominator){
		//console.log("modulus = " + findModulus(numerator, denominator));
		//this provides the whole number to the mix fraction
		mixFractionWholeNum = Math.floor(numerator/denominator);
		
		concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + mixFractionWholeNum + backSlash +'frac{'+ findModulus(numerator, denominator) +'}{'+ denominator +'}' +  "&&" + backSlash + "small{ "   + " Result "  + "}" + backSlash + backSlash + "[1mm]";
		
		//concatFeedbackItems = concatFeedbackItems  + 'x' + '=' + mixFractionWholeNum + backSlash +'frac{'+ findModulus(numerator, denominator) +'}{'+ denominator +'}'+   backSlash + backSlash;
		
		feedBackArray.push(concatFeedbackItems);
		
		
		//feedBackText = feedBackText + backSlash + "quad" +  "..." + backSlash + "small{ "   + " Result "  + "}" + backSlash + backSlash;
	 
		//feedBackArray1.push(feedBackText);
		
	}else{
	 	concatFeedbackItems = concatFeedbackItems  + 'x' + '&=' + backSlash +'frac{'+ numerator +'}{'+ denominator +'}' +  "&&" + backSlash + "small{ "   + " Result "  + "}"+ backSlash + backSlash + "[1mm]";
		
		
		//concatFeedbackItems = concatFeedbackItems  + 'x' + '=' + backSlash +'frac{'+ numerator +'}{'+ denominator +'}'+  backSlash + backSlash;
		feedBackArray.push(concatFeedbackItems);
		
		//feedBackText = feedBackText + backSlash + "quad" +  "..." + backSlash + "small{ "   + " Result "  + "}";
	 
		//feedBackArray1.push(feedBackText);
		
	 	
	}
	console.log("concatFeedbackItems = " + concatFeedbackItems)
	
	 /*
	 //Step 5 if needed
	 //final Answer in decimal
	 concatFeedbackItems = concatFeedbackItems + "x"  + "=" + rightOperation1 + backSlash + backSlash;
	 */
	 //console.log(concatFeedbackItems)
	 
	 feedbackDisplay();
	 
	 
}//end showAnswer function
