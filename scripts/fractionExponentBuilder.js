
var getFractionPowerItem="";
var fractionExponent="";
var fractionBase="";

//Array used to update parent workspace
var getFractionPowerItemArray=[];// Power - includes exponent and base
			

	function showFractionExponentBuilder(){
		
		document.getElementById('fractionPanel').style.display = "none";
		document.getElementById('fractionExponentPanel').style.display = "block";
		document.getElementById('fractionExponentPanel').style.zIndex = 98;
		document.getElementById('fractionExponentPanel').style.float = "left";
		
		getFractionPowerItem="";
		FE_UpdateMathjax(getFractionPowerItem);//update que with empty string

		//workspace context # for keypad input
		keyBoardInputPanelNumber="8";
			
	}
	

  	function fractionExponentBuilder(item_id){
	  	//base active
		if(item_id == "fractionBaseId"){
			exponentBaseActive=true;
			 
			document.getElementById("fractionExponentId").style.color = "#727272";
			document.getElementById("fractionBaseId").style.color = "#e4f6fe";
	
			return; //break from function
		}
			
		if(item_id == "fractionExponentId"){
			exponentBaseActive=false;
			document.getElementById("fractionExponentId").style.color = "#e4f6fe";
			document.getElementById("fractionBaseId").style.color = "#727272";
			
			//show fraction button - fraction only allowed in exponent not in base
			document.getElementById('fractionPowerBtn').style.display = "block";
			
			return; //break from function
		}
			
				//open child workspace
				if(item_id == "fractionPowerFractionBtn"){
						showFractionExponentFractionBuilder();
						fractionExponentFractionNumeratorActive=true;//numerator input to true
						document.getElementById("fractionExponentFractionNumeratorid").style.color = "#e4f6fe";//style numerator button
						document.getElementById("fractionExponentFractionDenominatorid").style.color = "#727272"//style denominator button
						return;//break from function
				}
			
		//base active
		if(exponentBaseActive==true){

				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
		
						//NOTE: Auto sizing of brackets
						if(item_id == "*"){
							fractionBase = fractionBase + '\\cdot';
						}else{
								
							//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
							if(item_id == "("){
								fractionBase = fractionBase +  '\\left(\\right.';
							}else if(item_id == ")"){
								fractionBase = fractionBase + '\\left.\\right)';		
							}else{
								fractionBase = fractionBase + item_id;
							}		
						}
		
					//both Base and Exponent are wrapped in TEX and stored in getFractionPowerItem
					getFractionPowerItem =   fractionBase + "^{" + fractionExponent + "}";//
				
				}	
					
					
		}else{//exponent active
				
				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
					//NOTE: Auto sizing of brackets
					if(item_id == "*"){
						fractionExponent = fractionExponent + '\\cdot';
					}else{
							
						//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
						if(item_id == "("){
							fractionExponent = fractionExponent +  '\\left(\\right.';
						}else if(item_id == ")"){
							fractionExponent = fractionExponent + '\\left.\\right)';		
						}else{
							fractionExponent = fractionExponent + item_id;
						}		
					}
					
					//both Base and Exponent are wrapped in TEX and stored in getFractionPowerItem
					getFractionPowerItem =   fractionBase + "^{" + fractionExponent + "}";//
				
				}
	
				
		}//end
		

		FE_UpdateMathjax(getFractionPowerItem)//Update que for current workspace
		
				//update parent workspaces
				if(numeratorActive==true){//Add items to numerator of parent workspace
				
				
							//In the parent fraction workspace numerator cannot be null
							if(numerator==""){
							numerator = numerator + " ";
							}
				
				
					numerator = numerator.replace(getFractionPowerItemArray[getFractionPowerItemArray.length-1], '');//

					getFractionPowerItemArray.push(getFractionPowerItem)//push contents of getFractionPowerItem to array

					numerator = numerator + getFractionPowerItemArray[getFractionPowerItemArray.length-1];
			
				
					//both numerator and denominator are wrapped in TEX and stored in getFractionItem
					getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
			
					mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to que for main workspace
				
				}else{//denominator active
				
						//In the parent fraction workspace numerator cannot be null
						if(denominator==""){
						denominator = denominator + " ";
						}
				
				
					denominator = denominator.replace(getFractionPowerItemArray[getFractionPowerItemArray.length-1], '');//

					getFractionPowerItemArray.push(getFractionPowerItem)//push contents of "getFractionSquareRootFractionItem" to array
	
					denominator = denominator + getFractionPowerItemArray[getFractionPowerItemArray.length-1];
				
					//both numerator and denominator are wrapped in TEX and stored in getFractionItem
					getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
				
					mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to que for main workspace
				}
				
	
	 }//end function
	  
	  
	function upDateFractionPanelFromFractionExponentPanel(){
		
		//validate user input
		
		if(fractionExponent == ""){
			alert("Please add Exponent or select cancel")
			
		}else if(fractionBase == ""){
			alert("Please add Base or select cancel")
			
		}else{
			
			//hide current panel
			document.getElementById('fractionExponentPanel').style.display = "none";
			
			//display previous panel
			document.getElementById('fractionPanel').style.display = "block";
			
			/*
			Push empty item to array 
			denominator = denominator.replace .. OR..  numerator = numerator.replace .. above does not replace the last fraction which may be a duplicate
			Explain: 
			When you add a Power and close the workspace a Power is added
			Now reopen the workspace  to add another Power on the same line... the replace method in the function above only replaces 
			the empty space we added below ...  not the previous Power added
			This will allow multible Power on the same line when updating the main workspace above
			*/

			getFractionPowerItemArray.push(" ")//push contents of "getFractionPowerItemArray" to array
	
			F_UpdateMathjax(getFractionItem)//Update que for parent workspace
			fractionExponent = "";
			fractionBase="";
			getFractionPowerItem="";
			
			//Set Panel context # to parent workspace
			keyBoardInputPanelNumber="1";
			
		}

	}//end function
	
	function resetFractionExponent(){

			//reset current workspace and main workspace
			//track and delete last duplicate item

			if(numeratorActive==true){
	
				reverseGetFractionItem = getFractionItem.split("").reverse().join("");
	
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionPowerItem.split("").reverse().join(""), '');
	
				getFractionItem = reverseGetFractionItem.split("").reverse().join("");
	
	
				getFractionPowerItemArray.push(" ")
				mainUpdateMathjax(concatEquationItems + getFractionItem);//Reset main workspace
		
				
				//remove item from numerator
				reverseGetFractionItem = numerator.split("").reverse().join("");
	
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionPowerItem.split("").reverse().join(""), '');
	
				numerator = reverseGetFractionItem.split("").reverse().join("");
		
				
			}else{
	

				reverseGetFractionItem = getFractionItem.split("").reverse().join("");
	
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionPowerItem.split("").reverse().join(""), '');
	
				getFractionItem = reverseGetFractionItem.split("").reverse().join("");
	
					getFractionPowerItemArray.push(" ")//push empty space
					mainUpdateMathjax(concatEquationItems + getFractionItem);//Reset main workspace
					
				
				//remove item from denominator 
				reverseGetFractionItem = denominator.split("").reverse().join("");
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionPowerItem.split("").reverse().join(""), '');
				denominator = reverseGetFractionItem.split("").reverse().join("");
	
			}
	
		fractionBase="";
		getFractionPowerItem="";
		fractionExponent="";
		FE_UpdateMathjax(getFractionPowerItem)	//reset current workspace	
				
		
		exponentBaseActive=true;//reset base btn to active
		document.getElementById("fractionExponentId").style.color = "#727272";
		document.getElementById("fractionBaseId").style.color = "#e4f6fe";
	
	}
	
	
	function cancelUpDateFractionPanelFromFractionExponentPanel(){
		//hide current workspace
		document.getElementById('fractionExponentPanel').style.display = "none";
		//display parent workspace
		document.getElementById('fractionPanel').style.display = "block";
		

				if(numeratorActive==true){
		
					reverseGetFractionItem = getFractionItem.split("").reverse().join("");
					
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionPowerItem.split("").reverse().join(""), '');
					
					getFractionItem = reverseGetFractionItem.split("").reverse().join("");
					
	
						mainUpdateMathjax(concatEquationItems + getFractionItem);//update main workspace
	
					//remove item from numerator
					reverseGetFractionItem = numerator.split("").reverse().join("");
					
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionPowerItem.split("").reverse().join(""), '');
					
					numerator = reverseGetFractionItem.split("").reverse().join("");

					
					
					
				}else{

					reverseGetFractionItem = getFractionItem.split("").reverse().join("");

					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionPowerItem.split("").reverse().join(""), '');

					getFractionItem = reverseGetFractionItem.split("").reverse().join("");
						
						mainUpdateMathjax(concatEquationItems + getFractionItem);//update main workspace
						
					//remove item from denominator
					reverseGetFractionItem = denominator.split("").reverse().join("");
					
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionPowerItem.split("").reverse().join(""), '');
					
					denominator = reverseGetFractionItem.split("").reverse().join("");
					
				}
		
		getFractionPowerItem="";
		fractionExponent="";
		fractionBase="";
		getFractionPowerItemArray=[];
	
		//Set workspace context # to parent workspace "fraction workspace"
		keyBoardInputPanelNumber="1";

			
	}