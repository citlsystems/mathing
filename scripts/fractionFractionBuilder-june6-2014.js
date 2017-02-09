// JavaScript Document

var concatFractionFractionItems="";
var fractionFractionNumerator ="";
var fractionFractionDenominator="";
var getFractionFractionItem="";


//vars used to update previous panels with items created in this panel
var numerator1Array = new Array()
var denominator1Array = new Array()
var numerator1 ="";
var denominator1 ="";


		
var success;		


	function showfractionFractionBuilder(){
		
		document.getElementById('fractionPanel').style.display = "none";
		//console.log("start fractionFraction builder");
		document.getElementById('fractionFractionPanel').style.display = "block";
		
		document.getElementById('fractionFractionPanel').style.zIndex = 82;
		document.getElementById('fractionFractionPanel').style.float = "left";
		getFractionFractionItem="";
		UpdateMath1a(getFractionFractionItem);//update with empty string
		
		
		
		
	}
	

  //fractionFractionNumeratorActive
  function fractionFractionBuilder(item_id){
	  
	  
	  
	  console.log("getFractionItem 5 =" + getFractionItem)

	//var backSlash = String.fromCharCode('92');
		
		if(item_id == "fractionFractionNumeratorid"){//fractionFractionNumerator true   
			//console.log("fractionFractionNumeratorid")     
			fractionFractionNumeratorActive=true;//input to numerator
			 
			document.getElementById("fractionFractionDenominatorid").style.color = "#727272";
			document.getElementById("fractionFractionNumeratorid").style.color = "#e4f6fe";
			
			return; //break from function
			}
			
		if(item_id == "fractionFractionDenominatorid"){//numerator true
			//console.log("fractionFractionNumeratorActive = " + fractionFractionNumeratorActive)
		
			fractionFractionNumeratorActive=false;//input to denominator
			
			document.getElementById("fractionFractionNumeratorid").style.color = "#727272";
			document.getElementById("fractionFractionDenominatorid").style.color = "#e4f6fe";
			return; //break from function
			}
			
			
			
			
			
						//console.log("fractionFractionExponentPanel")
			//open level 4 panels
				   if(item_id == "fractionFractionPowerBtn"){//
					   //console.log("fractionFractionExponentPanel")
					   		exponentBaseActive=true;//base input to true
							showfractionFractionExponentBuilder();//this pops up the panel to build fractions inside of fractions ..... see fractionFractionBuilder.js
							
							document.getElementById("fractionFractionBaseId").style.color = "#e4f6fe";//style numerator button
							document.getElementById("fractionFractionExponentId").style.color = "#727272"//style denominator button
							return;//break from function
				  }
			
			//end open level 4 panels
			
			
			

			
			
			
			
			
			
			
			
			
			
			
			
			
		 if(fractionFractionNumeratorActive==true){
			 


			if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
					if(item_id == "*"){
						fractionFractionNumerator = fractionFractionNumerator + '\\cdot';
					}else{
						fractionFractionNumerator = fractionFractionNumerator + item_id;		
					}
			
			
			//console.log("numerator = " + numerator)
			getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";///////   + "\\," add horozonal space to end of double fractions
			
			
			}
		}else{
			
			
			getFractionFractionItem = "";//reset to nothing
			//concatFractionFractionItems="";//reset to nothing
			
			//import from exponent panel if necessary
			
		 	if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")|(item_id == "+")||(item_id == "-")){
			fractionFractionDenominator = fractionFractionDenominator + item_id;
			getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";  ///////   + "\\," add horozonal space to end of double fractions
			
			
			}	  
		}
		
	  	UpdateMath1a(getFractionFractionItem)//UpdateMath1a - que for fractionFractionPanel
		
		
		
		
		
		
		
		
		
		
		/////////////////////////////////update fraction and main panels from this panel/////////////////////////////////////////////////////
		

		
		
		//UpdateMath1(getFractionItem + getFractionFractionItem); //Realtime update to main Panel
		
		//console.log("getFractionItemXXXXXXXXXXXXXXXXXX" + getFractionItem)
		//console.log("getFractionFractionItemXXXXXXXXXXXXXXXXXX" + getFractionFractionItem)
		//console.log("concatEquationItemsXXXXXXXXXXXXXXXXXX" + concatEquationItems)
		
		

		//UpdateMath(concatEquationItems);
		

		if(numeratorActive==true){//Add items to numerator in previous fraction panel
			numerator = numerator.replace(numerator1, '');
			
			//numerator = "";
			//numerator = numerator + numerator1
			
			numerator1 = "";
			numerator1 = numerator1 + getFractionFractionItem
			
			
			numerator1Array.push(numerator1)
			console.log("numerator1Array===================================== = " + numerator1Array)
			//console.log("numerator1Array.length - 1-------------------------------------- = " + numerator1Array.pop())
			console.log("numerator1Array.length - 1-------------------------------------- = " + numerator1Array[numerator1Array.length-1])
			//fractionFractionNumerator ="";
			
			//this is a Hack to let the previous fraction numerator 
			if(numerator==""){//numerator is from the previous fraction Panel
			numerator = numerator + " ";
			console.log("numeratorFF---------------------------------------- = " + numerator)
			}
			
			
			
			//We need dynamica vars here too accout for the rendering of multible fractions in the previous fraction panel numerator or denominator
			//append  a var i to the end of "numerator1 will now be numerator+i"
			//increment i when we update The fraction panel using the function upDatefractionPanelFromfractionFractionPanel() below
			
			
			
			
					numerator = numerator + numerator1Array[numerator1Array.length-1];
		
			
			
		}else{
			
			denominator = denominator.replace(denominator1, '');
			//denominator ="";
			//denominator = denominator + getFractionFractionItem
			denominator1 ="";
			denominator1 = denominator1 + getFractionFractionItem
			//fractionFractionDenominator="";
			
			denominator1Array.push(denominator1	)
			
			if(denominator==""){
			denominator = denominator + " ";//denominator is from the previous fraction Panel
			console.log("denominatorFF-------------------------------------- = " + denominator)
			}
			
			
			denominator = denominator + denominator1Array[denominator1Array.length-1];;
		}
			
		
		//problem keeps deleting stuff previously in getFractionItem from previous panel	
			//fractionBuilder();
		//getFractionItem =   backSlash +'frac{'+ numerator+numerator1+'}{'+denominator+denominator1+'}';
		
		//console.log("numerator before item added = "+ numerator)
		

		//numerator = numerator + numerator1;
		//numerator1="";
		//numerator1 = numerator + numerator1;
		//console.log("numerator after item added = "+ numerator - numerator1)
		//console.log("numerator1Array.length - 1-------------------------------------- = " + numerator1Array.length - 1)
		//
		
		//console.log("numerator after item added= "+ numerator)
		//getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
		//numerator1="";
		
		//numerator = numerator + numerator1;
		//denominator = denominator + denominator1;
		//getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
		//UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
		
		
		
		
		//remove part of string that matches text in The variable numerator1 - every time the user adds an item numerator is created again with appended items
		//numerator = numerator.replace(numerator1, '');
		console.log("numerator  = "+ numerator)
		console.log("denominator = "+ denominator)
		console.log("numerator1  = "+ numerator1)
		console.log("denominator1  = "+ denominator1)
		
		console.log("getFractionItem 1 = " + getFractionItem)
		getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
		console.log("getFractionItem 2 = " + getFractionItem)
		UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
		console.log("getFractionItem 3 = " + getFractionItem)
		
		//numerator = numerator.replace(numerator1, '');
		
		//getFractionItem = getFractionItem.replace(numerator1, '');
		//numerator = numerator.replace(numerator1, '');
		console.log("getFractionItem 4 =" + getFractionItem)
		
		//see success
		//console.log("success  = "+ success)
		//success = numerator.replace(numerator1, '');
		
		
		//UpdateMath1(getFractionItem + "10")
		
			//fractionFractionNumerator ="";
			//fractionFractionDenominator="";
		
		
		
		//getFractionFractionItem = "";//reset to nothing	
		//getFractionItem = "";//reset to nothing	
		
		
		
		//detect if getFractionFractionItem is in num or denom of getFractionItem
		
		
		//numeratorActive is used in the FractionPanel
		/*
		if(numeratorActive==true){
			console.log("test1")
			//numerator = numerator + getFractionFractionItem
			//backSlash +'frac{'+numerator+'}{'+denominator+'}'
			//UpdateMath(concatEquationItems + getFractionItem + numerator); //Realtime update to main Panel
			UpdateMath(concatEquationItems + getFractionItem + backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}'); //Realtime update to main Panel
		}else{
			console.log("test2")
			//denominator = denominator + getFractionFractionItem
			//UpdateMath(concatEquationItems + getFractionItem + getFractionFractionItem); //Realtime update to main Panel
			
			UpdateMath(concatEquationItems + getFractionItem + backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}'); //Realtime update to main Panel
			
		}
		*/
		
		//getFractionItem = getFractionItem + getFractionFractionItem
		
		//concatEquationItems = concatEquationItems + getFractionItem
		
		//numeratorActive is used in the FractionPanel
		//if(numeratorActive==true){numerator = numerator + getFractionFractionItem}else{denominator = denominator + getFractionFractionItem}
		
		
		//UpdateMath(concatEquationItems + getFractionItem + getFractionFractionItem); //Realtime update to main Panel
		
		//UpdateMath(concatEquationItems + getFractionItem + backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}'); //Realtime update to main Panel
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//////////////////////////////////////////////////////////////////////////////////////
		
		
	 }//end function
	  
	  
	function upDatefractionPanelFromfractionFractionPanel(){
		
		//validate user input
		//console.log("Test num and denom" + numerator + " " + " " +denominator)
		
		if(fractionFractionNumerator == ""){
			alert("Please add Numerator or select cancel")
			fractionFractionNumerator = "";
		}else if(fractionFractionDenominator == ""){
			alert("Please complete Numerator... Add Denomnator or select cancel")	
			fractionFractionDenominator = "";	
		}else{
			
		document.getElementById('fractionPanel').style.display = "block";
		document.getElementById('fractionFractionPanel').style.display = "none";
		
		
		
			
			//NOTE for tomorrow
			//Need another array to push to fractionPanel - then the following push will work
			
			//fractionBuilder('test');
			
			//mathOutputArray.push(getFractionFractionItem);/**************************************************************************PUSH TO ARRAY*/
			//console.log(mathOutputArray);
			
			//checkSyntaxForm();//Check user entered syntax 
			
			concatFractionFractionItems = concatFractionFractionItems + getFractionFractionItem;
			
			//numeratorActive is used in the FractionPanel
			//if(numeratorActive==true){numerator = numerator + getFractionFractionItem}else{denominator = denominator + getFractionFractionItem}
			
			
			
			//fractionBuilder();
			//getFractionItem =  backSlash +'frac{'+numerator+'}{'+denominator+'}';
			
			UpdateMath1(getFractionItem)//UpdateMath1 - que for fractionPanel
			document.getElementById('fractionFractionPanel').style.display = "none";
			//getFractionFractionItem = ""; 
			fractionFractionNumerator ="";
			fractionFractionDenominator="";
			
		}//end else
		
	}
	
	function resetFractionFraction(){
		getFractionFractionItem="";
		fractionFractionNumerator ="";
		fractionFractionDenominator="";
		UpdateMath1a(getFractionFractionItem)
	}
	
	
	function cancelUpDateFractionPanelFromFractionFractionPanel(){
		//hide current panel
		document.getElementById('fractionFractionPanel').style.display = "none";
		
		//display the previous panel
		document.getElementById('fractionPanel').style.display = "block";
		//getFractionFractionItem = ""; 
		fractionFractionNumerator ="";
		fractionFractionDenominator="";		
	}
	
	