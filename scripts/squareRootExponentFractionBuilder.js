
var squareRootExponentFractionNumerator ="";
var squareRootExponentFractionDenominator="";
var getSquareRootExponentFractionItem="";
var squareRootExponentFractionNumeratorActive;

//Array used to update parent workspace with the last items in the array
var getSquareRootExponentFractionItemArray = new Array()


	function showSquareRootExponentFractionBuilder(){//show fraction workspace

		document.getElementById('squareRootExponentPanel').style.display = "none";
		document.getElementById('squareRootExponentFractionPanel').style.display = "block";
		document.getElementById('squareRootExponentFractionPanel').style.zIndex = 82;
		document.getElementById('squareRootExponentFractionPanel').style.float = "left";
		
		squareRootExponentFractionNumeratorActive=true;//input to numerator
		getSquareRootExponentFractionItem="";
		getSquareRootExponentFractionItemArray=[];
		
		SF_UpdateMathjax(getSquareRootExponentFractionItem);//update with empty string
		
	}
	

  function squareRootExponentFractionBuilder(item_id){
		
		console.log("this is another test")
		
		if(item_id == "squareRootExponentFractionNumeratorid"){//squareRootExponentFractionNumerator true   
			//console.log("squareRootExponentFractionNumeratorid")     
			squareRootExponentFractionNumeratorActive=true;//input to numerator
			 
			document.getElementById("squareRootExponentFractionDenominatorid").style.color = "#727272";
			document.getElementById("squareRootExponentFractionNumeratorid").style.color = "#e4f6fe";
			
			return; //break from function
			}
			
		if(item_id == "squareRootExponentFractionDenominatorid"){//numerator true
			//console.log("squareRootExponentFractionNumeratorActive = " + squareRootExponentFractionNumeratorActive)
		
			squareRootExponentFractionNumeratorActive=false;//input to denominator
			
			document.getElementById("squareRootExponentFractionNumeratorid").style.color = "#727272";
			document.getElementById("squareRootExponentFractionDenominatorid").style.color = "#e4f6fe";
			return; //break from function
			}
			
	
			//open level 4 panels
			
			/*
				   if(item_id == "fractionFractionPowerBtn"){//
					   //console.log("fractionFractionExponentPanel")
					   		exponentBaseActive=true;//base input to true
							showfractionFractionExponentBuilder();//this pops up the panel to build fractions inside of fractions ..... see fractionFractionBuilder.js
							
							document.getElementById("fractionFractionBaseId").style.color = "#e4f6fe";//style numerator button
							document.getElementById("fractionFractionExponentId").style.color = "#727272"//style denominator button
							return;//break from function
				  }
			*/
			//end open level 4 panels
			
				
		//Add items to Panel
		 if(squareRootExponentFractionNumeratorActive==true){

			if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
					
					
						//Auto sizing brackets
				
						if(item_id == "*"){
							squareRootExponentFractionNumerator = squareRootExponentFractionNumerator  + '\\cdot';
						}else{
								
							//the number of \left and \right parentheses must correspond to each other - or it breaks 
							if(item_id == "("){
								squareRootExponentFractionNumerator = squareRootExponentFractionNumerator  +  '\\left(\\right.';
							}else if(item_id == ")"){
								squareRootExponentFractionNumerator = squareRootExponentFractionNumerator  + '\\left.\\right)';		
							}else{
								
								squareRootExponentFractionNumerator = squareRootExponentFractionNumerator  + item_id;
		
							}	
								
						}
					

			
			getSquareRootExponentFractionItem =  backSlash +'frac{'+squareRootExponentFractionNumerator+'}{'+squareRootExponentFractionDenominator+'}' + "\\,";///////   + "\\," add horozonal space to end of double fractions
			
			}
		}else{
			
			getSquareRootExponentFractionItem = "";//reset to nothing
			
		 	if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
					
					
						//Auto sizing brackets
				
						if(item_id == "*"){
							squareRootExponentFractionDenominator = squareRootExponentFractionDenominator  + '\\cdot';
						}else{
								
							//the number of \left and \right parentheses must correspond to each other - or it breaks 
							if(item_id == "("){
								squareRootExponentFractionDenominator = squareRootExponentFractionDenominator  +  '\\left(\\right.';
							}else if(item_id == ")"){
								squareRootExponentFractionDenominator = squareRootExponentFractionDenominator  + '\\left.\\right)';		
							}else{
								
								squareRootExponentFractionDenominator = squareRootExponentFractionDenominator  + item_id;
		
							}	
								
						}
			
			getSquareRootExponentFractionItem =  backSlash +'frac{'+squareRootExponentFractionNumerator+'}{'+squareRootExponentFractionDenominator+'}' + "\\,";  ///////   + "\\," add horozonal space to end of double fractions
			
			
			}	  
		}
		
		
		
		
		
		
	  	UpdateMath2c(getSquareRootExponentFractionItem)//Update que for fractionFractionPanel
		
		
				if(squareRootExponentBaseActive!=true){//fractions can only go in the exponent in the power
				
				
				console.log("squareRoot aaaa -------------------------------------- = " + squareRoot)
				squareRoot = squareRoot.replace(getSquareRootExponentItem, '');//
				console.log("squareRootBase aaaa -------------------------------------- = " + squareRootBase)
				squareRoot = squareRoot.replace(squareRootBase, '');//
				
				console.log("squareRootBase bbbb -------------------------------------- = " + squareRootBase)
				console.log("squareRoot bbbbb -------------------------------------- = " + squareRoot)
					
							console.log("squareRootExponent aaaa -------------------------------------- = " + squareRootExponent)
							squareRootExponent = squareRootExponent.replace(getSquareRootExponentFractionItemArray[getSquareRootExponentFractionItemArray.length-1], '');//
							console.log("squareRootExponent bbbbb -------------------------------------- = " + squareRootExponent)
							
							
							
							console.log("getSquareRootExponentFractionItem aaaaa-------------------------------------- = " + getSquareRootExponentFractionItem)
							getSquareRootExponentFractionItemArray.push(getSquareRootExponentFractionItem)//push contents of "getSquareRootExponentFractionItem" to array
							console.log("getSquareRootExponentFractionItem bbbbbbb-------------------------------------- = " + getSquareRootExponentFractionItem)
								
							console.log("squareRootExponent ccccccc-------------------------------------- = " + squareRootExponent)
							squareRootExponent = squareRootExponent + getSquareRootExponentFractionItemArray[getSquareRootExponentFractionItemArray.length-1];//squareRootExponent is from the Parent panel 
							console.log("squareRootExponent dddddddddd-------------------------------------- = " + squareRootExponent)

							console.log("getSquareRootExponentItem-------------------------------------- = " + getSquareRootExponentItem)
							
							getSquareRootExponentItem =   squareRootBase + "^{" + squareRootExponent + "}";//
							
							console.log("getSquareRootExponentItem1 -------------------------------------- = " + getSquareRootExponentItem)
							
							console.log("---------------------------------------------------------------------------------------------------------------------------------------------------- ")
							
							
							
							
							
							
							
							squareRoot = squareRoot + getSquareRootExponentItem
							
							
							getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}';
							
							
							
							//getSquareRootItem = getSquareRootItem + getSquareRootExponentFractionItem
							console.log("getSquareRootItem-------------------------------------- = " + getSquareRootItem)
							
							console.log("getSquareRootExponentFractionItem-------------------------------------- = " + getSquareRootExponentFractionItem)
							mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main Panel
					
							
					
					}
				
				
				
				
				
				
				/*
				squareRoot = squareRoot.replace(getSquareRootExponentFractionItemArray[getSquareRootExponentFractionItemArray.length-1], '');//
				
				
				//squareRoot = squareRoot.replace(getSquareRootExponentFractionItemArray[getSquareRootExponentFractionItemArray.length-1], '');//
				
				
				getSquareRootExponentFractionItemArray.push(getSquareRootExponentFractionItem)//push contents of "getSquareRootExponentFractionItem" to array
					
					 console.log("squareRoot-------------------------------------- = " + squareRoot)
					 squareRoot = squareRoot + getSquareRootExponentFractionItemArray[getSquareRootExponentFractionItemArray.length-1];//squareRoot is from the Parent panel 
					 console.log("squareRoot1-------------------------------------- = " + squareRoot)
					// squareRoot = squareRoot + getSquareRootExponentFractionItemArray[getSquareRootExponentFractionItemArray.length-1];//squareRoot is from the Parent panel
				
				//squareRoot = squareRoot + getSquareRootExponentFractionItem;//squareRoot is from the Parent panel
				
				getSquareRootItem =  backSlash +'sqrt{'+squareRoot+ '}';
				
				
				
				//getSquareRootItem = getSquareRootItem + getSquareRootExponentFractionItem
				console.log("getSquareRootItem-------------------------------------- = " + getSquareRootItem)
				
				console.log("getSquareRootExponentFractionItem-------------------------------------- = " + getSquareRootExponentFractionItem)
		mainUpdateMathjax(concatEquationItems + getSquareRootItem); //Realtime update to main Panel
		
		*/
		
		
		
		
		
		
		
		
		//getSquareRootExponentFractionItem="";
		console.log("getSquareRootExponentFractionItem22222222-------------------------------------- = " + getSquareRootExponentFractionItem)
	 }//end function
	 
	 
	 
	 
	  
	  
	function upDateSquareRootExponentPanelFromSquareRootExponentFractionPanel(){
		
		//validate user input
		//console.log("Test num and denom" + numerator + " " + " " +denominator)
		
		if(squareRootExponentFractionNumerator == ""){
			alert("Please add Numerator or select cancel")
			squareRootExponentFractionNumerator = "";
		}else if(squareRootExponentFractionDenominator == ""){
			alert("Please complete Numerator... Add Denomnator or select cancel")	
			squareRootExponentFractionDenominator = "";	
		}else{
			
		document.getElementById('squareRootExponentPanel').style.display = "block";
		document.getElementById('squareRootExponentFractionPanel').style.display = "none";
		
		

			
	
			
		//concatSquareRootFractionItems = concatSquareRootFractionItems + getSquareRootExponentFractionItem;
			
		SE_UpdateMathjax(getSquareRootExponentItem)//update squareRoot panel
		

		squareRootExponentFractionNumerator ="";
		squareRootExponentFractionDenominator="";
			
		}//end else
		
	}
	
	function resetSquareRootExponentFraction(){
		getSquareRootExponentFractionItem="";
		squareRootExponentFractionNumerator ="";
		squareRootExponentFractionDenominator="";
		
		getSquareRootItem = getSquareRootItem.replace(getSquareRootExponentFractionItemArray[getSquareRootExponentFractionItemArray.length-1], '');
		SF_UpdateMathjax(getSquareRootExponentFractionItem);//update with empty string
		
				//update Main panel
		mainUpdateMathjax(concatEquationItems + getSquareRootItem	); //Realtime update to main Panel
		//End update Main Panel
				//This will remove/reset real time updates to parent panels
				
					//squareRoot = squareRoot.replace(getSquareRootExponentFractionItem, '');//

				//End - this will remove/reset real time updates to parent panels
		
	}
	
	
	function cancelUpDateSquareRootExponentPanelFromSquareRootExponentFractionPanel(){
		//hide current panel
		document.getElementById('squareRootFractionPanel').style.display = "none";
		
		//display the previous panel
		document.getElementById('squareRootPanel').style.display = "block";
		//getSquareRootExponentFractionItem = ""; 
		getSquareRootExponentFractionItem="";
		squareRootExponentFractionNumerator ="";
		squareRootExponentFractionDenominator="";
	
		getSquareRootItem = getSquareRootItem.replace(getSquareRootExponentFractionItemArray[getSquareRootExponentFractionItemArray.length-1], '');
		squareRoot = squareRoot.replace(getSquareRootExponentFractionItemArray[getSquareRootExponentFractionItemArray.length-1], '');
		SF_UpdateMathjax(getSquareRootExponentFractionItem);//update with empty string
		
				//update Main panel
		mainUpdateMathjax(concatEquationItems + getSquareRootItem	); //Realtime update to main Panel
	
		
		
		
	}
	
	