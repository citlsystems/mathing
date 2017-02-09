function LEisLinearEquationSolution(latex_equation){
//checks to see if an equation is of the form "variable = solution (in lowest terms)". Returns true if so.  Used to check that a student has found a solution

var eqn = latex_equation ;
var eqnLP = new LEequationLP(eqn) ;	

var testright, testleft = false;

if ((eqnLP.leftside.match(/\(\(1\)[xywz]\)/)!==null)  &&  (eqnLP.rightside.match(/\(\(([+\-]?\d+)\/?(\d+)?\)\)/)!==null)){

if (eqnLP.leftside = eqnLP.leftside.match(/\(\(1\)[xywz]\)/)[0]){
	testleft = true;
}

var onright = eqnLP.rightside.match(/\(\(([+\-]?\d+)\/?(\d+)?\)\)/) ;  // gives array: [ rightside, numerator, denom]   if rightside isn't a fraction, denom will be null

if (eqnLP.rightside = onright[0]){
	testright = true;
	if (onright[2] != null){
		var numerator = parseInt(onright[1]);
		var denominator = parseInt(onright[2]);
		if (LEgcd(numerator, denominator) != 1){
			testright = false;
		}
	}
}
}
var result = testleft && testright ;
	
return result; 
	
}



function LEisAxequalsB(someequation){
var leequation = someequation.replace(/\s/g,'');
var AXB_regex = new RegExp(AXB_pattern,'g');

leequation = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(someequation.split('=')[0]))) + '=' + LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(someequation.split('=')[1]))) ;

if (leequation.match(AXB_regex)!=null){
	if (leequation==leequation.match(AXB_regex)[0]){
		return true;
		}
	}
else {
	return false;
	}
}

function LEisBequalsAx(someequation){
var leequation = someequation.replace(/\s/g,'');

var BAX_regex = new RegExp(BAX_pattern,'g');

leequation = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(someequation.split('=')[0]))) + '=' + LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(someequation.split('=')[1]))) ;

if (leequation==leequation.match(BAX_regex)[0]){
	return true;
	}
else {
	return false;
	}
}

function LEisQuadratic(someequationPAR){

/*useful functions:  degreeOfPolynomial(polyPAR)  
*/

}

function LEisQuadDiffOfSquares(an_expression){

var even_exponent_pattern = '([2468]|(\\{\\d*[02468]\\}))';

//eg:  25x^4 - 16
var form1 = '\\d+'+ VARIABLES_pattern + '\\^' + even_exponent_pattern + '-\\d+' + even_exponent_pattern + '?' ;
var pattern1 = new RegExp(form1); 

if (an_expression.match(pattern1)==an_expression){
	return  true;
	}
else {return false;}
}




