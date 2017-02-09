
function removeSpaces(astringPAR){
var blah = astringPAR;

blah = blah.replace(/\s/g,'');

return blah;
}


//trims brackets surrounding the entire expression (not needed if the expression stands alone)
function stripOutsideBrackets(expressionPAR){

var newexpression = expressionPAR;
newexpression = newexpression.replace(/\s/g,'');

/*
scan string. If open bracket is encountered before expression starts, check end of expression for matching close bracket.
repeat until you hit an open bracket that can't be matched, or you hit the start of the expression
*/
var flag = 0;
while (newexpression.match(/^\(/) && newexpression.match(/\)$/) && flag < 20){  console.log(flag, '::', newexpression.match(/^\(/));
	newexpression = newexpression.substring(1,newexpression.length - 1);
	flag++;
	}

flag = 0;
while (newexpression.match(/^\\left\(/) && newexpression.match(/\\right\)$/) && flag < 20){
	newexpression = newexpression.substring(6,newexpression.length - 7);
	flag++;
	}

return newexpression;
}

function stripColorFromMath(latex_expression){
var texline = latex_expression;
var map; 
var p1, p2, q1, q2; 
//chars of interest appear at p1, p1 + 7, and the pairs associated with these in the delimiter map

while (texline.match(/color/)!=null){
	map = mapDelimiters(texline);
	p1 = texline.indexOf('{\\color{');
	q1 = p1+7;

	for (var i=0; i < map.length; i++){
		if (map[i][0] == p1){
			p2 = map[i][1]; //second coordinate in pair
			}
		if (map[i][0] == q1){
			q2 = map[i][1]; //ditto
			}		
		}	
		
	
	texline = texline.substring(0, p1) + texline.substring(q2+1, p2) + texline.substring(p2+1);	
	}
	
return texline; 
}

function colorThis(expressionP, colornumberP){
return '{\\color{'+COLOR_Array[incrementColor(colornumberP-1)]+'} '+ expressionP + '}' ;
}

function spaceOperations(equationnn){
var x = equationnn;

x = x.replace(/\+/g, ' + ');
x = x.replace(/-/g, '  -  ');
return x;
}

function zeroLevelTidyTerms(expression){
/*	+-	--> -
	-+ 	-->	-
	++	-->	+
	--	-->	+
*/
var tidiedex  = expression.replace(/\s/g,'');

tidiedex = tidiedex.replace(/\+\+/g,'+');
tidiedex = tidiedex.replace(/-\+/g,'-');
tidiedex = tidiedex.replace(/\+-/g,'-');
tidiedex = tidiedex.replace(/--/g,'+');

tidiedex = tidiedex.replace(/\((\d+)\)/g, '$1');

return tidiedex;
}

function firstLevelTidyTerms(latex_multivar_rational_expression){
/* ***********************************************************
a 'first level' tidy performs the following replacements: 
\+(\+\d+)  -->  \d+
 -(\+\d+)  -->  -\d+
 \+(-\d+)  -->  -\d+
 - (-\d+)  -->  +\d+

************************************************************* */
var tidied = latex_multivar_rational_expression;

var stuff_to_keep1 = '(\\d+([xyzw](\\^\\d)?)*)';
var stuff_to_keep2 = '(\\{\\\\color\\{[^}]+\\}(?=\\+)?\\d+([xyzw](\\^\\d)?)*\\})';
var stuff_to_keep = '(' + stuff_to_keep1 + '|' + stuff_to_keep2 + ')';


var keep_pattern = new RegExp(stuff_to_keep, 'g');
var plus_bracket = new RegExp('\\+\\(' + stuff_to_keep + '\\)','g');
var minus_bracket = new RegExp('-\\(' + stuff_to_keep + '\\)','g');
var plus_bracket_plus = new RegExp('\\+\\(\\+' + stuff_to_keep + '\\)','g');
var minus_bracket_plus = new RegExp('-\\(\\+' + stuff_to_keep + '\\)','g');
var plus_bracket_minus = new RegExp('\\+\\(-' + stuff_to_keep + '\\)','g');
var minus_bracket_minus = new RegExp('-\\(-' + stuff_to_keep + '\\)','g');
var bracket_nosign = new RegExp('\\(' + stuff_to_keep + '\\)','g');
var bracket_sign = new RegExp('\\(([+//-])' + stuff_to_keep + '\\)','g');
var start_plus = new RegExp('(?=[=^]\+)' + stuff_to_keep,'g');


tidied = tidied.replace(/\s/g,'');
tidied = tidied.replace(plus_bracket,'+ $1');
tidied = tidied.replace(minus_bracket,'- $1');
tidied = tidied.replace(plus_bracket_plus,'+ $1');
tidied = tidied.replace(minus_bracket_plus,'- $1');
tidied = tidied.replace(plus_bracket_minus,'- $1');
tidied = tidied.replace(minus_bracket_minus,'+ $1');

tidied = tidied.replace(bracket_nosign,'$1');
tidied = tidied.replace(start_plus,'$1');

//tidied = tidied.replace(/\+/g, ' + ');
tidied = tidied.replace(/=\+/, '=');

tidied = tidied.replace(bracket_sign, '$1$2');

tidied = tidied.replace(/^\+/g, '');

return tidied;
}

function secondLevelTidyTerms(latex_multivar_rational_expression){
//var VARIABLES_pattern = '[xyzw]'

var simplified = latex_multivar_rational_expression;
	simplified = simplified.replace(/\s/g,'');

var patt1 = new RegExp('([+\\-]|^)0'+VARIABLES_pattern+'*(?=([+\\-=]|$))', 'g'); //chop 0 terms
var patt2 = new RegExp('([+\\-()=[\]]|^)1('+VARIABLES_pattern+'+)\\s*(?=([+\\-=()]|$))', 'g'); //leave out implied 1s

var patt3 = new RegExp('([+\\-=[\\](){}])1(x(\\^\\d)?)(?=[+\\-=(])', 'g');

simplified = simplified.replace(patt1, '');
simplified = simplified.replace(patt2, '$1$2');
simplified = simplified.replace(patt3, '$1$2');

if (simplified == ''){
	simplified = 0;
	}

return simplified;
}

/*Checks for math syntax errors. Not to be used just for simplifying or reducing
- checks for operation next to a negative number:
	ex.  8 \times -6  -->  8 \times (-6)
	ex.  

   */

function tidyQuadraticExpression(someQuadraticExpressionPAR){
//returns a new string
/*	+-	--> -
	-+ 	-->	-
	++	-->	+
	--	-->	+
*/
var tidied  = someQuadraticExpressionPAR.replace(/\s/g,'');

tidied = tidied.replace(/\+\+/g,'+');
tidied = tidied.replace(/-\+/g,'-');
tidied = tidied.replace(/\+-/g,'-');
tidied = tidied.replace(/--/g,'+');

tidied = tidied.replace(/\((\d+)\)/g, '$1');

return tidied;

}

