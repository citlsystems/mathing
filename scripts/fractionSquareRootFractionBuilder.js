
var fractionSquareRootFractionNumerator ="";
var fractionSquareRootFractionDenominator="";
var getFractionSquareRootFractionItem="";
var fractionSquareRootFractionNumeratorActive;

//Array used to update the var "fractionSquareRoot" from the parent workspace with the last items in the array 
//The array stores value from getFractionSquareRootFractionItem
var getFractionSquareRootFractionItemArray=[];



	function showFractionSquareRootFractionBuilder(){//Show Fraction workspace
		
		document.getElementById('fractionSquareRootPanel').style.display = "none";
		document.getElementById('fractionSquareRootFractionPanel').style.display = "block";
		document.getElementById('fractionSquareRootFractionPanel').style.zIndex = 82;
		document.getElementById('fractionSquareRootFractionPanel').style.float = "left";
		
		fractionSquareRootFractionNumeratorActive=true;//input to numerator true
		
		//reset when opening workspace
		getFractionSquareRootFractionItem="";
		getFractionSquareRootFractionItemArray=[];
		
		
		FSF_UpdateMathjax(getFractionSquareRootFractionItem);//update queue with empty string
		
		//workspace context # for keypad input
		keyBoardInputPanelNumber="6";
		
	}
	

  function fractionSquareRootFractionBuilder(item_id){
		
		// btns to select numerator or denominator
		if(item_id == "fractionSquareRootFractionNumeratorId"){//   
			    
			fractionSquareRootFractionNumeratorActive=true;//input to numerator
			 
			document.getElementById("fractionSquareRootFractionDenominatorId").style.color = "#727272";
			document.getElementById("fractionSquareRootFractionNumeratorId").style.color = "#e4f6fe";
			
			return; //break from function
			}
			
		if(item_id == "fractionSquareRootFractionDenominatorId"){
		
			fractionSquareRootFractionNumeratorActive=false;//input to denominator
			
			document.getElementById("fractionSquareRootFractionNumeratorId").style.color = "#727272";
			document.getElementById("fractionSquareRootFractionDenominatorId").style.color = "#e4f6fe";
			return; //break from function
			
			}
				
		//Add items to workspace
		if(fractionSquareRootFractionNumeratorActive==true){//input to numerator

				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
						//Auto sizing brackets
						if(item_id == "*"){
							fractionSquareRootFractionNumerator = fractionSquareRootFractionNumerator  + '\\cdot';
						}else{
							//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
							if(item_id == "("){
								fractionSquareRootFractionNumerator = fractionSquareRootFractionNumerator  +  '\\left(\\right.';
							}else if(item_id == ")"){
								fractionSquareRootFractionNumerator = fractionSquareRootFractionNumerator  + '\\left.\\right)';		
							}else{
								
								fractionSquareRootFractionNumerator = fractionSquareRootFractionNumerator  + item_id;
							}		
						}
					
					//both Base and Exponent are wrapped in TEX and stored in getFractionSquareRootFractionItem
					//  + "\\," add horozonal space 
					getFractionSquareRootFractionItem =  backSlash +'frac{'+fractionSquareRootFractionNumerator+'}{'+fractionSquareRootFractionDenominator+'}' + "\\,";
				}
		
		}else{
			
			getFractionSquareRootFractionItem = "";//reset
			
				if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
				
						//Auto sizing brackets
						if(item_id == "*"){
							fractionSquareRootFractionDenominator = fractionSquareRootFractionDenominator  + '\\cdot';
						}else{
								
							//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
							if(item_id == "("){
								fractionSquareRootFractionDenominator = fractionSquareRootFractionDenominator  +  '\\left(\\right.';
							}else if(item_id == ")"){
								fractionSquareRootFractionDenominator = fractionSquareRootFractionDenominator  + '\\left.\\right)';		
							}else{
								fractionSquareRootFractionDenominator = fractionSquareRootFractionDenominator  + item_id;
							}			
						}
				
					//both Base and Exponent are wrapped in TEX and stored in getFractionSquareRootFractionItem
					getFractionSquareRootFractionItem =  backSlash +'frac{'+fractionSquareRootFractionNumerator+'}{'+fractionSquareRootFractionDenominator+'}' + "\\,";
			
				}	  
		}
		
	
	  	FSF_UpdateMathjax(getFractionSquareRootFractionItem)//Update que for current workspace
		
	
		//In the parent workspace numerator cannot be empty
		if(fractionSquareRoot==""){
		fractionSquareRoot = fractionSquareRoot + " ";
		}
		
		
		//update parent workspace - squareroot
		fractionSquareRoot = fractionSquareRoot.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//
		getFractionSquareRootFractionItemArray.push(getFractionSquareRootFractionItem)//push contents of getFractionSquareRootFractionItem to array
		fractionSquareRoot = fractionSquareRoot + getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1]; 
		
		//squareroot wrapped in TEX and stored in getFractionSquareRootItem
		getFractionSquareRootItem =  backSlash +'sqrt{'+fractionSquareRoot +'}';
		

		//update parent/parent workspace - fraction
		if(numeratorActive==true){//Add items to numerator of parent/parent workspace
		
			numerator = numerator.replace(getFractionNumeratorSquareRootItemArray[getFractionNumeratorSquareRootItemArray.length-1], '');

			getFractionNumeratorSquareRootItemArray.push(getFractionSquareRootItem)//push contents of getFractionSquareRootItem to array

			numerator = numerator + getFractionNumeratorSquareRootItemArray[getFractionNumeratorSquareRootItemArray.length-1];
			
			//numerator and denominator wrapped in TEX and stored in getFractionItem
			getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';

			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
		
		}else{//Add items to denominator of parent/parent workspace
			
			denominator = denominator.replace(getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1], '');

			getFractionDenominatorSquareRootItemArray.push(getFractionSquareRootItem)//push contents of getFractionSquareRootItem to array

			denominator = denominator + getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1];
			
			//numerator and denominator wrapped in TEX and stored in getFractionItem
			getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';

			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
		
		}	
		
	 }//end function
	 
	 
 
	function upDateFractionSquareRootPanelFromFractionSquareRootFractionPanel(){
		
		//validate user input
		if(fractionSquareRootFractionNumerator == ""){
			alert("Please add Numerator or select cancel")
			fractionSquareRootFractionNumerator = "";
		}else if(fractionSquareRootFractionDenominator == ""){
			alert("Please complete Numerator... Add Denomnator or select cancel")	
			fractionSquareRootFractionDenominator = "";	
		}else{
			
		document.getElementById('fractionSquareRootPanel').style.display = "block";
		document.getElementById('fractionSquareRootFractionPanel').style.display = "none";
		
		
		getFractionSquareRootFractionItemArray.push(" ")//push empty field to array 

		
		FS_UpdateMathjax(getFractionSquareRootItem)//update parent workspace
		document.getElementById('fractionSquareRootFractionPanel').style.display = "none";

		fractionSquareRootFractionNumerator ="";
		fractionSquareRootFractionDenominator="";
		
		//Set workspace context # to parent workspace
		keyBoardInputPanelNumber="5";
			
		}//end else
		
	}
	
	function resetFractionSquareRootFraction(){
		
		//reset current workspace and main workspace
		//track and delete last duplicate item

		//parent
		reverseGetFractionItem = fractionSquareRoot.split("").reverse().join("");
		
		reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');

		fractionSquareRoot = reverseGetFractionItem.split("").reverse().join("");

		if(numeratorActive==true){//parent/parent
		

			reverseGetFractionItem = numerator.split("").reverse().join("");

			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');

			numerator = reverseGetFractionItem.split("").reverse().join("");

	
	
			reverseGetFractionItem = getFractionItem.split("").reverse().join("");

			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');

			getFractionItem = reverseGetFractionItem.split("").reverse().join("");


			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
			
			getFractionSquareRootFractionItemArray.push(" ")//push empty field to array 
		
		}else{
			
			reverseGetFractionItem = denominator.split("").reverse().join("");
	
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');
	
			denominator = reverseGetFractionItem.split("").reverse().join("");
	
	
			reverseGetFractionItem = getFractionItem.split("").reverse().join("");

			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');
	
			getFractionItem = reverseGetFractionItem.split("").reverse().join("");
	
			
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
			
			getFractionSquareRootFractionItemArray.push(" ")//push empty field to array 
		
		}
				

		getFractionSquareRootFractionItem="";
		fractionSquareRootFractionNumerator ="";
		fractionSquareRootFractionDenominator="";
		
		
		FSF_UpdateMathjax(getFractionSquareRootFractionItem);//update queue with empty string
		
		fractionSquareRootFractionNumeratorActive=true;//base input to true
		
		document.getElementById("fractionSquareRootFractionNumeratorId").style.color = "#e4f6fe";//style numerator button
		document.getElementById("fractionSquareRootFractionDenominatorId").style.color = "#727272"//style denominator button
		
	}
	
	
	function cancelUpDateFractionSquareRootPanelFromFractionSquareRootFractionPanel(){
		//hide current panel
		document.getElementById('fractionSquareRootFractionPanel').style.display = "none";
		//display the previous panel
		document.getElementById('fractionSquareRootPanel').style.display = "block";
		

		reverseGetFractionItem = fractionSquareRoot.split("").reverse().join("");

		reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');

		fractionSquareRoot = reverseGetFractionItem.split("").reverse().join("");

				

		if(numeratorActive==true){//parent/parent -numerator
		
			reverseGetFractionItem = numerator.split("").reverse().join("");

			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');

			numerator = reverseGetFractionItem.split("").reverse().join("");

	
	
			reverseGetFractionItem = getFractionItem.split("").reverse().join("");

			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');

			getFractionItem = reverseGetFractionItem.split("").reverse().join("");

			
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
			getFractionSquareRootFractionItemArray.push(" ")//push empty field to array 
		
		}else{//parent/parent -denominator
			

			reverseGetFractionItem = denominator.split("").reverse().join("");

			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');

			denominator = reverseGetFractionItem.split("").reverse().join("");

	

			reverseGetFractionItem = getFractionItem.split("").reverse().join("");
	
			reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');

			getFractionItem = reverseGetFractionItem.split("").reverse().join("");

	
			
			mainUpdateMathjax(concatEquationItems + getFractionItem); //Realtime update to main workspace
			getFractionSquareRootFractionItemArray.push(" ")//push empty field to array 
		
		}
		
		
		getFractionSquareRootFractionItemArray=[]; 
		getFractionSquareRootFractionItem="";
		fractionSquareRootFractionNumerator ="";
		fractionSquareRootFractionDenominator="";
	

		FSF_UpdateMathjax(getFractionSquareRootFractionItem);//update queue with empty string
		
	
		//Set workspace context # to parent workspace
		keyBoardInputPanelNumber="5";
			
	}
	
	