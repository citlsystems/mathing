var	keyBoardInputPanelNumber="0";

//event listener used  for "=" to turn the "Return" btn on and off
window.addEventListener("keypress", checkKeyPressed, false);
 
function checkKeyPressed(e) {//equal sign charcode 61
    if (e.charCode == "61") {
        equalEventHandler();
    }
	
}

//Workspace # for numpad input - a number in this case is assign statically to each workspace using "keyBoardInputPanelNumber"
//e.g. keyBoardInputPanelNumber="0" flows input into Fraction Workspace

  
$(window).load(function(){
	$("body").keypress(function(e){
		//alert(e.keyCode);
		var keyValue = String.fromCharCode(e.keyCode);
		

				
		//alert(keyValue);
		//use char codes to represent numbers
		//order of keycodes --- 0,1,2,3,4,5,6,7,8,9,x,y,z,=,+,-,*,,(,)
		if((e.keyCode == "48")||(e.keyCode == "49")||(e.keyCode == "50")||(e.keyCode == "51")||(e.keyCode == "52")||(e.keyCode == "53")||(e.keyCode == "54")||(e.keyCode == "55")||(e.keyCode == "56")||(e.keyCode == "57")||(e.keyCode == "120")||(e.keyCode == "121")||(e.keyCode == "122")||(e.keyCode == "43")||(e.keyCode == "42")||(e.keyCode == "45")||(e.keyCode == "40")||(e.keyCode == "41")){
			
			//plus sign keycode 43
			//multiply sign keycode 42
			//minus sign keycode 45 or 95
			// ( sign keycode 40
			// ) sign keycode 41


			
			if(e.keyCode == "42"){
				  //convert "asterisk" key code to multiplication symbol - which is a dot
				  keyValue = backSlash +"cdot"; //(cdot) = latex for . used in multiplication
				 //getEquationItem =  "*";
			  }
			//Main Panel
			if(keyBoardInputPanelNumber=="0"){
				//getEquationItem =  "1";
				getEquationItem = keyValue;
				//concat items		
				concatEquationItems += getEquationItem;
				//update queue
				mainUpdateMathjax(concatEquationItems);
				mathOutputArray.push(getEquationItem);
			}
			//fraction panel
			if(keyBoardInputPanelNumber=="1"){
				fractionBuilder(keyValue)
			}
			//fraction fraction panel
			if(keyBoardInputPanelNumber=="2"){
				fractionFractionBuilder(keyValue)
			}
			//fraction fraction exponent panel
			if(keyBoardInputPanelNumber=="3"){
				fractionFractionExponentBuilder(keyValue)
			}
			//fraction fraction squareRoot panel
			if(keyBoardInputPanelNumber=="4"){
				fractionFractionSquareRootBuilder(keyValue)
			}
			//fraction squareRoot panel
			if(keyBoardInputPanelNumber=="5"){
				fractionSquareRootBuilder(keyValue)
			}
			//fraction squareRoot fraction panel
			if(keyBoardInputPanelNumber=="6"){
				fractionSquareRootFractionBuilder(keyValue)
			}
			//fraction squareRoot Exponent panel
			if(keyBoardInputPanelNumber=="7"){
				fractionSquareRootExponentBuilder(keyValue)
			}
			//fraction Exponent panel
			if(keyBoardInputPanelNumber=="8"){
				fractionExponentBuilder(keyValue)
			}
					
			//SquareRoot panel
			if(keyBoardInputPanelNumber=="9"){
				squareRootBuilder(keyValue)
			}
			//SquareRoot Fraction panel
			if(keyBoardInputPanelNumber=="10"){
				squareRootFractionBuilder(keyValue)
			}
			//SquareRoot Fraction Exponent panel
			if(keyBoardInputPanelNumber=="11"){
				squareRootFractionExponentBuilder(keyValue)
			}
			//SquareRoot Exponent panel
			if(keyBoardInputPanelNumber=="12"){
				squareRootExponentBuilder(keyValue)
			}
			//Exponent panel
			if(keyBoardInputPanelNumber=="13"){
				exponentBuilder(keyValue)
			}
		}else{
			getEquationItem =  "";

		}
    });
	
});//]]>  