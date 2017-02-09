
var getFractionFractionSquareRootItem="";
var fractionFractionSquareRoot="";

//Array used to update parent workspace
var getFractionFractionSquareRootItemArray=[];// SquareRoot Array 
			

	function showfractionFractionSquareRootBuilder(){
		
		document.getElementById('fractionFractionPanel').style.display = "none";
		document.getElementById('fractionFractionSquareRootPanel').style.display = "block";
		document.getElementById('fractionFractionSquareRootPanel').style.zIndex = 98;
		document.getElementById('fractionFractionSquareRootPanel').style.float = "left";
		
		fractionFractionSquareRoot="";
		getFractionFractionSquareRootItem ="";

		FFS_UpdateMathjax(getFractionFractionSquareRootItem);//update with empty string
		
		//workspace context # for keypad input
		keyBoardInputPanelNumber="4";	

	}
	

	function fractionFractionSquareRootBuilder(item_id){
		
		//open child workspace
		 if(item_id == "fractionFractionSquareRootPowerBtn"){
					showSquareRootExponentBuilder();
					fractionFractionSquareRootExponentBaseActive=true;//base input to true
					document.getElementById("fractionFractionSquareRootBaseId").style.color = "#e4f6fe";//style numerator button
					document.getElementById("fractionFractionSquareRootExponentId").style.color = "#727272"//style denominator button
					return;//break from function
		  }
			
		
		if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
		
				//Auto sizing brackets
				if(item_id == "*"){
					fractionFractionSquareRoot = fractionFractionSquareRoot  + '\\cdot';
				}else{
						
					//the number of \left and \right parentheses must correspond to each other - or it breaks 
					if(item_id == "("){
						fractionFractionSquareRoot = fractionFractionSquareRoot  +  '\\left(\\right.';
					}else if(item_id == ")"){
						fractionFractionSquareRoot = fractionFractionSquareRoot  + '\\left.\\right)';		
					}else{
						fractionFractionSquareRoot = fractionFractionSquareRoot  + item_id;
					}		
				}
			//squareroot is wrapped in TEX and stored in getFractionFractionSquareRootItem
			getFractionFractionSquareRootItem =  backSlash +'sqrt{'+fractionFractionSquareRoot+ '}';
		
		}
			

	  	FFS_UpdateMathjax(getFractionFractionSquareRootItem)//update current workspace
		
	
		if(fractionFractionNumeratorActive==true){//Add items to numerator in parent workspace
				
				//In the parent workspace numerator cannot be null
				if(fractionFractionNumerator==""){
				 fractionFractionNumerator = fractionFractionNumerator + " ";
				}

			fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
			
			getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of getFractionFractionSquareRootItem to array
			
			fractionFractionNumerator = fractionFractionNumerator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
			
			//both numerator and denominator are wrapped in TEX and stored in getFractionFractionItem
			getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
				
				
				if(numeratorActive==true){//parent/parent
				
					numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//
					
					getFractionFractionNumeratorItemArray.push(getFractionFractionItem)//push contents of getFractionFractionItem to array
					
					numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];
			
				}else{
				
					denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');
			
					getFractionFractionDenominatorItemArray.push(getFractionFractionItem)//push contents of getFractionFractionItem to array
			
					denominator = denominator + getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1];
				
				
				}
				
			//both numerator and denominator are wrapped in TEX and stored in getFractionItem	
			getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
				
			mainUpdateMathjax(concatEquationItems + getFractionItem); //update to main Panel
				

		}else{//Add items to denominator in parent workspace
				
				//In the parent workspace denominator cannot be null
				if(fractionFractionDenominator==""){
				fractionFractionDenominator = fractionFractionDenominator + " ";
				}
			
			
			fractionFractionDenominator = fractionFractionDenominator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');
			
			getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of getFractionFractionSquareRootItem to array
			
			fractionFractionDenominator = fractionFractionDenominator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
			
			//both numerator and denominator are wrapped in TEX and stored in getFractionFractionItem
			getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
			
			
	
				if(numeratorActive==true){//Add items to numerator of parent workspace
					numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');
			
					getFractionFractionNumeratorItemArray.push(getFractionFractionItem)//push contents of getFractionFractionItem to array
			
					numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];
				}else{
				
					denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');
			
					getFractionFractionDenominatorItemArray.push(getFractionFractionItem)//push contents of getFractionFractionItem to array
			
					denominator = denominator + getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1];
	
				}
			
			//both numerator and denominator are wrapped in TEX and stored in getFractionItem
			getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
			
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
		}
	
	}//end function
	  
	  
	function upDatefractionFractionPanelFromfractionFractionSquareRootPanel(){
		
		//validate user input
		if(fractionFractionSquareRoot == ""){
			alert("Please complete Square Root or select cancel")
			
		}else{
		
			/*
			Push empty item to array 
			Explain: 
			When you add a squareroot and close the workspace a squareroot is added
			Now reopen the workspace  to add another squareroot on the same line... the replace method in the function above only replaces 
			the empty space we added below ...  not the previous squareroot added
			This will allow multible squareroot on the same line when updating the main workspace above
			*/
			getFractionFractionSquareRootItemArray.push(" ")//push empty string to array
			FF_UpdateMathjax(getFractionFractionItem)//Update que for parent workspace


			document.getElementById('fractionFractionSquareRootPanel').style.display = "none";
			fractionFractionSquareRoot = ""	;
			getFractionFractionSquareRootItem="";
			
			document.getElementById('fractionFractionPanel').style.display = "block";
			
			//Set Panel context # to parent workspace
			keyBoardInputPanelNumber="2";
		}
	}
	
	
	
	function resetFractionFractionSquareRoot(){
			
			//reset current workspace and main workspace
			//track and delete last duplicate item
			
			if(fractionFractionNumeratorActive==true){//parent
				

					reverseGetFractionItem = fractionFractionNumerator.split("").reverse().join("");

					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');

					fractionFractionNumerator = reverseGetFractionItem.split("").reverse().join("");


				
					reverseGetFractionItem = getFractionFractionItem.split("").reverse().join("");

					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');

					getFractionFractionItem = reverseGetFractionItem.split("").reverse().join("");

	
					if(numeratorActive==true){//parent/parent
					
							reverseGetFractionItem = numerator.split("").reverse().join("");

							reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');

							numerator = reverseGetFractionItem.split("").reverse().join("");
										
					}else{
	
							reverseGetFractionItem = denominator.split("").reverse().join("");

							reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
							
							denominator = reverseGetFractionItem.split("").reverse().join("");

					}
				
					//duplicate code
				
					reverseGetFractionItem = getFractionItem.split("").reverse().join("");

					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');

					getFractionItem = reverseGetFractionItem.split("").reverse().join("");


					mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
		
			}else{//denominator of parent
			
					reverseGetFractionItem = fractionFractionDenominator.split("").reverse().join("");

					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');

					fractionFractionDenominator = reverseGetFractionItem.split("").reverse().join("");

				
					reverseGetFractionItem = getFractionFractionItem.split("").reverse().join("");

					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');

					getFractionFractionItem = reverseGetFractionItem.split("").reverse().join("");

		
					if(numeratorActive==true){//parent/parent

							reverseGetFractionItem = numerator.split("").reverse().join("");

							reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');

							numerator = reverseGetFractionItem.split("").reverse().join("");

						
					}else{//denominator -- parent/parent

							reverseGetFractionItem = denominator.split("").reverse().join("");
							console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
							reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
							console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
							denominator = reverseGetFractionItem.split("").reverse().join("");
							console.log('denominator = '+ denominator)
		
					}
				
					//duplicate code
				
					reverseGetFractionItem = getFractionItem.split("").reverse().join("");

					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');

					getFractionItem = reverseGetFractionItem.split("").reverse().join("");


				mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
			}
			
				
				
			getFractionFractionSquareRootItemArray=[];//reset array
			
			fractionFractionSquareRoot="";
			
			getFractionFractionSquareRootItem="";
		
			FFS_UpdateMathjax(getFractionFractionSquareRootItem);//update current workspace with empty string
		
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
		
	
	}//end function
	
	
	function cancelUpDateFractionFractionPanelFromFractionFractionSquareRootPanel(){

			document.getElementById('fractionFractionSquareRootPanel').style.display = "none";
			
			document.getElementById('fractionFractionPanel').style.display = "block";
		

			if(fractionFractionNumeratorActive==true){//parent
			
					reverseGetFractionItem = fractionFractionNumerator.split("").reverse().join("");
					
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');
					
					fractionFractionNumerator = reverseGetFractionItem.split("").reverse().join("");
					
				

					reverseGetFractionItem = getFractionFractionItem.split("").reverse().join("");
					
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');
					
					getFractionFractionItem = reverseGetFractionItem.split("").reverse().join("");
					
					
					if(numeratorActive==true){//parent/parent

							reverseGetFractionItem = numerator.split("").reverse().join("");
							
							reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
							
							numerator = reverseGetFractionItem.split("").reverse().join("");
							
					}else{
						
							reverseGetFractionItem = denominator.split("").reverse().join("");
							
							reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
							
							denominator = reverseGetFractionItem.split("").reverse().join("");
					}
				
					//duplicate code
				
					reverseGetFractionItem = getFractionItem.split("").reverse().join("");
					
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');
					
					getFractionItem = reverseGetFractionItem.split("").reverse().join("");
					
			
					mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
			
			}else{//denominator - parent

					reverseGetFractionItem = fractionFractionDenominator.split("").reverse().join("");
				
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');
					
					fractionFractionDenominator = reverseGetFractionItem.split("").reverse().join("");
					
				
					reverseGetFractionItem = getFractionFractionItem.split("").reverse().join("");
					
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');
					
					getFractionFractionItem = reverseGetFractionItem.split("").reverse().join("");
					
				

					if(numeratorActive==true){//parent/parent
						
							reverseGetFractionItem = numerator.split("").reverse().join("");
							
							reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
							
							numerator = reverseGetFractionItem.split("").reverse().join("");
						
					}else{//denominator - parent/parent
						
							reverseGetFractionItem = denominator.split("").reverse().join("");
							
							reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionItem.split("").reverse().join(""), '');
							
							denominator = reverseGetFractionItem.split("").reverse().join("");

					}
				
					//duplicate code
				
					reverseGetFractionItem = getFractionItem.split("").reverse().join("");
					
					reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');
					
					getFractionItem = reverseGetFractionItem.split("").reverse().join("");
							
				
	
					mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
			
			}
		
	
			getFractionFractionSquareRootItemArray=[];//reset array 
			getFractionFractionSquareRootItem="";
			fractionFractionSquareRoot="";
			
			//Set workspace context # to parent workspace
			keyBoardInputPanelNumber="2";
		
	}