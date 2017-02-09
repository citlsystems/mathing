

var numerator ="";
var denominator="";
var getFractionItem="";
var fractionFractionNumeratorActive=null;

	function showfractionBuilder(){ //Show fraction workspace
		document.getElementById('fractionPanel').style.display = "block";
		document.getElementById('fractionPanel').style.zIndex = 108;
		document.getElementById('fractionPanel').style.float = "left";
		getFractionItem="";//empty string
		F_UpdateMathjax(getFractionItem);//update with empty string
		keyBoardInputPanelNumber="1";//workspace context # for keyboard input
		//remove listener for inputing = in root workspace- no equal sign in this workspace or its children
		window.removeEventListener("keypress", checkKeyPressed, false);
		
	}
	
  
  	function fractionBuilder(item_id){
	  	//Set num or denom of current workspace
		if(item_id == "numeratorid"){
			numeratorActive=true;//activate numerator - see mainPanel.js
			document.getElementById("numeratorid").style.color = "#e4f6fe";//style numerator button
			document.getElementById("denominatorid").style.color = "#727272"//style denominator button
			return; //break from function
		}
			
		if(item_id == "denominatorid"){
			numeratorActive=false;
			denominatorActive=true//activate denominator - see mainPanel.js
			document.getElementById("numeratorid").style.color = "#727272";//style numerator button
			document.getElementById("denominatorid").style.color = "#e4f6fe"//style denominator button
			return; //break from function
		}
			
					//open child workspaces
				   if(item_id == "fractionFractionBtn"){
							showfractionFractionBuilder();//open workspace to build fraction inside of numerator/denomator of fraction 
							fractionFractionNumeratorActive=true;//set numerator input to true
							document.getElementById("fractionFractionNumeratorid").style.color = "#e4f6fe";//style numerator button
							document.getElementById("fractionFractionDenominatorid").style.color = "#727272"//style denominator button
							return;//break from function
				  }else if(item_id == "fractionSquareBtn"){
							showFractionSquareRootBuilder();//open workspace to build squareroot inside of numerator/denomator of fraction 
					  		return;//break from function
				  }else if(item_id == "fractionPowerBtn"){
					  		showFractionExponentBuilder();//open workspace to build Power inside of numerator/denomator of fraction 
							exponentBaseActive=true;//base input to true
							document.getElementById("fractionBaseId").style.color = "#e4f6fe";//style numerator button
							document.getElementById("fractionExponentId").style.color = "#727272"//style denominator button
					  		return;//break from function
				  }
			
		
		//Add items to numerator
		 if(numeratorActive==true){
			
				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
				
						//NOTE: A start to sizing dynamic brackets
						if(item_id == "*"){
							numerator = numerator + '\\cdot';
						}else{
							//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
							if(item_id == "("){
								numerator = numerator +  '\\left(\\right.';
							}else if(item_id == ")"){
								numerator = numerator + '\\left.\\right)';		
							}else{
								numerator = numerator + item_id;	
							}	
								
						}
						
					//both numerator and denominator are wrapped in TEX and stored in getFractionItem
					getFractionItem =  backSlash +'frac{'+numerator +'}{'+denominator+'}';
	
				}	
			
		}else{
			
				getFractionItem = "";//reset to empty string
				
				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
				
						//NOTE: A start to sizing dynamic brackets
						if(item_id == "*"){
							denominator = denominator + '\\cdot';
						}else{	
							//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
							if(item_id == "("){
								denominator = denominator +  '\\left(\\right.';
							}else if(item_id == ")"){
								denominator = denominator + '\\left.\\right)';		
							}else{
								denominator = denominator + item_id;	
							}	
								
						}

					//both numerator and denominator are wrapped in TEX and stored in getFractionItem
					getFractionItem =  backSlash +'frac{'+numerator+'}{'+denominator+'}';
				}	  
		}
			
	  	F_UpdateMathjax(getFractionItem)//update que for current workspace
		
		//update Main workspace
		mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
		//mainUpdateMathjax(concatEquationItems + backSlash  +  "color{red}" + getFractionItem); //Realtime update to main Panel with color
	
	
	}//end function
	  

	function upDateMainEquationFromFraction(){
		
		//validate user input
		if(numerator == ""){
			alert("Please add Numerator or select cancel")
			numerator = "";
		}else if(denominator == ""){
			alert("Please complete Numerator... Add Denomnator or select cancel")	
			denominator = "";	
		}else{
			
			//Array used to delete user added items from the main workspace
			//User can delete one item at a time using the back btn in the main workspace - see deleteUserInput.js
			mathOutputArray.push(getFractionItem);
	
			concatEquationItems = concatEquationItems + getFractionItem; //Add items from current workspace to global var for main workspace
			mainUpdateMathjax(concatEquationItems)//update main workspace
			document.getElementById('fractionPanel').style.display = "none";

			numerator ="";
			denominator="";
			
			//Set workspace context # to parent workspace "main workspace"
			keyBoardInputPanelNumber="0";
			//Add listener for inputing = in root workspace
			window.addEventListener("keypress", checkKeyPressed, false);
		}//end else		
	
	}//end function
	
	
	//Reset current workspace and main workspace
	function resetFraction(){
		getFractionItem="";
		numerator ="";
		denominator="";
		
		F_UpdateMathjax(getFractionItem) //update current workspace
		mainUpdateMathjax(concatEquationItems);//update main workspace
	}//end function
	
	//Cancel item input created from current workspace to main workspace
	function cancelUpDateMainEquationFromFraction(){
		document.getElementById('fractionPanel').style.display = "none";
		numerator ="";
		denominator="";	
		getFractionItem="";
		mainUpdateMathjax(concatEquationItems);//update main workspace
		
		//Set workspace context # to main workspace
		keyBoardInputPanelNumber="0";
		//Add listener for inputing = in root workspace
		window.addEventListener("keypress", checkKeyPressed, false);
		
	}
	
	