
//GLOBAL: 
var MAX_ROOT_GENERATOR_FACTOR = [8, 10, 12] ;
var MAX_MULTIPLIER_FACTOR = [4, 8, 12] ;  //max integer that can be factored out of the initial quadratic
var NUMBER_OF_QUAD_TYPES = 5;

function quadraticExpressionUpToThisLevel(levelPARAMETER){

var maxlevel = Math.floor(Math.random()*NUMBER_OF_QUAD_TYPES) ; //should return a number from 0 up to 4 (inclusive)

return quadraticExpression(maxlevel);

}


function quadraticExpression(levelPAR){
if ((levelPAR == 0)||(levelPAR==null)){ return type0FactorableQuadratic() ; }
if (levelPAR == 1){ return type1FactorableQuadratic() ; }
if (levelPAR == 2){ return type2FactorableQuadratic() ; }
if (levelPAR == 3){ return type3FactorableQuadratic() ; }
if (levelPAR == 4){ return type4FactorableQuadratic() ; }
alert('can\'t read question level');
return;
}

function type0FactorableQuadratic(){
//Type 0 quadratic: leading coefficient of quadratic is 1 , positive or negative roots

var r1 = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);    
var r2 = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]); 

r1 = posORneg1()*r1;
r2 = posORneg1()*r2;
/*Q = (x - r1)(x - r2)*random;
	= (x^2  -r1x-r2x + r1*r2)*random ; 
*/
//var k = 1;  //k is the 'pseudo- factor' 
var Q = 'x^2 ' + '-'+ eval(r1 + r2).toString() + 'x' + ' + ' + eval(r1*r2).toString() ; 
Q = tidyQuadraticExpression(Q);

return Q; console.log(Q);
}

function type1FactorableQuadratic(){
//Type 1 quadratic: leading coefficient of quadratic may be greater than 1 but can be factored out, positive roots
//pseudo-non-1 leading coefficient also  (each term multiplied by a constant)

var r1 = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);    
var r2 = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]); 

r1 = posORneg1()*r1;
r2 = posORneg1()*r2;
/*Q = (x - r1)(x - r2)*random;
	= (x^2  -r1x-r2x + r1*r2)*random ; 
*/
var k = Math.ceil(Math.random()*MAX_MULTIPLIER_FACTOR[2]);  //k is the 'pseudo- factor' 
var Q = k.toString()+'x^2 ' + '-'+ eval(k*(r1 + r2)).toString() + 'x' + ' + ' + eval(k*r1*r2).toString() ; 
Q = tidyQuadraticExpression(Q);

return Q; 
}

function type2FactorableQuadratic() {
//Type 2: factorable over integers, positive roots
//Question: If we can find pq st p+q=B and pq = AC, does Ax2+Bx+c have to be factorable? 
//no restriction on leading coefficient

var r1num = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);    
var r1den = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);

var r2num = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]); 
var r2den = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);

//Reduce the fractions that are x1 and x2 (the roots)
r1num = r1num/gcd(r1num, r1den);  
r1den = r1den/gcd(r1num, r1den);

r2num = r2num/gcd(r2num, r2den);
r2den = r2den/gcd(r2num, r2den);


var Q = eval(r1den*r2den).toString() + 'x^2 ' + ' - ' +  eval(r1num*r2den + r2num*r1den).toString() + 'x' + ' + ' + eval(r1num*r2num).toString() ; 

Q = tidyQuadraticExpression(Q);

return Q;
}

function type3FactorableQuadratic() {
//Type 3: factorable over integers, positive or negative roots
//For me to ponder: If we can find pq st p+q=B and pq = AC, does Ax2+Bx+c have to be factorable? 

var r1num = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);    
var r1den = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);

var r2num = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]); 
var r2den = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);

r1num = r1num/gcd(r1num, r1den);  
r1den = r1den/gcd(r1num, r1den);

r2num = posORneg1()*r2num/gcd(r2num, r2den);
r2den = posORneg1()*r2den/gcd(r2num, r2den);

/*Q = (x - r1num/r1den)(x - r2num/r2den)*r1den*r2den;
	= r1den*r2den*x^2 - (r1num*r2den + r2num*r1den)x + r1num*r2num ; 
*/

var Q = eval(r1den*r2den).toString() + 'x^2 ' + plusORminus() +  eval(r1num*r2den + r2num*r1den).toString() + 'x' + ' + ' + eval(r1num*r2num).toString() ; 

Q = tidyQuadraticExpression(Q);

return Q;
}

function type4FactorableQuadratic() {
//Type 4: factorable over integers, positive or negative roots, possible common integer factor at beginning
//For me to ponder: If we can find pq st p+q=B and pq = AC, does Ax2+Bx+c have to be factorable? 

var r1num = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);    console.log(r1num);
var r1den = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);

var r2num = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]); 
var r2den = Math.ceil(Math.random()*MAX_ROOT_GENERATOR_FACTOR[1]);

r1num = r1num/gcd(r1num, r1den);  console.log(r1num);
r1den = r1den/gcd(r1num, r1den);

r2num = posORneg1()*r2num/gcd(r2num, r2den);
r2den = posORneg1()*r2den/gcd(r2num, r2den);

/*Q = (x - r1num/r1den)(x - r2num/r2den)*r1den*r2den;
	= r1den*r2den*x^2 - (r1num*r2den + r2num*r1den)x + r1num*r2num ; 
*/
var k = Math.ceil(Math.random()*MAX_MULTIPLIER_FACTOR[2]);  //k is the 'pseudo- factor' 
var Q = eval(k*r1den*r2den).toString() + 'x^2 ' + ' - ' +  eval(k*r1num*r2den + k*r2num*r1den).toString() + 'x' + ' + ' + eval(k*r1num*r2num).toString() ; 

Q = tidyQuadraticExpression(Q);

return Q;
}





