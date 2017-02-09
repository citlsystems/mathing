// JavaScript Document

var concatFractionFractionExponentFractionItems="";
var fractionFractionExponentFractionNumerator ="";
var fractionFractionExponentFractionDenominator="";
var getFractionFractionExponentFractionItem="";


	function showFractionFractionExponentFractionBuilder(){
		
		document.getElementById('fractionFractionExponentPanel').style.display = "none";
		
		//console.log("fractionFractionExponentFractionPanelxxxxxx")
		//console.log("start fraction builder");
		document.getElementById('fractionFractionExponentFractionPanel').style.display = "block";
		document.getElementById('fractionFractionExponentFractionPanel').style.zIndex = 108;
		document.getElementById('fractionFractionExponentFractionPanel').style.float = "left";
		getFractionFractionExponentFractionItem="";
		UpdateMath1c(getFractionFractionExponentFractionItem);//update with empty string
		
		
		
		
	}
	
var fractionFractionExponentFractionNumeratorActive=null;	
  
  function fractionFractionExponentFractionBuilder(item_id){

	//var backSlash = String.fromCharCode('92');
	
	
		
		if(item_id == "fractionFractionExponentFractionNumeratorid"){//numerator true
			fractionFractionExponentFractionNumeratorActive=true;//input to numerator
			 
			document.getElementById("fractionFractionExponentFractionDenominatorid").style.color = "#727272";
			document.getElementById("fractionFractionExponentFractionNumeratorid").style.color = "#e4f6fe";
			
			return; //break from function
			}
			
		if(item_id == "fractionFractionExponentFractionDenominatorid"){//numerator true
			fractionFractionExponentFractionNumeratorActive=false;//input to denominator
			
			document.getElementById("fractionFractionExponentFractionNumeratorid").style.color = "#727272";
			document.getElementById("fractionFractionExponentFractionDenominatorid").style.color = "#e4f6fe";
			return; //break from function
			}
			
			
			//This is level 5 panel - No more panels imported beyond this point
			
			
			
			
			
		 if(fractionFractionExponentFractionNumeratorActive==true){
			 
			 
			 
			 ////////////////import from exponent panel////////////////
			 
			 //import from exponent panel if necessary
			/* if(exponentToFractionToggle == true){
				 
				 	//numerator = numerator + numerator;
			
					getFractionFractionExponentFractionItem =   backSlash +'frac{'+numerator+'}{'+denominator+'}';
				 	//base="";
			}*/
			 
			///////////////////////////////////////// 
			
			
			
			
			 

			if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
					
					
			
			
					//NOTE: Auto sizing brackets
			
					if(item_id == "*"){
						fractionFractionExponentFractionNumerator = fractionFractionExponentFractionNumerator + '\\cdot';
					}else{
							
						//the number of \left and \right parentheses must correspond to each other - or it breaks 
						if(item_id == "("){
							fractionFractionExponentFractionNumerator = fractionFractionExponentFractionNumerator +  '\\left('  + test + '\\right)';
						}else if(item_id == ")"){
							fractionFractionExponentFractionNumerator = fractionFractionExponentFractionNumerator + '\\right)';		
						}else{
							fractionFractionExponentFractionNumerator = fractionFractionExponentFractionNumerator + item_id;		
						}	
							
					}
					
				
			getFractionFractionExponentFractionItem =  backSlash +'frac{'+fractionFractionExponentFractionNumerator+'}{'+fractionFractionExponentFractionDenominator+'}';
			
		
			
			}
			
	
			
		}else{
			
			

			
			
			
			
			
			
			getFractionFractionExponentFractionItem = "";//reset to nothing
			
			
			//import from exponent panel if necessary
			
		 	if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")|(item_id == "+")||(item_id == "-")){
			fractionFractionExponentFractionDenominator = fractionFractionExponentFractionDenominator + item_id;
			getFractionFractionExponentFractionItem =  backSlash +'frac{'+fractionFractionExponentFractionNumerator+'}{'+fractionFractionExponentFractionDenominator+'}';
			//getFractionFractionExponentFractionItem =  backSlash +'frac{'+numerator + getFractionFractionItem+'}{'+denominator + getFractionFractionItem +'}';
			
			
			
			//getFractionFractionExponentItem =   fractionFractionBase + "^{" + fractionFractionExponent + getFractionFractionExponentFractionItem + "}";//
			
			
			}	  
		}
		

						
	  	UpdateMath1c(getFractionFractionExponentFractionItem)//update current panel
		
		
		upDatefractionFractionPanelFromfractionFractionExponentPanel();
		
		
		
		
		
		

		
		//getFractionFractionExponentItem = getFractionFractionExponentItem + getFractionFractionExponentFractionItem
		
		//mainUpdateMathjax(concatEquationItems +getFractionFractionExponentItem); //Realtime update to main Panel
		//mainUpdateMathjax(concatEquationItems +getFractionItem); //Realtime update to main Panel
		
	 }//end function
	  
	  
	function upDateFractionFractionExponentPanelFromFractionFractionExponentFractionPanel(){
		
		//validate user input
		//console.log("Test num and denom" + numerator + " " + " " +denominator)
		
		if(fractionFractionExponentFractionNumerator == ""){
			alert("Please add Numerator or select cancel")
			fractionFractionExponentFractionNumerator = "";
		}else if(fractionFractionExponentFractionDenominator == ""){
			alert("Please complete Numerator... Add Denomnator or select cancel")	
			fractionFractionExponentFractionDenominator = "";	
		}else{
			
			//mathOutputArray.push(getFractionFractionExponentFractionItem);/**************************************************************************PUSH TO ARRAY*/
			//console.log(mathOutputArray);
			
			//checkSyntaxForm();//Check user entered syntax srk
			
			
					//hide current panel
			document.getElementById('fractionFractionExponentFractionPanel').style.display = "none";
			
			
			//display previous panel
			document.getElementById('fractionFractionExponentPanel').style.display = "block";
			
			
			
			
			
			
			
			
			
			//concatFractionFractionExponentFractionItems = concatFractionFractionExponentFractionItems + getFractionFractionExponentFractionItem;
			
		
			if(exponentBaseActive==true){
				console.log("exponentBaseActive")
				console.log("getFractionFractionExponentFractionItem ==== " + getFractionFractionExponentFractionItem)
				//fractionFractionExponentFractionNumerator = fractionFractionExponentFractionNumerator + getFractionFractionExponentFractionItem
				//getFractionFractionExponentItem =  backSlash +'frac{'+fractionFractionExponentFractionNumerator+'}{'+fractionFractionExponentFractionDenominator+'}';
				fractionFractionBase = fractionFractionBase + getFractionFractionExponentFractionItem
				
			}else{
				console.log("fractionFractionDenominator")
				//fractionFractionExponentFractionDenominator = fractionFractionExponentFractionDenominator + getFractionFractionExponentFractionItem
				fractionFractionExponent = fractionFractionExponent + getFractionFractionExponentFractionItem
			}
			
			
			getFractionFractionExponentItem =   fractionFractionBase + "^{" + fractionFractionExponent + "}";//
			
			
			
			console.log("getFractionFractionExponentFractionItem xxxxxxxx " + getFractionFractionExponentFractionItem)
			//getFractionFractionExponentItem =  backSlash +'frac{'+fractionFractionExponentFractionNumerator+'}{'+fractionFractionExponentFractionDenominator+'}';
			console.log("getFractionFractionExponentFractionItem rrrrrrrrrr " + getFractionFractionExponentFractionItem)
			FFE_UpdateMathjax(getFractionFractionExponentItem)
			//document.getElementById('fractionFractionExponentPanel').style.display = "none";
			//fractionFractionExponentFraction = "";
			//fractionFractionBase="";
			//getFractionFractionExponentItem="";
			
			

			//mainUpdateMathjax(concatEquationItems)
			//document.getElementById('fractionPanel').style.display = "none";
			//getFractionFractionExponentFractionItem = ""; 
			fractionFractionExponentFractionNumerator ="";
			fractionFractionExponentFractionDenominator="";
			
		}//end else
		
		
		
	}
	
	function resetFraction1(){
		console.log("resetFraction")
		getFractionFractionExponentFractionItem="";
		fractionFractionExponentFractionNumerator ="";
		fractionFractionExponentFractionDenominator="";
		F_UpdateMathjax(getFractionFractionExponentFractionItem)
	}
	
	
	function cancelUpDateMainEquationFromFraction1(){
		document.getElementById('fractionPanel').style.display = "none";
		//getFractionFractionExponentFractionItem = ""; 
		fractionFractionExponentFractionNumerator ="";
		fractionFractionExponentFractionDenominator="";		
	}
	
	