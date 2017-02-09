/* Functions called to solve the linear equation.  */

/* translates a string arithmetical expression to a number expression
and calculates the value of the expression */
function LEcalculate(stringexpression){
    "use strict";
    var s= stringexpression;
    if(/[^0-9()*+\/ .-]+/.test(s)) throw Error('bad input...');
    try{
        var ans= eval(s);
    }
    catch(er){
        alert(er.message);
    }
    return ans.toFixed(10);
}

/* returns an array of the variable term coefficients on the indicated
side of the equation */
function LEvarTermsLP(eqn,rightORleftSide){ 
var a; 
var eqnarray =new Array();
var side=0;

if (rightORleftSide == "left") {side = 0;}
if (rightORleftSide == "right") {side = 1;}

a = eqn.split("=")[side].replace(/\(\([^()]+\)\)/g,"0"); //set constant terms to zero
a = a.replace(/[a-z]/g,""); //take variables out
a = a.replace(/\(|\)/g,""); //remove brackets
a = a.split("+") ; //make a an array of the variable coefficients

eqnarray = a;

return eqnarray ;
}


/* returns an array of the constant coefficients on the indicated
side of the equation */
function LEconstTermsLP(eqn, rightORleftSide){ 
var a;
var eqnarray = new Array();
var side=0;

if (rightORleftSide == "left") {side = 0;}
if (rightORleftSide == "right") {side = 1;}

a = eqn.split("=")[side].replace(/\(\([^()]+\)x\)/g,"0");
a = a.replace(/\(|\)/g,"");
a = a.split("+") ;

eqnarray = a;

return eqnarray ;
}


//sums an array of fractions and/or integers, output is a string
function LEsumFractionArray(arr){  
var length = arr.length;
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

xcoeff = LEsubtractFracs( LEsumFractionArray(LEvarTermsLP(eqn,'left')),LEsumFractionArray(LEvarTermsLP(eqn,'right'))) ; //moves x's to the left side
 
constcoeff = LEsubtractFracs(LEsumFractionArray( LEconstTermsLP(eqn,'right') ),LEsumFractionArray(LEconstTermsLP(eqn,'left'))) ; //moves constants to the right side

solution = LEdivideFracs(constcoeff, xcoeff);

return solution;
}

/* NOT USING THIS CURRENTLY
function sumArray(arr) //sums an array of numbers like 1,2,3
{
var length = arr.length;
var total = new Number;

total = 0;

for (var i = 0; i < length; i++) {
  total += Number(arr[i]);
  
}

return total;
}
*/
