
/*create the equationLP object class - linear equations in 'prepared' form: 
        a sum of bracketed terms = a sum of bracketed terms  
note: negative terms have the form (-Kx), positive terms are like (Kx)	*/
function LEequationLP(eqnblah) //defines a new object
{
this.full = eqnblah ;
this.solution = LEsolveEqnLP(eqnblah) ;
this.leftside= eqnblah.split("=")[0];
this.rightside= eqnblah.split("=")[1];
this.numterms = eqnblah.split(/[=+]/).length ;
if (/\(\([^-()]+\)x?\)/.test(eqnblah)) 
	{this.numposterms = eqnblah.match(/\(\([^-()]+\)x?\)/g).length ;}
	else {this.numposterms = 0;}
if (/\(\(-[^()]+\)x?\)/.test(eqnblah)) 
	{this.numnegterms = eqnblah.match(/\(\(-[^()]+\)x?\)/g).length ;}
	else {this.numnegterms = 0;}

//Left hand side properties:
this.leftsidenumterms = eqnblah.split("=")[0].split("+").length ;
if (/\(\([^()]+\)\)/.test(eqnblah.split("=")[0]))
	{this.l_numconsts = eqnblah.split("=")[0].match(/\(\([^()]+\)\)/g).length}
	else {this.l_numconsts = 0;}
if (/\(\(-[^()]+\)\)/.test(eqnblah.split("=")[0]))
	{this.l_numnegconsts = eqnblah.split("=")[0].match(/\(\(-[^()]+\)\)/g).length; }
	else {this.l_numnegconsts = 0; }
if (/\(\([^()]+\)\)/.test(eqnblah.split("=")[0])) 
	{this.l_numposconsts = eqnblah.split("=")[0].match(/\(\([^()]+\)\)/g).length; }
	else {this.l_numposconsts = 0}
if (LEsumFractionArray(LEvarTermsLP(eqnblah,'left')))
	{this.l_sumvar = LEsumFractionArray(LEvarTermsLP(eqnblah,'left')) ;}
	else {this.l_sumvar = "0";}
if (LEsumFractionArray(LEconstTermsLP(eqnblah,'left')))
    {this.l_sumconst = LEsumFractionArray(LEconstTermsLP(eqnblah,'left')) ;}
	else {this.l_sumconst = "0";}
	
//Right hand side properties:
this.rightsidenumterms = eqnblah.split("=")[1].split("+").length ;
if (/\(\([^()]+\)\)/.test(eqnblah.split("=")[1]))
	{this.r_numconsts = eqnblah.split("=")[1].match(/\(\([^()]+\)\)/g).length}
	else {this.r_numconsts = 0;}
if (/\(\(-[^()]+\)\)/.test(eqnblah.split("=")[1]))
	{this.r_numnegconsts = eqnblah.split("=")[1].match(/\(\(-[^()]+\)\)/g).length; }
	else {this.r_numnegconsts = 0; }
if (/\(\([^()]+\)\)/.test(eqnblah.split("=")[1])) 
	{this.r_numposconsts = eqnblah.split("=")[1].match(/\(\([^()]+\)\)/g).length; }
	else {this.r_numposconsts = 0}
if (LEsumFractionArray(LEvarTermsLP(eqnblah,'right')))
	{this.r_sumvar = LEsumFractionArray(LEvarTermsLP(eqnblah,'right')) ;}
	else {this.r_sumvar = "0";}
if (LEsumFractionArray(LEconstTermsLP(eqnblah,'right')))
    {this.r_sumconst = LEsumFractionArray(LEconstTermsLP(eqnblah,'right')) ;}
	else {this.r_sumconst = "0";}

}


/*This function preps eqnstring by putting it in a standard form to make analysis easier. 
Returns the new equation as a string.  Terms are in the form: +((-?coeff)var?)
Sample entry string: 
{\begin{align}\frac{2}{5}x+\frac{4}{3}-\frac{4}{3}&=\frac{3}{2}-\frac{4}{3}-5+(-2)-(\frac{2}{4})\end{align}}
Sample output string: 
((2/5)x)+((4/3))+((-4/3))=((3/2))+((-4/3))+((-5))+((-2))+((-2/4))
*/
function LEredress(eqnstring)
{
var x; 

x = eqnstring; 

//latex stuff and whitespace
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

//write fractions with sign in numerator


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


//double brackets around constant terms
x = x.replace(/(\([^()]+\))(\+|=|$)/g, "($1)$2"); 



return x; 

}



