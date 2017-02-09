
var getSquareRootItem="";
var squareRoot="";

	function showSquareRootBuilder(){//Show sqrt workspace
		document.getElementById('squareRootPanel').style.display = "block";
		document.getElementById('squareRootPanel').style.zIndex = 88;
		document.getElementById('squareRootPanel').style.float = "left";

		getSquareRootItem =  backSlash +'sqrt{}';//Show squareRoot symbol

		S_UpdateMathjax(getSquareRootItem);//update current workspace
		
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main workspace
	
		//workspace context # for keypad input
		keyBoardInputPanelNumber="9";
		//remove listener for inputing = in root workspace- no equal sign in this workspace or its children
		window.removeEventListener("keypress", checkKeyPressed, false);
	}
	

  	function squareRootBuilder(item_id){
		
			//open child workspaces
			   if(item_id == "squareRootFractionBtn"){
				   console.log("fractionFractionPanel")
						showSquareRootFractionBuilder();///open workspace to build fraction..... see showSquareRootFractionBuilder.js
						squareRootFractionNumeratorActive=true;//input to numerator
						document.getElementById("squareRootFractionNumeratorid").style.color = "#e4f6fe";//style numerator button
						document.getElementById("squareRootFractionDenominatorid").style.color = "#727272"//style denominator button
						return;//break from function
			  }else if(item_id == "squareRootPowerBtn"){
						showSquareRootExponentBuilder();//open workspace to build Power ..... see squareRootPowerBuilder.js
						squareRootExponentBaseActive=true;//base input to true
						document.getElementById("squareRootBaseId").style.color = "#e4f6fe";//style numerator button
						document.getElementById("squareRootExponentId").style.color = "#727272"//style denominator button
						return;//break from function

			  }
		

			//Add items to current workspace .... squareRoot
			if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
		

					//Auto sizing brackets
					if(item_id == "*"){
						squareRoot = squareRoot  + '\\cdot';
					}else{
							
						//the number of \left and \right parentheses must correspond to each other - or it breaks 
						if(item_id == "("){
							squareRoot = squareRoot  +  '\\left(\\right.';
						}else if(item_id == ")"){
							squareRoot = squareRoot  + '\\left.\\right)';		
						}else{
							squareRoot = squareRoot  + item_id;	
						}		
					}
				//squareRoot wrapped in TEX and stored in getSquareRootItem	
				getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}'
			
			}
		
	  	S_UpdateMathjax(getSquareRootItem)//update que for current workspace
	
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main workspace
		
	 }//end function
	  
	  
	function upDateMainEquationFromSquareRoot(){
		
		//validate user input
		if(squareRoot == ""){
			alert("Please complete Square Root or select cancel")
			
		}else{
			
			//array used to UnDo work added to main workspace
			mathOutputArray.push(getSquareRootItem);//push getSquareRootItem to array
	
			concatEquationItems = concatEquationItems + getSquareRootItem;//Add contents of getSquareRootItem to main workspace
			mainUpdateMathjax(concatEquationItems)//update main workspace
			document.getElementById('squareRootPanel').style.display = "none";
			squareRoot = "";
			
			//Set workspace context # to parent workspace "main workspace"
			keyBoardInputPanelNumber="0";
			//Add listener for inputing = in root workspace
			window.addEventListener("keypress", checkKeyPressed, false);
			
		}
	}
	
	function resetSquareRoot(){//Reset current workspace and main workspace
		getSquareRootItem="";
		getSquareRootItem =  backSlash +'sqrt{}';//Show squareRoot symbol
		squareRoot="";
		S_UpdateMathjax(getSquareRootItem);//update current workspace
		
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //update to main workspace
			
	}
	
	
	function cancelUpDateMainEquationFromSquareRoot(){

		document.getElementById('squareRootPanel').style.display = "none";//
		
		getSquareRootItem="";
		squareRoot="";
		S_UpdateMathjax(getSquareRootItem);	//Update current workspace	
		
		//update Main Panel
		mainUpdateMathjax(concatEquationItems);//Cancel insert to main workspace
		
		//Set workspace context # to main workspace
		keyBoardInputPanelNumber="0";
		//Add listener for inputing = in root workspace
		window.addEventListener("keypress", checkKeyPressed, false);
		
	}