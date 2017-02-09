
var getFractionFractionPowerItem="";
var fractionFractionExponent="";
var fractionFractionBase="";


//Array used to update parent workspace
//Array includes both exponent and base
var getFractionFractionPowerItemArray=[];
			

	function showfractionFractionExponentBuilder(){//Show Power workspace
		
		document.getElementById('fractionFractionPanel').style.display = "none";
		document.getElementById('fractionFractionExponentPanel').style.display = "block";
		document.getElementById('fractionFractionExponentPanel').style.zIndex = 98;
		document.getElementById('fractionFractionExponentPanel').style.float = "left";
		
		getFractionFractionPowerItem="";
		FFE_UpdateMathjax(getFractionFractionPowerItem);//update queue with empty string
		
		//Tex to update parent workspace
		getFractionFractionItem =  backSlash +'frac{'+ backSlash  +  "color{black}" +fractionFractionNumerator+'}{'+fractionFractionDenominator+'}'
		FF_UpdateMathjax(getFractionFractionItem)
		
		//workspace context # for keypad input
		keyBoardInputPanelNumber="3";
		
	}
	

  	function fractionFractionExponentBuilder(item_id){
	  
		if(item_id == "fractionFractionBaseId"){
			exponentBaseActive=true;
			 
			document.getElementById("fractionFractionExponentId").style.color = "#727272";
			document.getElementById("fractionFractionBaseId").style.color = "#e4f6fe";
			
			return; //break from function
		}
			
		if(item_id == "fractionFractionExponentId"){
			exponentBaseActive=false;//input to denominator
			document.getElementById("fractionFractionExponentId").style.color = "#e4f6fe";
			document.getElementById("fractionFractionBaseId").style.color = "#727272";
			
			return; //break from function
		}
			
		if(exponentBaseActive==true){//input to Base
			
				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
		
						//NOTE: Auto sizing of brackets
						if(item_id == "*"){
							fractionFractionBase = fractionFractionBase + '\\cdot';
						}else{
								
							//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
							if(item_id == "("){
								fractionFractionBase = fractionFractionBase +  '\\left(\\right.';
							}else if(item_id == ")"){
								fractionFractionBase = fractionFractionBase + '\\left.\\right)';		
							}else{
								fractionFractionBase = fractionFractionBase + item_id;
							}	
								
						}
		
				//both Base and Exponent are wrapped in TEX and stored in getFractionFractionPowerItem
				getFractionFractionPowerItem =   fractionFractionBase + "^{" + fractionFractionExponent + "}";//
				
				}	
							
		}else{
				//input to Exponent
				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
							//NOTE: Auto sizing of brackets
							if(item_id == "*"){
								fractionFractionExponent = fractionFractionExponent + '\\cdot';
							}else{
									
								//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
								if(item_id == "("){
									//numerator = numerator +  '\\left('  +  + '\\right)';
									fractionFractionExponent = fractionFractionExponent +  '\\left(\\right.';
								}else if(item_id == ")"){
									fractionFractionExponent = fractionFractionExponent + '\\left.\\right)';		
								}else{
									fractionFractionExponent = fractionFractionExponent + item_id;
								}	
									
							}
				
					//both Base and Exponent are wrapped in TEX and stored in getFractionFractionPowerItem
					getFractionFractionPowerItem =   fractionFractionBase + "^{" + fractionFractionExponent + "}";//
					
					}
			
		}//end if/else
		

		FFE_UpdateMathjax(getFractionFractionPowerItem)//Update que for current workspace
		
		//update parent workspaces
				if(fractionFractionNumeratorActive==true){//Add items to numerator in parent workspace
	
						//In the parent workspace numerator cannot be null
							if(fractionFractionNumerator==""){
							fractionFractionNumerator = fractionFractionNumerator + " ";
							}
						
						fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionPowerItemArray[getFractionFractionPowerItemArray.length-1], '');

						getFractionFractionPowerItemArray.push(getFractionFractionPowerItem)//push contents of getFractionFractionPowerItem to array
	
						fractionFractionNumerator = fractionFractionNumerator + getFractionFractionPowerItemArray[getFractionFractionPowerItemArray.length-1];
				
						getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
				
					
							if(numeratorActive==true){//Add items to numerator in parent workspace
								numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');

								getFractionFractionNumeratorItemArray.push(getFractionFractionItem)//push contents of getFractionFractionItem to array
	
								numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];
							}else{
							
								denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');

								getFractionFractionDenominatorItemArray.push(getFractionFractionItem)//push contents of getFractionFractionItem to array
	
								denominator = denominator + getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1];
							
							
							}
						

					//Tex stored in getFractionItem
					getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
				
					mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to que for main workspace
				
				}else{//Add items to denominator of parent workspace
				
							//In the parent workspace denominator cannot be null
							if(fractionFractionDenominator==""){
							fractionFractionDenominator = fractionFractionDenominator + " ";
							}
				
				
						fractionFractionDenominator = fractionFractionDenominator.replace(getFractionFractionPowerItemArray[getFractionFractionPowerItemArray.length-1], '');//

						getFractionFractionPowerItemArray.push(getFractionFractionPowerItem)//push contents of getFractionFractionPowerItem to array
	
						fractionFractionDenominator = fractionFractionDenominator + getFractionFractionPowerItemArray[getFractionFractionPowerItemArray.length-1];
						
						getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
				
				
							if(numeratorActive==true){//Add items to numerator in parent workspace
							
								numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//

								getFractionFractionNumeratorItemArray.push(getFractionFractionItem)//push contents of getFractionFractionItem to array
	
								numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];
							}else{
							
								denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//

								getFractionFractionDenominatorItemArray.push(getFractionFractionItem)//push contents of getFractionFractionItem to array
	
								denominator = denominator + getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1];
							}
				
				//Tex stored in getFractionItem
				getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
				
				//Realtime update to que for main workspace
				mainUpdateMathjax(concatEquationItems + getFractionItem);
				
				}

	
	}//end function
	  
	  
	function upDatefractionFractionPanelFromfractionFractionExponentPanel(){
		
		//validate user input
		if(fractionFractionExponent == ""){
			alert("Please add Exponent or select cancel")
			
		}else if(fractionFractionBase == ""){
			alert("Please add Base or select cancel")
			
		}else{
			
			//hide current workspace
			document.getElementById('fractionFractionExponentPanel').style.display = "none";
			//display parent workspace
			document.getElementById('fractionFractionPanel').style.display = "block";
			
			getFractionFractionPowerItemArray.push(" ")//push to array
			
			FF_UpdateMathjax(getFractionFractionItem)
			fractionFractionExponent = "";
			fractionFractionBase="";
			getFractionFractionPowerItem="";
			
			//Set workspace context # to parent workspace "fraction workspace"
			keyBoardInputPanelNumber="2";
			
		}
	}//end function
	
	
	
	function resetFractionFractionExponent(){
		
		//reset current workspace and main workspace
		//track and delete last duplicate item	
		
		if(fractionFractionNumeratorActive==true){
					
			//reverse string
			reverseGetFractionItem = fractionFractionNumerator.split("").reverse().join("");
			//replace getFractionFractionPowerItem with empty string
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			//reverse string
			fractionFractionNumerator = reverseGetFractionItem.split("").reverse().join("");

			
			reverseGetFractionItem = getFractionFractionItem.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			getFractionFractionItem = reverseGetFractionItem.split("").reverse().join("");
			
		
			if(numeratorActive==true){

				reverseGetFractionItem = numerator.split("").reverse().join("");
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
				numerator = reverseGetFractionItem.split("").reverse().join("");
				
			}else{

				reverseGetFractionItem = denominator.split("").reverse().join("");
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
				denominator = reverseGetFractionItem.split("").reverse().join("");
			
			}
		
			reverseGetFractionItem = getFractionItem.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			getFractionItem = reverseGetFractionItem.split("").reverse().join("");
		
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Reset main workspace
				
		}else{

			reverseGetFractionItem = fractionFractionDenominator.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			fractionFractionDenominator = reverseGetFractionItem.split("").reverse().join("");
			
			
			reverseGetFractionItem = getFractionFractionItem.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			getFractionFractionItem = reverseGetFractionItem.split("").reverse().join("");
			

				if(numeratorActive==true){

					reverseGetFractionItem = numerator.split("").reverse().join("");
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
					numerator = reverseGetFractionItem.split("").reverse().join("");

				}else{

					reverseGetFractionItem = denominator.split("").reverse().join("");
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
					denominator = reverseGetFractionItem.split("").reverse().join("");

				}
			

			reverseGetFractionItem = getFractionItem.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			getFractionItem = reverseGetFractionItem.split("").reverse().join("");
			
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main Panel
		
		}
				
		getFractionFractionPowerItemArray=[];// Power - includes exponent and base
		fractionFractionBase="";
		getFractionFractionPowerItem="";
		fractionFractionExponent = "";
		FFE_UpdateMathjax(getFractionFractionPowerItem)
				
		//reset base to active
		exponentBaseActive=true;
		document.getElementById("fractionFractionExponentId").style.color = "#727272";
		document.getElementById("fractionFractionBaseId").style.color = "#e4f6fe";
				
	
	}//end function
	
	
	function cancelUpDateFractionFractionPanelFromFractionFractionExponentPanel(){
		//hide current workspace
		document.getElementById('fractionFractionExponentPanel').style.display = "none";
		//display parent workspace
		document.getElementById('fractionFractionPanel').style.display = "block";
		

		if(fractionFractionNumeratorActive==true){
		
			reverseGetFractionItem = fractionFractionNumerator.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			fractionFractionNumerator = reverseGetFractionItem.split("").reverse().join("");

			reverseGetFractionItem = getFractionFractionItem.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			getFractionFractionItem = reverseGetFractionItem.split("").reverse().join("");

		
			if(numeratorActive==true){
	
					reverseGetFractionItem = numerator.split("").reverse().join("");
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
					numerator = reverseGetFractionItem.split("").reverse().join("");
				
			}else{

					reverseGetFractionItem = denominator.split("").reverse().join("");
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
					denominator = reverseGetFractionItem.split("").reverse().join("");

			}
		
			reverseGetFractionItem = getFractionItem.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			getFractionItem = reverseGetFractionItem.split("").reverse().join("");

		
			mainUpdateMathjax(concatEquationItems + getFractionItem); //update que to main workspace

		}else{

			reverseGetFractionItem = fractionFractionDenominator.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			fractionFractionDenominator = reverseGetFractionItem.split("").reverse().join("");
		
			reverseGetFractionItem = getFractionFractionItem.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			getFractionFractionItem = reverseGetFractionItem.split("").reverse().join("");

			if(numeratorActive==true){
			
				reverseGetFractionItem = numerator.split("").reverse().join("");
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
				numerator = reverseGetFractionItem.split("").reverse().join("");

			}else{
				
				reverseGetFractionItem = denominator.split("").reverse().join("");
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
				denominator = reverseGetFractionItem.split("").reverse().join("");

			}
		
			reverseGetFractionItem = getFractionItem.split("").reverse().join("");
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionPowerItem.split("").reverse().join(""), '');
			getFractionItem = reverseGetFractionItem.split("").reverse().join("");

			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main Panel
		
		}


		getFractionFractionPowerItemArray=[];// Power - includes exponent and base
		fractionFractionBase="";
		getFractionFractionPowerItem="";
		fractionFractionExponent = "";

		//Set workspace context # to parent workspace
		keyBoardInputPanelNumber="2";
			
	}