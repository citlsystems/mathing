/*

FUNCTION:  getFeedbackBarMsg(enter builder string here) <-- returns string to put in the feedback bar

Sample input for error analysis and feedback functions:
14x-2x&=11-8x\\[1mm]16x&=11-8x\\[1mm]32x&=11\\[1mm]x&=\frac{11}{32} 

Primary functions: 
1.  storeLinesLE() will input the string concatEquationItems from Steve's
builder, and use the \\[1mm] to mark the boundaries of the equations entered
thus far.  It will return an array for which the 0th entry is the original
equation given to the student, and the ith entry is the ith equation entered
by the user. 

NOTE2SELF:  If this process is called every time new line is selected, then
considered what should be kept track of ... may be able to use previous work
to simplify the current step...

2. equationLP() takes as input a linear equation from the builder. It outputs
a new equation object with various properties which can be used to determine what
kind of feedback to give the student.

*/

/*  ERROR FLAG FUNCTIONS AND ERROR MESSAGES FOR THE FEEDBACK BAR APPEAR BELOW HERE:
eqn1 = previous equation
eqn2 = current equation

Error codes: 
0 = new equation has a different solution than old.
1 = equation imbalanced by action on the right side involving constant terms
2 = equation imbalanced by action on the left side involving constant terms
3 = equation imbalanced by action on the left side involving variable terms
4 = equation imbalanced by action on the right side involving variable terms 
5 = no changes made. previous and current are equivalent 
6 = possible shift of a term from left to right forgetting to change sign
7 = possible shift of a term from right to left forgetting to change sign

*/



//------------ERROR AND ENCOURAGEMENT MESSAGES-----------
//the error messages to be displayed in the feedback bar (GLOBAL)
errormsg = new Array(8);
errormsg[0] = 'Hmm... something is not right.';
errormsg[1] = 'You\'ve unbalanced the equation! Did you add or subtract a constant from the right side, but not the left?';
errormsg[2] = 'You\'ve unbalanced the equation! Did you add or subtract a constant from the left side, but not the right?';
errormsg[3] = 'You\'ve unbalanced the equation! Did you add or subtract a variable term from the left side, but not the right?';
errormsg[4] = 'You\'ve unbalanced the equation! Did you add or subtract a variable term from the right side, but not the left?';
errormsg[5] = 'No changes made.';
errormsg[6] = 'Did you move a term from the left side to the right side? Don\'t forget to reverse the sign.';
errormsg[7] = 'If you shifted a term from the right side to the left, remember you have to change the sign.';

var numflags = errormsg.length;

//the encouragement messages to be displayed when student is proceeding correctly (GLOBAL)
encouragement = new Array(5);
encouragement[0] = "Good work! Keep going!";
encouragement[1] = "Awesome! You're doing great!"; 
encouragement[2] = "Radical dude!"; 
encouragement[3] = "How'd you get so good at this?";
encouragement[4] = "You are a solving master. I bow to you.";


var errorflag = new Array(numflags); //GLOBAL VAR
//sets all error flags to false
function LErefreshErrorFlags() {
for (var i=0; i< errorflag.length; i++){
	errorflag[i] = false; }
}

LErefreshErrorFlags(); //initialize the error array
//-------END E&M MNESSAGES--------------------------------------------------



/* getFeedbackBarMsg Generates the appropriate string to be displayed in the FEEDBACK BAR.  
NOTE: currenteqnPAR & previouseqnPAR are NOT strings - they are 
objects created by equationLP() 

NOTE: builderPARAMETER should be:
 <original equation> + '\\\\[1mm]' + <string from builder panel> 
*/
function LEgetFeedbackBarMsg(builderPARAMETER) {
var currenteqnPAR, previouseqnPAR;
var message = "";
var allgoodflag = true;

console.log(builderPARAMETER);
var builderStringPAR = builderPARAMETER.replace(/([^&])=/g, '$1&=');
console.log(builderStringPAR);

var arrayOfLines539 = LEstoreLinesLE(builderStringPAR) ; 
console.log(arrayOfLines539);
var i = arrayOfLines539.length; 
previouseqnPAR = arrayOfLines539[i-2]; console.log(previouseqnPAR);
currenteqnPAR = arrayOfLines539[i-1] ;console.log(currenteqnPAR);

var previouseqnLP = new equationLP(previouseqnPAR); 
var currenteqnLP = new equationLP(currenteqnPAR);

LErefreshErrorFlags();

LEsetErrorFlags(currenteqnLP,previouseqnLP);

if (errorflag[0]==true){
	message +=  errormsg[0];}
	
if (errorflag[1]==true) {
	message += errormsg[1];}
	
if (errorflag[2]==true) {
	message +=  errormsg[2];}
	
if (errorflag[3]==true) {
	message +=  errormsg[3];}
	
if (errorflag[4]==true) {
	message += errormsg[4];}
	
if (errorflag[5]==true) {
	message +=  errormsg[5];}

if (errorflag[6]==true) {
	message +=  errormsg[6];}
	
if (errorflag[7]==true) {
	message += errormsg[7];}
	
for (var i = 0; i < errorflag.length; i++) { 
	allgoodflag = allgoodflag && !errorflag[i];
	}
if (allgoodflag) { 
	message += encouragement[Math.floor(Math.random()*encouragement.length)];
	}

return message; 
}


/*storeLinesLE inputs the lines of equation to be compared and stores 
them in an array, x.  x[0] should be the original equation. x[x.length-1] 
is the equation most recently entered by the user  */
function LEstoreLinesLE(aBuilderString){
var stevesString = aBuilderString ; 

var numberOfLines = stevesString.match(/&=/g).length ; 

/*---------------------
\\[1mm] are all characters that could possible be in
a linear equation.  Scan the input, find a character from a list of strange characters, 
replace \\[1mm] with some character that doesn't appear anywhere in the string. 
-----------------*/ 
strangeChars = ['#','o','~','@','h','%'];
for (var i=0; i<strangeChars.length; i++){
	if (stevesString.indexOf(strangeChars[i])== -1){
		var separator = strangeChars[i] ; 
		stevesString = stevesString.replace(/\\\\\[1mm\]/g,strangeChars[i]);  
		break;
		}
	var BADSTRING = stevesString ; 
	alert('Really bad luck with this string: ', BADSTRING);
	}
//--------------------------------------------------------------------------


var linearEquationPATTERN = '[^='+separator+']+=[^='+separator+']+';
var linearEquationREGEX = new RegExp(linearEquationPATTERN, 'g');

linearEquationREGEX.lastIndex = 0;
var x = [];
for (var i=0;i<numberOfLines; i++){
		x[i] = linearEquationREGEX.exec(stevesString)[0]; 
	}
	
for (i=0; i < x.length; i++){
	x[i] = x[i].replace(/&/g,''); //get rid of the &'s
	}	
return x;	
}

/* calculate() translates a string arithmetical expression to a number expression
and calculates the value of the expression */
function LEcalculate(stringexpression){  
    "use strict";
    var s= stringexpression;
    if(/[^0-9()*+\/ .-]+/.test(s)) throw Error('bad input...');
    try{
        var ans= eval(s);
    }
	//what does the following two lines do???? er?
    catch(er){
        alert(er.message);
    }
    return ans.toFixed(10);
}

/* varTermsLP returns an array of the variable term coefficients on the indicated
side of the equation */
function LEvarTermsLP(eqn,rightORleftSide){ 
var a; 
var eqnarray =new Array();
var side=0;

if (rightORleftSide == "left") {side = 0;}
if (rightORleftSide == "right") {side = 1;}

console.log('STRING PASSED TO LEvarTerms: ', eqn);
//should this be eqn.full??
a = eqn.split("=")[side]; console.log(a);
a = a.replace(/^(\d+)([^wxyz0-9])/g,'0'+'$2');  //set constant term at start to zero
a = a.replace(/([^0-9])(\d+)$/,'$1'+'0');  //set constant term at end to zero
a = a.replace(/([^0-9])(\d+)([^wxyz0-9])/g,'$1'+'0'+'$3'); console.log(a); //set constant terms to zero
a = a.replace(/([^\d])([wxyz])/g,'$1'+'1$2');  console.log(a); //replace a stand-alone variable by 1*var
a = a.replace(/[a-z]/g,""); console.log(a); //take variables out
a = a.replace(/\(|\)/g,"");  console.log(a); //remove brackets

a = LEfixDoubleSigns(a);
a = LEdumbMinusToPlus(a);
a = a.replace(/^\+/,'');
eqnarray = a.split("+") ; console.log('SHOULD BE ARRAY OF var coeffs: ', eqnarray); //make a an array of the variable coefficients


return eqnarray ;
}

/* constTermsLP returns an array of the constant coefficients on the indicated
side of the equation */
function LEconstTermsLP(eqn, rightORleftSide){ 

/* OLD VERSION 
var a;
var eqnarray = new Array();
var side=0;

if (rightORleftSide == "left") {side = 0;}
if (rightORleftSide == "right") {side = 1;}

a = eqn.split("=")[side] ;
a = a.replace(/\(\([^()]+\)x\)/g,"0");
a = a.replace(/\(|\)/g,"");
a = a.split("+") ;

eqnarray = a;

return eqnarray ;  */

var a; 
var eqnarray =new Array();
var side=0;

if (rightORleftSide == "left") {side = 0;}
if (rightORleftSide == "right") {side = 1;}

console.log('STRING PASSED TO LEconstTerms: ', eqn);
//should this be eqn.full??
a = eqn.split("=")[side]; console.log(a);
a = a.replace(/^([+\-]?\d*)([wxyz])/,'0');  //set var term at start to zero
a = a.replace(/(\d*[wxyz])/g,'0'); console.log(a); //set constant terms to zero

a = a.replace(/\(|\)/g,"");  console.log(a); //remove brackets

a = LEfixDoubleSigns(a);
a = LEdumbMinusToPlus(a);
a = a.replace(/^\+/,'');
eqnarray = a.split("+") ; console.log('SHOULD BE ARRAY OF CONSTANT coeffs: ', eqnarray); //make a an array of the variable coefficients


return eqnarray ;
}

//sums an array of fractions and/or integers, output is a string
function LEsumFractionArray(arr){  
var length = arr.length;  console.log('SUM FRACTION ARRAY ==' , 'length: ', length,'   ', 'ARRAY TO SUM:', arr);
var total = "0/1";
var entry = "0/1";

for (var i=0; i < length; i++){
	
	entry = LEconvert2frac(arr[i]); 
	total = LEsumFracs(total, entry);
	} 

return total;
}

//returns the solution of a Linear prepped equation as a string
function LEsolveEqnLP(eqn) {
var xcoeff; var constcoeff; var solution= "" ; 
console.log(eqn);

xcoeff = LEsubtractFracs( LEsumFractionArray(LEvarTermsLP(eqn,'left')),LEsumFractionArray(LEvarTermsLP(eqn,'right'))) ; //moves x's to the left side
 
constcoeff = LEsubtractFracs(LEsumFractionArray( LEconstTermsLP(eqn,'right') ),LEsumFractionArray(LEconstTermsLP(eqn,'left'))) ; //moves constants to the right side

solution = LEdivideFracs(constcoeff, xcoeff);

return solution;
}


/*----function equationLP()--------------
creates the equationLP object class - linear equations in 'prepared' form: 
        a sum of bracketed terms = a sum of bracketed terms  
note: negative terms have the form (-Kx), positive terms are like (Kx)	
So, this function creates a new object with various properties of the input
linear equation. The error analysis functions use these properties to deduce what error
the student might have made. */
function LEequationLP(someLinearEquation) {

/*---function redress()--------------------------
This function preps eqnstring by putting it in a standard form to make analysis easier. 
Returns the new equation as a string.  
redress() is required for equationLP().
Calls no other functions (only native js stuff).  
Terms are in the form: +((-?coeff)var?)
Sample entry string: 
{\begin{align}\frac{2}{5}x+\frac{4}{3}-\frac{4}{3}&=\frac{3}{2}-\frac{4}{3}-5+(-2)-(\frac{2}{4})\end{align}}
Sample output string: 
((2/5)x)+((4/3))+((-4/3))=((3/2))+((-4/3))+((-5))+((-2))+((-2/4))
*/
function LEredress(eqnstring116127) {
var x; 
x = eqnstring116127; 

//latex stuff and whitespace
x = x.replace(/\s/g, '');
x = x.replace(/\\left\(\\right\./g, '(');
x = x.replace(/\\left\.\\right\)/g,')');
x = x.replace(/^\{\\begin\{align\}/, "");
x = x.replace(/\\end\{align\}\}$/, "");
x = x.replace(/&/g,"");
x = x.replace(/\\\\\[\d+\w\w\]/g, "");
x = x.replace(/\s/g,"");

//rewrite fractions as (d/d)
x = x.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "($1/$2)");

//constant fractions appear as (d/d), variables with fractions as ((d/d)x)
x = x.replace(/\(\(([^)]+)\)\)/g, "($1)");
x = x.replace(/\(([^()]+)\)x(?=[^)])/g, "(($1)x)");

//add 1 coefficients
x = x.replace(/(\+|-|\(|=)x/g,"$11x"); //add 1 coeff
x = x.replace(/^x/, "1x");

//put brackets around integer terms
x = x.replace(/([-+=])(\d+)(x?)([-+=])/g, "$1(($2)$3)$4");
x = x.replace(/([-+=])(\d+)(x?)([-+=])/g, "$1(($2)$3)$4");
x = x.replace(/^(\d+)(x?)/, "(($1)$2)");
x = x.replace(/(\d+)(x?)$/, "(($1)$2)");

//rewrite subtractions as additions of negatives
x = x.replace(/\)-\(/g, ")+(-");
x = x.replace(/--/g, "+");
x = x.replace(/\+-/g, "-");
x = x.replace(/-\+/g,"-");

//write fractions with sign in numerator ??? 


//extraneous addition signs
x = x.replace(/\(\+(\d)/g, "($1");
x = x.replace(/^\+/, "");
x = x.replace(/=\+/,"=");

//need brackets around integer coeffs
x = x.replace(/\((-?\d+)x\)/g, "(($1)x)");

//move negative signs to inner coeff brackets
x = x.replace(/-\(([^()]+)\)/g, "(-$1)");
x = x.replace(/\(-\(/g, "((-");
x = x.replace(/-\(\(/g, "((-");
x = x.replace(/\(\+/g, "(");

//rewrite subtractions as additions of negatives
x = x.replace(/\)-\(/g, ")+(-");
x = x.replace(/--/g, "");

//double brackets around constant terms
x = x.replace(/(\([^()]+\))(\+|=|$)/g, "($1)$2"); 

return x; 
}

var eqnblah = LEredress(someLinearEquation); 

this.full = eqnblah ;  
this.solution = LEsolveEqnLP(eqnblah) ; 
this.leftside= eqnblah.split("=")[0]; 
this.rightside= eqnblah.split("=")[1]; 
this.numterms = eqnblah.split(/[=+]/).length;  
if (/\(\([^-()]+\)x?\)/.test(eqnblah)) 
	{this.numposterms = eqnblah.match(/\(\([^-()]+\)x?\)/g).length ;}
	else {this.numposterms = 0;}
if (/\(\(-[^()]+\)x?\)/.test(eqnblah)) 
	{this.numnegterms = eqnblah.match(/\(\(-[^()]+\)x?\)/g).length ;}
	else {this.numnegterms = 0;}

//Left hand side properties:
this.leftsidenumterms = eqnblah.split("=")[0].split("+").length ;
if (/\(\([^()]+\)\)/.test(eqnblah.split("=")[0]))
	{this.l_numconsts = eqnblah.split("=")[0].match(/\(\([^()]+\)\)/g).length}
	else {this.l_numconsts = 0;}
if (/\(\(-[^()]+\)\)/.test(eqnblah.split("=")[0]))
	{this.l_numnegconsts = eqnblah.split("=")[0].match(/\(\(-[^()]+\)\)/g).length; }
	else {this.l_numnegconsts = 0; }
if (/\(\([^()]+\)\)/.test(eqnblah.split("=")[0])) 
	{this.l_numposconsts = eqnblah.split("=")[0].match(/\(\([^()]+\)\)/g).length; }
	else {this.l_numposconsts = 0}
if (LEsumFractionArray(LEvarTermsLP(eqnblah,'left')))
	{this.l_sumvar = LEsumFractionArray(LEvarTermsLP(eqnblah,'left')) ;}
	else {this.l_sumvar = "0";}
if (LEsumFractionArray(LEconstTermsLP(eqnblah,'left')))
    {this.l_sumconst = LEsumFractionArray(LEconstTermsLP(eqnblah,'left')) ;}
	else {this.l_sumconst = "0";}
	
//Right hand side properties:
this.rightsidenumterms = eqnblah.split("=")[1].split("+").length ;
if (/\(\([^()]+\)\)/.test(eqnblah.split("=")[1]))
	{this.r_numconsts = eqnblah.split("=")[1].match(/\(\([^()]+\)\)/g).length}
	else {this.r_numconsts = 0;}
if (/\(\(-[^()]+\)\)/.test(eqnblah.split("=")[1]))
	{this.r_numnegconsts = eqnblah.split("=")[1].match(/\(\(-[^()]+\)\)/g).length; }
	else {this.r_numnegconsts = 0; }
if (/\(\([^()]+\)\)/.test(eqnblah.split("=")[1])) 
	{this.r_numposconsts = eqnblah.split("=")[1].match(/\(\([^()]+\)\)/g).length; }
	else {this.r_numposconsts = 0}
if (LEsumFractionArray(LEvarTermsLP(eqnblah,'right')))
	{this.r_sumvar = LEsumFractionArray(LEvarTermsLP(eqnblah,'right')) ;}
	else {this.r_sumvar = "0";}
if (LEsumFractionArray(LEconstTermsLP(eqnblah,'right')))
    {this.r_sumconst = LEsumFractionArray(LEconstTermsLP(eqnblah,'right')) ;}
	else {this.r_sumconst = "0";}
console.log(this);
}

//sums two string fractions and outputs a string fraction in lowest terms
function LEsumFracs(blah1,blah2){ 
var num, den, common, sumof, sign1, sign2, signsum, fraca, fracb;

console.log(blah1, blah2);

fraca = LEconvert2frac(blah1) || "1/1";
fracb = LEconvert2frac(blah2) || "1/1";

if (!fraca.match(/[-+]/)) {sign1 = 1;}
else if (fraca.match(/[-+]/) == "+") {sign1 = 1;}
else if (fraca.match(/[-+]/)== "-") {sign1 = -1;}
else {sign1 = 9999;}
 
if (!fracb.match(/[-+]/)) {sign2 = 1;}
else if (fracb.match(/[-+]/) == "+") {sign2 = 1;}
else if (fracb.match(/[-+]/)== "-") {sign2 = -1;}
else {sign2 = 9999;}

num = sign1*parseInt(fraca.match(/\d+/g)[0])*parseInt(fracb.match(/\d+/g)[1])+sign2*parseInt(fraca.match(/\d+/g)[1])*parseInt(fracb.match(/\d+/g)[0]) ; 
den = parseInt(fraca.match(/\d+/g)[1])*parseInt(fracb.match(/\d+/g)[1]);

common = LEgcd(num, den);
num = num/common;
den = den/common;

sumof = num.toString() + "/" + den.toString() ;
console.log(sumof);
return sumof;
}

//inputs a string whole number and outputs it as a string fraction over 1
function LEconvert2frac(intString){ 
var x = intString ; 

//EXPERIMENTAL LINE HERE!  CAREFUL!!!
if (x == ''){x = '0';} //if empty strings are getting passed into here, should be fixed elsewhere.  

if (!intString.match(/\//)){
	x = intString + "/" + "1"; return x;}
return x;
}

//subtracts two string fractions (frac1 - frac2) and outputs a string fraction in lowest terms
function LEsubtractFracs(frac1, frac2){
var num, den, sign;
var numa, munb, dena, denb, signa, signb, difference;
var fraca, fracb;

fraca=LEconvert2frac(frac1);
fracb=LEconvert2frac(frac2);

if (!fraca.match(/[-+]/)) {signa = 1;}
else if (fraca.match(/[-+]/) == "+") {signa = 1;}
else if (fraca.match(/[-+]/)== "-") {signa = -1;}
else {signa = 9999;}
numa = parseInt(fraca.match(/\d+/g)[0]);
dena = parseInt(fraca.match(/\d+/g)[1]);

if (!fracb.match(/[-+]/)) {signb = 1;}
else if (fracb.match(/[-+]/) == "+") {signb = 1;}
else if (fracb.match(/[-+]/)== "-") {signb = -1;}
else {signb = 9999;}
numb = parseInt(fracb.match(/\d+/g)[0]);
denb = parseInt(fracb.match(/\d+/g)[1]);

num = signa*numa*denb - signb*numb*dena;
den = dena*denb;

difference = num.toString() + "/" + den.toString();

difference = LEreduceFraction(difference);

return difference;
}


//inputs dividend and divisor as strings. Outputs dividend divided by divisor as a string.
function LEdivideFracs(dividend, divisor){
var reciprocal, sign, quotient;

if (!divisor.match(/-/)) {sign = "";}
else if (divisor.match(/-/)) {sign = "-";}
else {sign1 = 9999;}

reciprocal = sign + divisor.match(/\d+/g)[1] + "/" + divisor.match(/\d+/g)[0];

quotient = LEmultiplyFracs(dividend, reciprocal);
quotient = LEreduceFraction(quotient);

return quotient;
}


//inputs a string fraction. Outputs reduced fraction as a string.
function LEreduceFraction(blah){
var a,b,c, d;
a = parseInt(blah.match(/\d+/g)[0]);
b = parseInt(blah.match(/\d+/g)[1]);
 
c = LEgcd(a,b); 
a = a / c ; 
b = b / c ; 

if (blah.match(/-/)){d= "-";} else {d = "";}

z = d + a.toString() + "/" + b.toString()  ;
return z;
}


//inputs two string fractions, outputs their product in lowest terms as a string fraction.
function LEmultiplyFracs(arg1, arg2){
var num, den, sign, product, common; 

num = parseInt(arg1.match(/\d+/g)[0])*parseInt(arg2.match(/\d+/g)[0]) ; 
den = parseInt(arg1.match(/\d+/g)[1])*parseInt(arg2.match(/\d+/g)[1]);
common = LEgcd(num, den);

num = num/common;
den = den/common;

if ((arg1.match(/[-+]/)!= "-" && arg2.match(/[-+]/)!= "-") || 
    (arg1.match(/[-+]/)== "-" && arg2.match(/[-+]/)== "-")) {
	sign = "+";
	}
else {sign = "-"} 
	
product = "(" + sign + num.toString() + "/" + den.toString() + ")" ;
return product;
}

//inputs two string fractions. Outputs boolean true if they are equivalent, false otherwise. 
function LEequivalent(arg1, arg2) {
//tests if two strings of the form /\([-+]?\d+/\d+\)/ are equivalent fractions
var x = LEreduceFraction(arg1);
var y = LEreduceFraction(arg2);

var signsmatch = false;

if ((arg1.match(/[-+]/)!= "-" && arg2.match(/[-+]/)!= "-") || 
    (arg1.match(/[-+]/)== "-" && arg2.match(/[-+]/)== "-")) {
	signsmatch = true; }

if (x.match(/\d+/g)[0]==0 && y.match(/\d+/g)[0]==0) { //both fractions are 0
	return true;}
else if ((x.match(/\d+/g)[0]==y.match(/\d+/g)[0])&&
	(x.match(/\d+/g)[1]==y.match(/\d+/g)[1])&&
	signsmatch){
	return true;}
else {
	return false;}
}

//used to generate random input - called in multiple .js files
function LErandomNum(x) {//returns a random number from the interval [0,x)
	return Math.random()*x ;
}

//Gets the greatest common divisor of numbers a and b. Returns a number.
function LEgcd(p, q) {
var a = Math.abs(p);
var b = Math.abs(q);
    if ( !b) {
        return a;
    }
    return LEgcd(b, a % b);
};


/*function to determine if any errors from the previous line (eqn2) to the 
/ current line (eqn1) are detectable. NOTE: eqn1 and eqn2 are objects defined by
 LEequationLP(), and NOT strings  */
function LEsetErrorFlags(eqn1, eqn2){

if (!LEequivalent(eqn1.solution,eqn2.solution)){
	errorflag[0]= true;}

if ( (eqn1.l_sumvar == eqn2.l_sumvar) &&
	 (eqn1.l_sumconst == eqn2.l_sumconst) &&
	 (eqn1.r_sumvar == eqn2.r_sumvar) &&
	 (eqn1.r_sumconst != eqn2.r_sumconst) )
	 {errorflag[1] = true;} //right side constant change

if ( (eqn1.l_sumvar == eqn2.l_sumvar) &&
	 (eqn1.l_sumconst != eqn2.l_sumconst) &&
	 (eqn1.r_sumvar == eqn2.r_sumvar) &&
	 (eqn1.r_sumconst == eqn2.r_sumconst) )
	 {errorflag[2] = true;} //left side constant change
	 
if ( (eqn1.l_sumvar != eqn2.l_sumvar) &&
	 (eqn1.l_sumconst == eqn2.l_sumconst) &&
	 (eqn1.r_sumvar == eqn2.r_sumvar) &&
	 (eqn1.r_sumconst == eqn2.r_sumconst) )
	 {errorflag[3] = true;} //left side variable change

if ( (eqn1.l_sumvar == eqn2.l_sumvar) &&
	 (eqn1.l_sumconst == eqn2.l_sumconst) &&
	 (eqn1.r_sumvar != eqn2.r_sumvar) &&
	 (eqn1.r_sumconst == eqn2.r_sumconst) )
	 {errorflag[4] = true;} //right side variable change

if (eqn1.full == eqn2.full) 
	{errorflag[5] = true;} //no change from one line to the next

if ( (eqn1.leftsidenumterms == eqn2.leftsidenumterms +1) &&
	 (eqn1.rightsidenumterms == eqn2.rightsidenumterms - 1) &&
	 (eqn1.solution != eqn2.solution))
	 {errorflag[6] = true;} //possible term shifted from left to right
	 
if ( (eqn1.leftsidenumterms == eqn2.leftsidenumterms - 1) &&
	 (eqn1.rightsidenumterms == eqn2.rightsidenumterms + 1) &&
	 (eqn1.solution != eqn2.solution))
	 {errorflag[7] = true;} //possible term shifted from right to left
}

