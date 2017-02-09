//used to generate random input - called in multiple .js files
function randomNum(x) {//returns a random number from the interval [0,x)
	return Math.random()*x ;
}

//Gets the greatest common divisor of numbers a and b. Returns a number.
function gcd(p, q) {
var a = Math.abs(p);
var b = Math.abs(q);
    if ( !b) {
        return a;
    }
    return gcd(b, a % b);
};

/* returns 1 or -1 depending on the sign of numberPAR. 
   0 is counted as positive */
function signPM1(anumberPAR){
var x;
if (anumberPAR==0){x = 1;}
else {x = anumberPAR / Math.abs(anumberPAR);}
return x;
}

/* returns 0, 1 or -1 depending on the sign of numberPAR. 
   The sign of 0 is 0*/
function sign0PM1(anumberPAR){
var x;
if (anumberPAR==0){x = 0;}
else{
x = anumberPAR / Math.abs(anumberPAR);}
return x;
}

/* returns + for >= 0 , and - for < 0*/
function stringSignPM(anumberPAR){
if (anumberPAR<0){return '-';}
return '+';
}

/* returns empty string for >= 0 , and - for < 0*/
function stringSignEM(anumberPAR){
if (anumberPAR<0){return '-';}
return '';
}

//returns 0 or 1
function coinflip(){ 
	if (Math.random() < 0.5) 
		{return 0;}
	else 
		{return 1;}
}


//returns -1 or 1
function posORneg1(){ 
	if (Math.random() < 0.5) 
		{return -1;}
 
return 1;
}


function isPrime(numberPAR){
var x = numberPAR; 
var is_prime = false; 

for (i=1; i <= Math.sqrt(x); i++){
	if (x%i  == 0){
		is_prime = true;
		}
	}
return is_prime;
}


function replaceLatexFracs(latexstring){
var expression = latexstring;

if (!expression.match(/\\frac/g)){
	return latexstring; 
	}
	
else {
	expression = expression.replace(/\\frac\{([^}])\}\{([^}])\}/g, '($1/$2)');
	return expression;
	}
}

function replaceLatexBrackets(latexstringPAR){
var x = latexstringPAR;

x = x.replace(/\\left\(/g, '(');
x = x.replace(/\\right\(/g, ')');

return x;
}

function replaceLatexDelimiters(latexstringPAR){
var x = latexstringPAR;

var delim_patterns_l = ['\\{', '\\\\left\\('];
var delim_patterns_r = ['\\}', '\\\\right\\)'];

var pattl = new RegExp();
var pattr = new RegExp();

for (var i = 0; i < delim_patterns_l; i++){
	pattl = RegExp(delim_patterns_l[i], 'g');
	pattr = RegExp(delim_patterns_r[i], 'g');
	x = x.replace(pattl, '(');
	x = x.replace(pattr, ')');
	}

return x;

}

//returns a + or - character
function plusORminus(){ 
	if (coinflip()==0) {return "+" ;}
	return "-";
}


