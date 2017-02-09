
var getFractionSquareRootItem="";
var fractionSquareRoot="";

//Array used to update parent workspace
var getFractionNumeratorSquareRootItemArray = [] 
var getFractionDenominatorSquareRootItemArray = [] 

	function showFractionSquareRootBuilder(){//Show squareroot workspace
		
		document.getElementById('fractionPanel').style.display = "none";
		document.getElementById('fractionSquareRootPanel').style.display = "block";
		document.getElementById('fractionSquareRootPanel').style.zIndex = 88;
		document.getElementById('fractionSquareRootPanel').style.float = "left";
		
		getFractionNumeratorSquareRootItemArray=[]; //reset the array when opening the panel
		getFractionDenominatorSquareRootItemArray=[]; //reset the array when opening the panel

		getFractionSquareRootItem =  backSlash +'sqrt{}';//Show squareRoot symbol

		FS_UpdateMathjax(getFractionSquareRootItem);//update with empty string
		
		//workspace context # for keypad input
		keyBoardInputPanelNumber="5";
	}
	

  	function fractionSquareRootBuilder(item_id){
		
		
			//open child workspace
			if(item_id == "fractionSquareRootFractionBtn"){
					  
				showFractionSquareRootFractionBuilder();//workspace to build fraction
				fractionSquareRootFractionNumeratorActive=true;//numerator input to true
				document.getElementById("fractionSquareRootFractionNumeratorId").style.color = "#e4f6fe";//style numerator button
				document.getElementById("fractionSquareRootFractionDenominatorId").style.color = "#727272"//style denominator button
				return;//break from function
	
			}
			
			if(item_id == "fractionSquareRootPowerBtn"){
				  
				showFractionSquareRootExponentBuilder();//workspace to build Power
				fractionSquareRootPowerBaseActive=true;//base input to true
				document.getElementById("fractionSquareRootBaseId").style.color = "#e4f6fe";//style numerator button
				document.getElementById("fractionSquareRootExponentId").style.color = "#727272"//style denominator button
				return;//break from function
						
			}
			

		
			if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
		
		
				//Auto sizing brackets
				if(item_id == "*"){
					fractionSquareRoot = fractionSquareRoot  + '\\cdot';
				}else{
						
					//the number of \left and \right parentheses must correspond to each other - or it breaks 
					if(item_id == "("){
						fractionSquareRoot = fractionSquareRoot  +  '\\left(\\right.';
					}else if(item_id == ")"){
						fractionSquareRoot = fractionSquareRoot  + '\\left.\\right)';		
					}else{
						fractionSquareRoot = fractionSquareRoot  + item_id;	
					}	
				}
					
				//squareroot wrapped in TEX and stored in getFractionSquareRootItem
				getFractionSquareRootItem =  backSlash +'sqrt{'+fractionSquareRoot+ '}';

			}
		
	  		FS_UpdateMathjax(getFractionSquareRootItem)//update current  workspace
		
		
				//update parent workspace
				if(numeratorActive==true){//Add items to numerator of parent workspace
				
					//In the parent fraction workspace numerator cannot be null
					if(numerator==""){
					numerator = numerator + " ";
					}
				
				
					numerator = numerator.replace(getFractionNumeratorSquareRootItemArray[getFractionNumeratorSquareRootItemArray.length-1], '');
	
					getFractionNumeratorSquareRootItemArray.push(getFractionSquareRootItem)//push contents of getFractionSquareRootItem to array
					
					numerator = numerator + getFractionNumeratorSquareRootItemArray[getFractionNumeratorSquareRootItemArray.length-1];
				
	
				}else{//denominator of parent
					
					if(denominator==""){
						denominator = denominator + " ";
					}
					
					denominator = denominator.replace(getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1], '');
	
					getFractionDenominatorSquareRootItemArray.push(getFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
					
					denominator = denominator + getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1];
				
				}
					
			//both numerator and denominator are wrapped in TEX and stored in getFractionItem
			getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';

			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace

		
	 }//end function
	  
	  
	function upDateFractionPanelFromFractionSquareRootPanel(){
		
			if(fractionSquareRoot == ""){
				alert("Please complete Square Root or select cancel")
			}else{
		
				mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
				
				F_UpdateMathjax(getFractionItem) //update parent workspace
	
				document.getElementById('fractionSquareRootPanel').style.display = "none";
				fractionSquareRoot = ""	;
				
				document.getElementById('fractionPanel').style.display = "block";
				
				//Set Panel context # to parent workspace
				keyBoardInputPanelNumber="1";
			
			}
			
	}//end function
	
	function resetFractionSquareRoot(){
		
			//reset current workspace and main workspace
			//track and delete last duplicate item
			if(numeratorActive==true){//parent
			
				reverseGetFractionItem = numerator.split("").reverse().join("");

				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');

				numerator = reverseGetFractionItem.split("").reverse().join("");

				
				
				getFractionNumeratorSquareRootItemArray.push(" ")//push empty space
				

			}else{			

				reverseGetFractionItem = denominator.split("").reverse().join("");
				
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');

				denominator = reverseGetFractionItem.split("").reverse().join("");

				
				getFractionDenominatorSquareRootItemArray.push(" ")//push empty space
				
			}
		

			getFractionSquareRootItem="";
			fractionSquareRoot="";
			
			//update current workspace
			getFractionSquareRootItem =  backSlash +'sqrt{}';//only Show fractionSquareRoot symbol
			FS_UpdateMathjax(getFractionSquareRootItem);//update que for current workspace
			
			//update parent workspace
			getFractionItem =  backSlash +'frac{'+numerator+'}{'+denominator+'}';
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
	
	
	}//end function
	
	
	function cancelUpDateFractionPanelFromFractionSquareRootPanel(){
		
		//hide current workspace
		document.getElementById('fractionSquareRootPanel').style.display = "none";
		//display parent workspace
		document.getElementById('fractionPanel').style.display = "block";

			if(numeratorActive==true){// remove item from parent
	
				reverseGetFractionItem = numerator.split("").reverse().join("");

				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');
	
				numerator = reverseGetFractionItem.split("").reverse().join("");
				
			}else{//denominator		
	
				reverseGetFractionItem = denominator.split("").reverse().join("");
				
				reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');
				
				denominator = reverseGetFractionItem.split("").reverse().join("");
				
			}
		
		//both numerator and denominator are wrapped in TEX and stored in getFractionItem
		getFractionItem =  backSlash +'frac{'+numerator+'}{'+denominator+'}';
		mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
		getFractionSquareRootItem="";
		fractionSquareRoot="";
		getFractionNumeratorSquareRootItemArray=[]; //reset the array
		getFractionDenominatorSquareRootItemArray=[];
		
		//Set workspace context # to parent workspace "fraction workspace"
		keyBoardInputPanelNumber="1";
		
	}
	
	
	
	
	