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

/* returns 1 or -1 depending on the sign of numberPAR. 
   0 is counted as positive */
function LEsignPM1(anumberPAR){
var x;
if (anumberPAR==0){x = 1;}
else {x = anumberPAR / Math.abs(anumberPAR);}
return x;
}

/* returns 0, 1 or -1 depending on the sign of numberPAR. 
   The sign of 0 is 0*/
function LEsign0PM1(anumberPAR){
var x;
if (anumberPAR==0){x = 0;}
else{
x = anumberPAR / Math.abs(anumberPAR);}
return x;
}

/* returns + for >= 0 , and - for < 0*/
function LEstringSignPM(anumberPAR){
if (anumberPAR<0){return '-';}
return '+';
}

/* returns empty string for >= 0 , and - for < 0*/
function LEstringSignEM(anumberPAR){
if (anumberPAR<0){return '-';}
return '';
}

//returns 0 or 1
function LEcoinflip(){ 
	if (Math.random() < 0.5) 
		{return 0;}
	else 
		{return 1;}
}


//returns -1 or 1
function LEposORneg1(){ 
	if (Math.random() < 0.5) 
		{return -1;}
 
return 1;
}


function LEisPrime(numberPAR){
var x = numberPAR; 
var is_prime = false; 

for (i=1; i <= Math.sqrt(x); i++){
	if (x%i  == 0){
		is_prime = true;
		}
	}
return is_prime;
}


function LEreplaceLatexFracs(latexstring){
var expression = latexstring;

if (!expression.match(/\\frac/g)){
	return latexstring; 
	}
	
else {
	expression = expression.replace(/\\frac\{([^}])\}\{([^}])\}/g, '($1/$2)');
	return expression;
	}
}

function LEreplaceLatexBrackets(latexstringPAR){
var x = latexstringPAR;

x = x.replace(/\\left\(/g, '(');
x = x.replace(/\\right\(/g, ')');

return x;
}

function LEreplaceLatexDelimiters(latexstringPAR){
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

function LEshuffleArray(array_parameter){
//inputs an array of characters, returns a random reordering of them
//using the Fisher-Yates shuffle: pick a random element, swap it with the last element in the array that hasn't been shuffled yet.

var x = array_parameter; 
var random_index;
var temp; //the last element will be the first to be replaced. 

if (x.length < 2){
	alert("Array is too short to shuffle.");
	return x;
	}
else {
for (var i=0; i < x.length-2; i++){
	random_index = Math.floor(Math.random()*(x.length-1-i));
	temp = x[x.length-1-i] ; 
	x[x.length-1-i] = x[random_index];
	x[random_index] = temp ; 
	
	console.log(x);
	}}

return x;
}



