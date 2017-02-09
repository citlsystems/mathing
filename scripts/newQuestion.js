// JavaScript Document


var backSlash = String.fromCharCode('92');
var ampersand = String.fromCharCode('38');
var devisionSymbol = String.fromCharCode('47');
var randomQuestion;



function newQuestion(){
	stepIncrement=0;//see showAnswerForm*.js
	document.getElementById("showAnswer").disabled = false; //enable showAnswer Button
	document.getElementById("showStepTest").disabled = false; //enable showEquationStep Button 
	
	randomQuestion=Math.floor(Math.random()*5)+ 1;//1 is added so you do not get 0 
	
	
	if (randomQuestion == 1){
		
	//based on the form Ax+B=C
	A=Math.floor(Math.random()*10)+ 2;//2 is added so you do not get 0 or 1
	B=Math.floor(Math.random()*10)+ 2;
	C=Math.floor(Math.random()*101)+ 2;
	
	//Show Equation
	 showQuestion = A + "x" + "+" + B + "=" + C;
	 //console.log("showQuestion = "+ showQuestion)
	 randomQuestion_UpdateMathjax(showQuestion)
	
	//end display question////////////////
	
	//showAnswer();
		
	}else if(randomQuestion == 2){
		
		
		
	//display question///////////////////
	 
	//based on the form //based on the form 3/4 x = 6/8
	leftOfEqualNumerator= Math.floor(Math.random()*10)+ 2;//2 is added so you do not get 0 or 1
	leftOfEqualDenominator=Math.floor(Math.random()*10)+ 2;//2 is added so you do not get 0 or 1
	
	rightOfEqualNumerator=Math.floor(Math.random()*10)+ 2;//2 is added so you do not get 0 or 1
	rightOfEqualDenominator=Math.floor(Math.random()*10)+ 2;//2 is added so you do not get 0 or 1
	
	//Show Equation
	 showQuestion = backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+ 'x' + '=' +backSlash +'frac{'+ rightOfEqualNumerator +'}{'+rightOfEqualDenominator+'}';
	 //console.log("showQuestion = "+ showQuestion)
	 randomQuestion_UpdateMathjax(showQuestion)
	
	//end display question////////////////
		
		
		
		
		
		
	//showAnswer1();	
		
	}else if(randomQuestion == 3){
		
	//display question///////////////////
	 
	//based on the form 3/4x + 3/8 = 6/8
	 //the first fraction on the left side -- 3/4
	leftOfEqualNumerator= Math.floor(Math.random()*10)+ 2;//2 is added so you do not get 0 or 1
	leftOfEqualDenominator=Math.floor(Math.random()*10)+ 2;
	
	//the secon fraction on the left side -- 3/8
	leftOfEqualNumerator2= Math.floor(Math.random()*10)+ 2;
	leftOfEqualDenominator2=Math.floor(Math.random()*10)+ 2;
	
	//the first fraction on the right side -- 6/8
	rightOfEqualNumerator=Math.floor(Math.random()*10)+ 2;
	rightOfEqualDenominator=Math.floor(Math.random()*10)+ 2;
	
	//Show Equation
	 showQuestion = backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+ 'x'   + "+" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+  '=' +backSlash +'frac{'+ rightOfEqualNumerator +'}{'+rightOfEqualDenominator+'}';
	 //console.log("showQuestion = "+ showQuestion)
	 randomQuestion_UpdateMathjax(showQuestion)
	
	//end display question////////////////
		
		
		
		
	//showAnswer2();	
		
	}else if(randomQuestion == 4){//new question type --- all previous to this question are linear equations
		
	//Simplification of algebraic expressions///////////////////
	 
	//based on the form 4x^2y/8xy
	 
	leftOfEqualNumerator= Math.floor(Math.random()*10)+ 2;//2 is added so you do not get 0 or 1
	leftOfEqualDenominator=Math.floor(Math.random()*10)+ 2;
	//leftOfEqualNumerator=4;
	//leftOfEqualDenominator=8;
	
	//exponent1= Math.floor(Math.random()*10)+ 2;
	//exponent2=Math.floor(Math.random()*10)+ 2;
	//exponent1 = -5;
	//exponent2 = -9;
	
	
	
	
	exponent1 = Math.floor(Math.random()*9) + 2; // this will get a number between 2 and 9;
	exponent1 *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

	exponent2 = Math.floor(Math.random()*9) + 2; // this will get a number between 2 and 9;
	exponent2 *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
	
	
	leftOfEqualNumerator=8;//4
	leftOfEqualDenominator=4;
		
	exponent1 = 2;//
	exponent2 = -1;
	
	//Show Equation
	 //showQuestion = backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+ 'x'   + "+" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+  '=' +backSlash +'frac{'+ rightOfEqualNumerator +'}{'+rightOfEqualDenominator+'}';
	 //console.log("showQuestion = "+ showQuestion)
	 
	 
	 
	 	//Show Equation
	 showQuestion = backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + exponent1 + '}' + 'y' +     '}{'+leftOfEqualDenominator+     'x' + '^{' + exponent2 + '}' + 'y' +       '}';
	 
	  //base + "^{" + exponent + "}";
	 
	 
	 randomQuestion_UpdateMathjax(showQuestion)
	
	//end display question////////////////
		
		
		
		
	//showAnswer2();	
		
	}else if(randomQuestion == 5){//new question type --- all previous to this question are linear equations
		
	//Simplification of algebraic expressions///////////////////
	 
	//based on the form 4x^2y/8xy
	 
	leftOfEqualNumerator= Math.floor(Math.random()*10)+ 2;//2 is added so you do not get 0 or 1
	leftOfEqualNumerator1= Math.floor(Math.random()*10)+ 2;//2 is added so you do not get 0 or 1
	leftOfEqualDenominator=Math.floor(Math.random()*10)+ 2;
	
	//leftOfEqualNumerator=3;          //4 8 8 8 3 5 11 10 7 2 2 11 9 9
	//leftOfEqualNumerator1=4;       //2 2 2 6 11 6 11 5 8 7 9 9 9 3 
	//leftOfEqualDenominator=6;        //8 4 10 3 2 10 4 2 10 7 10 2 6 10
	
	
	exponent1 = Math.floor(Math.random()*9) + 2; // this will get a number between 2 and 9;
	exponent1 *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

	exponent2 = Math.floor(Math.random()*9) + 2; // this will get a number between 2 and 9;
	exponent2 *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
	
	exponent4 = Math.floor(Math.random()*9) + 2; // this will get a number between 2 and 9;
	exponent4 *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
	
	

		
	//exponent1 = 5;//9 3
	//exponent2 = 5;//-6 7
	//exponent4 = -4;//-8 -2
	
	//Show Equation
	 //showQuestion = backSlash +'frac{'+leftOfEqualNumerator+'}{'+leftOfEqualDenominator+'}'+ 'x'   + "+" + backSlash +'frac{'+leftOfEqualNumerator2+'}{'+leftOfEqualDenominator2+'}'+  '=' +backSlash +'frac{'+ rightOfEqualNumerator +'}{'+rightOfEqualDenominator+'}';
	 //console.log("showQuestion = "+ showQuestion)
	 
	 
	 
	 	//Show Equation
	 showQuestion = backSlash +'frac{'+leftOfEqualNumerator+ 	'x' + '^{' + exponent1 + '}' + 'y' +   " + "    +  leftOfEqualNumerator1+ 	'x' + '^{' + exponent2 + '}' + 'y' +    '}{'+leftOfEqualDenominator+     'x' + '^{' + exponent4 + '}' + 'y' +       '}';
	 
	  //base + "^{" + exponent + "}";
	 
	 
	 randomQuestion_UpdateMathjax(showQuestion)
	
	//end display question////////////////
		
		
		
		
	//showAnswer2();	
		
	}

//Reset all items below when creating a new question
	concatFeedbackItems="";//empty FeedBack
	feedback_UpdateMathjax(concatFeedbackItems);



	concatEquationItems="";
	mainUpdateMathjax(concatEquationItems);


	//this sets the width of #showRandonmQuestion to #MathOutput as it is dynamically widen
	var MathOutputWidth = document.getElementById("MathOutput");
	var width = (MathOutputWidth.clientWidth + 1) + "px";
		
		//console.log("width"+ width);
		//$("showRandonmQuestion").width() = $("MathOutput").width();
	var elem1 = document.getElementById('showRandonmQuestion');
    elem1.style.width = width;
		
	//Empty array
	mathOutputArray = [];
	feedBackArray = [];



document.getElementById("feedBackTextField").innerHTML="";//empty text field

	 
};//end newQuestion function