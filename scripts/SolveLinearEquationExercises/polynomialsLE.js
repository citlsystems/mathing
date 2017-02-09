function LEOLDgetTerms(latex_multivar_polynomial){ 
/*
Finds the terms of a polynomial
MUST HAVE NO nested polynomials. i.e. If there is a bracketed expression, the number of terms in
the bracketed expression must be 1. 
input format: polynomial of  the form sigma(Kxi^ni), K in Q, x_i from the set ALL_VARS, n_i in Q

output: an array of the terms of the polynomial, with sign of each term shown in front (including positives)
example:	input:	-x^2yz-(-81xy)+xy^5z
			output:	[-x^2yz-(-81xy)+xy^5z, -x^2yz, -(-81xy), +xy^5z]
*/

var expression = latex_multivar_polynomial;
var a = new Array(); 
var array_of_terms = new Array();

var termpattern = new RegExp('(' + CONSTTERM_pattern + '|' + VARTERM_pattern + ')', 'g'); 
termpattern.lastIndex = 0;

expression = expression.replace(/\s/g,'');

do {
    a = termpattern.exec(expression);
    if (a){
        array_of_terms.push(a[0]);
		termpattern.lastIndex = termpattern.lastIndex-1;
		}
	} while (a);

return array_of_terms; 
}

function LEgetTerms(latex_multivar_polynomial){
var expression = latex_multivar_polynomial;

var array_of_terms = new Array();

var termpattern = new RegExp('(([+\\-]?' + SIMPLE_COEFF + '(?=[+\\-=]|$))|(' + VARTERM_pattern + '))', 'g'); 

if (termpattern.test(expression)){
	array_of_terms = expression.match(termpattern);
	}
else {
	array_of_terms = [''];
	}
return array_of_terms;
}


/* Rearranges the terms of a polynomial equation, randomly switching (or not) terms from one side to another. 
The output equation is equivalent to the input equation */
function LErearrangePolynomialEquation(polynomialEquationPAR){
var eqn = polynomialEquationPAR;

//need to add in a test here to know that the input is valid
//ok for now because just using it to generate examples so I control the input

var lhs = eqn.split('=')[0]; 
var rhs = eqn.split('=')[1];
var newleft=''; var newright='';

var terms_left = LEgetTerms(lhs);  
var terms_right = LEgetTerms(rhs); 

var left_counter = new Array(terms_left.length);
var right_counter = new Array(terms_right.length);

for (var i=0; i< terms_left.length; i++){
	left_counter[i] = LEposORneg1();
	}
	
for (var i=0; i< terms_right.length; i++){
	right_counter[i] = LEposORneg1();
	}	
	
for (var i = 0; i<terms_left.length; i++){
	if (left_counter[i] == 1){
		newleft += '+(' + terms_left[i]+')';
		}
	if (left_counter[i] == -1) {
		newright += '-('+terms_left[i]+')';  //change to \left after you get this working
		}
	}

for (var i = 0; i<terms_right.length; i++){
	if (right_counter[i] == 1){
		newright += '+('+terms_right[i]+')';
		}  
	if (right_counter[i] == -1) {
		newleft += '-('+terms_right[i]+')';  //change to \left after you get this working
		}
	}

if (newleft == ''){newleft = '0';}
if (newright == ''){newright = '0';}	

newleft = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(newleft));
newright = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(newright));


newleft = LEcombineLikeTerms(newleft);
newright = LEcombineLikeTerms(newright);	

eqn = newleft + '=' + newright ;
eqn = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(eqn));

return eqn;
}


function LEdegreeOfPolynomial(polyPAR){
var degree = 0; 

//if polyPAR is not a polynomial return -1

var terms = LEgetTerms(polyPAR);

for (var i = 0; i<terms.length; i++){
	if (LEdegreeOfMonomial(terms[i]) > degree){
		degree = LEdegreeOfMonomial(terms[i]); 
		}
	}
return degree; 
}


function LEgetLeadingCoeff(polynomialORequation){
//returns the integer or fraction that is the leading coeff
var lead_pattern = '^(([+\\-]\\s*)?' + SIMPLE_COEFF_pattern+')(?=[xyzw])';
var lead_regex = new RegExp(lead_pattern);
var x = 1; //CAREFUL HERE: ASSUMING IF lead_pattern doesn't match, then coeff must be 1.  Is this really true?
if (polynomialORequation.match(lead_regex) !== null){
	x = polynomialORequation.match(lead_regex)[0];  console.log('leading coefficient: ', x);
	}
return  x; 
}

function LEgetCoeffsOfTerms(latex_multivar_polynomial){
/* *******************************************************	
Inputs a latex multi-variable polynomial in ALL_VARS and 
returns an array of the coefficients of each term, read 
from left to right. 
Input syntax:  SIGMA [+/-]\d+[xyzwabcd]^n*
sample input: -9+25xy^6z+25^4yz^5+(-25x^3z)-125xyz-5
sample output: [-9, +25,+25,-25, -125, -5]
********************************************************* */
var termcoeffis1 = new RegExp('\\'+'+'+VARIABLES_pattern,'g');
var coeff1atstart = new RegExp('^' + VARIABLES_pattern,'g');
//var termisconstant = new RegExp('^[+\\-]?\\d+[+\\-]','g');
var termisconstant = new RegExp(CONSTTERM_pattern,'g');
var termcoeffisneg1 = new RegExp('-(?='+VARIABLES_pattern+')','g');
var non1coeffs = new RegExp('([+\\-]|^)' + '(((?=[^t])\\()|\\\\left\\()?(' + ALL_COEFF_patterns+'(((?=[^t])\\))|\\\\right\\))*)+'+'(((?=[^t])\\))|\\\\right\\))*', 'g');
//'((\\d+)?\\(?[+\\-]?)?' + ALL_COEFF_patterns+'\\)?)+', 'g');

var blah = latex_multivar_polynomial;
var theterms = LEgetTerms(blah);


for (var i=0; i < theterms.length; i++){
	theterms[i] = theterms[i].replace(/\s/g,'');
	}

var thecoeffs = new Array();

for (var i = 0; i < theterms.length; i++){
	
	if (non1coeffs.test(theterms[i])){
		thecoeffs[i] = theterms[i].match(non1coeffs)[0];
		non1coeffs.lastIndex=0;}		
	else if (termcoeffisneg1.test(theterms[i])){
		thecoeffs[i] = '-1';
		termcoeffisneg1.lastIndex=0;}
	else if (termcoeffis1.test(theterms[i])){
		thecoeffs[i] = '1';
		termcoeffis1.lastIndex=0;}
	else if (coeff1atstart.test(theterms[i])){
		thecoeffs[i] = '1';
		coeff1atstart.lastIndex=0;}
	else if (termisconstant.test(theterms[i])){
		thecoeffs[i] = theterms[i].match(termisconstant)[0];
		termisconstant.lastIndex=0;}
	//else {thecoeffs[i]='cannot read coeff';}
	
	//Need to fix bracket closure that may have been lost when var part was chopped off:
	if (thecoeffs[i].match(/\(/g)!=null){
		var num_open_brackets = thecoeffs[i].match(/\(/g).length;
		var num_close_brackets = 0;
		if (thecoeffs[i].match(/\)/g)!=null) {num_close_brackets = thecoeffs[i].match(/\)/g).length;}
		for (var k=0; k < (num_open_brackets - num_close_brackets) ; k++){
			thecoeffs[i] = thecoeffs[i]+')';
			}
		}
	}

	

	
return thecoeffs;
}


function LEgetVarPartOfTerms(latex_multivar_polynomial){
var expression = latex_multivar_polynomial;
var myterms = LEgetTerms(expression);

for (var i=0;i<myterms.length; i++){
	myterms[i] = myterms[i].replace(/\s/g,'');
	}
// *******************************************************
// NEXT FIND ARRAY OF VARIABLE PARTS OF EACH TERM
var varterms = new Array();	
var varpart = new RegExp('((\\\\left\\(|\\()*' + ALL_VAR_patterns+'(\\\\right\\)|\\))*)+','g');

for (var i =0; i < myterms.length; i++){
	if (!myterms[i].match(varpart)){
		varterms[i] = '';}
	else {
		varterms[i] = myterms[i].match(varpart)[0];}
	}
	
for (var i=0; i<varterms.length;i++){
	if (varterms[i].match(/\(/g)==null){
		varterms[i] = varterms[i].replace(/\)/g,'');
		}
	}
	
return varterms;
}


function LEcombineLikeTerms(latex_multivar_polynomial){ 
var expr = latex_multivar_polynomial;
 
var terms = LEgetTerms(expr); 
var coeffs = LEgetCoeffsOfTerms(expr);  
var varpiece = LEgetVarPartOfTerms(expr); 

var combinedcoeff = new Array();
var combinedvarpiece = new Array();
var index = 0;

var alreadyCaughtTerm = new Array(terms.length);
	for (var i=0; i<alreadyCaughtTerm.length; i++){
		alreadyCaughtTerm[i] = false ;
		}


for (var j=0; j < terms.length;j++){
	if (!alreadyCaughtTerm[j]) {
		combinedcoeff[index] = coeffs[j];
		combinedvarpiece[index] = varpiece[j];
		for (var i=j+1; i < terms.length; i++){
			if (varpiece[i]==varpiece[j]){
				combinedcoeff[index] += '+('+coeffs[i]+')';
				alreadyCaughtTerm[i] = true;			
				}
			}
		index++;		
		}		
	}
var new_expression = '';

for (var i=0; i<combinedcoeff.length; i++){
	new_expression += '+('+eval(combinedcoeff[i]).toString()+')'+combinedvarpiece[i];
	}
	
return new_expression;
}

function LEcompareDegree(term1, term2){
	var term1degree = LEfindExponentEachVarInPolynomialTerm(term1);  
	var term2degree = LEfindExponentEachVarInPolynomialTerm(term2);
			
	var sum1 = 0; var sum2 = 0;
	for (var i=0; i < ALL_VARS.length; i++){
		sum1 += term1degree[i];   	
		sum2 += term2degree[i];		
		}
	if (eval(sum1) > eval(sum2)){return -1;}
	if (eval(sum1) < eval(sum2)){return +1;}
	if (eval(sum1) == eval(sum2)){
		for (var j=0;j<ALL_VARS.length;j++){
			if (term1degree[j] > term2degree[j]){
				return -1; 
				}
			if (term1degree[j] < term2degree[j]){
				return 1; 
				}
			}
		}
return 1;	
}

function LEorderTerms(latex_multivar_polynomial){
var ordered = latex_multivar_polynomial; 
var terms =  LEgetTerms(ordered);  
	
	
		
terms.sort(LEcompareDegree);
ordered = '';
for (var i=0;i<terms.length;i++){
	ordered += '+('+terms[i]+')';
	}

ordered = LEfirstLevelTidyTerms(ordered);	

return ordered;
}	

/*returns the gcd of the coeffs of the polynomial, with sign*/
function LEcoeffGCDWithLeadingSign(polynomialPAR){
var poly = polynomialPAR; 
var coeffarray = LEgetCoeffsOfTerms(poly); 
var x = 1;

x = eval(LEreplaceLatexBrackets(LEreplaceLatexFracs(coeffarray[0])));
var sign = signPM1(x);

for (var i = 1; i < coeffarray.length; i++){
	x = LEgcd(eval(LEreplaceLatexBrackets(LEreplaceLatexFracs(coeffarray[i]))), x);
	}

return sign*x;
}


function LEpolynomialGCD(latex_multivar_polynomial){
/*returns the GCD of the terms of a multi-variable polynomial of any degree
input: 
output:
*/

var expression = latex_multivar_polynomial;

var terms = new Array();
terms = getTerms(expression);
terms.shift();

var coeffs = new Array();
coeffs = getCoeffsOfTerms(expression);

var varpartofterms = new Array();
varpartofterms = getVarPartOfTerms(expression);

//***************************************
// FIND GCD OF ABS VAL OF COEFFS
var coeff_gcd = Math.abs(parseInt(coeffs[0], 10));
for (var i=1; i<coeffs.length;i++){
	coeff_gcd = gcd(coeff_gcd, Math.abs(parseInt(coeffs[i],10)));
	}
	

/* ***************************************************

look at the first term.  Find all exponents on x in that 
term and add them together. Look at the next term and do
the same thing, and save the minimum of the two sums. 

1=x, 2=y 3=z 4=w 5=a 6=b 7=c 8=d
***************************************************** */

var varexps = new Array(ALL_VARS.length); //to store the exponents on the vars of the gcd

for (var i=0; i<ALL_VARS.length;i++){
	varexps[i] = new Array(varpartofterms.length);
	}


//for (var i=0; i < ALL_VARS.length; i++){

var matchpatterna = new RegExp('x(?!\\^)','g');
var matchpatternb = new RegExp('x\\^\\{([+\\-]?\\d+)\\}','g');
var matchpatternc = new RegExp('x\\^(\\d+)','g');


varexps[0][0] = '0';
for (var j=0; j<varpartofterms.length; j ++){
var matcha, matchb, matchc = ''; var a,b,c = new Array();
	
	do {
		var a = matchpatterna.exec(varpartofterms[j]);
		if (a){
		matcha+= '+1';} //counts the number of x^1 in the term
		if (!a){matcha += '+0';}
		} while (a);
		
	do {
		var b = matchpatternb.exec(varpartofterms[j]);
		if (b){
		matchb += b[1] ;}
		if (!b){matchb += '+0';}
		}	while (b);
		
	do {
		var c = matchpatternc.exec(varpartofterms[j]);
		if (c){
		matchc += c[1] ;}
		if (!c){matchc += '+0';}
		}	while (c);
		
	varexps[0][j] = matcha + matchb + matchc + '\\^<br>';
	}
	

	
var testvar = varexps[0];


return testvar; 

}

function LEdetectMonomialSign(latexterm){ //returns + or - as a string
var sign; 
var term;

term = latexterm;
term = term.replace(/\^\{[^{}]+\}/g, ""); //strip out exponents that might have -'s

if (term.match(/-/)){
	if (term.match(/-/g).length % 2 ==1){sign = "-";}
	else {sign = "+";}
	}
else {sign = "+";}

return sign;
}

