

/*  ---- NEED MORE TIME TO DO THIS PROPERLY...
function expressionQuadraticPrepped(someQuadraticExpression) {

//First test to make sure input is a quadratic expression.  If not, return 'WRONG'


var standardForm =  //Need to put the input in standard form to begin analysis 
// combine like terms
//write terms in order of degree? Not sure if this is necessary for it to work

var qex = redress(someQuadraticExpression); 

var factoredExpression = factorRationalQuadraticExpressionSolution(

this.full = qex ;
this.root1 = 
this.root2 = 
this.valueAt0 = 
this.vertexx = 
this.vertexy = 

}

/*redress quadratic expression so that it may be evaluated by parsing to
integer and calling eval()
*/


function redressQEX(someQEx) {
var x = someQEx; 

//get rid of latex stuff and whitespace
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

//change x^{stuff}  

//double brackets around constant terms (do this one last)
x = x.replace(/(\([^()]+\))(\+|=|$)/g, "($1)$2"); 

return x; 
}


