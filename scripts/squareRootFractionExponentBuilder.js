
var getSquareRootFractionExponentItem="";
var squareRootFractionExponent="";
var squareRootFractionBase="";
var squareRootFractionExponentBaseActive

//Array includes both exponent and base
//Array used to update parent workspace with the last items in the array 
var getSquareRootFractionExponentItemArray=[];


	function showSquareRootFractionExponentBuilder(){//Show Power workspace
		
		document.getElementById('squareRootFractionPanel').style.display = "none";
		document.getElementById('squareRootFractionExponentPanel').style.display = "block";
		document.getElementById('squareRootFractionExponentPanel').style.zIndex = 82;
		document.getElementById('squareRootFractionExponentPanel').style.float = "left";
	
		getSquareRootFractionExponentItem="";
		getSquareRootFractionExponentItemArray=[];
		SFE_UpdateMathjax(getSquareRootFractionExponentItem);//update with empty string
		
		//Workspace context # for keyboard input
		keyBoardInputPanelNumber="11";
		
	}
	

  	function squareRootFractionExponentBuilder(item_id){
	  
	  	//btn selection used to activate base or exponent
		if(item_id == "squareRootFractionBaseId"){//set base input to true
			
			squareRootFractionExponentBaseActive=true;
			 
			document.getElementById("squareRootFractionExponentId").style.color = "#727272";
			document.getElementById("squareRootFractionBaseId").style.color = "#e4f6fe";
			
			return; //break from function
		}
			
		if(item_id == "squareRootFractionExponentId"){//set exponent input to true
			
			squareRootFractionExponentBaseActive=false;
			
			document.getElementById("squareRootFractionExponentId").style.color = "#e4f6fe";
			document.getElementById("squareRootFractionBaseId").style.color = "#727272";
			
			return; //break from function
		}
			

		//Add items to current workspace
		if(squareRootFractionExponentBaseActive==true){//Add to base of current workspace
			

				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
					//Auto sizing brackets
					if(item_id == "*"){
						squareRootFractionBase = squareRootFractionBase  + '\\cdot';
					}else{
							
						//the number of \left and \right parentheses must correspond to each other - or it breaks 
						if(item_id == "("){
							squareRootFractionBase = squareRootFractionBase  +  '\\left(\\right.';
						}else if(item_id == ")"){
							squareRootFractionBase = squareRootFractionBase  + '\\left.\\right)';		
						}else{
							squareRootFractionBase = squareRootFractionBase  + item_id;
						}		
					}
					
					//both Base and Exponent are wrapped in TEX and stored in getSquareRootFractionExponentItem
					getSquareRootFractionExponentItem =   squareRootFractionBase + "^{" + squareRootFractionExponent + "}";//
				}
					
					
		}else{//Add to Exponent of current workspace


				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
							//Auto sizing brackets
							if(item_id == "*"){
								squareRootFractionExponent = squareRootFractionExponent  + '\\cdot';
							}else{
								//the number of \left and \right parentheses must correspond to each other - or it breaks 
								if(item_id == "("){
									squareRootFractionExponent = squareRootFractionExponent  +  '\\left(\\right.';
								}else if(item_id == ")"){
									squareRootFractionExponent = squareRootFractionExponent  + '\\left.\\right)';		
								}else{
									squareRootFractionExponent = squareRootFractionExponent  + item_id;
								}		
							}
					
					//both Base and Exponent are wrapped in TEX and stored in getSquareRootFractionExponentItem
					getSquareRootFractionExponentItem =   squareRootFractionBase + "^{" + squareRootFractionExponent + "}";//
					
				}
					
				
		}//end
		
			
		SFE_UpdateMathjax(getSquareRootFractionExponentItem)//update current  workspace
			
				
				//update parent workspace	- fraction	
				if(squareRootFractionNumeratorActive==true){//Add items to numerator in parent workspace
				
					//In the previous parent workspace numerator cannot be empty
					if(squareRootFractionNumerator==""){
					squareRootFractionNumerator = squareRootFractionNumerator + " ";
					}
			
					squareRootFractionNumerator = squareRootFractionNumerator.replace(getSquareRootFractionExponentItemArray[getSquareRootFractionExponentItemArray.length-1], '');//

					getSquareRootFractionExponentItemArray.push(getSquareRootFractionExponentItem)//push contents of "getFractionSquareRootFractionItem" to array

					squareRootFractionNumerator = squareRootFractionNumerator + getSquareRootFractionExponentItemArray[getSquareRootFractionExponentItemArray.length-1];
					
					//both numerator and denominator wrapped in TEX and stored in getSquareRootFractionItem
					getSquareRootFractionItem =  backSlash +'frac{'+squareRootFractionNumerator+'}{'+squareRootFractionDenominator+'}' + "\\,";
			
				} else {//Add items to denominator in parent workspace
					
					//In the previous parent workspace denominator cannot be empty
					if(squareRootFractionDenominator==""){
					squareRootFractionDenominator = squareRootFractionDenominator + " ";
					}
			
					squareRootFractionDenominator = squareRootFractionDenominator.replace(getSquareRootFractionExponentItemArray[getSquareRootFractionExponentItemArray.length-1], '');//
	
					getSquareRootFractionExponentItemArray.push(getSquareRootFractionExponentItem)//push contents of getSquareRootFractionExponentItem to array
	
					squareRootFractionDenominator = squareRootFractionDenominator + getSquareRootFractionExponentItemArray[getSquareRootFractionExponentItemArray.length-1];
					
					//both numerator and denominator wrapped in TEX and stored in getSquareRootFractionItem
					getSquareRootFractionItem =  backSlash +'frac{'+squareRootFractionNumerator+'}{'+squareRootFractionDenominator+'}' + "\\,";
					
				}
			

				//update parent/parent workspace - squareroot
						
				squareRoot = squareRoot.replace(getSquareRootFractionItemArray[getSquareRootFractionItemArray.length-1], '');

				getSquareRootFractionItemArray.push(getSquareRootFractionItem)//push contents of "getSquareRootFractionItem" to array

				squareRoot = squareRoot + getSquareRootFractionItemArray[getSquareRootFractionItemArray.length-1];
				
				//sauareRoot wrapped in TEX and stored in getSquareRootItem
				getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}';
	
			
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main workspace
		
	 }//end function
	  
	  
	function upDateSquareRootFractionPanelFromSquareRootFractionExponentPanel(){
		
		//validate user input
		if(squareRootFractionExponent == ""){
			alert("Please add Exponent or select cancel")
			
		}else if(squareRootFractionBase == ""){
			alert("Please add Base or select cancel")
			
		}else{
			
			mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main workspace
			
			document.getElementById('squareRootFractionExponentPanel').style.display = "none";	
			document.getElementById('squareRootFractionPanel').style.display = "block";
		
			//parent workspace
			//both numerator and denominator wrapped in TEX and stored in getSquareRootFractionItem
			getSquareRootFractionItem =  backSlash +'frac{'+squareRootFractionNumerator+'}{'+squareRootFractionDenominator+'}' + "\\,";
			
			SF_UpdateMathjax(getSquareRootFractionItem);//Realtime update to parent workspace
			
			squareRootFractionBase="";
			getSquareRootFractionExponentItem="";
			squareRootFractionExponent="";
			
			//Set workspace context # to parent workspace --- squareRoot fraction panel
			keyBoardInputPanelNumber="10";
			
		}
		
	}
	
	function resetSquareRootFractionExponent(){
		
		squareRootFractionExponentBaseActive=true;
		document.getElementById("squareRootFractionBaseId").style.color = "#e4f6fe";//style numerator button
		document.getElementById("squareRootFractionExponentId").style.color = "#727272"//style denominator button
		
		
			//reset current workspace and main workspace
			//parent
			if(squareRootFractionNumeratorActive==true){

				reverseGetFractionItem = squareRootFractionNumerator.split("").reverse().join("");
				
				reverseGetFractionItem = reverseGetFractionItem.replace(getSquareRootFractionExponentItem.split("").reverse().join(""), '');
				
				squareRootFractionNumerator = reverseGetFractionItem.split("").reverse().join("");
				
				//both numerator and denominator are wrapped in TEX and stored in getSquareRootFractionItem
				getSquareRootFractionItem =  backSlash +'frac{'+squareRootFractionNumerator+'}{'+squareRootFractionDenominator+'}' + "\\,";
					
			} else {
					
				reverseGetFractionItem = squareRootFractionDenominator.split("").reverse().join("");
				
				reverseGetFractionItem = reverseGetFractionItem.replace(getSquareRootFractionExponentItem.split("").reverse().join(""), '');
				
				squareRootFractionDenominator = reverseGetFractionItem.split("").reverse().join("");
				
				//both numerator and denominator are wrapped in TEX and stored in getSquareRootFractionItem
				getSquareRootFractionItem =  backSlash +'frac{'+squareRootFractionNumerator+'}{'+squareRootFractionDenominator+'}' + "\\,";
				
			}
		
		
		//parent/parent
		getSquareRootFractionItemArray.push(getSquareRootFractionItem)//push contents to array

		squareRoot = squareRoot + getSquareRootFractionItemArray[getSquareRootFractionItemArray.length-1];

		//squareRoot is wrapped in TEX and stored in getSquareRootItem
		getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}';
		

		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main workspace


		squareRootFractionBase="";
		getSquareRootFractionExponentItem="";
		squareRootFractionExponent="";	
		getSquareRootFractionExponentItemArray=[];

		SFE_UpdateMathjax(getSquareRootFractionExponentItem)//Update to current workspace
	
	
	}
	
	
	function cancelUpDateSquareRootFractionPanelFromSquareRootFractionExponentPanel(){
		
		//hide current workspace
		document.getElementById('squareRootFractionExponentPanel').style.display = "none";
		
		//display the parent workspace
		document.getElementById('squareRootFractionPanel').style.display = "block";
		
		
		//parent/parent
		reverseGetFractionItem = getSquareRootItem.split("").reverse().join("");
		
		reverseGetFractionItem = reverseGetFractionItem.replace(getSquareRootFractionExponentItem.split("").reverse().join(""), '');
		
		getSquareRootItem = reverseGetFractionItem.split("").reverse().join("");
		
		
		//parent
		if(squareRootFractionNumeratorActive==true){
		
			reverseGetFractionItem = squareRootFractionNumerator.split("").reverse().join("");
			
			reverseGetFractionItem = reverseGetFractionItem.replace(getSquareRootFractionExponentItem.split("").reverse().join(""), '');
			
			squareRootFractionNumerator = reverseGetFractionItem.split("").reverse().join("");
		
		}else{
			
			reverseGetFractionItem = squareRootFractionDenominator.split("").reverse().join("");
	
			reverseGetFractionItem = reverseGetFractionItem.replace(getSquareRootFractionExponentItem.split("").reverse().join(""), '');
			
			squareRootFractionDenominator = reverseGetFractionItem.split("").reverse().join("");
			
		}
		
		squareRootFractionBase="";
		getSquareRootFractionExponentItem="";
		squareRootFractionExponent="";	

		
		mainUpdateMathjax(concatEquationItems + getSquareRootItem);//update Main workspace
		
		//Set workspace context # to parent workspace --- squareRoot fraction panel
		keyBoardInputPanelNumber="10";
	}