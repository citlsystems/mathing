
function LEgetLinearExprTerms(lin_exprPAR){ 
/*
Finds the terms of a linear expression
MUST HAVE NO nested polynomials. i.e. If there is a bracketed expression, the number of terms in
the bracketed expression must be 1. 
input format: polynomial of  the form sigma(Kxi^ni), K in Q, x_i from the set ALL_VARS, n_i in Q

output: an array of the terms of the polynomial, with sign of each term shown in front (including positives)
example:	input:	-x^2yz-(-81xy)+xy^5z
			output:	[-x^2yz-(-81xy)+xy^5z, -x^2yz, -(-81xy), +xy^5z]
*/

var expression = lin_exprPAR;
	expression = expression.replace(/\s/g,'');
var a = new Array(); 
var array_of_terms = new Array();

//array_of_terms[0] = '77';

//simple version:
var vartermvv =				'([+\\-=]|^)\\d*[xyzw](?=([+\\-=]|$))';
var varfrac =				'([+\\-=]|^)\\\\frac\\{[+\\-]?\\d+\\}\\{[+\\-]?\\d+\\}[xyzw](?=([+\\-=]|$))';
var consttermvv =			'([+\\-=]|^)\\d+(?=([+\\-=]|$))';
var constfrac =				'([+\\-=]|^)\\\\frac\\{[+\\-]?\\d+\\}\\{[+\\-]?\\d+\\}(?=([+\\-=]|$))';
var termpatternvv = new RegExp('(('+constfrac+')|('+vartermvv+')|('+consttermvv+')|('+varfrac+'))', 'g');

array_of_terms = expression.match(termpatternvv);

return array_of_terms; 
}


function LEgetCoeffsOfTermsLE(blahblahPAR){
/* *******************************************************	
Inputs a latex multi-variable linear exp in ALL_VARS and 
returns an array of the coefficients of each term, read 
from left to right. 
Input syntax:  SIGMA [+/-]\d+[xyzwabcd]^n*
sample input: -9+25xy^6z+25^4yz^5+(-25x^3z)-125xyz-5
sample output: [-9, +25,+25,-25, -125, -5]
********************************************************* */
//var VARIABLES_pattern = '[xyzw]';
//var INTEGER_CONSTANT_pattern = '([+\\-]|^)\\d+(?=([+\\-]|$))';
//var SIMPLE_COEFF_pattern = '(\\d+|\\\\frac\\{[+\\-]?\\d+\\}\\{[+\\-]?\\d+\\})'  ;

var termcoeffis1 = new RegExp('\\+'+VARIABLES_pattern);
var termcoeffisneg1 = new RegExp('-'+VARIABLES_pattern);
var coeff1atstart = new RegExp('^' + VARIABLES_pattern);
var termisconstant = new RegExp(INTEGER_CONSTANT_pattern);
var non1coeffs = new RegExp('([+\\-]?\\d+)'+VARIABLES_pattern);

var blah = blahblahPAR;
blah = blah.replace(/\s/g,'');
var theterms = LEgetLinearExprTerms(blah);


for (var i=0;i<theterms.length; i++){
	theterms[i] = theterms[i].replace(/\s/g,''); 
	}

var thecoeffs = new Array();

for (var i = 0; i < theterms.length; i++){
	
	if (non1coeffs.test(theterms[i])){
		thecoeffs[i] = theterms[i].match(non1coeffs)[1];
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
	else {thecoeffs[i]='999';}
	
	//Need to fix bracket closure that may have been lost when var part was chopped off:
/*
	if (thecoeffs[i].match(/\(/g)!=null){
		var num_open_brackets = thecoeffs[i].match(/\(/g).length;
		var num_close_brackets = 0;
		if (thecoeffs[i].match(/\)/g)!=null) {num_close_brackets = thecoeffs[i].match(/\)/g).length;}
		for (var k=0; k < (num_open_brackets - num_close_brackets) ; k++){
			thecoeffs[i] = thecoeffs[i]+')';
			}
		}
*/

	}

return thecoeffs;
}


function LEgetVarPartOfTermsLE(latex_multivar_polynomial){
var expression = latex_multivar_polynomial;
var myterms = LEgetLinearExprTerms(expression);

for (var i=0;i<myterms.length; i++){
	myterms[i] = myterms[i].replace(/\s/g,'');
	}
// *******************************************************
// NEXT FIND ARRAY OF VARIABLE PARTS OF EACH TERM
var varterms = new Array();	
var varpart = new RegExp(VARIABLES_pattern,'g');

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


function LEisSingleVariable(potential_single_var){
//global: ALL_VARS = ['x','y','z','w'];
var flag = false;
var expression = potential_single_var; 

expression = expression.replace(/\s/g,'');

for (var i=0;i < ALL_VARS.length; i++){
	if (expression == ALL_VARS[i]){
		flag = true;
		}
	}
	
return flag;
}

function LEcolorLikeTerms(latex_multivar_polynomial, startcolor){
//need to color the terms that will be combined
var expr = latex_multivar_polynomial;
var color_index = startcolor;
var terms = LEgetLinearExprTerms(expr);
var coeffs = LEgetCoeffsOfTermsLE(expr);
var varpiece = LEgetVarPartOfTermsLE(expr);

var termColor = new Array(terms.length);

if (color_index ==0){color_index++;}


for (var k=0;k<terms.length;k++){termColor[k]=COLOR_Array[0];} //initialize

var alreadyCaughtTerm = new Array(terms.length);
	for (var i=0; i<alreadyCaughtTerm.length; i++){
		alreadyCaughtTerm[i] = false ;
		}

for (var j=0; j < terms.length;j++){
	if (!alreadyCaughtTerm[j]) {
		//terms found once stay black, terms found more than once get colored
		
		for (var i=j+1; i < terms.length; i++){
			if (varpiece[i]==varpiece[j]){
				termColor[j] = COLOR_Array[color_index];
				termColor[i] = termColor[j];
				alreadyCaughtTerm[i] = true;			
				}
			}
		color_index++;	if (color_index ==0){color_index++;}	
		}	
	
	}

var colored_expr='';
for (var k = 0; k<terms.length; k++){
	if (termColor[k]!= COLOR_Array[0]){
		colored_expr += '{\\color{'+termColor[k]+'} ' + terms[k]+'}\\, ';
		}
	else {
		colored_expr += terms[k];
		}
	}
		
	
return colored_expr;
}

function LEcombineAndColorCombined(latex_multivar_polynomial, startcolor){ 
var expr = latex_multivar_polynomial;
 
var terms = LEgetLinearExprTerms(expr); 
var coeffs = LEgetCoeffsOfTermsLE(expr); 
var varpiece = LEgetVarPartOfTermsLE(expr);

var combinedcoeff = new Array();
var combinedvarpiece = new Array();
var combinedcolor = new Array();
var index = 0; var color_index =startcolor;

for (var i=0; i<terms.length; i++){
	combinedcolor[i] = COLOR_Array[0];
	}

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
				combinedcoeff[index] += '+ ('+coeffs[i]+')';
				combinedcolor[index] = COLOR_Array[color_index];
				alreadyCaughtTerm[i] = true;			
				}
			}
		index++;
		color_index++;
		}		
	}
var new_expression = '';

for (var i=0; i<combinedcoeff.length; i++){
	if (combinedcolor[i]!=COLOR_Array[0]){
		new_expression += '{\\color{'+combinedcolor[i]+'} +('+(eval(combinedcoeff[i])).toString()+')'+combinedvarpiece[i]+'}';
		}
	else {
		new_expression += '+ ('+(eval(combinedcoeff[i])).toString()+')'+combinedvarpiece[i];
		}
	}

return new_expression;
}


/*-----------------------------------------------------------------------------------------
//within the string expressiontocolor, we want to color portions that match astringpatter, using COLOR_Array[colornumber]. 
//returns an array: [0] is the colored expressiontocolor. [1] is the first colored match in [0], [2]
// is the second colored match, etc.
//if varycolor is 0, use same color for all matches, if varycolor = 1, vary color
------------------------------------------------------------------------------------------ */
function LEcolorThisPattern(astringpattern, expressiontocolor, colornumber, varycolor0or1){

var apattern = new RegExp(astringpattern, 'g');
var apattern2 = new RegExp(astringpattern); //nonglobal
var arrayofcoloredmatches = []; var index = 1; var color_touse = colornumber;var return_exp = ''; var matchedbit = '';

var the_expression = expressiontocolor.replace(/\s/g,'');

arrayofcoloredmatches[0]='';

if (color_touse==0){color_touse++;}
//capture colored bits
while (a = apattern.exec(the_expression)){
	arrayofcoloredmatches[index] = '{\\color{'+COLOR_Array[color_touse]+'}'+a[0]+'}';
	index++; if (varycolor0or1 == 1){color_touse=LEincrementColor(color_touse);}
	}

//build coloured string
apattern.lastIndex=0;
index = 0;
color_touse=colornumber;if (color_touse==0){color_touse++;}
var b;
while (b=apattern.exec(the_expression)){
	matchedbit = the_expression.substring(index,apattern.lastIndex);
	matchedbit = matchedbit.replace(apattern2, ' {\\color{'+COLOR_Array[color_touse]+'} $1}');
	arrayofcoloredmatches[0] += matchedbit; 
	index = apattern.lastIndex;
	if (varycolor0or1 == 1){color_touse=LEincrementColor(color_touse);if (color_touse==0){color_touse++;}}
	} 
arrayofcoloredmatches[0] += the_expression.substring(index);
	
return arrayofcoloredmatches;
}

function LEcolorVarTermDeg1Var1(expression,startcolor){
//pattern to match: coeff[xyzw] - to highlight all single variable degree 1 terms
var color_exp = expression;
var return_exp = ''; var matchedbit = '';
var termpatt = new RegExp('([+\\-]?'+SIMPLE_COEFF_pattern + '*' + VARIABLES_pattern + ')(?=([+\\-=]|$))', 'g');
var termpatt2 = new RegExp('([+\\-]?'+SIMPLE_COEFF_pattern + '*' + VARIABLES_pattern + ')(?=([+\\-=]|$))'); //not global
var colorindex = startcolor;
var index = 0;

var a;
while (a=termpatt.exec(color_exp)){
	matchedbit = color_exp.substring(index,termpatt.lastIndex);
	matchedbit = matchedbit.replace(termpatt2, '{\\color{'+COLOR_Array[colorindex]+'} $1}');
	return_exp += matchedbit; 
	index = termpatt.lastIndex;
	colorindex++;
	} 
return_exp += color_exp.substring(index);
return return_exp;
}

function LEtheColoredRightSideVarTerms(expression,startcolor){
var color_exp = expression;
var colored_terms = []; 

var termpatt = new RegExp('([+\\-]?'+SIMPLE_COEFF_pattern + '*' + VARIABLES_pattern + ')(?=([+\\-=]|$))', 'g');

var colorindex = startcolor;
var index = 0;

while (a=termpatt.exec(color_exp)){
	colored_terms[index] = '{\\color{'+COLOR_Array[colorindex]+'}' + a[0] +'}';
	colorindex++; index++;
	} 
termpatt.lastIndex = 0; //reset
return colored_terms;
}



function LEidentifyAndColorCoefficientOnVarTerms(equationPAR,colorPAR){
//SIMPLE_COEFF_pattern = '(\\d+|\\\\frac\{[+\\-]?\\d+\}{[+\\-]?\\d+\})'  ;
var eqn = equationPAR;
var matchpatt = '([+\\-]?\\s*' + SIMPLE_COEFF_pattern + ')('+VARIABLES_pattern+')'; 
var matchregex = new RegExp(matchpatt, 'g');

eqn = eqn.replace(matchregex, '{\\color{'+COLOR_Array[colorPAR] + '}$1}$3');
return eqn;
}

function LEdivideBothSidesByAWithColor(somelinearequation, thecolor){
//SIMPLE_COEFF_pattern
var equation = LEstripColorFromMath(somelinearequation);
var mycolor = thecolor;

if (LEisAxequalsB(equation)){ console.log('triggered Ax=B type');
	SIMPLE_COEFF_regex.lastIndex= 0; CONSTTERM_regex.lastIndex=0;
	var A = SIMPLE_COEFF_regex.exec(equation)[0]; 
	var B = CONSTTERM_regex.exec(LEstripOutsideBrackets(equation.split('=')[1]))[0]; 
	SIMPLE_COEFF_regex.lastIndex= 0; CONSTTERM_regex.lastIndex=0;
	var variable = equation.match(VARIABLES_regex)[0];

	if (mycolor == 0){
		mycolor = LEincrementColor(mycolor);
		}
	A = LEwriteIntegerAsFraction(A);
	B = LEwriteIntegerAsFraction(B); 
	equation = LEcolorThis(LEreciprocalOf(A),mycolor) + '\\times' + equation + '\\times' + LEcolorThis(LEreciprocalOf(A),mycolor);
	
	}
if (LEisBequalsAx(equation)){ console.log('recognized:  B=Ax form');
	SIMPLE_COEFF_regex.lastIndex= 0; CONSTTERM_regex.lastIndex=0;
	var A = SIMPLE_COEFF_regex.exec(equation)[0]; SIMPLE_COEFF_regex.lastIndex= 0; console.log('recognized A: ', A);

	var B = CONSTTERM_regex.exec(LEstripOutsideBrackets(equation.split('=')[0]))[0];  console.log('recognized B: ', B);
	CONSTTERM_regex.lastIndex=0;
	var variable = equation.match(VARIABLES_regex)[0];  //should be only 1 var

	if (mycolor == 0){
		mycolor = LEincrementColor(mycolor);
		}
	A = LEwriteIntegerAsFraction(A); console.log('A as fraction: ', A);
	B = LEwriteIntegerAsFraction(B); console.log('B as fraction: ', B);
	equation = LEcolorThis(LEreciprocalOf(A),mycolor) + '\\times' + equation + '\\times' + LEcolorThis(LEreciprocalOf(A),mycolor);
	}
	
return equation;
}


function LEcombineLinearLikeTerms(linearexprPAR){ 
var expr = linearexprPAR;
 
var terms = LEgetLinearExprTerms(expr);
var coeffs = LEgetCoeffsOfTermsLE(expr); 
var varpiece = LEgetVarPartOfTermsLE(expr);

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

new_expression = (eval(combinedcoeff[0])).toString()+combinedvarpiece[0];
for (var i=1; i<combinedcoeff.length; i++){
	new_expression += '+('+(eval(combinedcoeff[i])).toString()+combinedvarpiece[i]+')';  
	}

return new_expression;
}



/* ********************************************************
linearEquationSolution generates the text to be displayed in
the right hand solution panel.
Input format: a latex equation string in a var from the set
given in globalvars, and with rational coefficients. \
ex1:  2x - 3 = 3x + 4;
ex2:  \frac{1}{2}x+10 = 4x - \frac{3}{2}

Output format: An array arr such that arr[0] is the entire
solution in latex and arr[i] is line i of the solution for i>0. 

******************************************************** */
function LElinearEquationSolution1DEFUNCT(latex_linear_equation){
var solution = []; var solution_msg = []; var newleft, newright = ''; var loopcount= 0;
var leftcolorindex=1; var rightcolorindex=3; var colorindex=1;var msg_index = 1;

var lineqn = latex_linear_equation;
lineqn = lineqn.replace(/\s/g,'');
solution[0] = lineqn ; var sol_index=1;
solution_msg[0] = 'To solve this linear equation:';

//NEED TO ADD IN A FUNCTION HERE TO TEST IF INPUT IS ACTUALLY A LINEAR EQUATION

var lhs = LEremoveSpaces(LEfirstLevelTidyTerms(lineqn.split('=')[0]));
var rhs = LEremoveSpaces(LEfirstLevelTidyTerms(lineqn.split('=')[1]));




//STEP 1:  FIRST IDENTIFY AND COMBINE LIKE TERMS
newleft = LEremoveSpaces(LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(lhs)));
newright = LEremoveSpaces(LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(rhs)));

if (newleft!=lhs || newright!=rhs) {
	
	solution[sol_index]=LEcolorLikeTerms(lhs,leftcolorindex)+'='+LEcolorLikeTerms(rhs,rightcolorindex); 
	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Identify like terms on either side.';
	sol_index++; msg_index++;
	solution[sol_index]=LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEcombineAndColorCombined(lhs,leftcolorindex)))+'='+LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEcombineAndColorCombined(rhs,rightcolorindex))); 
	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Combine like terms.';
	sol_index++;msg_index++;
	solution[sol_index]=newleft+'='+newright;
	
	sol_index++;
	leftcolorindex = LEincrementColor(leftcolorindex); rightcolorindex = LEincrementColor(rightcolorindex); 
	}
lhs = newleft;  newleft = '';  
rhs = newright; newright = ''; 

//STEP 2: IS VAR ON JUST ONE SIDE?  
if (solution[sol_index-1].split('=')[0].match(Pa_variableP)!=null) {   //if there is a var on the lhs then solve w var on left
//IDENTIFY VARIABLE TERMS ON THE RIGHT
if (rhs.match(Pa_variableP)!=null){
//color var terms on right
	solution[sol_index]=lhs + '=' + LEcolorThisPattern('([+\\-]?\\d+[xyzw])(?=([+\\-=]|$))',LEremoveSpaces(rhs), rightcolorindex, 1)[0];
	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Identify variable terms on the right side.';
	sol_index++;msg_index++;
//subtract colored terms identified in previous step from both sides 
	var string_to_subtract = LEtheColoredRightSideVarTerms(rhs,rightcolorindex)[0];
	for (var i=1; i < LEtheColoredRightSideVarTerms(rhs,rightcolorindex).length; i++){
		string_to_subtract += '+' + LEtheColoredRightSideVarTerms(rhs,rightcolorindex+i)[i];
		}
	solution[sol_index] = lhs + '- (' + string_to_subtract + ') = ' +  rhs + '- (' + string_to_subtract + ')' ;
	
	if (LEtheColoredRightSideVarTerms(rhs,rightcolorindex).length==1){
		solution_msg[sol_index] = msg_index.toString() + '. ' + 'Subtract the variable term from both sides.';
		}
	else{
		solution_msg[sol_index] = msg_index.toString() + '. ' + 'Subtract the variable terms from both sides.';
		}
	sol_index++;msg_index++;
		
	//combine new like terms that have been created
	if(leftcolorindex==rightcolorindex){LEincrementColor(rightcolorindex);}
	lhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[0]));
	rhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[1]));
	newleft = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(lhs));
	newright = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(rhs));
	solution[sol_index]=LEcolorLikeTerms(lhs,leftcolorindex)+'='+LEcolorLikeTerms(rhs,rightcolorindex); 
	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Identify like terms on either side.';
	sol_index++;msg_index++;
	solution[sol_index]=LEfirstLevelTidyTerms(LEcombineAndColorCombined(lhs,leftcolorindex))+'='+LEfirstLevelTidyTerms(LEcombineAndColorCombined(rhs,rightcolorindex)); 
	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Combine like terms.'
	sol_index++;msg_index++;

	lhs = LEsecondLevelTidyTerms(LEstripColorFromMath(newleft));
	rhs = LEsecondLevelTidyTerms(LEstripColorFromMath(newright));
	solution[sol_index] = lhs + '=' + rhs ;
	solution_msg[sol_index] = '.';
	sol_index++;	
	leftcolorindex = LEincrementColor(leftcolorindex); rightcolorindex = LEincrementColor(rightcolorindex);  
	}
	
//identify constant terms on the left to move to the right
//INTEGER_CONSTANT_pattern = '(([+\\-]|^)\\s*\\d+(?=\\s*([+\\-]|$))';
var a_constant = new RegExp(INTEGER_CONSTANT_pattern, 'g');

if (lhs.match(a_constant)!=null){
	//identify constant terms on the left side
	var coloredterms = LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', lhs, leftcolorindex,1);
	newleft = coloredterms[0]
	newright = rhs;
	solution[sol_index] = newleft + '=' + newright;
	solution_msg[sol_index] = msg_index.toString() + '. ' +  'Identify constant terms on the left side.';
	sol_index++;msg_index++;
	//subtract identified term from both sides
	for (var i = 1; i < coloredterms.length; i++){
		newleft += ' - (' + coloredterms[i] + ' ) ';
		newright += ' - (' + coloredterms[i] + ' ) ';
		
		}
	rightcolorindex = LEincrementColor(leftcolorindex); //offset from left
	solution[sol_index] = newleft + ' = ' + newright;	
	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Subtract constant from both sides.';
	sol_index++; msg_index++;
	
	//combine new like terms that have been created
	if(leftcolorindex==rightcolorindex){LEincrementColor(rightcolorindex);}
	lhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[0]));
	rhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[1]));
	newleft = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(lhs));
	newright = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(rhs));
	
	solution[sol_index]=LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', lhs, leftcolorindex,0)[0]+'='+LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', rhs, rightcolorindex,0)[0];
	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Identify like terms on either side.';
	sol_index++;msg_index++;
	
	//leftcolorindex = incrementColor(leftcolorindex);
	//rightcolorindex = incrementColor(rightcolorindex);
	solution[sol_index]=LEcombineAndColorCombined(lhs,leftcolorindex)+'='+LEcombineAndColorCombined(rhs,rightcolorindex); 
	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Combine like terms.'
	sol_index++;msg_index++;
	
	lhs = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(newleft)));
	rhs = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(newright)));
	solution[sol_index] = lhs + '=' + rhs ;
	solution_msg[sol_index] = '.';
	sol_index++;	
	}


//detect we have the form Ax=B:
if (isAxequalsB(solution[sol_index-1])){  
	var TheA = LEgetLeadingCoeff(solution[sol_index-1]);
	var TheB = LEsolution[sol_index-1].split('=')[1];
	solution[sol_index] = LEidentifyAndColorCoefficientOnVarTerms(solution[sol_index-1],leftcolorindex); 
	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Identify the coefficient on the variable term.';
	sol_index++; msg_index++;
	var recip = LEreciprocalOf(LEwriteIntegerAsFraction(LEstripColorFromMath(solution[sol_index-1]).split('=')[0].match(SIMPLE_COEFF_regex)));
	solution[sol_index] = LEcolorThisPattern(SIMPLE_COEFF, recip, leftcolorindex, 0)[0] + ' \\times '+solution[sol_index-1] + '\\times'+ LEcolorThisPattern(SIMPLE_COEFF, recip, leftcolorindex, 0)[0];
	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Multiply both sides by the reciprocal of that coefficient.';
	sol_index++; msg_index++;
	lhs = '\\left('+LEcolorThis(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)),leftcolorindex)+'\\times' + LEcolorThis(LEwriteIntegerAsFraction(TheA), leftcolorindex) + '\\right)'+LEdetectVariables(solution[sol_index-1])[0];
	rhs = '\\left('+LEwriteIntegerAsFraction(TheB)+'\\times' + LEcolorThis(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)), leftcolorindex) + '\\right)';
	solution[sol_index] = lhs + '=' + rhs;
	sol_index++;
	//multiply fractions
	var product1 = LEmultiplyLatexIntegerFractions(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)),LEwriteIntegerAsFraction(TheA)); 
	var product2 = LEmultiplyLatexIntegerFractions(LEwriteIntegerAsFraction(TheB), LEreciprocalOf(LEwriteIntegerAsFraction(TheA))); 
	
	if (product1.length  < product2.length){
		for (var k =0; k < product2.length - product1.length; k++){
			product1[product1.length+k] = product1[product1.length-1];
			}
		}
	if (product2.length  < product1.length){
		for (var k =0; k < product1.length - product2.length; k++){
			product2[product2.length+k] = product2[product2.length-1];
			}
		}
	
	for (var i = 0; i < Math.max(product1.length, product2.length); i++){
		solution[sol_index] = product1[i] + LEdetectVariables(solution[sol_index-1])[0] + '=' + product2[i] ; 
		sol_index++;
		}
	
	}
} // close conditional to see if var is on left side

//ELSE IF VAR NOT ON LEFT BUT VAR IS ON RIGHT:
else if (solution[sol_index-1].split('=')[1].match(Pa_variableP)!=null){  //solve with var on rhs, and switch  to x = answer  form at end
	
//identify constant terms on the right to move to the left
//INTEGER_CONSTANT_pattern = '(([+\\-]|^)\\s*\\d+(?=\\s*([+\\-]|$))';
/*B=AX*/ var a_constant = new RegExp(INTEGER_CONSTANT_pattern, 'g');

/*B=AX*/ if (rhs.match(a_constant)!=null){
	//identify constant terms on the right side
/*B=AX*/	var coloredterms = LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', rhs, rightcolorindex,1);
/*B=AX*/	newright = coloredterms[0]
/*B=AX*/	newleft = lhs;
/*B=AX*/	solution[sol_index] = newleft + '=' + newright;
/*B=AX*/	solution_msg[sol_index] = msg_index.toString() + '. ' +  'Identify constant terms on the right side.';
/*B=AX*/	sol_index++;msg_index++;
	//subtract identified term from both sides
/*B=AX*/	for (var i = 1; i < coloredterms.length; i++){
/*B=AX*/		newleft += ' - (' + coloredterms[i] + ' ) ';
/*B=AX*/		newright += ' - (' + coloredterms[i] + ' ) ';
		
/*B=AX*/		}
/*B=AX*/	leftcolorindex = LEincrementColor(rightcolorindex); //offset from left
/*B=AX*/	solution[sol_index] = newleft + ' = ' + newright;
/*B=AX*/	sol_index++;
/*B=AX*/	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Subtract constant from both sides.';
/*B=AX*/	msg_index++;
	
	//combine new like terms that have been created
/*B=AX*/	if(leftcolorindex==rightcolorindex){LEincrementColor(leftcolorindex);}
/*B=AX*/	lhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[0]));
/*B=AX*/	rhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[1]));
/*B=AX*/	newleft = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(lhs));
/*B=AX*/	newright = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(rhs));
	
/*B=AX*/	solution[sol_index]=LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', lhs, leftcolorindex,0)[0]+'='+LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', rhs, rightcolorindex,0)[0];
/*B=AX*/	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Identify like terms on either side.';
/*B=AX*/	sol_index++;msg_index++;
/*B=AX*/	
/*B=AX*/	
/*B=AX*/	solution[sol_index]=LEcombineAndColorCombined(lhs,leftcolorindex)+'='+LEcombineAndColorCombined(rhs,rightcolorindex); 
/*B=AX*/	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Combine like terms.'
/*B=AX*/	sol_index++;msg_index++;
/*B=AX*/	
/*B=AX*/	
/*B=AX*/	lhs = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(newleft)));
/*B=AX*/	rhs = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(newright)));
/*B=AX*/	solution[sol_index] = lhs + '=' + rhs ;
/*B=AX*/	solution_msg[sol_index] = '.';
/*B=AX*/	sol_index++;	
/*B=AX*/	}

/*B=AX*/
//detect we have the form B=Ax:
/*B=AX*/if (LEisBequalsAx(solution[sol_index-1])){
/*B=AX*/	var TheA = LEgetLeadingCoeff(solution[sol_index-1].split('=')[1]);  
/*B=AX*/	var TheB = solution[sol_index-1].split('=')[0];  
/*B=AX*/	solution[sol_index] = LEidentifyAndColorCoefficientOnVarTerms(solution[sol_index-1],rightcolorindex);  
/*B=AX*/	solution_msg[sol_index] = msg_index.toString() + '. ' + 'Identify the coefficient on the variable term.';
/*B=AX*/	sol_index++; msg_index;
/*B=AX*/	solution[sol_index] = LEdivideBothSidesByAWithColor(solution[sol_index-1],rightcolorindex);	
			solution_msg[sol_index] = msg_index.toString() + '. ' + 'Multiply both sides by the reciprocal of that coefficient.';
/*B=AX*/	sol_index++; msg_index++;
/*B=AX*/	rhs = '\\left('+LEcolorThis(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)),rightcolorindex)+'\\times' + LEcolorThis(LEwriteIntegerAsFraction(TheA), rightcolorindex) + '\\right)'+LEdetectVariables(solution[sol_index-1])[0];
/*B=AX*/	lhs = '\\left('+LEwriteIntegerAsFraction(TheB)+'\\times' + LEcolorThis(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)), rightcolorindex) + '\\right)';
/*B=AX*/	solution[sol_index] = lhs + '=' + rhs;
/*B=AX*/	sol_index++;
	//multiply fractions
/*B=AX*/	var product1 = LEmultiplyLatexIntegerFractions(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)),LEwriteIntegerAsFraction(TheA)); 
/*B=AX*/	var product2 = LEmultiplyLatexIntegerFractions(LEwriteIntegerAsFraction(TheB), LEreciprocalOf(LEwriteIntegerAsFraction(TheA))); 
	
/*B=AX*/	if (product1.length  < product2.length){
/*B=AX*/		for (var k =0; k < product2.length - product1.length; k++){
/*B=AX*/			product1[product1.length+k] = product1[product1.length-1];
/*B=AX*/			}
/*B=AX*/		}
/*B=AX*/	if (product2.length  < product1.length){
/*B=AX*/		for (var k =0; k < product1.length - product2.length; k++){
/*B=AX*/			product2[product2.length+k] = product2[product2.length-1];
/*B=AX*/		}
/*B=AX*/		}
	
/*B=AX*/	for (var i = 0; i < Math.max(product1.length, product2.length); i++){
/*B=AX*/		solution[sol_index] = product2[i] + '=' + product1[i] + LEdetectVariables(solution[sol_index-1])[0] ; 
/*B=AX*/		sol_index++;
/*B=AX*/		}
	
/*B=AX*/	}
/*B=AX*/} // close conditional to see if var is on right but not left side
	


//fill in solution_msg
for (var i=0;i<solution.length;i++){
	if (!solution_msg[i]){
		solution_msg[i] = ' . ';
		}
	solution[i] = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(solution[i]));
	solution[i] += ' && \\quad {\\small \\text{ ' + solution_msg[i] + '}}';//steve changed default "text{" to sans serif font family
	}

return solution; 
}


function LEdisplayLinearEqnSolution(solution_matrix_to_show_in_right){

var sol_matrix = solution_matrix_to_show_in_right;
var output = '\\begin{alignat*}{2} \n';


for (var i=0;i<sol_matrix.length;i++){
	sol_matrix[i] = LEspaceOperations(sol_matrix[i]);
	}
	
for (var i = 0; i< sol_matrix.length; i++){
	sol_matrix[i] = sol_matrix[i].replace(/=/g, ' & \\;=\\; ');
	output += sol_matrix[i] + ' \\\\ \n';
	}
output += '\\end{alignat*}';

return output;
}


function LElinearEquationSolution1(latex_linear_equation){

var solution = []; var solution_msg = []; var newleft, newright = ''; var loopcount= 0;
var leftcolorindex=1; var rightcolorindex=3; var colorindex=1;var msg_index = 1;
var includeInDefault = [] ; for (i=0; i<100 ; i++){includeInDefault[i]=0;}

var lineqn = latex_linear_equation;
lineqn = lineqn.replace(/\s/g,'');
solution[0] = lineqn ; var sol_index=1;
solution_msg[0] = 'To solve this linear equation:';

//NEED TO ADD IN A FUNCTION HERE TO TEST IF INPUT IS ACTUALLY A LINEAR EQUATION

var lhs = LEremoveSpaces(LEfirstLevelTidyTerms(lineqn.split('=')[0]));
var rhs = LEremoveSpaces(LEfirstLevelTidyTerms(lineqn.split('=')[1]));




//STEP 1:  FIRST IDENTIFY AND COMBINE LIKE TERMS
newleft = LEremoveSpaces(LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(lhs)));
newright = LEremoveSpaces(LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(rhs)));

if (newleft!=lhs || newright!=rhs) {
	
	solution[sol_index]=LEcolorLikeTerms(lhs,leftcolorindex)+'='+LEcolorLikeTerms(rhs,rightcolorindex); 
	solution_msg[sol_index] =  'Identify and group like terms on either side.'; 
	includeInDefault[sol_index] = 1 ;
	sol_index++; msg_index++; 
	solution[sol_index]=LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEcombineAndColorCombined(lhs,leftcolorindex)))+'='+LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEcombineAndColorCombined(rhs,rightcolorindex))); 
	solution_msg[sol_index] =  'Combine like terms.';
	sol_index++;msg_index++;
	solution[sol_index]=newleft+'='+newright;
	solution_msg[sol_index] = '(Simplify.)';
	includeInDefault[sol_index] = 1 ;
	sol_index++; msg_index++;
	leftcolorindex = LEincrementColor(leftcolorindex); rightcolorindex = LEincrementColor(rightcolorindex); 
	}
lhs = newleft;  newleft = '';  
rhs = newright; newright = ''; 

//STEP 2: IS VAR ON JUST ONE SIDE?  
if (solution[sol_index-1].split('=')[0].match(Pa_variableP)!=null) {   //if there is a var on the lhs then solve w var on left
//IDENTIFY VARIABLE TERMS ON THE RIGHT
if (rhs.match(Pa_variableP)!=null){
//color var terms on right
	solution[sol_index]=lhs + '=' + LEcolorThisPattern('([+\\-]?\\d+[xyzw])(?=([+\\-=]|$))',LEremoveSpaces(rhs), rightcolorindex, 1)[0];
	solution_msg[sol_index] =  'Identify variable terms on the right side.';
	sol_index++;msg_index++;
//subtract colored terms identified in previous step from both sides 
	var string_to_subtract = LEtheColoredRightSideVarTerms(rhs,rightcolorindex)[0];
	for (var i=1; i < LEtheColoredRightSideVarTerms(rhs,rightcolorindex).length; i++){
		string_to_subtract += '+' + LEtheColoredRightSideVarTerms(rhs,rightcolorindex+i)[i];
		}
	solution[sol_index] = lhs + '- (' + string_to_subtract + ') = ' +  rhs + '- (' + string_to_subtract + ')' ;
	
	if (LEtheColoredRightSideVarTerms(rhs,rightcolorindex).length==1){
		solution_msg[sol_index] =  'Subtract the right-side variable term from both sides.';
		includeInDefault[sol_index] = 1 ;
		}
	else{
		solution_msg[sol_index] = 'Subtract the right-side variable terms from both sides.';
		includeInDefault[sol_index] = 1 ;
		}
	sol_index++;msg_index++;
		
	//combine new like terms that have been created
	if(leftcolorindex==rightcolorindex){LEincrementColor(rightcolorindex);}
	lhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[0]));
	rhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[1]));
	newleft = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(lhs));
	newright = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(rhs));
	solution[sol_index]=LEcolorLikeTerms(lhs,leftcolorindex)+'='+LEcolorLikeTerms(rhs,rightcolorindex); 
	solution_msg[sol_index] =  'Identify like terms on either side.';
	sol_index++;msg_index++;
	solution[sol_index]=LEfirstLevelTidyTerms(LEcombineAndColorCombined(lhs,leftcolorindex))+'='+LEfirstLevelTidyTerms(LEcombineAndColorCombined(rhs,rightcolorindex)); 
	solution_msg[sol_index] =  'Combine like terms.';
	sol_index++;msg_index++;

	lhs = LEsecondLevelTidyTerms(LEstripColorFromMath(newleft));
	rhs = LEsecondLevelTidyTerms(LEstripColorFromMath(newright));
	solution[sol_index] = lhs + '=' + rhs ;
	includeInDefault[sol_index] = 1 ;
	solution_msg[sol_index] =  '(Simplify.)';
	sol_index++; msg_index++;
	leftcolorindex = LEincrementColor(leftcolorindex); rightcolorindex = LEincrementColor(rightcolorindex);  
	}
	
//identify constant terms on the left to move to the right
//INTEGER_CONSTANT_pattern = '(([+\\-]|^)\\s*\\d+(?=\\s*([+\\-]|$))';
var CONSTANT_PATTERN_LE = '(^|[+\-])([^wxyz+\-]+)($|[+\-])';
var a_constant = new RegExp(CONSTANT_PATTERN_LE, 'g');
console.log(lhs);

if (lhs.match(a_constant)!=null){  //NOT WORKING HERE
	//identify constant terms on the left side
	a_constant.lastIndex = 0; //reset for next time
	var coloredterms = LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', lhs, leftcolorindex,1);
	newleft = coloredterms[0];
	newright = rhs;
	solution[sol_index] = newleft + '=' + newright;
	solution_msg[sol_index] =   'Identify constant terms on the left side.';
	sol_index++;msg_index++;
	//subtract identified term from both sides
	for (var i = 1; i < coloredterms.length; i++){
		newleft += ' - (' + coloredterms[i] + ' ) ';
		newright += ' - (' + coloredterms[i] + ' ) ';
		
		}
	rightcolorindex = LEincrementColor(leftcolorindex); //offset from left
	solution[sol_index] = newleft + ' = ' + newright;	
	solution_msg[sol_index] = 'Subtract the left-side constant from both sides.';
	includeInDefault[sol_index] = 1 ;
	sol_index++; msg_index++;
	leftcolorindex = LEincrementColor(leftcolorindex);
	
	//combine new like terms that have been created
	if(leftcolorindex==rightcolorindex){LEincrementColor(rightcolorindex);}
	lhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[0]));
	rhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[1]));
	newleft = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(lhs));
	newright = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(rhs));
	
	solution[sol_index]=LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', lhs, leftcolorindex,0)[0]+'='+LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', rhs, rightcolorindex,0)[0];
	solution_msg[sol_index] =  'Identify like terms on either side.';
	sol_index++;msg_index++;
	
	//leftcolorindex = incrementColor(leftcolorindex);
	//rightcolorindex = incrementColor(rightcolorindex);
	solution[sol_index]=LEcombineAndColorCombined(lhs,leftcolorindex)+'='+LEcombineAndColorCombined(rhs,rightcolorindex); 
	solution_msg[sol_index] =  'Combine like terms.';
	sol_index++;msg_index++;
	
	lhs = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(newleft)));
	rhs = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(newright)));
	solution[sol_index] = lhs + '=' + rhs ;
	includeInDefault[sol_index] = 1 ;
	solution_msg[sol_index] =  '(Simplify.)';
	sol_index++; msg_index++;
	}


//detect we have the form Ax=B:
if (LEisAxequalsB(solution[sol_index-1])){  
	var TheA = LEgetLeadingCoeff(solution[sol_index-1]);
	var TheB = solution[sol_index-1].split('=')[1];
	solution[sol_index] = LEidentifyAndColorCoefficientOnVarTerms(solution[sol_index-1],leftcolorindex); 
	solution_msg[sol_index] = 'Identify the coefficient on the variable term.';
	includeInDefault[sol_index] = 0 ;
	sol_index++; msg_index++;
	
	
	var recip = LEreciprocalOf(LEwriteIntegerAsFraction(LEstripColorFromMath(solution[sol_index-1]).split('=')[0].match(SIMPLE_COEFF_regex)));
	solution[sol_index] = LEcolorThisPattern(SIMPLE_COEFF, recip, leftcolorindex, 0)[0] + ' \\times '+solution[sol_index-1] + '\\times'+ LEcolorThisPattern(SIMPLE_COEFF, recip, leftcolorindex, 0)[0];
	solution_msg[sol_index] =  'Multiply both sides by the reciprocal of the coefficient of the variable term.';
	includeInDefault[sol_index] = 1 ;
	sol_index++; msg_index++;
	lhs = '\\left('+LEcolorThis(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)),leftcolorindex)+'\\times' + LEcolorThis(LEwriteIntegerAsFraction(TheA), leftcolorindex) + '\\right)'+LEdetectVariables(solution[sol_index-1])[0];
	rhs = '\\left('+LEwriteIntegerAsFraction(TheB)+'\\times' + LEcolorThis(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)), leftcolorindex) + '\\right)';
	solution[sol_index] = lhs + '=' + rhs;
	sol_index++;
	//multiply fractions
	var product1 = LEmultiplyLatexIntegerFractions(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)),LEwriteIntegerAsFraction(TheA)); 
	var product2 = LEmultiplyLatexIntegerFractions(LEwriteIntegerAsFraction(TheB), LEreciprocalOf(LEwriteIntegerAsFraction(TheA))); 
	
	if (product1.length  < product2.length){
		for (var k =0; k < product2.length - product1.length; k++){
			product1[product1.length+k] = product1[product1.length-1];
		}
	}
	
	if (product2.length  < product1.length){
		for (var k =0; k < product1.length - product2.length; k++){
			product2[product2.length+k] = product2[product2.length-1];
		}
	}
	
	for (var i = 0; i < Math.max(product1.length, product2.length); i++){
		solution[sol_index] = product1[i] + LEdetectVariables(solution[sol_index-1])[0] + '=' + product2[i] ; 
		console.log(sol_index, ":", solution[sol_index]); 
		if ((i == Math.max(product1.length, product2.length) - 2)||(i == Math.max(product1.length, product2.length) - 1)){
			includeInDefault[sol_index] = 1; console.log("Included: ", sol_index);
		}
		sol_index++;
	}
	solution[sol_index-1] = solution[sol_index-1].replace(/\\frac\{(\d+)\}\{1\}/g, '$1');
	solution_msg[sol_index - 1] = 'This value of the variable will make the equation true!'; msg_index++; console.log(solution[sol_index-1]);
}
} // close conditional to see if var is on left side

//ELSE IF VAR NOT ON LEFT BUT VAR IS ON RIGHT:
else if (solution[sol_index-1].split('=')[1].match(Pa_variableP)!=null){  //solve with var on rhs, and switch  to x = answer  form at end
	
//identify constant terms on the right to move to the left
//INTEGER_CONSTANT_pattern = '(([+\\-]|^)\\s*\\d+(?=\\s*([+\\-]|$))';
/*B=AX*/ var a_constant = new RegExp(INTEGER_CONSTANT_pattern, 'g');

/*B=AX*/ if (rhs.match(a_constant)!=null){
	//identify constant terms on the right side
/*B=AX*/	var coloredterms = LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', rhs, rightcolorindex,1);
/*B=AX*/	newright = coloredterms[0];
/*B=AX*/	newleft = lhs;
/*B=AX*/	solution[sol_index] = newleft + '=' + newright;
/*B=AX*/	solution_msg[sol_index] =   'Identify constant terms on the right side.';
/*B=AX*/	sol_index++;msg_index++;
	//subtract identified term from both sides
/*B=AX*/	for (var i = 1; i < coloredterms.length; i++){
/*B=AX*/		newleft += ' - (' + coloredterms[i] + ' ) ';
/*B=AX*/		newright += ' - (' + coloredterms[i] + ' ) ';
		
/*B=AX*/		}
/*B=AX*/	leftcolorindex = LEincrementColor(rightcolorindex); //offset from left
/*B=AX*/	solution[sol_index] = newleft + ' = ' + newright; 
			includeInDefault[sol_index] = 1;
/*B=AX*/	sol_index++;
/*B=AX*/	solution_msg[sol_index] =  'Subtract the constant on the right from both sides.';
/*B=AX*/	msg_index++;
	
	//combine new like terms that have been created
/*B=AX*/	if(leftcolorindex==rightcolorindex){LEincrementColor(leftcolorindex);}
/*B=AX*/	lhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[0]));
/*B=AX*/	rhs = LEfirstLevelTidyTerms(LEstripColorFromMath(solution[sol_index-1].split('=')[1]));
/*B=AX*/	newleft = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(lhs));
/*B=AX*/	newright = LEfirstLevelTidyTerms(LEcombineLinearLikeTerms(rhs));
	
/*B=AX*/	solution[sol_index]=LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', lhs, leftcolorindex,0)[0]+'='+LEcolorThisPattern('(([+\\-]|^)\\s*\\d+)(?=\\s*([+\\-]|$))', rhs, rightcolorindex,0)[0];
/*B=AX*/	solution_msg[sol_index] =  'Identify like terms on either side.';
/*B=AX*/	sol_index++;msg_index++;
/*B=AX*/	
/*B=AX*/	
/*B=AX*/	solution[sol_index]=LEcombineAndColorCombined(lhs,leftcolorindex)+'='+LEcombineAndColorCombined(rhs,rightcolorindex); 
/*B=AX*/	solution_msg[sol_index] =  'Combine like terms.';
/*B=AX*/	sol_index++;msg_index++;
/*B=AX*/	
/*B=AX*/	
/*B=AX*/	lhs = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(newleft)));
/*B=AX*/	rhs = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(LEstripColorFromMath(newright)));
/*B=AX*/	solution[sol_index] = lhs + '=' + rhs ;
			includeInDefault[sol_index] = 1;
/*B=AX*/	solution_msg[sol_index] = '(Simplify.)';
/*B=AX*/	sol_index++;	
/*B=AX*/	}

/*B=AX*/
//detect we have the form B=Ax:
/*B=AX*/if (LEisBequalsAx(solution[sol_index-1])){
/*B=AX*/	var TheA = LEgetLeadingCoeff(solution[sol_index-1].split('=')[1]);  
/*B=AX*/	var TheB = LEstripOutsideBrackets(solution[sol_index-1].split('=')[0]);  
/*B=AX*/	solution[sol_index] = LEidentifyAndColorCoefficientOnVarTerms(solution[sol_index-1],rightcolorindex);  
/*B=AX*/	solution_msg[sol_index] = 'Identify the coefficient on the variable term.';
/*B=AX*/	sol_index++; msg_index;
/*B=AX*/	solution[sol_index] = LEdivideBothSidesByAWithColor(solution[sol_index-1],rightcolorindex);	
			solution_msg[sol_index] =  'Multiply both sides by the reciprocal of the coefficient of the variable term.';
			includeInDefault[sol_index]=1;
/*B=AX*/	sol_index++; msg_index++;
/*B=AX*/	rhs = '\\left('+LEcolorThis(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)),rightcolorindex)+'\\times' + LEcolorThis(LEwriteIntegerAsFraction(TheA), rightcolorindex) + '\\right)'+LEdetectVariables(solution[sol_index-1])[0];
/*B=AX*/	lhs = '\\left('+LEwriteIntegerAsFraction(TheB)+'\\times' + LEcolorThis(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)), rightcolorindex) + '\\right)';
/*B=AX*/	solution[sol_index] = lhs + '=' + rhs;
/*B=AX*/	sol_index++;
	//multiply fractions
/*B=AX*/	var product1 = LEmultiplyLatexIntegerFractions(LEreciprocalOf(LEwriteIntegerAsFraction(TheA)),LEwriteIntegerAsFraction(TheA));  console.log('product1: ', product1);
/*B=AX*/	var product2 = LEmultiplyLatexIntegerFractions(LEwriteIntegerAsFraction(TheB), LEreciprocalOf(LEwriteIntegerAsFraction(TheA))); console.log('product2: ', product2);
	
/*B=AX*/	if (product1.length  < product2.length){
/*B=AX*/		for (var k =0; k < product2.length - product1.length; k++){
/*B=AX*/			product1[product1.length+k] = product1[product1.length-1];
/*B=AX*/			}
/*B=AX*/		}
/*B=AX*/	if (product2.length  < product1.length){
/*B=AX*/		for (var k =0; k < product1.length - product2.length; k++){
/*B=AX*/			product2[product2.length+k] = product2[product2.length-1];
/*B=AX*/		}
/*B=AX*/		}
	
/*B=AX*/	for (var i = 0; i < Math.max(product1.length, product2.length); i++){
/*B=AX*/		solution[sol_index] = product2[i] + '=' + product1[i] + LEdetectVariables(solution[sol_index-1])[0] ; 
/*B=AX*/		if ((i == Math.max(product1.length, product2.length) - 2)||(i == Math.max(product1.length, product2.length) - 1)){
					includeInDefault[sol_index] = 1; console.log("Included: ", sol_index, '--', solution[sol_index]);
					}
				sol_index++;
/*B=AX*/		}
			lhs = solution[sol_index-1].split('=')[1];
			rhs = solution[sol_index-1].split('=')[0];
			solution[sol_index] = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(lhs)) + ' = ' + LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(rhs)) ;
			includeInDefault[sol_index] = 1;
			solution_msg[sol_index] = 'This value of the variable will make the equation true!';
			sol_index++; msg_index++; 
/*B=AX*/	}
/*B=AX*/} // close conditional to see if var is on right but not left side
	
//Fix negative fractions in the last line of the solution: 
solution[solution.length - 1] = LEtidyFractionFinalAnswer(solution[solution.length - 1]);

//fill in solution_msg
for (var i=0;i<solution.length;i++){
	if (!solution_msg[i]){
		solution_msg[i] = ' . ';
		}
	solution[i] = LEsecondLevelTidyTerms(LEfirstLevelTidyTerms(solution[i]));
	solution[i] += ' && \\quad {\\scriptsize \\text{ ' + solution_msg[i] + '}}';//steve changed default "text{" to sans serif font family
	}

	
//at this point solution is the long form solution.  For now, switch to showing the short.  In future
// we can have expandable and collapsable sections to see more detail when the user wants

var solutionSHORT = []; var short_index = 0;

for (i=0; i < solution.length; i++){
	if (includeInDefault[i] == 1){
		solutionSHORT[short_index] = solution[i];console.log(solution[i]);
		short_index++; 
		}
	}

return solutionSHORT; 
}
