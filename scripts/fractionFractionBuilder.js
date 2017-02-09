
var fractionFractionNumerator ="";
var fractionFractionDenominator="";
var getFractionFractionItem="";

//Activate num or denom for workspace context
//undefined Booleans are false
var numPadFractionFractionNumeratorActive;
var numPadFractionFractionDenominatorActive;

getFractionFractionNumeratorItemArray=[]; //handles numerator in current workspace
getFractionFractionDenominatorItemArray=[]; //handles denomator in current workspace

getFractionFractionItem =  backSlash +'frac{'+ +'}{'+ +'}';//display empty Tex for fraction in current workspace - try this in all workspaces
		
	
	function showfractionFractionBuilder(){//Show fraction workspace
			
		document.getElementById('fractionPanel').style.display = "none";
		document.getElementById('fractionFractionPanel').style.display = "block";
		
		document.getElementById('fractionFractionPanel').style.zIndex = 82;
		document.getElementById('fractionFractionPanel').style.float = "left";
		getFractionFractionItem="";//empty string
		FF_UpdateMathjax(getFractionFractionItem);//update with empty string
		
		//color test - use it or delete
		getFractionItem =  backSlash +'frac{'+backSlash  +  "color{black}" + numerator+'}{'+denominator+'}';
		mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main Panel
		//end color test
		
		keyBoardInputPanelNumber="2";//workspace context # for keypad input			
	}
	

	function fractionFractionBuilder(item_id){
		//Set num or denom of current workspace
		if(item_id == "fractionFractionNumeratorid"){   
			    
			fractionFractionNumeratorActive=true;//activate numerator for workspace - see fractionBuilder.js
			document.getElementById("fractionFractionDenominatorid").style.color = "#727272";
			document.getElementById("fractionFractionNumeratorid").style.color = "#e4f6fe";
			//Set keypad input Booleans
			numPadFractionFractionNumeratorActive=true;
			numPadFractionFractionDenominatorActive=false;
			return; //break from function
			}
			
		if(item_id == "fractionFractionDenominatorid"){//Denominator true
		
			fractionFractionNumeratorActive=false;//activate denominator for workspace - see fractionBuilder.js
			document.getElementById("fractionFractionNumeratorid").style.color = "#727272";
			document.getElementById("fractionFractionDenominatorid").style.color = "#e4f6fe";
			//Set numpad input Booleans
			numPadFractionFractionNumeratorActive=false;
			numPadFractionFractionDenominatorActive=true;
			return; //break from function
			}
			
	
					//open child workspaces
				   if(item_id == "fractionFractionPowerBtn"){
							exponentBaseActive=true;//base input to true
							showfractionFractionExponentBuilder();//open workspace to build power
							document.getElementById("fractionFractionBaseId").style.color = "#e4f6fe";//style numerator button
							document.getElementById("fractionFractionExponentId").style.color = "#727272"//style denominator button
							return;//break from function
				  }
				  
					if(item_id == "fractionFractionSquareRootBtn"){
							showfractionFractionSquareRootBuilder();//open workspace to build square root
							return;//break from function
				  }
				
				
		//Add items to numerator
		 if(fractionFractionNumeratorActive==true){
	
				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
				
						//NOTE: Automatic sizing of brackets
						if(item_id == "*"){
							fractionFractionNumerator = fractionFractionNumerator + '\\cdot';
						}else{
							//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
							if(item_id == "("){
								fractionFractionNumerator = fractionFractionNumerator +  '\\left(\\right.';
							}else if(item_id == ")"){
								fractionFractionNumerator = fractionFractionNumerator + '\\left.\\right)';		
							}else{
								fractionFractionNumerator = fractionFractionNumerator + item_id;
							}	
								
						}
								
					//both numerator and denominator are wrapped in TEX and stored in getFractionFractionItem
					// + "\\," add horozonal space to end of double fractions
					getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
				}
		}else{
			
			//getFractionFractionItem = "";//reset to nothing
			
				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
	
					//NOTE: Auto sizing of brackets
					if(item_id == "*"){
						fractionFractionDenominator = fractionFractionDenominator + '\\cdot';
					}else{
							
						//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
						if(item_id == "("){
							//numerator = numerator +  '\\left('  +  + '\\right)';
							fractionFractionDenominator = fractionFractionDenominator +  '\\left(\\right.';
						}else if(item_id == ")"){
							fractionFractionDenominator = fractionFractionDenominator + '\\left.\\right)';		
						}else{
							fractionFractionDenominator = fractionFractionDenominator + item_id;
						}	
							
					}
			
				//both numerator and denominator are wrapped in TEX and stored in getFractionFractionItem			
				getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";  
			
			}	  
		}
		
		FF_UpdateMathjax(getFractionFractionItem)//Update que for current workspace
		
				
			//update parent workspaces - fraction workspace and main workspace
				
				if(numeratorActive==true){//Add items to numerator in parent fraction workspace
				
							//In the parent fraction workspace numerator cannot be null
							if(numerator==""){
								numerator = numerator + " ";
							}
				

				numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//
	
				getFractionFractionNumeratorItemArray.push(getFractionFractionItem)//push contents of getFractionFractionItem to array
				
				numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];
	
				}else{
					
					if(denominator==""){
						denominator = denominator + " ";//denominator is from the previous fraction Panel
						}
					
				denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//
	
				getFractionFractionDenominatorItemArray.push(getFractionFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
				
				denominator = denominator + getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1];
				}
					
				//Note: que for fraction workspace is updated using the udate function below
				getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}'; //fraction workspace global var updated
				
				mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to que for main wortkspace
				
			//End update to parent workspaces
		
	 }//end function
	 
	 
	 
	 
	  
	  
	function upDatefractionPanelFromfractionFractionPanel(){
		
		//validate user input	
		if(fractionFractionNumerator == ""){
			alert("Please add Numerator or select cancel")
			fractionFractionNumerator = "";
		}else if(fractionFractionDenominator == ""){
			alert("Please complete Numerator... Add Denomnator or select cancel")	
			fractionFractionDenominator = "";	
		}else{	
		document.getElementById('fractionPanel').style.display = "block";
		document.getElementById('fractionFractionPanel').style.display = "none";
		
		/*
		Push empty item to array 
		denominator = denominator.replace .. OR..  numerator = numerator.replace .. above does not replace the last fraction which may be 		a duplicate
		Explain: 
		When you add a fraction and close the workspace a fraction is added
		Now reopen the workspace  to add another fraction on the same line... the replace method in the function above only replaces 
		the empty space we added below ...  not the previous fraction added
		This will allow multible fractions on the same line when updating the main workspace above*/
		
		getFractionFractionNumeratorItemArray.push(" ")//push contents of "getFractionSquareRootFractionItem" to array
		getFractionFractionDenominatorItemArray.push(" ")//push contents of "getFractionSquareRootFractionItem" to array
		
			
		F_UpdateMathjax(getFractionItem)//Update que for parent workspace
		document.getElementById('fractionFractionPanel').style.display = "none";

		fractionFractionNumerator ="";
		fractionFractionDenominator="";
		
		//Set workspace context # to parent workspace "fraction workspace"
		keyBoardInputPanelNumber="1";
			
		}//end else
		
	}//end function
	
	
	function resetFractionFraction(){
		
			//reset current workspace and main workspace
			//track and delete last duplicate item
		
			if(numeratorActive==true){
				//reverse string
				reverseGetFractionItem = numerator.split("").reverse().join("");
				//replace getFractionFractionItem with empty string
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
				//reverse string
				numerator = reverseGetFractionItem.split("").reverse().join("");
				//add empty string to array
				getFractionFractionNumeratorItemArray.push(" ")//push contents of "getFractionSquareRootFractionItem" to array
				
				
			}else{			

				reverseGetFractionItem = denominator.split("").reverse().join("");
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
				denominator = reverseGetFractionItem.split("").reverse().join("");
				
				getFractionFractionDenominatorItemArray.push(" ")//push contents of "getFractionSquareRootFractionItem" to array
				
			}
			
			//reset Tex in fraction workspace
			getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
			//Reset main workspace
			mainUpdateMathjax(concatEquationItems + getFractionItem);
		
		
		
		getFractionFractionItem="";
		fractionFractionNumerator ="";
		fractionFractionDenominator="";
		FF_UpdateMathjax(getFractionFractionItem)//update current workspace
		
		//reset numerator btn to true
		fractionFractionNumeratorActive=true;//numerator input to true
		document.getElementById("fractionFractionNumeratorid").style.color = "#e4f6fe";//style numerator button
		document.getElementById("fractionFractionDenominatorid").style.color = "#727272"//style denominator button
		
	}//end function
	
	//Cancel work done in current workspace and update main workspace...also reset vars used in all parent workspaces
	function cancelUpDateFractionPanelFromFractionFractionPanel(){
		//hide current workspace
		document.getElementById('fractionFractionPanel').style.display = "none";
		//display parent workspace
		document.getElementById('fractionPanel').style.display = "block";

		fractionFractionNumerator ="";
		fractionFractionDenominator="";	
			
			//replace and track duplicate if found
			if(numeratorActive==true){
				reverseGetFractionItem = numerator.split("").reverse().join("");
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
				numerator = reverseGetFractionItem.split("").reverse().join("");
				
			}else{			

				reverseGetFractionItem = denominator.split("").reverse().join("");
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
				denominator = reverseGetFractionItem.split("").reverse().join("");
				
			}
			
			getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
			mainUpdateMathjax(concatEquationItems + getFractionItem);//update que to main workspace
			getFractionFractionNumeratorItemArray=[]; //empty array
			getFractionFractionDenominatorItemArray=[]; //empty array
			getFractionFractionItem="";
			
			//Set workspace context # to parent workspace "fraction workspace"
			keyBoardInputPanelNumber="1";
		
	}
	
	