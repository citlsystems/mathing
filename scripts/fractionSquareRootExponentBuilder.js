
var getFractionSquareRootExponentItem="";
var fractionSquareRootExponent="";
var fractionSquareRootBase="";
var fractionSquareRootPowerBaseActive

var reverseGetFractionItem//used in resetting workspaces --- put this declaration in mainpanel.js

//Array used to update parent workspace
//Array includes both exponent and base
var getFractionSquareRootExponentItemArray=[];

	
	function showFractionSquareRootExponentBuilder(){//Show Power workspace
	
		document.getElementById('fractionSquareRootPanel').style.display = "none";
		document.getElementById('fractionSquareRootExponentPanel').style.display = "block";
		document.getElementById('fractionSquareRootExponentPanel').style.zIndex = 88;
		document.getElementById('fractionSquareRootExponentPanel').style.float = "left";
		
		getFractionSquareRootExponentItemArray=[]; //reset the array when opening workspace
		getFractionSquareRootExponentItem="";
		
		FSE_UpdateMathjax(getFractionSquareRootExponentItem);//update queue with empty string
		
		//workspace context # for keypad input
		keyBoardInputPanelNumber="7";
	
	}
	

  	function fractionSquareRootExponentBuilder(item_id){
		
			if(item_id == "fractionSquareRootBaseId"){//set base input to true
				
				fractionSquareRootPowerBaseActive=true;
				 
				document.getElementById("fractionSquareRootExponentId").style.color = "#727272";
				document.getElementById("fractionSquareRootBaseId").style.color = "#e4f6fe";

				return; //break from function
			}
				
			if(item_id == "fractionSquareRootExponentId"){//set exponent input to true
				
				fractionSquareRootPowerBaseActive=false;
				
				document.getElementById("fractionSquareRootExponentId").style.color = "#e4f6fe";
				document.getElementById("fractionSquareRootBaseId").style.color = "#727272";
				
				return; //break from function
			}
		
		
		
			if(fractionSquareRootPowerBaseActive==true){
		
		
					if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
		
							//Auto sizing brackets
							if(item_id == "*"){
								fractionSquareRootBase = fractionSquareRootBase  + '\\cdot';
							}else{
									
								//the number of \left and \right parentheses must correspond to each other - or it breaks 
								if(item_id == "("){
									fractionSquareRootBase = fractionSquareRootBase  +  '\\left(\\right.';
								}else if(item_id == ")"){
									fractionSquareRootBase = fractionSquareRootBase  + '\\left.\\right)';		
								}else{
									
									fractionSquareRootBase = fractionSquareRootBase  + item_id;
								}			
							}
						//both Base and Exponent are wrapped in TEX and stored in getFractionSquareRootExponentItem
						//change idendifier getFractionSquareRootExponentItem  to getFractionSquareRootPowerItem --- 
						getFractionSquareRootExponentItem =   fractionSquareRootBase + "^{" + fractionSquareRootExponent + "}";//

					}
			
			}else{
				
				
					if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
		
							//Auto sizing brackets
							if(item_id == "*"){
								fractionSquareRootExponent = fractionSquareRootExponent  + '\\cdot';
							}else{
									
								//the number of \left and \right parentheses must correspond to each other - or it breaks 
								if(item_id == "("){
									fractionSquareRootExponent = fractionSquareRootExponent  +  '\\left(\\right.';
								}else if(item_id == ")"){
									fractionSquareRootExponent = fractionSquareRootExponent  + '\\left.\\right)';		
								}else{
									fractionSquareRootExponent = fractionSquareRootExponent  + item_id;	
								}			
							}
						//both Base and Exponent are wrapped in TEX and stored in getFractionSquareRootExponentItem
						//change identifier getFractionSquareRootExponentItem  to getFractionSquareRootPowerItem --- 
						getFractionSquareRootExponentItem =   fractionSquareRootBase + "^{" + fractionSquareRootExponent + "}";//

					}
				
			}//end if else
			
			
		
	  		FSE_UpdateMathjax(getFractionSquareRootExponentItem)//update current  workspace
		
		
		
			if(fractionSquareRoot==""){
				fractionSquareRoot = fractionSquareRoot + " ";
			}
				
			//update parent workspace	
			fractionSquareRoot = fractionSquareRoot.replace(getFractionSquareRootExponentItemArray[getFractionSquareRootExponentItemArray.length-1], '');//
			
			getFractionSquareRootExponentItemArray.push(getFractionSquareRootExponentItem)//push contents  to array
			
			fractionSquareRoot = fractionSquareRoot + getFractionSquareRootExponentItemArray[getFractionSquareRootExponentItemArray.length-1];//fractionSquareRoot is from the Parent workspace 
			
			//squareroot wrapped in TEX and stored in getFractionSquareRootItem
			getFractionSquareRootItem =  backSlash +'sqrt{'+fractionSquareRoot+ '}';
				
			
			//update parent/parent workspaces
	
				if(numeratorActive==true){//Add items to numerator parent/parent workspace

					numerator = numerator.replace(getFractionNumeratorSquareRootItemArray[getFractionNumeratorSquareRootItemArray.length-1], '');//
	
					getFractionNumeratorSquareRootItemArray.push(getFractionSquareRootItem)//push contents of getFractionSquareRootItem to array
	
					numerator = numerator + getFractionNumeratorSquareRootItemArray[getFractionNumeratorSquareRootItemArray.length-1];//fractionSquareRoot is from the Parent workspace
				
				}else{//Add items to denominator parent/parent workspace
							
					denominator = denominator.replace(getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1], '');//
	
					getFractionDenominatorSquareRootItemArray.push(getFractionSquareRootItem)//push contents 
	
					denominator = denominator + getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1];//
								
				}
	
	
			//both numerator and denominator are wrapped in TEX and stored in getFractionItem
			getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';

			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
				

	 }//end function
	  
	 
	  
	function upDateFractionSquareRootPanelFromFractionSquareRootExponentPanel(){
		
		//validate user input
		if(fractionSquareRootExponent == ""){
			alert("Please complete both the Base and exponent, or select cancel")
		}else{
		
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace .... parent/parent
			
			FS_UpdateMathjax(getFractionSquareRootItem)//update fraction SquareRoot workspace... parent

			document.getElementById('fractionSquareRootExponentPanel').style.display = "none";
			fractionSquareRootExponent = ""	;
			fractionSquareRootBase="";
			getFractionSquareRootExponentItem="";

			document.getElementById('fractionSquareRootPanel').style.display = "block";
			
			//Set workspace context # to parent workspace --- fraction squareRoot
			keyBoardInputPanelNumber="5";
		}
	}
	
	function resetFractionSquareRootExponent(){
		
		fractionSquareRootPowerBaseActive=true;//set base input to true
		
		document.getElementById("fractionSquareRootBaseId").style.color = "#e4f6fe";//style numerator button
		document.getElementById("fractionSquareRootExponentId").style.color = "#727272"//style denominator button
		
		//reset current workspace and main workspace
		//track and delete last duplicate item
		
		//reset parent
		reverseGetFractionItem = fractionSquareRoot.split("").reverse().join("");

		reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootExponentItem.split("").reverse().join(""), '');

		fractionSquareRoot = reverseGetFractionItem.split("").reverse().join("");
		
		
		//reset parent/parent
		if(numeratorActive==true){
		
			reverseGetFractionItem = numerator.split("").reverse().join("");
		
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');
	
			numerator = reverseGetFractionItem.split("").reverse().join("");


			reverseGetFractionItem = getFractionItem.split("").reverse().join("");

			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootExponentItem.split("").reverse().join(""), '');

			getFractionItem = reverseGetFractionItem.split("").reverse().join("");
	
			
			
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace

		
		}else{//denominator
			
			reverseGetFractionItem = denominator.split("").reverse().join("");

			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');

			denominator = reverseGetFractionItem.split("").reverse().join("");

	
			reverseGetFractionItem = getFractionItem.split("").reverse().join("");
			
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootExponentItem.split("").reverse().join(""), '');

			getFractionItem = reverseGetFractionItem.split("").reverse().join("");
	
			
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
		
		}
			
		getFractionSquareRootExponentItemArray=[];
		getFractionSquareRootExponentItem="";
		fractionSquareRootExponent="";
		fractionSquareRootBase=" ";
		
		
		FSE_UpdateMathjax(getFractionSquareRootExponentItem);//Update current workspace
		
	}
	
	
	function cancelUpDateFractionSquareRootPanelFromFractionSquareRootExponentPanel(){
		
		
		document.getElementById('fractionSquareRootExponentPanel').style.display = "none";
		document.getElementById('fractionSquareRootPanel').style.display = "block";
		
		//parent
		reverseGetFractionItem = fractionSquareRoot.split("").reverse().join("");
		
		reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootExponentItem.split("").reverse().join(""), '');
		
		fractionSquareRoot = reverseGetFractionItem.split("").reverse().join("");
		
	
		//parent/parent
		if(numeratorActive==true){
		
			reverseGetFractionItem = numerator.split("").reverse().join("");
			
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');
			
			numerator = reverseGetFractionItem.split("").reverse().join("");
			
	
			reverseGetFractionItem = getFractionItem.split("").reverse().join("");
			
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootExponentItem.split("").reverse().join(""), '');
			
			getFractionItem = reverseGetFractionItem.split("").reverse().join("");
			
	
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
		
		}else{//denominator
			
			
			reverseGetFractionItem = denominator.split("").reverse().join("");
		
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');
			
			denominator = reverseGetFractionItem.split("").reverse().join("");
			
	

			reverseGetFractionItem = getFractionItem.split("").reverse().join("");
			
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootExponentItem.split("").reverse().join(""), '');
			
			getFractionItem = reverseGetFractionItem.split("").reverse().join("");
			
			
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
			
		
		}
		
	
		getFractionSquareRootExponentItemArray=[];		
		getFractionSquareRootExponentItem="";
		fractionSquareRootExponent="";
		fractionSquareRootBase=" ";
		

		
		//Set workspace context # to parent workspace --- fraction squareRoot
		keyBoardInputPanelNumber="5";
		
	}