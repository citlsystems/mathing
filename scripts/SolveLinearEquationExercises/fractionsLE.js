
/*
Functions called to do arithmetic with string fractions that aren't latexed
*/




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
/*
function LEtidyFractionSigns(latex_fraction_of_integers) {
 *********************************
input: (sign?) \frac{sign?a}{sign?b} 
output: +\frac{sign?a}{b}
********************************** 

var expression = latex_fraction_of_integers;
expression = expression.replace(/\s/g,'');

var a = detectNumerator(expression);
var signa = detectMonomialSign(a);

var b = detectDenominator(expression);
var signb = detectMonomialSign(b);

var frontsign = expression.match(/^(.*)(\\frac\{[^}]\}\{[^}\})/,'$1');
frontsign = detectMonomialSign(frontsign);
if (signa == signb)

}*/

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

//inputs a string whole number and outputs it as a string fraction over 1
function LEconvert2frac(intString){ 

if (!intString.match(/\//)){
	intString = intString + "/" + "1"; return intString;}
return intString;
}

//sums two string fractions and outputs a string fraction in lowest terms
function LEsumFracs(blah1,blah2){ 
var num, den, common, sumof, sign1, sign2, signsum, fraca, fracb;

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

return sumof;
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

