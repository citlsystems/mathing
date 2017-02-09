function LEisLeftDelimiter(somechar){
var flag=false;

for (var i =0; i < LEFT_DELIMITERS.length; i++){
	if (LEFT_DELIMITERS[i] == somechar){
		flag = true;
		}
	}
return flag;
}

function LEisRightDelimiter(somechar){
var flag=false;

for (var i =0; i < RIGHT_DELIMITERS.length; i++){
	if (RIGHT_DELIMITERS[i] == somechar){
		flag = true;
		}
	}
return flag;
}

/*-----------------------------------------------------------------------
Returns an array of [start,end, nested level] coords that maps the delimiter positions
and tells how deep down the delimited group is nested

Possible latex delimiters:
( ), [ ], \{ \}, | |, \| \|,
\langle  \rangle, \lfloor  \rfloor,
\lceil  \rceil, \ulcorner  \urcorner
NOTE: ABSOLUTE VALUE BRACKETS NOT SUPPORTED YET!!

Note:  \left, \right can be used with a pair of delimiters to
resize.  i.e., might have '\left( xxxx \right).
Also, a . may be appended to the right of a bracketed expression to
make either the left or right bracket invisible. 

Algorithm:
Read the expression and map out the nested bracketed components
of the expression. 
nested level 0:  The whole expression
nested level 1: sub-expression within a level 0 expression.
nested level 2: sub-expression within a level 1 expression
etc

Want to record
- all subexpressions, what nested level they are, and the order in 
which they are encountered in they're nested level
i,e, in the expression \frac{2x - (3+4)^2}{\frac{2}{x + 1}-2 + (5-x)^2} 
would generate the following tree

expression, nestedlevel, order within that nested level
\frac{2x - (3+4)^2}{\frac{2}{x + 1}-2 + (5-x)^2}, 0, 1
{2x - (3+4)^2}, 1, 1
\frac{2}{x + 1}-2 + (5-x)^2}, 1, 2
(3+4), 2,1
\frac{2}{x+1}, 2, 2
(5-x), 2,3
{x+1},3,1
--------------------------------------------------------------------- */
function LEmapDelimiters(rational_expression){

var startpt = 0; var endpt = 0;

var expression = rational_expression;
var delimiter_map = new Array();



for (var delimiter_index = 0; delimiter_index < LEFT_DELIMITERS.length; delimiter_index++){

while (expression.indexOf(LEFT_DELIMITERS[delimiter_index]) != -1){   // (string.indexOf(?) returns -1 if ? is not found in the string

var nested_counter = 0;
for (var i=0; i < rational_expression.length ; i++){
	
	if (expression.charAt(i) == LEFT_DELIMITERS[delimiter_index]){   //keep re-setting the left start point until you find the matching right end point, then remove that pair from the string
		startpt = i; nested_counter++;
		}
	if (expression.charAt(i) == 'L'){nested_counter++;}
	if (expression.charAt(i) == 'R'){nested_counter--;}
	if (expression.charAt(i) == RIGHT_DELIMITERS[delimiter_index]){
		endpt = i; 
		delimiter_map.push([startpt, endpt, nested_counter]);
		expression = expression.substring(0, startpt) + "L" + expression.substring(startpt+1, endpt) + "R" + expression.substring(endpt+1,rational_expression.length); 
		nested_counter-- ;
		break;
		}
	}
	
}

}
var delimiter_map_sorted = new Array(delimiter_map.length);

	function LEcompareOrderOfDelims(a, b) {
		if (a[0] < b[0]){
			return -1;}
		if (a[0]>b[0]){
			return 1;}
		// a must be equal to b
		return 0;
		}

delimiter_map_sorted = delimiter_map.sort(LEcompareOrderOfDelims) ;
//console.log('map is an array?: ', Array.isArray(delimiter_map));
//console.log(delimiter_map[3][1]);
return delimiter_map_sorted;

}


/*  */
function LEdetectVariables(expressionPAR){ //returns an array of the variables used
var v = new Array();
var j = 0;

for (var i=0; i < ALL_VARS.length; i++){
	var variable = new RegExp(ALL_VARS[i], 'g');
	if (expressionPAR.match(variable)){v[j] = ALL_VARS[i]; j++;}
	}
return v;
}


function LEsumVarExponent(latexexpression, variable){
//calculates the sum of the exponents of variable in latexmonomial
//returns the sum as a number
var pattern1 = new RegExp(variable+'\\^\\{(-?\\d+)\\}','g');
var pattern2 = new RegExp(variable+'\\^(\\d)','g');
var pattern3 = new RegExp(variable+'(?!\\^)','g');
var expression = latexexpression;
var count = '0';
var result;

while ((result = pattern1.exec(expression)) != null){
	count += '+(' + result[1] + ')';
	}


while ((result = pattern2.exec(expression)) != null){
	count += '+(' + result[1] + ')';
	}

if (expression.match(pattern3)){
for (var i=0; i<expression.match(pattern3).length;i++){
	count += '+(1)';
	}
}
	
count = eval(count);
return count;
}

function LEsolutionRatExpType1(ratexp){ //monomial over monomial
/*
Algorithm: 
1. detect sign in num and den. store values as num_sign, den_sign;
2. detect coefficient in numerator and denominator, store as num_coef, den_coef;
3. detect variables in expression. store in an array
4. for each variable in the array, detect the exponent in the numerator and denominator for that variable
5. write a new expression: (store as line1)
	newsign + \frac{num_coeff}{den_coeff} \cdot var1^{exp1n-exp1d} \cdot var2^{exp2n-exp2d} ...
*/

var sign, numerator, denominator, variables;
var coeff, coeffn, coeffd;
var varterm='';
var solution;

sign = LEdetectMonomialSign(ratexp);
if (sign=='+'){sign='';}

numerator = LEdetectNumerator(ratexp);
denominator = LEdetectDenominator(ratexp);

coeffn = parseInt(LEdetectMonomialCoeff(numerator)) / LEgcd(parseInt(LEdetectMonomialCoeff(numerator)), parseInt(LEdetectMonomialCoeff(denominator)));
coeffd = parseInt(LEdetectMonomialCoeff(denominator)) / LEgcd(parseInt(LEdetectMonomialCoeff(numerator)), parseInt(LEdetectMonomialCoeff(denominator))); 

coeff = sign + '\\frac{' + coeffn.toString() + '}{' + coeffd.toString() + '}' ;


/*for each var in ALL_VARS, if var is present, get numerator exponent, 
and denominator exponent and subtract.  Append var to new exponent to solution
*/
var expression = ratexp.replace(/frac/,''); //remove letters in case they are variables for what follows
for (var i=0; i< ALL_VARS.length;i++){
	var pattern = new RegExp(ALL_VARS[i],'g');
	if (expression.match(pattern)!=null){
		varterm += ALL_VARS[i] + '^{' + LEsumVarExponent(numerator,ALL_VARS[i]).toString() + '-'+ LEsumVarExponent(denominator,ALL_VARS[i]).toString() + '}';
		}
	}


		
		
solution = coeff + varterm;

return solution;
}



