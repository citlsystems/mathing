/*Functions called to generate a random latexed linear equation
STEVE -> Main function to be called is "LErandomLinearLaTeXEquation()"
*/
 
 
//used to generate random input
//called in ...


function LErandomLinearEquation() {
/*
This is the new function developed for the first integrated demo, submitted Monday Apr. 6

NAME SHOULD BE CHANGED TO LErandomNiceLinearTexEquation()

Specifications: 
generates a linear equation with two terms either side 80% of the time. 
generates a linear equation with 2 or 3 terms either side.

Coefficients will be integer 80% of the time

Form ax+b = cx+ d  most of the time, but mix it up every now and then


Heuristic:
- get a nice set of coefficients
- generate eqn according to desired form using the nice coeffs
*/


var equation;
var variables = ['x','y','w','z'];

var coeffset = LErandomSetOfNiceCoeffs() ; //generate a set of coefficients with which to build the equation.  Generated to create more common factors between terms so that more factoring can be practiced. 

var coeffset2 = [];   //to produce a random set of coefficients, so students have practice with non-'nice' equations. 
for (var i=0; i < 20; i++){
	coeffset2[i] = Math.ceil(15 * Math.random()) + 1;
	}

	
	
//determine type of equation to generate: 
var eqn_form = Math.random()*100 ; 
/*
1. 0          <= eqn_form < threshold1: Ax+B=Cx+D, integer coefficients
2. threshold1 <= eqn_form < threshold2: Ax+B=Cx+D, rational coefficients
3. threshold2 <= eqn_form < threshold3: same as 1., but with possible extra term on either side
4. threshold3 <= eqn_form < threshold4: same as 2., but with possible extra term on either side, and maybe different variable than 'x'
*/


//the thresholds define the distribution of 4 different classes of linear equation being returned, described just above.
var threshold1 = 50 ; //random integer coefficients, two terms each side
var threshold2 = 70 ; //nice rational coefficients, two terms each side
var threshold3 = 85 ; //random integer coefficients, 2-4 terms either side
var threshold4 = 100 ; //might use y,z, or w as the var instead of x, random coeffs, 2-4 terms per side, rational coeffs

//var_parameter, terms_parameterL, terms_parameterR, coeffset_parameter

if (0 <= eqn_form && eqn_form < threshold1){ 
	equation = LErandNiceIntLinTexEq2('x', 2, 2, coeffset2);
	equation = LEfirstLevelTidyTerms(equation);
	}

else if (threshold1 <= eqn_form && eqn_form < threshold2){	
	equation = LErandNiceRatLinTexEq('x', 2, 2, coeffset);
	equation = LEfirstLevelTidyTerms(equation);
	}
	
else if (threshold2 <= eqn_form && eqn_form < threshold3){		
	var numtermschoices = [2, 3, 4] ;
	equation = LErandNiceIntLinTexEq2('x', numtermschoices[Math.floor(numtermschoices.length*Math.random())], numtermschoices[Math.floor(numtermschoices.length*Math.random())], coeffset);
	}
	
else if (threshold3 <= eqn_form && eqn_form <= threshold4){		
	var use_var = variables[Math.floor(variables.length*Math.random())] ; //randomly pick a variable
	var numtermschoices = [2, 3, 4] ;
	equation = LErandNiceRatLinTexEq(use_var, numtermschoices[Math.floor(numtermschoices.length*Math.random())], numtermschoices[Math.floor(numtermschoices.length*Math.random())], coeffset);
	}


	
return equation;	
	
}


function LEplusORminus(){ //returns a + or - character
	if (LEcoinflip()==0) {return "+" ;}
	else {return "-";}
}

//used to generate random input
function LErandomSign() {//returns +,-, or blank (implied +)
var x = Math.floor(Math.random()*3);
switch(x) {
case 0: return "+";
case 1: return "-";
case 2: return "";} 
}

//returns 0 or 1
function LEcoinflip(){ 
	if (Math.random() < 0.5) 
		{return 0;}
	else 
		{return 1;}
}


function LErandomSetOfNiceCoeffs(){
//generate an array of nice numbers to use in generating expressions
var a = new Array();
var numsets = 8;
var degree = 2;

for (var i=0; i < numsets; i++){
	a[i] = new Array();
	}

//a[0]: 1 to 10
for (var i=0; i < 10; i++){
	a[0][i] = i+1;
	}
	
//a[1]: non-primes up to 25
a[1] = [1,4,6,8,9,10,12,14,15,16,18,20,21,22,24,25];	
	
//a[2]: powers of 2
for (var i=0; i <= degree; i++){
	a[2][i] = Math.pow(2,i+1);
	}

//a[3]: powers of 3
for (var i=0; i <= degree; i++){
	a[3][i] = Math.pow(3,i+1);
	}

//a[4]: divisible by 2 and 3
a[4] = [6,12,18,24,36,48,60,72];
a[4] = a[4].concat(a[2],a[3]);

//a[5]: powers of 5
for (var i=0; i <= degree; i++){
	a[5][i] = Math.pow(5,i+1);
	}
	
//a[6]: lots of common divisors
a[6] = [6,12,18,24];

//a[7]: lots of common divisors
a[7] = [6,12,18,24];
	
var flag = Math.floor(numsets*Math.random());
return a[flag]; 
}

function LErandomNiceIntegerCoeff(){

var aset = LErandomSetOfNiceCoeffs();
return aset[Math.floor(LErandomNum(aset.length))];
}

/*used to generate random input. Returns a random integer or 
rational number, using numbers from 0 to maxIntVal */
function LErandomCoeff(maxIntVal){
var z = Math.floor(LErandomNum(2));
var y = "";

switch(z){
case 0: 
	y = Math.ceil(LErandomNum(maxIntVal)).toString();
	break;
case 1: 
	y = "\\frac{"+randomSign()+Math.floor(LErandomNum(maxIntVal)).toString() + "}{"+Math.ceil(LErandomNum(maxIntVal)).toString()+"}" ;
	break;
}
return y;
}

/*used to generate random input. Returns a random constant or x term with coefficients 
generated using randomCoeff(), above. Return value is a string. */
function LErandomTerm(maxIntVal){ 
var x, a,b,c,d,e;

if (LEcoinflip()){a="("; e=")";b = LErandomSign();} else {a=""; b = ""; e="";}
c = LErandomCoeff(maxIntVal);
if (coinflip()){d="x"} else {d="";}

x = a+b+c+d+e;
return x;
}

//STEVE
function LErandomNiceIntegerTerm(){
var x, a,b,c,d,e;

if (LEcoinflip()){a="("; e=")";b = LErandomSign();} else {a=""; b = ""; e="";}
c = LErandomNiceIntegerCoeff();
if (LEcoinflip()){d="x"} else {d="";}

x = a+b+c+d+e;
return x;
}

function LErandomNiceRationalTerm(varParameter){
//generates a linear term in the variable varParameter, with rational coefficients
var x,a,b,numerator, denominator,d,e;

//first decide if the term will be bracketed, and if so, what sign (if any) will be inside the brackets
if (LEcoinflip()){
	a="("; e=")";b = LErandomSign();  
	} 
else {
	a=""; b = ""; e="";
	}

//next, randomly generate the non-signed part of the coefficient
var array_of_numbers = LErandomSetOfNiceCoeffs(); //just helps to make the coefficients look nicer to deal with
array_of_numbers = LEshuffleArray(array_of_numbers);

numerator = array_of_numbers[0];
denominator = array_of_numbers[1];

//next decide if the term will be a linear term or a constant term
if (LEcoinflip()){
	d=varParameter;
	} 
else {d='';}


x = a+b+'\\frac{'+numerator+'}{'+denominator+'}'+d+e;
return x;
}

//Generates the latex line of the equation for the user to solve -STEVE
function LErandNiceIntLinTexEq(){

var maxInt = 20; //prompt('Enter max integer value:', 20);
var numTermsL = LErandomNum(5); //prompt('Enter number of terms to appear on each side:', 3);
var numTermsR = LErandomNum(5);

var x=LErandomNiceIntegerTerm(); //left side of the equation
var y=LErandomNiceIntegerTerm(); //right side of the equation
var z = "";

for (var i=1; i < numTermsL; i++){
x = x + LEplusORminus() +LErandomNiceIntegerTerm();
}
for (var i=1; i < numTermsR; i++){
y = y + LEplusORminus() +LErandomNiceIntegerTerm();
}

z = x + "=" + y;
return z;
}

//
function LErandNiceRatLinTexEq(varParameter){

var maxInt = 20; //prompt('Enter max integer value:', 20);
var numTermsL = LErandomNum(5); //prompt('Enter number of terms to appear on each side:', 3);
var numTermsR = LErandomNum(5);

var x=LErandomNiceRationalTerm(varParameter); //left side of the equation
var y=LErandomNiceRationalTerm(varParameter); //right side of the equation
var z = "";

for (var i=1; i < numTermsL; i++){
x = x + LEplusORminus() +LErandomNiceRationalTerm(varParameter);
}
for (var i=1; i < numTermsR; i++){
y = y + LEplusORminus() +LErandomNiceRationalTerm(varParameter);
}

z = x + "=" + y;
return z;
}


/*used to generate random latex line of a linear equation. Should
be like what the app would pass over for analysis*/
function LErandLinTexEq(){

var maxInt = 20; //prompt('Enter max integer value:', 20);
var numTermsL = LErandomNum(5); //prompt('Enter number of terms to appear on each side:', 3);
var numTermsR = LErandomNum(5);

var x=LErandomTerm(maxInt); //left side of the equation
var y=LErandomTerm(maxInt); //right side of the equation
var z = "";

for (var i=1; i < numTermsL; i++){
x = x + LEplusORminus() +LErandomTerm(maxInt);
}
for (var i=1; i < numTermsR; i++){
y = y + LEplusORminus() +LErandomTerm(maxInt);
}

z = x + "=" + y;
return z;
}

function LErandomExponent(maxexp){
var exponent = "";
var flag = LEcoinflip();

if (flag){exponent = "";} //exponent on variable will be 1, so return empty string
else {exponent = "^" + Math.ceil(randomNum(maxexp)).toString();}

return exponent;
}

//CALLED TO GEN RAND RAT EXP
function LErandomLatexIntTerm(coeffarray, numvars){

var term; var exp;

var coeff = coeffarray[Math.floor(coeffarray.length*Math.random())];

if (coeff==1){coeff="";}

term = LErandomSign() + coeff.toString();

for (var i=0; i<numvars; i++){
	exp = LErandomExponent(MAX_EXP);
	if (exp=="^1"){exp="";}
	if (Math.random()>0.1){
		term += ALL_VARS[i] + exp;
		}
	}

if (term == ''){  //in case an empty term is generated
	term = '1';
	}
	
return term;

}

function LEinsertBrackets(stringratexp){
var x = stringratexp;

x = x.replace(/\+\+/g, "+");
x = x.replace(/-\+/g, "-");
x = x.replace(/\+-([^+\-()]+)/g, "+(-$1)");
x = x.replace(/--([^+\-()]+)/g, "-(-$1)");


return x;
}

function LErandomRationalExp(termsNumerator, termsDenominator) {
var numerator=""; var denominator=""; var ratexp="";
var cA = new Array(); cA = LErandomSetOfNiceCoeffs();

numerator = randomLatexIntTerm(cA,NUM_VARS) ;
for (var i=1; i<termsNumerator; i++){
	numerator += LEplusORminus() + LErandomLatexIntTerm(cA,NUM_VARS) ;
	numerator = LEinsertBrackets(numerator);
	}

if (termsDenominator==0){ratexp = numerator;}

if (termsDenominator>0) {
	denominator = LErandomLatexIntTerm(cA,NUM_VARS);
	for (var i=1; i<termsDenominator; i++){
		denominator += LEplusORminus() + LErandomLatexIntTerm(cA,NUM_VARS);
		denominator = LEinsertBrackets(denominator);
		}

	ratexp = '\\' + 'frac{' + numerator + "}{" + denominator + "}" ; 
	}
return ratexp;
}

function LErandomDelimited(){
var x = Math.floor(Math.random()*5);
var y;
if (x==0){
y = '(5 - ((12x + (-22)xy - (-32)x^2y^{-3}) + \\frac{-4}{-3}xy - (-\\frac{-525}{4})x^2yz^2))';
}
if (x==1){
y = '((5 - (-32)x^2y^{-3}) + \\frac{-4}{-3}xy - (-\\frac{-525}{4}x^2yz^2 - \\frac{+726}{+44}x^2yz^2)) +\\left(\\frac{9^4}{(-8)^{-25}}+2\\right)';
}
if (x==2){
y = '(5 - (12x + (-22)xy) - (-32)x^2y^{-3} - (-\\frac{-525}{4})x^2yz^2 + \\frac{62^3}{(-62)^5} - \\frac{+726}{+44}x^2yz^2 +\\left(\\frac{9^4}{(-8)^{-25}}\\right) )';
}
if (x==3){
y = '000+ (111(22+(32+33223)+(3334354+234(4442+343)))+1113)+0000';
}
if (x==4){
y = '00 + (11 + (22 + (33 + (44 + (55 + 55) + (55 - 55) - 44) - (44 - 44)) - (33 - 33) + 22) - (11(22+22))) - 00 + (11- 11)';
}
return y;
}