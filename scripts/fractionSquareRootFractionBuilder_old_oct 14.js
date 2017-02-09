// JavaScript Document


var fractionSquareRootFractionNumerator ="";
var fractionSquareRootFractionDenominator="";
var getFractionSquareRootFractionItem="";
var getFractionSquareRootItemOld="";
var fractionSquareRootFractionNumeratorActive;


//Array used to update the var "fractionSquareRoot" from the previous panel with the last items in the array 
//which stores values from the var getFractionSquareRootFractionItem



var getFractionSquareRootFractionItemArray=[];



	function showFractionSquareRootFractionBuilder(){
		
		
		document.getElementById('fractionSquareRootPanel').style.display = "none";
		//console.log("start fractionFraction builder");
		document.getElementById('fractionSquareRootFractionPanel').style.display = "block";
		
		document.getElementById('fractionSquareRootFractionPanel').style.zIndex = 82;
		document.getElementById('fractionSquareRootFractionPanel').style.float = "left";
		
		fractionSquareRootFractionNumeratorActive=true;//input to numerator
		
		getFractionSquareRootFractionItem="";
		//getFractionSquareRootItemOld="";
		
		getFractionSquareRootFractionItemArray=[];
		
		
		UpdateMath1_2a(getFractionSquareRootFractionItem);//update with empty string
		
		
	}
	

  function fractionSquareRootFractionBuilder(item_id){
		
		
		
		if(item_id == "fractionSquareRootFractionNumeratorId"){//fractionSquareRootFractionNumerator true   
			//console.log("fractionSquareRootFractionNumeratorid")     
			fractionSquareRootFractionNumeratorActive=true;//input to numerator
			 
			document.getElementById("fractionSquareRootFractionDenominatorId").style.color = "#727272";
			document.getElementById("fractionSquareRootFractionNumeratorId").style.color = "#e4f6fe";
			
			return; //break from function
			}
			
		if(item_id == "fractionSquareRootFractionDenominatorId"){//numerator true
			//console.log("fractionSquareRootFractionNumeratorActive = " + fractionSquareRootFractionNumeratorActive)
		
			fractionSquareRootFractionNumeratorActive=false;//input to denominator
			
			document.getElementById("fractionSquareRootFractionNumeratorId").style.color = "#727272";
			document.getElementById("fractionSquareRootFractionDenominatorId").style.color = "#e4f6fe";
			return; //break from function
			}
			
	
	
			
				
		//Add items to Panel
		 if(fractionSquareRootFractionNumeratorActive==true){

			if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
			
					if(item_id == "*"){
						fractionSquareRootFractionNumerator = fractionSquareRootFractionNumerator + '\\cdot';
					}else{
						fractionSquareRootFractionNumerator = fractionSquareRootFractionNumerator + item_id;		
					}
			
			getFractionSquareRootFractionItem =  backSlash +'frac{'+fractionSquareRootFractionNumerator+'}{'+fractionSquareRootFractionDenominator+'}' + "\\,";///////   + "\\," add horozonal space to end of double fractions
			
			console.log("fractionSquareRootFractionNumerator = " + fractionSquareRootFractionNumerator)
			console.log("getFractionSquareRootFractionItem = " + getFractionSquareRootFractionItem)
			
			}
		}else{
			
			getFractionSquareRootFractionItem = "";//reset to nothing
			
		 	if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")|(item_id == "+")||(item_id == "-")){
			fractionSquareRootFractionDenominator = fractionSquareRootFractionDenominator + item_id;
			getFractionSquareRootFractionItem =  backSlash +'frac{'+fractionSquareRootFractionNumerator+'}{'+fractionSquareRootFractionDenominator+'}' + "\\,";  ///////   + "\\," add horozonal space to end of double fractions
			
			
			}	  
		}
		
		
		
			
		
		
	  	UpdateMath1_2a(getFractionSquareRootFractionItem)//Update que for fractionFractionPanel
		
		
		
		
			/*
			
			
			fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//

			getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
	
			fractionFractionNumerator = fractionFractionNumerator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];//fractionSquareRoot is from the Parent panel
			
				
						getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
				
				
				
				
				
				fractionSquareRoot = fractionSquareRoot.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//
				
				getFractionSquareRootFractionItemArray.push(getFractionSquareRootFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
	
			 	fractionSquareRoot = fractionSquareRoot + getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1];//fractionSquareRoot is from the Parent panel 
				
				getFractionSquareRootItem =  backSlash +'sqrt{'+fractionSquareRoot+ '}';
				
				
				
						/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							if(numeratorActive==true){//Add items to numerator in previous fraction panel
								numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//

								getFractionFractionNumeratorItemArray.push(getFractionFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
	
								numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];//fractionSquareRoot is from the Parent panel
							}else{
							
								denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//

								getFractionFractionDenominatorItemArray.push(getFractionFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
	
								denominator = denominator + getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1];//fractionSquareRoot is from the Parent panel
							
							
							}
			
			
			
			
							if(numeratorActive==true){//Add items to numerator in previous fraction panel
							
								numerator = numerator.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//

								getFractionFractionNumeratorItemArray.push(getFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
	
								numerator = numerator + getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1];//fractionSquareRoot is from the Parent panel
							
							}else{
								
								denominator = denominator.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//

								getFractionFractionNumeratorItemArray.push(getFractionSquareRootItem)//push contents 
	
								denominator = denominator + getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1];//
											
							}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			*/
		
		
		
		
		
		
				/*
				
				fractionSquareRoot = fractionSquareRoot.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//
				
				getFractionSquareRootFractionItemArray.push(getFractionSquareRootFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
	
			 	fractionSquareRoot = fractionSquareRoot + getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1];//fractionSquareRoot is from the Parent panel 

				
				
	
				
				if(numeratorActive==true){//Add items to numerator in previous fraction panel
				numerator = numerator.replace(getFractionSquareRootItem, '');//this is it
				//numerator = numerator.replace(fractionSquareRoot, '');//this is it
				getFractionSquareRootItem =  backSlash +'sqrt{'+fractionSquareRoot+ '}';
				//fractionSquareRoot='';
				numerator = numerator + getFractionSquareRootItem;//fractionSquareRoot is from the Parent panel
				}else{
				
				denominator = denominator.replace(getFractionSquareRootItem, '');//this is it
				getFractionSquareRootItem =  backSlash +'sqrt{'+fractionSquareRoot+ '}';
				//fractionSquareRoot='';
				denominator = denominator + getFractionSquareRootItem;//fractionSquareRoot is from the Parent panel	
				
					
					
				}
				*/	
				
				
				
				
				/*
				
				fractionSquareRoot = fractionSquareRoot.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//
					
				getFractionSquareRootFractionItemArray.push(getFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array

				fractionSquareRoot = fractionSquareRoot + getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1];//fractionSquareRoot is from the Parent panel 
					
				getFractionSquareRootItem =  backSlash +'sqrt{'+fractionSquareRoot+ '}';			
				
				
				
				*/
				
				
				
				
				
				
				
		/*		console.log("getFractionSquareRootFractionItem = Steve"+ getFractionSquareRootFractionItem);
		*/		
				
				

				
				
	
				/*
							if(numeratorActive==true){//Add items to numerator in previous fraction panel
													//In the previous fraction Panel numerator cannot be empty

							console.log('numerator fffff = '+ numerator)
							//getFractionSquareRootFractionItemArray
								numerator = numerator.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//

								getFractionSquareRootFractionItemArray.push(getFractionSquareRootFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
	
								numerator = numerator + getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1];//fractionSquareRoot is from the Parent panel
							console.log('numerator ggggggg= '+ numerator)
							}else{
										
								denominator = denominator.replace(getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1], '');//

								getFractionDenominatorSquareRootItemArray.push(getFractionSquareRootItem)//push contents 
	
								denominator = denominator + getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1];//
											
							}*/
				
				
				
				
												//In the previous fraction fraction Panel numerator cannot be empty
							if(fractionSquareRoot==""){
							fractionSquareRoot = fractionSquareRoot + " ";
							}
				
				//getFractionSquareRootItem =  backSlash +'sqrt{'+fractionSquareRoot+ '}';
				console.log("fractionSquareRoot: ================================================================================== = " + fractionSquareRoot)
				fractionSquareRoot = fractionSquareRoot.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//
				console.log("fractionSquareRoot11111: ================================================================================== = " + fractionSquareRoot)
				getFractionSquareRootFractionItemArray.push(getFractionSquareRootFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
	
			 	fractionSquareRoot = fractionSquareRoot + getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1];//fractionSquareRoot is from the Parent panel 
				
				getFractionSquareRootItem =  backSlash +'sqrt{'+fractionSquareRoot +'}';
				
				console.log("fractionSquareRoot2222222:  ================================================================================== = 1111 = " + fractionSquareRoot)
				
				//getFractionSquareRootFractionItem =  backSlash +'frac{'+fractionSquareRootFractionNumerator+'}{'+fractionSquareRootFractionDenominator+'}'
				//numerator = numerator.replace(getFractionSquareRootItemOld, '')
				//numerator = numerator +getFractionSquareRootItem;
				//getFractionSquareRootItemOld = getFractionSquareRootItem
				
				
				
				if(numeratorActive==true){//Add items to numerator in previous fraction panel
				
					numerator = numerator.replace(getFractionNumeratorSquareRootItemArray[getFractionNumeratorSquareRootItemArray.length-1], '');//
	
					getFractionNumeratorSquareRootItemArray.push(getFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
		
					numerator = numerator + getFractionNumeratorSquareRootItemArray[getFractionNumeratorSquareRootItemArray.length-1];//fractionSquareRoot is from the Parent panel
					
					getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
	
					UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
				
				}else{
					
					denominator = denominator.replace(getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1], '');//
	
					getFractionDenominatorSquareRootItemArray.push(getFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
		
					denominator = denominator + getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1];//fractionSquareRoot is from the Parent panel
					
					getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
	
					UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
				
				}
				
				
				
				
				
				
				//fractionSquareRootFractionNumerator
				
			
				
				
				
				
				
		////////////////////////////////////////////////////////////////////////////////////////////////////////////	
		
/*		console.log("------------------------------------------------------------------------------------------------------------  Panel 3")
			console.log("concatEquationItems: Main Page = " + concatEquationItems)
		console.log("-------------------------------------------------------------------------- fraction Panel")
			console.log("getFractionItem: Fraction Page = " + getFractionItem)
			console.log("numerator: Fraction Page = " + numerator)
			console.log("denominator: Fraction Page = " + denominator)
		console.log(" -------------------------------------------------------------------------  End Iteration")
		
		console.log("-------------------------------------------------------------------------- fraction SquareRoot Panel")
			console.log("getFractionSquareRootItem: F SR Page = " + getFractionSquareRootItem)
			console.log("fractionSquareRoot: F SR Page = " + fractionSquareRoot)
		console.log(" -------------------------------------------------------------------------  End Iteration")
		
		console.log("-------------------------------------------------------------------------- fraction SquareRoot Fraction Panel")
			console.log("getFractionSquareRootFractionItem: F SR F Page = " + getFractionSquareRootFractionItem)
			console.log("fractionSquareRootFractionNumerator: F SR F Page = " + fractionSquareRootFractionNumerator)
			console.log("fractionSquareRootFractionDenominator: F SR F Page = " + fractionSquareRootFractionDenominator)
			console.log("getFractionSquareRootFractionItemArray: F SR F Page = " + getFractionSquareRootFractionItemArray)
		console.log(" -------------------------------------------------------------------------  End Iteration")*/
		
		
		
		//console.log("getFractionSquareRootFractionItem22222222-------------------------------------- = " + getFractionSquareRootFractionItem)
	 }//end function
	 
	 
	 
	 
	  
	  
	function upDateFractionSquareRootPanelFromFractionSquareRootFractionPanel(){
		
		//validate user input
		//console.log("Test num and denom" + numerator + " " + " " +denominator)
		
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
		//getFractionNumeratorSquareRootItemArray.push(" ")
		//getFractionDenominatorSquareRootItemArray.push(" ")
		
		UpdateMath1_2(getFractionSquareRootItem)//update fractionSquareRoot panel
		document.getElementById('fractionSquareRootFractionPanel').style.display = "none";

		fractionSquareRootFractionNumerator ="";
		fractionSquareRootFractionDenominator="";
		
		//numerator = numerator.replace(getFractionSquareRootItemOld, '')
		
		
			
		}//end else
		
	}
	
	function resetFractionSquareRootFraction(){
		
		
		
		
		
		
				fractionSquareRoot = fractionSquareRoot.replace(getFractionSquareRootFractionItem, '');//
				
				
				
				
				if(numeratorActive==true){//Add items to numerator in previous fraction panel
				
					numerator = numerator.replace(getFractionSquareRootItem, '');//
					//numerator = numerator.replace(fractionSquareRoot, '');//
					
					getFractionItem = getFractionItem.replace(getFractionSquareRootFractionItem, '')
					//getFractionItem = getFractionItem.replace(fractionSquareRoot, '')
					UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
				
				}else{
					
					//denominator = denominator.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//
					
					denominator = denominator.replace(getFractionSquareRootItem, '');//
					//numerator = numerator.replace(fractionSquareRoot, '');//
					
					getFractionItem = getFractionItem.replace(getFractionSquareRootFractionItem, '')
					//getFractionItem = getFractionItem.replace(fractionSquareRoot, '')
					UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
	
	
				
				}
				
				//getFractionItem = getFractionItem.replace(getFractionSquareRootItem, '');//old way
				//getFractionItem = getFractionItem.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//
				
				
				
				console.log("--------------------------------------------------------------------------------------------------- ")
		console.log('fractionSquareRootFractionNumerator = '+ fractionSquareRootFractionNumerator)
		console.log('getFractionSquareRootFractionItem = '+ getFractionSquareRootFractionItem)
		console.log('fractionSquareRoot = '+ fractionSquareRoot)
		console.log('getFractionSquareRootItem = '+ getFractionSquareRootItem)
		console.log('numerator = '+ numerator)
		console.log("getFractionItem = " + getFractionItem)
		console.log("--------------------------------------------------------------------------------------------------- ")
				
				
				
		
		
		
		
		
		
		
		
		/*
		if(numeratorActive==true){
			numerator = numerator.replace(getFractionSquareRootFractionItem, '');//
			
		}else{
			
			denominator = denominator.replace(getFractionSquareRootFractionItem, '');//this is it	
			
		}
		getFractionSquareRootFractionItem="";
		fractionSquareRootFractionNumerator ="";
		fractionSquareRootFractionDenominator="";
		
		
		getFractionSquareRootItem = getFractionSquareRootItem.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');
		
		
		*/
		
		
/*
		console.log("--------------------------------------------------------------------------------------------------- ")
		console.log('fractionSquareRootFractionNumerator = '+ fractionSquareRootFractionNumerator)
		console.log('getFractionSquareRootFractionItem = '+ getFractionSquareRootFractionItem)
		console.log('fractionSquareRoot = '+ fractionSquareRoot)
		console.log('getFractionSquareRootItem = '+ getFractionSquareRootItem)
		console.log('numerator = '+ numerator)
		console.log("getFractionItem = " + getFractionItem)
		console.log("--------------------------------------------------------------------------------------------------- ")
		
		
		*/
		
		
		
		
					/*		console.log('getFractionSquareRootItem = '+ getFractionSquareRootItem)
						reverseGetFractionItem = getFractionSquareRootItem.split("").reverse().join("");
						console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
						reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');
						console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
						getFractionSquareRootItem = getFractionSquareRootItem.split("").reverse().join("");
						console.log('getFractionSquareRootItem = '+ getFractionSquareRootItem)*/
		
		
		
				//fractionSquareRoot = fractionSquareRoot.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');//
			//console.log('getFractionSquareRootFractionItem = '+ getFractionSquareRootFractionItem)
						/*console.log('fractionSquareRoot = '+ fractionSquareRoot)
						reverseGetFractionItem = fractionSquareRoot.split("").reverse().join("");
						console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
						reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');
						console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
						fractionSquareRoot = reverseGetFractionItem.split("").reverse().join("");
						console.log('fractionSquareRoot = '+ fractionSquareRoot)*/
						
						
	
	
			 	
				
				//getFractionSquareRootItem =  backSlash +'sqrt{'+fractionSquareRoot+ '}';
				
				
				
											
				/*	if(numeratorActive==true){//Add items to numerator in previous fraction panel
													//In the previous fraction Panel numerator cannot be empty

							
								numerator = numerator.replace(getFractionSquareRootFractionItem, '');//
								
								
										console.log('numerator tttttt = '+ numerator)
										reverseGetFractionItem = numerator.split("").reverse().join("");
										console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
										reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');
										console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
										numerator = reverseGetFractionItem.split("").reverse().join("");
										console.log('numerator TTTTTT = '+ numerator)

								
							
							}else{
										
								//denominator = denominator.replace(getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1], '');//
										
										console.log('denominator = '+ denominator)
										reverseGetFractionItem = denominator.split("").reverse().join("");
										console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
										reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootItem.split("").reverse().join(""), '');
										console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
										denominator = reverseGetFractionItem.split("").reverse().join("");
										console.log('denominator = '+ denominator)
								
											
							}

*/

				
				
				
						
				
				
				

		
		

		
		
		//PROBLEM  here and also inm fractionSquareRootExponentBuilder reset()
		//Find way to replace last occurrence of item in string 
		//reverse() is a method of array instances. It won't directly work on a string. You should first split the characters of the string into an array, reverse the array and then join back into a string:
		
/*	console.log('-----------------------------------------------------------------------------------------------------------')
		console.log('getFractionItem = '+ getFractionItem)
		reverseGetFractionItem = getFractionItem.split("").reverse().join("");
		console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
		reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');
		console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
		getFractionItem = reverseGetFractionItem.split("").reverse().join("");
		console.log('getFractionItem = '+ getFractionItem)*/
		
		//getFractionItem =  backSlash +'frac{'+numerator+'}{'+denominator+'}';
		
		//UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
		
		//getFractionSquareRootFractionItemArray=[];

		getFractionSquareRootFractionItem="";
		fractionSquareRootFractionNumerator ="";
		fractionSquareRootFractionDenominator="";
		
		

		UpdateMath1_2a(getFractionSquareRootFractionItem);//update with empty string
		

		
		fractionSquareRootFractionNumeratorActive=true;//base input to true
		document.getElementById("fractionSquareRootFractionNumeratorId").style.color = "#e4f6fe";//style numerator button
		document.getElementById("fractionSquareRootFractionDenominatorId").style.color = "#727272"//style denominator button
		
	}
	
	
	function cancelUpDateFractionSquareRootPanelFromFractionSquareRootFractionPanel(){
		//hide current panel
		document.getElementById('fractionSquareRootFractionPanel').style.display = "none";
		
		//display the previous panel
		document.getElementById('fractionSquareRootPanel').style.display = "block";
		
		console.log('-----------------------------------------------------------------------------------------------------------')
		console.log('getFractionItem = '+ getFractionItem)
		reverseGetFractionItem = getFractionItem.split("").reverse().join("");
		console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
		reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');
		console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
		getFractionItem = reverseGetFractionItem.split("").reverse().join("");
		console.log('getFractionItem = '+ getFractionItem)
		
		
		//getFractionSquareRootFractionItem = ""; 
		getFractionSquareRootFractionItem="";
		fractionSquareRootFractionNumerator ="";
		fractionSquareRootFractionDenominator="";
	
		getSquareRootItem = getSquareRootItem.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');
		fractionSquareRoot = fractionSquareRoot.replace(getFractionSquareRootFractionItemArray[getFractionSquareRootFractionItemArray.length-1], '');
		UpdateMath1_2a(getFractionSquareRootFractionItem);//update with empty string
		
				//update Main panel
		//UpdateMath(concatEquationItems + getSquareRootItem	); //Realtime update to main Panel
		UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
	
		
		
		
	}
	
	