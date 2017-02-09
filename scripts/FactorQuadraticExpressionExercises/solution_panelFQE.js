/*---FOR STEVE------------------
Main function: factorRationalQuadraticExpressionSolution()
Main function calls: 
  1. generateFactorPairs(), which is in this file also
  2. coeffGCDWithLeadingSign(), in the file polynomials.js
  3. zeroLevelTidyTerms(), in the file tidyingfunctions.js
  
 Main function INPUT:  The quadratic expression the student is trying to factor
 Main function OUTPUT: A huge string to display a solution to the exercise. 
     Note: the array "solution[]" starts with the input line
		   subsequent array entries are the steps in factoring
		   the quadratic. 
	 Note: the array "solution_msg[]" gives a comment to the corresponding step
		   in "solution[]"
	 Note: The array "display[]" is just the array solution[] and solution_msg[]
	       put together (two column array)
     Note: The string displaystring is all the entries in display[] concatenated together
	       to for the latex output string fof display.
*/



function factorRationalQuadraticExpressionSolution(quadraticPAR){
//input: quadratic in standard form: Ax^2 + Bx + C 
var thequadratic= quadraticPAR.replace(/\s/g,'');

QUAD_regex.lastIndex = 0;
var ABC = QUAD_regex.exec(thequadratic); console.log(ABC);

for (var i=1;i<ABC.length; i++){
	if (ABC[i]==''){ABC[i]= '1';}
	}

var A = parseInt(ABC[1], 10); console.log('A:' , A);
var B = parseInt(ABC[3]+ABC[4], 10); console.log('B:' , B); //3 is the sign of B
var signB = ABC[3]; 
var C = parseInt(ABC[6]+ABC[7], 10); console.log('C:' , C); //5 is the sign of C
var signC = ABC[6];



var solution = [];
var solution_msg = [];
var display = [];
var sol_index= 1; var msg_index = 1; 

//first line of the solution
solution[1] = '& \\phantom{=} ' + thequadratic ; 
solution_msg[1] = 'To factor this quadratic expression: ' ;
sol_index++;

//FACTOR OUT GCD OF POLYNOMIAL
// will hold this as commonfac and wrap it around each line at the end

//var commonfac = gcd(A, gcd(B,C));
//if (commonfac >1){
var polygcd = coeffGCDWithLeadingSign(thequadratic); console.log('GCD: ', polygcd);
if (Math.abs(polygcd)>1){
	var commonfac_starts = sol_index;
	A = A/polygcd;  B=B/polygcd ; C=C/polygcd;
	solution[sol_index] = '&=' + A.toString() + 'x^2+' + B.toString() + 'x+'+ C.toString(); 
	//solution[sol_index] = zeroLevelTidyTerms(solution[sol_index]);
	solution_msg[sol_index] = 'Factor out the gcd of the terms of the quadratic expression.' ;
	sol_index++;
}
//FIND P AND Q ST PQ = AC and P+Q=B

var Factor_Pairs = generateFactorPairs(Math.abs(A*C));

if (A*C < 0) { var sign = -1; var signAlpha = '-';} else {sign = 1; signAlpha='+';}

for (var i=0; i<Factor_Pairs.length; i++){
	if (	Math.abs(Factor_Pairs[i][0]+ sign*Factor_Pairs[i][1]) == Math.abs(B)){
			var p = Factor_Pairs[i][0];
			var q = Factor_Pairs[i][1]; 
		}
	}

if ((p*q == A*C) && (p+q == B)){
	a = p; b = q;
	//alert('p and q positive');
	}
else if ((p*q==A*C) && (-1*p + -1*q == B)){
	a = -1*p; b = -1*q;
	//alert('p and q both negative');
	}
else if ((p*q == -1*A*C) && (-1*p + q ==B)){
	a = -1*p; b = q;
	//alert('p is neg and q is pos');
	}
else if ((p*q == -1*A*C) && (p + -1*q == B)){
	a = p; b = -1*q;
	//alert('p is pos and q is neg');
	}
else {alert('Uh oh???');}



console.log(signB, signC, p-q, q-p);
solution[sol_index] = '&=' + A.toString() + 'x^2' + '+' + '(('+a.toString() + ') + (' + b.toString() + '))x'+ ' + ' +C.toString() ;
solution_msg[sol_index]= 'Here, A=' + A.toString() + ', B=' + B.toString() + ', and C='+C.toString()+
'. Find two integers whose product is AC, and whose sum is B. Substitute the sum for B.';

sol_index++;
/* leave this for now: 
if (C%b != 0){
	var temp = b; 
	b = a; 
	a = temp;
	}
*/
	
solution[sol_index] = '&=' + A.toString() + 'x^2' + '+' + '('+a.toString()+')x + (' + b.toString() + ')x'+ ' + ' +C.toString();
solution_msg[sol_index] = 'Apply the distributive property to expand.';
sol_index++;

solution[sol_index] = '&=' + A.toString() + 'x^2' + '+' +a.toString()+'x +' + b.toString() + 'x'+ ' + ' +C.toString() + '';
solution[sol_index] = zeroLevelTidyTerms(solution[sol_index]);
sol_index++;

//need to do cases to factor out the correct sign in the middle
var middlesign = '+'; var sign21 = ''; var sign22 = stringSignPM(C);
if ((signPM1(A)>0) && (signPM1(b)<0)){ middlesign = '-'; sign21 = stringSignEM(-1*b); sign22 = stringSignPM(-1*C);}
if ((signPM1(A)<0) && (signPM1(b)<0)){ middlesign = '+'; sign21 = stringSignEM(b); sign22 = stringSignPM(C);}
if ((signPM1(A)<0) && (signPM1(b)>0)){ middlesign = '-'; sign21 = stringSignEM(-1*b); sign22 = stringSignPM(-1*C);}


solution[sol_index] = '&= (' + A.toString() + 'x^2' + '+' +a.toString()+'x)'+ middlesign  + '(' + sign21 + (Math.abs(b)).toString() + 'x'+ sign22 + (Math.abs(C)).toString() + ')';
solution[sol_index] = zeroLevelTidyTerms(solution[sol_index]);
solution_msg[sol_index] = 'Regroup terms.';
sol_index++;

solution[sol_index] = '&=' + gcd(Math.abs(A),Math.abs(a))+'x(' + (A/gcd(Math.abs(A),Math.abs(a))).toString() + 'x' + '+' +(a/gcd(A,a)).toString()+')' + middlesign + gcd(C,b).toString() + '('+ sign21 + (Math.abs(b)/gcd(C,b)).toString() +'x'+ sign22 +(Math.abs(C)/gcd(C,b)).toString() + ')';
solution[sol_index] = zeroLevelTidyTerms(solution[sol_index]);
solution_msg[sol_index] = 'Apply the distributive property to take common factors out of each term.';
sol_index++;

solution[sol_index] = '&=(' + gcd(Math.abs(A),Math.abs(a)).toString() +'x'  + middlesign + gcd(C,b).toString() + ')'+ '(' + (A/gcd(Math.abs(A),Math.abs(a))).toString() + 'x' + '+' +(a/gcd(Math.abs(A),Math.abs(a))).toString()+')';
solution[sol_index] = zeroLevelTidyTerms(solution[sol_index]);
solution_msg[sol_index] = 'Apply the distributive property again, using the common binomial as the common factor.';
sol_index++;





//wrap each line with commonfac if it is > 1 (changed common fac to polygcd
if (Math.abs(polygcd)>1){
	for (var i=commonfac_starts; i<solution.length-1; i++){
	solution[i] = solution[i].replace(/&=/, '&='+polygcd+'\\left(');
	solution[i] += '\\right)';
	}
	solution[solution.length-1] = solution[solution.length-1].replace(/&=/, '&='+polygcd);
}
	
//Tidy up	
for (var i = 1; i < solution.length ; i++){
	solution[i] = zeroLevelTidyTerms(secondLevelTidyTerms(solution[i]));
	if (!solution_msg[i]) {
		solution_msg[i] = '.';
		}
	}

	
//concat solution and solution msg and generate output string
display[0] = '\\begin{alignat*}{2} \n';	
for (var i = 1; i< solution.length; i++){
	display[i] = solution[i] + ' && \\quad {\\small \\text{   ' + solution_msg[i] + '}} \\\\';
	}

var displaystring = '';
for (var i = 0; i < display.length; i++){
	displaystring += display[i];
	}
displaystring += '\\end{alignat*}';

return displaystring;
}


function generateFactorPairs(integerPAR){
//input: a positive integer
//output: pairs of numbers whose product is the integer
var x = integerPAR;
var a = [];

a[0] = [1, x];

for (var i = 2; i <= Math.sqrt(x); i++){
	if (x%i==0){
		a.push([i, x/i]);
		}
	}

return a;
}

