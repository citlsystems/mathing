
var squareRootFractionNumerator ="";
var squareRootFractionDenominator="";
var getSquareRootFractionItem="";
var squareRootFractionNumeratorActive;


//Array used to update parent workspace with the last items in the array 
var getSquareRootFractionItemArray = new Array()


	function showSquareRootFractionBuilder(){//Show fraction workspace
		
		document.getElementById('squareRootPanel').style.display = "none";
		document.getElementById('squareRootFractionPanel').style.display = "block";
		document.getElementById('squareRootFractionPanel').style.zIndex = 82;
		document.getElementById('squareRootFractionPanel').style.float = "left";
		
		squareRootFractionNumeratorActive=true;//input to numerator set to true
		
		getSquareRootFractionItem="";
		getSquareRootFractionItemArray=[];
		
		SF_UpdateMathjax(getSquareRootFractionItem);//update fraction workspace
		
		//Workspace context # for keyboard input
		keyBoardInputPanelNumber="10";
	}
	

	function squareRootFractionBuilder(item_id){
		
		if(item_id == "squareRootFractionNumeratorid"){//btn for numerator true   
			squareRootFractionNumeratorActive=true;//input to numerator
			 
			document.getElementById("squareRootFractionDenominatorid").style.color = "#727272";
			document.getElementById("squareRootFractionNumeratorid").style.color = "#e4f6fe";
			
			return; //break from function
		}
			
		if(item_id == "squareRootFractionDenominatorid"){//btn for denominator true
		
			squareRootFractionNumeratorActive=false;//input to denominator
			
			document.getElementById("squareRootFractionNumeratorid").style.color = "#727272";
			document.getElementById("squareRootFractionDenominatorid").style.color = "#e4f6fe";
			
			return; //break from function
		}
			
	
			//open child workspace
		   if(item_id == "squareRootFractionPowerBtn"){
				squareRootFractionExponentBaseActive=true;
				showSquareRootFractionExponentBuilder();////workspace to build Power ..... see squareRootFractionExponentBuilder.js
				
				document.getElementById("squareRootFractionBaseId").style.color = "#e4f6fe";//style numerator button
				document.getElementById("squareRootFractionExponentId").style.color = "#727272"//style denominator button
				return;//break from function
		  }
				
			
				
		//Add items to current workspace
		if(squareRootFractionNumeratorActive==true){//Add to the numerator

				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
				
				
						//Auto sizing brackets
						if(item_id == "*"){
							squareRootFractionNumerator = squareRootFractionNumerator  + '\\cdot';
						}else{
							//the number of \left and \right parentheses must correspond to each other - or it breaks 
							if(item_id == "("){
								squareRootFractionNumerator = squareRootFractionNumerator  +  '\\left(\\right.';
							}else if(item_id == ")"){
								squareRootFractionNumerator = squareRootFractionNumerator  + '\\left.\\right)';		
							}else{
								squareRootFractionNumerator = squareRootFractionNumerator  + item_id;
		
							}	
								
						}
				
					//both numerator and denominator are wrapped in TEX and stored in getSquareRootFractionItem
					getSquareRootFractionItem =  backSlash +'frac{'+squareRootFractionNumerator+'}{'+squareRootFractionDenominator+'}' + "\\,";//   + "\\," add horozonal space to end 
				
				}
		}else{//Add to the numerator
			
			getSquareRootFractionItem = "";//reset to nothing
			
			
			
			
		 	if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
			
				//Auto sizing brackets
			
					if(item_id == "*"){
						squareRootFractionDenominator = squareRootFractionDenominator  + '\\cdot';
					}else{
							
						//the number of \left and \right parentheses must correspond to each other - or it breaks 
						if(item_id == "("){
							squareRootFractionDenominator = squareRootFractionDenominator  +  '\\left(\\right.';
						}else if(item_id == ")"){
							squareRootFractionDenominator = squareRootFractionDenominator  + '\\left.\\right)';		
						}else{
							
							squareRootFractionDenominator = squareRootFractionDenominator  + item_id;
	
						}	
							
					}
		
				//both numerator and denominator are wrapped in TEX and stored in getSquareRootFractionItem
				getSquareRootFractionItem =  backSlash +'frac{'+squareRootFractionNumerator+'}{'+squareRootFractionDenominator+'}' + "\\,";  //  + "\\," add horozonal space to end 
			
			
			}	  
		}
			
	
	  	SF_UpdateMathjax(getSquareRootFractionItem)//Update que for current workspace	
		
		//update parent workspace - squareroot		
		squareRoot = squareRoot.replace(getSquareRootFractionItemArray[getSquareRootFractionItemArray.length-1], '');//
		getSquareRootFractionItemArray.push(getSquareRootFractionItem)//push contents of "getSquareRootFractionItem" to array
		squareRoot = squareRoot + getSquareRootFractionItemArray[getSquareRootFractionItemArray.length-1];//squareRoot is from the Parent panel 
		
		//squareRoot wrapped in TEX and stored in getSquareRootItem
		getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}';
				
	
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main workspace

	 }//end function
	 
	 
	function upDateSquareRootPanelFromSquareRootFractionPanel(){
		
		//validate user input
		if(squareRootFractionNumerator == ""){
			alert("Please add Numerator or select cancel")
			squareRootFractionNumerator = "";
		}else if(squareRootFractionDenominator == ""){
			alert("Please complete Numerator... Add Denomnator or select cancel")	
			squareRootFractionDenominator = "";	
		}else{
			
		document.getElementById('squareRootPanel').style.display = "block";
		document.getElementById('squareRootFractionPanel').style.display = "none";
			
		S_UpdateMathjax(getSquareRootItem)//update squareRoot workspace
		document.getElementById('squareRootFractionPanel').style.display = "none";
		getSquareRootFractionItem="";
		squareRootFractionNumerator ="";
		squareRootFractionDenominator="";
		
		//Set context # to parent workspace --- squareRoot panel
		keyBoardInputPanelNumber="9";
			
		}//end else
		
	}
	
	function resetSquareRootFraction(){

		//reset parent workspace
		reverseGetFractionItem = squareRoot.split("").reverse().join("");
		
		reverseGetFractionItem = reverseGetFractionItem.replace(getSquareRootFractionItem.split("").reverse().join(""), '');
		
		squareRoot = reverseGetFractionItem.split("").reverse().join("");
		
		//squareroot wrapped in TEX and stored in getSquareRootItem
		getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}';
		
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main workspace
				
	
		getSquareRootFractionItemArray=[];
		getSquareRootFractionItem="";
		squareRootFractionNumerator ="";
		squareRootFractionDenominator="";
		SF_UpdateMathjax(getSquareRootFractionItem);//reset current workspace
		
		squareRootFractionNumeratorActive=true;//input to numerator
		document.getElementById("squareRootFractionNumeratorid").style.color = "#e4f6fe";//style numerator button
		document.getElementById("squareRootFractionDenominatorid").style.color = "#727272"//style denominator button		
		
	}
	
	
	function cancelUpDateSquareRootPanelFromSquareRootFractionPanel(){
		//hide current panel
		document.getElementById('squareRootFractionPanel').style.display = "none";
		
		//display the previous panel
		document.getElementById('squareRootPanel').style.display = "block";
		
		//Set Panel context # to parent panel --- squareRoot panel
		keyBoardInputPanelNumber="9";
		
		//update parent workspace - square root
		reverseGetFractionItem = squareRoot.split("").reverse().join("");

		reverseGetFractionItem = reverseGetFractionItem.replace(getSquareRootFractionItem.split("").reverse().join(""), '');

		squareRoot = reverseGetFractionItem.split("").reverse().join("");

		//squareroot wrapped in TEX and stored in getSquareRootItem
		getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}';
		
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main workspace
				
	
		getSquareRootFractionItemArray=[];
		getSquareRootFractionItem="";
		squareRootFractionNumerator ="";
		squareRootFractionDenominator="";
	
		
	}
	
	