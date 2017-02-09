
var getSquareRootExponentItem="";
var squareRootExponent="";
var squareRootBase="";
var squareRootExponentBaseActive


//Array used to update parent workspace with the last items in the array
var getSquareRootExponentItemArray = new Array()

	function showSquareRootExponentBuilder(){//Show Power workspace
		
		document.getElementById('squareRootPanel').style.display = "none";
		document.getElementById('squareRootExponentPanel').style.display = "block";
		document.getElementById('squareRootExponentPanel').style.zIndex = 82;
		document.getElementById('squareRootExponentPanel').style.float = "left";
		
		getSquareRootExponentItem="";
		getSquareRootExponentItemArray=[];
		SE_UpdateMathjax(getSquareRootExponentItem);//update with empty string
		
		//Workspace context # for keyboard input
		keyBoardInputPanelNumber="12";
		
	}
	

  	function squareRootExponentBuilder(item_id){
	  
		if(item_id == "squareRootBaseId"){//btn for base true
			
			squareRootExponentBaseActive=true;//input to base
			 
			document.getElementById("squareRootExponentId").style.color = "#727272";
			document.getElementById("squareRootBaseId").style.color = "#e4f6fe";
			
			return; //break from function
			
		}
			
		if(item_id == "squareRootExponentId"){//btn for exponent true
			
			squareRootExponentBaseActive=false;//input to exponent
			
			document.getElementById("squareRootExponentId").style.color = "#e4f6fe";
			document.getElementById("squareRootBaseId").style.color = "#727272";
			
			return; //break from function
		}
				
		//open child workspace
		if(item_id == "squareRootExponentFractionBtn"){//
		   
				squareRootExponentFractionNumeratorActive=true;//numerator active
				
				showSquareRootExponentFractionBuilder();//workspace to build fraction ..... see squareRootExponentFractionBuilder.js
				
				document.getElementById("squareRootExponentFractionNumeratorid").style.color = "#e4f6fe";//style numerator button
				document.getElementById("squareRootExponentFractionDenominatorid").style.color = "#727272"//style denominator button
				
				return;//break from function
		}
			

		//Add items to current workspace
		if(squareRootExponentBaseActive==true){//Add items to the Base
			
					if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
			
								//Auto sizing brackets
								if(item_id == "*"){
									squareRootBase = squareRootBase  + '\\cdot';
								}else{
									//the number of \left and \right parentheses must correspond to each other - or it breaks 
									if(item_id == "("){
										squareRootBase = squareRootBase  +  '\\left(\\right.';
									}else if(item_id == ")"){
										squareRootBase = squareRootBase  + '\\left.\\right)';		
									}else{
										
										squareRootBase = squareRootBase  + item_id;
									}	
								}
						//both base and exponent are wrapped in TEX and stored in getSquareRootExponentItem
						getSquareRootExponentItem =   squareRootBase + "^{" + squareRootExponent + "}";//
					}
					
					
		}else{//Add items to the Exponent
					
					
					if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
			
								//Auto sizing brackets
								if(item_id == "*"){
									squareRootExponent = squareRootExponent  + '\\cdot';
								}else{	
									//the number of \left and \right parentheses must correspond to each other - or it breaks 
									if(item_id == "("){
										squareRootExponent = squareRootExponent  +  '\\left(\\right.';
									}else if(item_id == ")"){
										squareRootExponent = squareRootExponent  + '\\left.\\right)';		
									}else{
										
										squareRootExponent = squareRootExponent  + item_id;
									}		
								}
						//both base and exponent are wrapped in TEX and stored in getSquareRootExponentItem
						getSquareRootExponentItem =   squareRootBase + "^{" + squareRootExponent + "}";//
					}
				
				
				
			}//end else
		
	
		SE_UpdateMathjax(getSquareRootExponentItem)//Update que for current workspace
			
		//update parent workspace - squareroot		
		squareRoot = squareRoot.replace(getSquareRootExponentItemArray[getSquareRootExponentItemArray.length-1], '');//
		getSquareRootExponentItemArray.push(getSquareRootExponentItem)//push contents of "getSquareRootFractionItem" to array
		squareRoot = squareRoot + getSquareRootExponentItemArray[getSquareRootExponentItemArray.length-1];//squareRoot is from the Parent panel 
		
		//squareRoot is wrapped in TEX and stored in getSquareRootItem
		getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}';
		
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main workspace
		
	 }//end function
	  
	  
	function upDateSquareRootPanelFromSquareRootExponentPanel(){
		
		//validate user input
		if(squareRootExponent == ""){
			alert("Please add Exponent or select cancel")
			
		}else if(squareRootBase == ""){
			alert("Please add Base or select cancel")
			
		}else{
			
			document.getElementById('squareRootExponentPanel').style.display = "none";	
			document.getElementById('squareRootPanel').style.display = "block";
			
			S_UpdateMathjax(getSquareRootItem )//update parent workspace
			
			squareRootBase="";
			getSquareRootExponentItem="";
			squareRootExponent="";	
			
			//Set workspace context # to parent workspace --- squareRoot
			keyBoardInputPanelNumber="9";
				
		}
		
	}
	
	function resetSquareRootExponent(){

		//reset parent workspace
		reverseGetFractionItem = squareRoot.split("").reverse().join("");
		
		reverseGetFractionItem = reverseGetFractionItem.replace(getSquareRootExponentItem.split("").reverse().join(""), '');
		
		squareRoot = reverseGetFractionItem.split("").reverse().join("");
		
		//squareRoot is wrapped in TEX and stored in getSquareRootItem
		getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}';
		
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main Workspace
		

		getSquareRootExponentItemArray=[];
		squareRootBase="";
		getSquareRootExponentItem="";
		squareRootExponent="";
		
		SE_UpdateMathjax(getSquareRootExponentItem)//update current workspace
		
		//Reset Base input to true
		squareRootExponentBaseActive=true;
		document.getElementById("squareRootBaseId").style.color = "#e4f6fe";//style numerator button
		document.getElementById("squareRootExponentId").style.color = "#727272"//style denominator button
		
	}
	
	
	function cancelUpDateSquareRootPanelFromSquareRootExponentPanel(){
		
		//hide current panel
		document.getElementById('squareRootExponentPanel').style.display = "none";
		
		//display the previous panel
		document.getElementById('squareRootPanel').style.display = "block";
		

		//reset parent workspace
		reverseGetFractionItem = squareRoot.split("").reverse().join("");
		
		reverseGetFractionItem = reverseGetFractionItem.replace(getSquareRootExponentItem.split("").reverse().join(""), '');
		
		squareRoot = reverseGetFractionItem.split("").reverse().join("");
		
		//squareRoot is wrapped in TEX and stored in getSquareRootItem
		getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}';
		
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main workspace
		
		getSquareRootExponentItemArray=[];
		squareRootBase="";
		getSquareRootExponentItem="";
		squareRootExponent="";
		
		//Set workspace context # to parent workspace --- squareRoot
		keyBoardInputPanelNumber="9";

	}