
var getExponentItem="";
var exponent="";
var base="";


	function showExponentBuilder(){//show Power workspace

		document.getElementById('exponentPanel').style.display = "block";
		document.getElementById('exponentPanel').style.zIndex = 88;
		document.getElementById('exponentPanel').style.float = "left";
		
		getExponentItem="";
		E_UpdateMathjax(getExponentItem);//update with empty string
		
		//workspace context # for keyboard input
		keyBoardInputPanelNumber="13";
		//remove listener for inputing = in root workspace - no equal sign in this workspace
		window.removeEventListener("keypress", checkKeyPressed, false);
	}
	

  	function exponentBuilder(item_id){
	  
	  	//btns to select base or exponent
		if(item_id == "baseId"){//numerator true
			exponentBaseActive=true;//input to numerator
			 
			document.getElementById("exponentId").style.color = "#727272";
			document.getElementById("baseId").style.color = "#e4f6fe";
			
			return; //break from function
			}
			
		if(item_id == "exponentId"){//numerator true
			exponentBaseActive=false;//input to denominator
			document.getElementById("exponentId").style.color = "#e4f6fe";
			document.getElementById("baseId").style.color = "#727272";
			return; //break from function
			}
	
		
		//Add items to current workspace
		if(exponentBaseActive==true){//input to base
			
				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
				
				
						//Auto sizing brackets
							if(item_id == "*"){
								base = base  + '\\cdot';
							}else{
								//the number of \left and \right parentheses must correspond to each other - or it breaks 
								if(item_id == "("){
									base = base  +  '\\left(\\right.';
								}else if(item_id == ")"){
									base = base  + '\\left.\\right)';		
								}else{
									base = base  + item_id;
								}		
							}
					//both base and exponent are wrapped in TEX and stored in getExponentItem	
					getExponentItem =   base + "^{" + exponent + "}";//
				}
					
					
		}else{//input to exponent
				
				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
				
					
						//Auto sizing brackets
						if(item_id == "*"){
							exponent = exponent  + '\\cdot';
						}else{
							//the number of \left and \right parentheses must correspond to each other - or it breaks 
							if(item_id == "("){
								exponent = exponent  +  '\\left(\\right.';
							}else if(item_id == ")"){
								exponent = exponent  + '\\left.\\right)';		
							}else{
								exponent = exponent  + item_id;
							}		
						}
					//both base and exponent are wrapped in TEX and stored in getExponentItem
					getExponentItem =   base + "^{" + exponent + "}";//
				}
					
		}//end else
				
				
	
		E_UpdateMathjax(getExponentItem)//update que for current workspace
		
		mainUpdateMathjax(concatEquationItems + getExponentItem); //Realtime update to main workspace
		
	 
	 }//end function
	  
	  
	function upDateMainEquationFromExponent(){
		
		//validate user input
		if(exponent == ""){
			alert("Please add Exponent or select cancel")
			
		}else if(base == ""){
			alert("Please add Base or select cancel")
		}else{
			
			//Array used to undo user added items to main workspace
			//User can delete one item at a time using the back btn in the main workspace - see deleteUserInput.js
			mathOutputArray.push(getExponentItem);//PUSH TO ARRAY
			
			concatEquationItems = concatEquationItems + getExponentItem;//Add items from current workspace to main workspace
			mainUpdateMathjax(concatEquationItems)//update to main workspace
			
			document.getElementById('exponentPanel').style.display = "none";
			exponent = "";
			base="";
			getExponentItem="";
			
			//Set workspace context # to parent workspace --- Main workspace
			keyBoardInputPanelNumber="0";
			//Add listener for inputing = in root workspace
			window.addEventListener("keypress", checkKeyPressed, false);

		}
		
	}
	
	function resetExponent(){//Reset current workspace and main workspace
			
			base="";
			getExponentItem="";
			exponent="";
			
			E_UpdateMathjax(getExponentItem)//update to current workspace

			mainUpdateMathjax(concatEquationItems);////update to main workspace
	
			//reset base to active
			exponentBaseActive=true;
			 
			document.getElementById("exponentId").style.color = "#727272";
			document.getElementById("baseId").style.color = "#e4f6fe";
				
	}
	
	
	function cancelUpDateMainEquationFromExponent(){
		
		document.getElementById('exponentPanel').style.display = "none";//hide current workspace
		
		getExponentItem="";
		exponent="";
		base="";
		
		E_UpdateMathjax(getExponentItem)//update to current workspace

		mainUpdateMathjax(concatEquationItems);//update to main workspace
		
		//Set workspace context # to parent workspace --- Main workspace
		keyBoardInputPanelNumber="0";
		//Add listener for inputing = in root workspace
		window.addEventListener("keypress", checkKeyPressed, false);
			
	}