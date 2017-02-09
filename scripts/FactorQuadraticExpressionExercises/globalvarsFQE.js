
//Global variables
var inputLinEqn;
var solutionLinEqn;
var inputRatExp;
var solutionRatExp;
var inputQuadratic;
var solutionQuadratic;
var polynomial7;
var polynomial9;


var inputEqn1;

var dressedEqn1;
var inputEqn1LP;  //user's previous equation
var inputEqn2;   
var dressedEqn2;
var inputEqn2LP; //user's current equation

var solutionQuad;
var inputQuadratic; 


//when generating random input:
var MAX_EXP = 2; //max exponent to be used in generating powers
var MAX_COEFF = 3; //max integer to use in generating coefficients, numerators, denominators & bases of powers
var NUM_VARS = 2;  //max number of variables to use



var ALL_VARS = ['x','y','z','w'];
var LEFT_DELIMITERS = ['(','\{','[', '\\langle', '\\lceil', '\\lfloor', '\\ulcorner' ];
var RIGHT_DELIMITERS = [')','\}',']', '\\rangle', '\\rceil', '\\rfloor', '\\urcorner' ];
var ABS_FLAG_LEFT; //to distinguish left abs val delimiter from right



//for simplifying rational expressions
var Terms_in_Numerator; 
var Terms_in_Denominator;
var ratExpDelimitersArray;

var RationalExpressionTypes = [1, 2, 3, 4, 5];
// 1 = monomial over monomial
// 2 = binomial over monomial

var COLOR_Array = new Array();
//COLOR_Array = ['black', 'red', 'blue', 'green' ,'orange','Aquamarine', 'Periwinkle', 'YellowGreen' ,'OrangeRed', 'NavyBlue', 'brown', 'purple', 'pink'];
COLOR_Array = ['black', 'red', 'blue', 'green' ,'orange','Aquamarine', 'Periwinkle', 'OrangeRed', 'NavyBlue', 'brown', 'purple',];
function incrementColor(somenumber){
//parameter = index being used to keep track of colors used. 
var x = somenumber;
x = (x + 1)%COLOR_Array.length;
if (x==0){x++}; //don't want to use black
return x;
}

//patterns
var Pa_variableP = /[wxyz]/g;
var VARIABLES_pattern = '[xyzw]';
var VARIABLES_list = 'xyzw';
var VARIABLES_regex = new RegExp(VARIABLES_pattern, 'g');

var EXPONENT_pattern = '\\^(\\{?([+\\-]?(\\\\frac\\{)?\\d(\\d*\\}\\{\\d+\\})?))\\}?';  //$1 in this is the exponent expression

var QUADRATIC_pattern = '([+\\-]?\\d*)x\\^2(([+\\-])(\\d*))x(([+\\-])(\\d+))';
//   Note: QUAD_regex.exec(quad in standard form) =  array;  array[1] = A, array[2] = B , array[3] = signB, array[4] = |B|, array[5] = C, array[6] = sign C, array[7] = |C|
var QUAD_regex = new RegExp(QUADRATIC_pattern); 

//BASIC PATTERNS
var POS_INT = '\\d+';
var POS_FRAC =  '\\\\frac\\{[+\\-]?\\d+\\}\\{[+\\-]?\\d+\\}' ;

//PATTERNS FOR CONSTANTS
var INTEGER_CONSTANT_pattern = '([+\\-=]|^)'+POS_INT+'(?=([+\\-=]|$))';
var FRACTION_CONSTANT_pattern = '([+\\-=]|^)'+POS_FRAC+'(?=([+\\-=]|$))';
var POS_INT_EXPONENTIAL_CONSTANT_pattern = '([+\\-=]|^)\\d+'+EXPONENT_pattern+'(?=([+\\-=]|$))';
var NEG_INT_EXPONENTIAL_CONSTANT_pattern = '([+\\-=]|^)\\(-\\d+\\)'+EXPONENT_pattern+'(?=([+\\-=]|$))';
var CONSTTERM_pattern = '('+NEG_INT_EXPONENTIAL_CONSTANT_pattern+'|'+POS_INT_EXPONENTIAL_CONSTANT_pattern+ '|'+FRACTION_CONSTANT_pattern+ '|'+INTEGER_CONSTANT_pattern+ ')';   
var CONSTTERM_regex = new RegExp(CONSTTERM_pattern, 'g');

//PATTERNS FOR COMPOUND CONSTANTS

//PATTERNS FOR VARIABLE COEFFICIENTS
var ALL_COEFF_patterns = '(((((?=[^t])\\()|\\\\left\\()([+\\-(]|\\\\left\\()*)?(\\\\frac\\{)?([+\\-(]|\\\\left\\()*\\d+(((?=[^t])\\))|\\\\right\\))*(\\^(\\{([+\\-(]|\\\\left\\()*)?\\d(\\d*(((?=[^t]))\\)|\\\\right\\))*\\})?)?(\\}\\{([+\\-(]|\\\\left\\()*\\d+(((?=[^t])\\))|\\\\right\\))*(\\^(\\{([+\\-(]|\\\\left\\()*)?\\d(\\d*(((?=[^t])\\))|\\\\right\\))*\\})?)?\\})?(((?=[^t])\\))|\\\\right\\))?)';
ALL_COEFF_patterns = ALL_COEFF_patterns.replace(/\s/g,''); //make sure no white space is left in there. 
var SIMPLE_COEFF = '('+POS_INT+'|'+POS_FRAC+')' ; //to build patterns with the coefficient
var SIMPLE_COEFF_pattern = '[+\\-]?('+POS_INT+'|'+POS_FRAC+')(?='+VARIABLES_pattern+')'  ;  //to get the coefficient
var SIMPLE_COEFF_regex = new RegExp(SIMPLE_COEFF_pattern, 'g');

//patterns for catching variables in terms (a single positive or negative var, or a var to an integer or fractional exponent
/*ex. y^{-\frac{1}{2}}*/var SOMEPOSVAR2POW_pattern = VARIABLES_pattern + EXPONENT_pattern; //exp is first capture group
/*ex. (-b)^5*/			var SOMENEGVAR2POW_pattern = '\\(-'+VARIABLES_pattern+'\\)'+ EXPONENT_pattern; //exp is second capture group
/*ex. z*/				var SOMEVAR_pattern = VARIABLES_pattern;
var ALL_VAR_patterns = '(' + SOMEPOSVAR2POW_pattern + '|' + SOMENEGVAR2POW_pattern + '|' + SOMEVAR_pattern + ')';

var LINEAR_TERM = '([+\\-]|^)'+'('+SIMPLE_COEFF+')?('+VARIABLES_pattern+')(?=([+\\-=]|$))'  ;
var AXB_pattern = '^[+\\-]?'+'('+SIMPLE_COEFF+')?('+VARIABLES_pattern+')=[+\\-]?'+ SIMPLE_COEFF + '$' ;
var BAX_pattern  = '^' + '[+\\-]?' + '('+SIMPLE_COEFF+')' + '=[+\\-]?'+'('+SIMPLE_COEFF+')?('+VARIABLES_pattern+')$';
var VARTERM_pattern =  '([+\\-=]|^)'+SIMPLE_COEFF+'*' + ALL_VAR_patterns + '+'  ;
var VARTERM_regex = new RegExp(VARTERM_pattern, 'g');
var VARTERMng_regex = new RegExp(VARTERM_pattern);



function displayArray1by2(anarrayPAR){
var x = '['+'['+anarrayPAR[0][0]+','+anarrayPAR[0][1]+']'; 

for (var i = 1 ; i < anarrayPAR.length; i++){
	x += ', ['+anarrayPAR[i][0]+','+anarrayPAR[i][1]+']';
	}
x += ']';
return x;
}

function displayArray1by3(anarrayPAR){
var x = '['+'['+anarrayPAR[0][0]+','+anarrayPAR[0][1]+','+anarrayPAR[0][2]+']'; 

for (var i = 1 ; i < anarrayPAR.length; i++){
	x += ', ['+anarrayPAR[i][0]+','+anarrayPAR[i][1]+','+anarrayPAR[i][2]+']';
	}
x += ']';
return x;
}



