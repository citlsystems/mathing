/* **********************************************
- inputs are latex coefficients in the form of an integer fraction:
[+\-]?\frac{[+\-]?\d+}{[+\-]?\d+}
binary functions take two such fractions
unary functions will take one
output will be in the form of a fraction, even if the 
new denominator is 1
************************************************ */

function LEisLatexIntegerFraction(expressionP){
var x = expressionP.replace(/\s/g,'');
var fractionpattern = '[+\\-]?\\\\frac\\{[+\\-]?\\d+\\}\\{[+\\-]?\\d+\\}';
var fraction_regex = new RegExp(fractionpattern);

if (x == x.match(fraction_regex)){ 
	return true;
	}
else {
	return false;
	}
}

function LEputFractionSigninNumerator(latex_fractionP){
var afraction = latex_fractionP;
	afraction = afraction.replace(/\s/g,'');
var frac = afraction.match(/[+\-]?\\frac\{[+\-]?(\d+)\}\{[+\-]?(\d+)\}/); //swap (\d+) for more complex constant form later
var allsigns = afraction.match(/([+\-]?)\\frac\{([+\-]?)\d+\}\{([+\-]?)\d+\}/);
var polarity = parseInt(allsigns[1]+'1', 10) * parseInt(allsigns[2]+'1', 10) * parseInt(allsigns[3]+'1',10); 
var sign = '';
if (polarity == 1){sign = '';}
if (polarity == -1){sign = '-'};

afraction = '\\frac{' + sign + frac[1] + '}{'+frac[2]+'}';

return afraction;
}

function LEfactorFractionSignOutFront(latex_fractionP){
var afractionaa = latex_fractionP;
	afractionaa = afractionaa.replace(/\s/g, '');
	
var fracxx = afractionaa.match(/[+\-]?\\frac\{[+\-]?(\d+)\}\{[+\-]?(\d+)\}/); //swap (\d+) for more complex constant form later

var allsigns = afractionaa.match(/([+\-]?)\s*\\frac\{([+\-]?)\s*\d+\}\{([+\-]?)\s*\d+\}/);

if (allsigns!=null){
	for (var j = 1; j< 4;j++){
		if (!allsigns[j]){
			allsigns[j]='+';
			}
		}

var polarity = parseInt(allsigns[1]+'1', 10) * parseInt(allsigns[2]+'1', 10) * parseInt(allsigns[3]+'1',10); 
var sign = '';
if (polarity == 1){sign = '+';}
if (polarity == -1){sign = '-';}
}
else {sign = 'ERROR';}

if(fracxx==null){fracxx = [777,777,777,777];}

var answer = sign + '\\frac{'+ fracxx[1] + '}{'+fracxx[2]+'}';

return answer;
}

function LEwriteIntegerAsFraction(someintegerP){
var lefrac = someintegerP;

//if (typeof(parseInt(someintegerP, 10))=='number'){
	lefrac = '\\frac{'+someintegerP+'}{1}';
//	}


return lefrac;
}

function LEreciprocalOf(latex_fractionP){
var toreturn = latex_fractionP;


if (LEisLatexIntegerFraction(latex_fractionP)){
	toreturn = latex_fractionP.replace(/\s/g,'');
	if (toreturn.match(/^[+\-]/)==null){toreturn= '+'+toreturn;}
	var fraccomponents = toreturn.match(/([+\-])\\frac\{([+\-]?\d+)\}\{([+\-]?\d+)\}/); //$1 = sign $2 = numerator $3 = denominator
	//fraccomponents[0] = whole match
	toreturn = fraccomponents[1] + '\\\\frac{'+fraccomponents[3] +'}{'+fraccomponents[2] +'}';
	toreturn = LEputFractionSigninNumerator(toreturn);
	}
	
return toreturn; 
}

function LEreduceLatexIntFraction(latex_fracPAR){

var given = latex_fracPAR;

if (LEisLatexIntegerFraction(latex_fracPAR)){
given = LEfactorFractionSignOutFront(latex_fracPAR);
given = given.replace(/\s/g,'');
var fracpatt = '([+\\-])\\s*\\\\frac\\{(\\d+)\\}\\{(\\d+)\\}';
var fracregex = new RegExp(fracpatt, 'g');

var frac = fracregex.exec(given);

if (frac[1] == '+'){var sign = '';} else {var sign = '-';}

var a = parseInt(frac[2],10);
var b = parseInt(frac[3],10);
var c = LEgcd(a,b);

if (a==b==1){given = sign+'1';}
else {
	if (c==1){given = latex_fracPAR;} 
	else {
		a = a / c ;
		b = b / c ; 
		if (a==b==1){given = sign+'1';}
		else {
			given = sign+'\\frac{'+a.toString() + '}{'+b.toString() + '}'; 
			}
		}
	}
}
return given;
}

function LEmultiplyLatexIntegerFractions(frac1PAR, frac2PAR){
//toreturn[0] = the reduced product, [1] is the not-reduced product
var toreturn = new Array();

toreturn[0] = frac1PAR + '\\times' + frac2PAR;


if (LEisLatexIntegerFraction(frac1PAR) && LEisLatexIntegerFraction(frac2PAR)){
	var a2 = LEputFractionSigninNumerator(frac1PAR);
		a2 = a2.replace(/\s*/g, ''); 
	var b2 = LEputFractionSigninNumerator(frac2PAR); 
		b2 = b2.replace(/\s*/g, ''); 
		
	var fracpatt = '\\\\frac\\{([+\\-]?\\d+)\\}\\{([+\\-]?\\d+)\\}';
	var fracregex = new RegExp(fracpatt, 'g');
	
	var a = fracregex.exec(a2); fracregex.lastIndex = 0; 
	var b = fracregex.exec(b2); fracregex.lastIndex = 0;
	
	//var sign = parseInt(a[1]+'1', 10) * parseInt(b[1]+'1', 10) ;
	//if (sign == 1){sign = '+';} if (sign==-1){sign = '-';}
	
	toreturn[0] = '\\frac{'+ a[1] + ' \\times ' + b[1] + '}{'+a[2] + ' \\times ' + b[2] + '}';
	toreturn[1] = '\\frac{'+ (parseInt(a[1],10) * parseInt(b[1], 10)).toString() + '}{' + (parseInt(a[2],10) * parseInt(b[2], 10)).toString() + '}';
	if (LEremoveSpaces(LEfactorFractionSignOutFront(LEreduceLatexIntFraction(toreturn[1])))!= LEremoveSpaces(LEfactorFractionSignOutFront(toreturn[1]))){
		toreturn[2] = LEreduceLatexIntFraction(toreturn[1]);
		}
	}

return toreturn;
}


function LEdetectNumCoeff(latexfraction){
var a='';
if (latexfraction.match(/(?:\{[+\-]?)\d+(?:[^{}]*\})/g)[0]){
	a = latexfraction.match(/(?:\{[+\-]?)\d+(?:[^{}]*\})/g)[0];} //1st braced term
else {a = '1';}
return a;
}

function LEdetectDenCoeff(latexfraction){
var a='';
if (latexfraction.match(/(?:\{[+\-]?)\d+(?:[^{}]*\})/g)[1]){
	a = latexfraction.match(/(?:\{[+\-]?)\d+(?:[^{}]*\})/g)[1];} //2nd braced term
else {a = '1';}
return a;
}


function LEdetectNumerator(latexfraction){
var x = latexfraction.match(/(?:frac\{)([^{}]*)(?:\})/g)[0];
x = x.replace(/(?:frac\{)([^{}]*)(?:\})/, '$1');
return x;
}

function LEdetectDenominator(latexfraction){
var x = latexfraction.match(/(?:frac\{[^{}]*\}\{)([^{}]*)(?:\})/g)[0];
x = x.replace(/(?:frac\{[^{}]*\}\{)([^{}]*)(?:\})/, '$1');
return x;
}


