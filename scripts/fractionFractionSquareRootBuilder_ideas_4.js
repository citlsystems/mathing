// JavaScript Document


var getFractionFractionSquareRootItem="";
var fractionFractionSquareRoot="";
//var backSlash = String.fromCharCode('92');


//Array used to update previous panels
var getFractionFractionSquareRootItemArray=[];// SquareRoot Array 
			
//Code to remove the last user entered duplicate in string - using realtime updates to the main Parent Panel from this child Panel
var haystack;
var needle;
var last_position;
var part1;
var part2;

var resetBackup;//Used in reset function


	function showfractionFractionSquareRootBuilder(){
		
		console.log("showfractionFractionExponentBuilder");
		document.getElementById('fractionFractionPanel').style.display = "none";
		
		
		document.getElementById('fractionFractionSquareRootPanel').style.display = "block";
		document.getElementById('fractionFractionSquareRootPanel').style.zIndex = 98;
		document.getElementById('fractionFractionSquareRootPanel').style.float = "left";
		
		//resetBackup="";
		//getFractionFractionSquareRootItem =  backSlash +'sqrt{}';//Show fractionFractionSquareRoot symbol
		fractionFractionSquareRoot="";
		getFractionFractionSquareRootItem ="";//Show fractionFractionSquareRoot symbol
		getFractionFractionSquareRootItemArray=[];
		
		haystack="";
		needle="";
		//last_position;
		part1="";
		part2="";

		UpdateMath1d(getFractionFractionSquareRootItem);//update with empty string
		
		resetBackup = getFractionItem;

	}
	

  	function fractionFractionSquareRootBuilder(item_id){
		

				 if(item_id == "fractionFractionSquareRootPowerBtn"){
					  		showSquareRootExponentBuilder();//this pops up the panel to build Exponents inside fractionFractionSquareRoot ..... see fractionFractionSquareRootPowerBuilder.js
							fractionFractionSquareRootExponentBaseActive=true;//base input to true
							document.getElementById("fractionFractionSquareRootBaseId").style.color = "#e4f6fe";//style numerator button
							document.getElementById("fractionFractionSquareRootExponentId").style.color = "#727272"//style denominator button
					  		return;//break from function
					 		//getEquationItem =  a + "^2";
				  }
			


					if((item_id == "0")||(item_id == "1")||(item_id == "2")||(item_id == "3")||(item_id == "4")||(item_id == "5")||(item_id == "6")||(item_id == "7")||(item_id == "8")||(item_id == "9")||(item_id == "+")||(item_id == "-")||(item_id == "(")||(item_id == ")")||(item_id == "x")||(item_id == "y")||(item_id == "z")||(item_id == "*")){
		

		
				//NOTE: A start to sizing brackets
			
					if(item_id == "*"){
						fractionFractionSquareRoot = fractionFractionSquareRoot  + '\\cdot';
					}else{
							
						//the number of \left and \right parentheses must correspond to each other - thats why it breaks 
						if(item_id == "("){
							//numerator = numerator +  '\\left('  +  + '\\right)';
							fractionFractionSquareRoot = fractionFractionSquareRoot  +  '\\left(\\right.';
						}else if(item_id == ")"){
							fractionFractionSquareRoot = fractionFractionSquareRoot  + '\\left.\\right)';		
						}else{
							fractionFractionSquareRoot = fractionFractionSquareRoot  + item_id;	
						}	
							
					}
				
			getFractionFractionSquareRootItem =  backSlash +'sqrt{'+fractionFractionSquareRoot+ '}';
			console.log("fractionFractionSquareRoot = " + fractionFractionSquareRoot)
			console.log("getFractionFractionSquareRootItem = " + getFractionFractionSquareRootItem)
			
			
			
				/*			
				console.log("------------------------------------------------------------------------------------------------------------ Main Panel - 3")
					console.log("concatEquationItems: Main Page = " + concatEquationItems)
				console.log("-------------------------------------------------------------------------- fraction Panel")
					console.log("getFractionItem: Fraction Page = " + getFractionItem)
					console.log("numerator: Fraction Page = " + numerator)
					console.log("denominator: Fraction Page = " + denominator)
				console.log(" -------------------------------------------------------------------------  End Iteration")
				
				console.log("-------------------------------------------------------------------------- fraction fraction Panel")
					console.log("getFractionFractionItem: Fraction Fraction Page = " + getFractionFractionItem)
					console.log("fractionFractionDenominator: Fraction Fraction Page = " + fractionFractionDenominator)
					console.log("fractionFractionNumerator: Fraction Fraction Page = " + fractionFractionNumerator)
					console.log("getFractionFractionNumeratorItemArray: Fraction Fraction Page = " + getFractionFractionNumeratorItemArray)
					console.log("getFractionFractionDenominatorItemArray: Fraction Fraction Page = " + getFractionFractionDenominatorItemArray)
					
				console.log("-------------------------------------------------------------------------- fraction fraction SquareRoot Panel")
					console.log("getFractionFractionSquareRootItem: Fraction Fraction SquareRoot Page = " + getFractionFractionSquareRootItem)
					console.log("fractionFractionSquareRoot: Fraction Fraction SquareRoot Page = " + fractionFractionSquareRoot)
					console.log("getFractionFractionSquareRootItemArray: Fraction Fraction SquareRoot Page = " + getFractionFractionSquareRootItemArray)
					
				console.log(" -------------------------------------------------------------------------  End Iteration")
				
				*/
			
			
			
			}
		
	  	UpdateMath1d(getFractionFractionSquareRootItem)//update current  panel
		
		
				if(fractionFractionNumeratorActive==true){//Add items to numerator in previous fraction fraction panel
				
				
						//In the previous fraction fraction Panel numerator cannot be empty
							if(fractionFractionNumerator==""){
							fractionFractionNumerator = fractionFractionNumerator + " ";
							}
							
							
							
							
							//may not need this test - if (fractionFractionSquareRoot.length > 1){
							//just use the code in the if clause
							
									if (fractionFractionSquareRoot.length > 1){
								
										haystack = fractionFractionNumerator;
										
										//console.log('haystack x=  '+ haystack)
										//console.log('needle =  '+ needle)
										last_position = (haystack + '').lastIndexOf(needle);
										//console.log("last_position x= " + last_position);
										part1 = haystack.substring(0, last_position);
										part2 = haystack.substring(last_position + needle.length);
										fractionFractionNumerator = part1+part2;
										needle = getFractionFractionSquareRootItem; // set needle after the above
	
										getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)
										fractionFractionNumerator = fractionFractionNumerator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
										getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
											
									}else{
										fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
										getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
										fractionFractionNumerator = fractionFractionNumerator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
										getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
	
										needle = getFractionFractionSquareRootItem;//This sets the needle to be remove from the string 
									}
							

							if(numeratorActive==true){//Add items to numerator in previous fraction panel
							
								numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//
								getFractionFractionNumeratorItemArray.push(getFractionFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
								numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];//fractionSquareRoot is from the Parent panel
							

							}else{
							
								denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//

								getFractionFractionDenominatorItemArray.push(getFractionFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
	
								denominator = denominator + getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1];//fractionSquareRoot is from the Parent panel
							
							
							}

	
					getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';

					UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
					
				
				}else{//Add items to numerator in previous fraction fraction panel
				
						//In the previous fraction fraction Panel numerator cannot be empty
							if(fractionFractionDenominator==""){
							fractionFractionDenominator = fractionFractionDenominator + " ";
							}
				
				
						/*fractionFractionDenominator = fractionFractionDenominator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//

						getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
	
						fractionFractionDenominator = fractionFractionDenominator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
				
						getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";*/
						
						
						
						
									if (fractionFractionSquareRoot.length > 1){
								
										haystack = fractionFractionDenominator;
										
										//console.log('haystack x=  '+ haystack)
										//console.log('needle =  '+ needle)
										last_position = (haystack + '').lastIndexOf(needle);
										//console.log("last_position x= " + last_position);
										part1 = haystack.substring(0, last_position);
										part2 = haystack.substring(last_position + needle.length);
										fractionFractionDenominator = part1+part2;
										needle = getFractionFractionSquareRootItem; // set needle after the above
	
										getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)
										fractionFractionDenominator = fractionFractionDenominator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
										getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
											
									}else{
										fractionFractionDenominator = fractionFractionDenominator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
										getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
										fractionFractionDenominator = fractionFractionDenominator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
										getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
	
										needle = getFractionFractionSquareRootItem;//This sets the needle to be remove from the string 
									}
							
						
						
				
	
							if(numeratorActive==true){//Add items to numerator in previous fraction panel
								numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//

								getFractionFractionNumeratorItemArray.push(getFractionFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
	
								numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];//fractionSquareRoot is from the Parent panel
							}else{
							
								denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//

								getFractionFractionDenominatorItemArray.push(getFractionFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
	
								denominator = denominator + getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1];//fractionSquareRoot is from the Parent panel
							
							
							}
						
	
	
					getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
					UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
				}
				
					
		
		
	 }//end function
	  
	  
	function upDatefractionFractionPanelFromfractionFractionSquareRootPanel(){
		
		//validate user input
		//console.log("Test num and denom" + numerator + " " + " " +denominator)
		
		if(fractionFractionSquareRoot == ""){
			alert("Please complete Square Root or select cancel")
			
		}else{
		
			mathOutputArray.push(getFractionFractionSquareRootItem);/*PUSH TO ARRAY*/
			//console.log(mathOutputArray);
			
			checkSyntaxForm();//Check user entered syntax when entering SquareRoot


			
			//getFractionFractionSquareRootItemArray.push(" ")//push contents of "getFractionFractionPowerItemArray" to array
			UpdateMath1a(getFractionFractionItem)

			//UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
			
			//UpdateMath1(getFractionItem) //update fraction Panel

			document.getElementById('fractionFractionSquareRootPanel').style.display = "none";
			fractionFractionSquareRoot = ""	;
			getFractionFractionSquareRootItem="";
			
			document.getElementById('fractionFractionPanel').style.display = "block";
		}
	}
	
	function resetFractionFractionSquareRoot(){
		
		
		
		/*
		
				if(fractionFractionNumeratorActive==true){//Add items to numerator in previous fraction fraction panel
										
				
										//track duplicates
										//needle = getFractionFractionSquareRootItem; // set needle after the above
				
										//haystack = fractionFractionNumerator;
										
										//console.log('haystack x=  '+ haystack)
										//console.log('needle =  '+ needle)
										//last_position = (haystack + '').lastIndexOf(needle);
										//console.log("last_position x= " + last_position);
										//part1 = haystack.substring(0, last_position);
										//part2 = haystack.substring(last_position + needle.length);
										//fractionFractionNumerator = part1+part2;
										//console.log("part1+part2 = = " +fractionFractionNumerator)
	
										//getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)
										//fractionFractionNumerator = fractionFractionNumerator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
										getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
				
	
										
				
										fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
										
										
										
										//getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
										//fractionFractionNumerator = fractionFractionNumerator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
										//getFractionFractionItem = getFractionFractionItem.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
										//getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
	
				}else{
				
										//track duplicates
										fractionFractionDenominator = fractionFractionDenominator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
										//getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
										//fractionFractionDenominator = fractionFractionDenominator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
										//getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
				}
				
				
			*/	
				
				
				
				
				
				
				
				if(fractionFractionNumeratorActive==true){//Add items to numerator in previous fraction fraction panel
					
	
						//fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionPowerItemArray[getFractionFractionPowerItemArray.length-1], '');//
						fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItem, '');//
						getFractionFractionItem = getFractionFractionItem.replace(getFractionFractionSquareRootItem, '');//
							if(numeratorActive==true){//Add items to numerator in previous fraction panel
							
								
								//numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//
								numerator = numerator.replace(getFractionFractionItem, '');//
								
							}else{
								//denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//
								denominator = denominator.replace(getFractionFractionItem, '');//
							}
						
						//Enter duplication code
						
						getFractionItem = getFractionItem.replace(getFractionFractionSquareRootItem, '');//
						UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
				
				}else{//Add items to numerator in previous fraction fraction panel

						//fractionFractionDenominator = fractionFractionDenominator.replace(getFractionFractionPowerItemArray[getFractionFractionPowerItemArray.length-1], '');//
						fractionFractionDenominator = fractionFractionDenominator.replace(getFractionFractionSquareRootItem, '');//
						getFractionFractionItem = getFractionFractionItem.replace(getFractionFractionSquareRootItem, '');//

							if(numeratorActive==true){//Add items to numerator in previous fraction panel
								//numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//
								numerator = numerator.replace(getFractionFractionItem, '');//
							}else{
								//denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//
								denominator = denominator.replace(getFractionFractionItem, '');//
							}
						
						//Enter duplication code
						
						getFractionItem = getFractionItem.replace(getFractionFractionSquareRootItem, '');//
						UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
				}
				//console.log("fractionFractionExponent" + fractionFractionExponent);
				
				getFractionFractionSquareRootItemArray=[];// 
		
				
				
				
				
				
				
				
				
				
				
				
				
				
		fractionFractionSquareRoot="";
		getFractionFractionSquareRootItem="";
		
		UpdateMath1d(getFractionFractionSquareRootItem);//update with empty string
		
		UpdateMath(concatEquationItems + resetBackup); //Realtime update to main Panel
		
			
	}
	
	
	function cancelUpDateFractionFractionPanelFromFractionFractionSquareRootPanel(){


		
		document.getElementById('fractionFractionSquareRootPanel').style.display = "none";
		
		document.getElementById('fractionFractionPanel').style.display = "block";
		
		
		
		fractionFractionSquareRoot="";
		getFractionFractionSquareRootItem="";
		//getFractionFractionSquareRootItemArray.push(" ")//push contents of "getFractionFractionPowerItemArray" to array

		
		
				if(fractionFractionNumeratorActive==true){//Add items to numerator in previous fraction fraction panel
				
	
							

										fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
										
										
										
										
										//getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
										//fractionFractionNumerator = fractionFractionNumerator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
										//getFractionFractionItem = getFractionFractionItem.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
										//getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
	
				}else{
				
	
										fractionFractionDenominator = fractionFractionDenominator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
										//getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
										//fractionFractionDenominator = fractionFractionDenominator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];
										//getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
				}
				
				
				
							if(numeratorActive==true){//Add items to numerator in previous fraction panel
							
							console.log("This SUCKS THE BIG ONE")
								//numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//
								numerator = numerator.replace(getFractionFractionSquareRootItem, '');//
							}else{
								//denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//
								denominator = denominator.replace(getFractionFractionSquareRootItem, '');//
							}
				
	//getFractionFractionSquareRootItem
	
	
	
	
	
	
	
	console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------- ")
					console.log("concatEquationItems: Main Page = " + concatEquationItems)
				console.log("-------------------------------------------------------------------------- fraction Panel")
					console.log("getFractionItem: Fraction Page = " + getFractionItem)
					console.log("numerator: Fraction Page = " + numerator)
					console.log("denominator: Fraction Page = " + denominator)
				console.log(" -------------------------------------------------------------------------  End Iteration")
				
				console.log("-------------------------------------------------------------------------- fraction fraction Panel")
					console.log("getFractionFractionItem: Fraction Fraction Page = " + getFractionFractionItem)
					console.log("fractionFractionDenominator: Fraction Fraction Page = " + fractionFractionDenominator)
					console.log("fractionFractionNumerator: Fraction Fraction Page = " + fractionFractionNumerator)
					console.log("getFractionFractionNumeratorItemArray: Fraction Fraction Page = " + getFractionFractionNumeratorItemArray)
					console.log("getFractionFractionDenominatorItemArray: Fraction Fraction Page = " + getFractionFractionDenominatorItemArray)
					
				console.log("-------------------------------------------------------------------------- fraction fraction SquareRoot Panel")
					console.log("getFractionFractionSquareRootItem: Fraction Fraction SquareRoot Page = " + getFractionFractionSquareRootItem)
					console.log("fractionFractionSquareRoot: Fraction Fraction SquareRoot Page = " + fractionFractionSquareRoot)
					console.log("getFractionFractionSquareRootItemArray: Fraction Fraction SquareRoot Page = " + getFractionFractionSquareRootItemArray)
					
				console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------- ")
		
		
		UpdateMath(concatEquationItems + resetBackup); //Realtime update to main Panel
		//UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
		
		
	
		
	
	}