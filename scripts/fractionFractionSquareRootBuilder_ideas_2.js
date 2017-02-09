// JavaScript Document


var getFractionFractionSquareRootItem="";
var fractionFractionSquareRoot="";
//var backSlash = String.fromCharCode('92');


			//Array used to update previous panels
			var getFractionFractionSquareRootItemArray=[];// SquareRoot Array 
			
			
									//var getFractionItemArray = [];
									//var fractionFractionNumeratorArray = [];
									//var fractionFractionNumeratorString;



//var getFractionNumeratorSquareRootItemArray = new Array() 
//var getFractionDenominatorSquareRootItemArray = new Array() 



var resetBackup;


								var haystack;
       						var needle;
       						var last_position;
						
      						 var part1;
      						 var part2;




	function showfractionFractionSquareRootBuilder(){
		
		console.log("showfractionFractionExponentBuilder");
		document.getElementById('fractionFractionPanel').style.display = "none";
		
		
		document.getElementById('fractionFractionSquareRootPanel').style.display = "block";
		document.getElementById('fractionFractionSquareRootPanel').style.zIndex = 98;
		document.getElementById('fractionFractionSquareRootPanel').style.float = "left";
		
		//getFractionNumeratorSquareRootItemArray=[]; //reset the array when opening the panel
		//getFractionDenominatorSquareRootItemArray=[]; //reset the array when opening the panel
		
		//getFractionFractionSquareRootItemArray=[];//reset the array when opening the panel - NOTE - do i need to do this

		//getFractionFractionSquareRootItem =  backSlash +'sqrt{}';//Show fractionFractionSquareRoot symbol
		fractionFractionSquareRoot="";
		getFractionFractionSquareRootItem ="";//Show fractionFractionSquareRoot symbol
		//getFractionFractionSquareRootItemArray=[];

		UpdateMath1d(getFractionFractionSquareRootItem);//update with empty string
		
		
		

		console.log("getFractionItem  getFractionItem getFractionItem = " + getFractionItem);
		resetBackup = getFractionItem;
		console.log("resetBackup  resetBackup resetBackup = " + resetBackup);
		

	}
	

  	function fractionFractionSquareRootBuilder(item_id){
		
		
		
		
				 if(item_id == "fractionFractionSquareRootPowerBtn"){
					  		showSquareRootExponentBuilder();//this pops up the panel to build Exponents inside fractionFractionSquareRoot ..... see fractionFractionSquareRootPowerBuilder.js
							fractionFractionSquareRootExponentBaseActive=true;//base input to true
							document.getElementById("fractionFractionSquareRootBaseId").style.color = "#BB28BB";//style numerator button
							document.getElementById("fractionFractionSquareRootExponentId").style.color = "#727272"//style denominator button
					  		return;//break from function
					 		//getEquationItem =  a + "^2";
				  }
			
			//end open level 3 panels
		
		
		
		
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
							
							//numerator = numerator + numerator1 + item_id;		
						}	
							
					}
					
			
			console.log("fractionFractionSquareRoot1 = " + fractionFractionSquareRoot)
			getFractionFractionSquareRootItem =  backSlash +'sqrt{'+fractionFractionSquareRoot+ '}';
			//console.log("fractionFractionSquareRoot11111 = " + fractionFractionSquareRoot)
			//console.log("getFractionFractionSquareRootItem1 = " + getFractionFractionSquareRootItem)
			
			
			
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
			
		console.log(" -------------------------------------------------------------------------  End Iteration")*/
			
			
			
			}
		
	  	UpdateMath1d(getFractionFractionSquareRootItem)//update current  panel
		
		
		

		//console.log("getFractionFractionSquareRootItemArray111111111111111111111111111111111111111111111111111111111111 == "+ getFractionFractionSquareRootItemArray)
		
		
				if(fractionFractionNumeratorActive==true){//Add items to numerator in previous fraction fraction panel
				
				
						//In the previous fraction fraction Panel numerator cannot be empty
							if(fractionFractionNumerator==""){
							fractionFractionNumerator = fractionFractionNumerator + " ";
							}
							
							
							
							
							
							
							

							
							
							
							
							/*
									var fruits = ["Banana", "Orange", "Apple", "Mango"];
									var energy = fruits.join("");
									console.log("energy =" + energy);*/

									//fractionFractionNumeratorArray.push(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1]);
									//fractionFractionNumeratorString = fractionFractionNumeratorArray.join("");
									//console.log("fractionFractionNumeratorString ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ =" + fractionFractionNumeratorString);
									//console.log("fractionFractionNumeratorArray ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ =" + fractionFractionNumeratorArray);
				//console.log('fractionFractionNumerator XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX = '+ fractionFractionNumerator)
						//fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
					/*console.log('fractionFractionNumerator  YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY = '+ fractionFractionNumerator)	
					
					
					
					if(fractionFractionSquareRoot.length > 1){
						console.log('fractionFractionNumerator = '+ fractionFractionNumerator)
						var reverseFractionFractionNumerator = fractionFractionNumerator.split("").reverse().join("");
						console.log('reverseGetFractionItem = '+ reverseFractionFractionNumerator)
						reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');
						console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
						fractionFractionNumerator = reverseGetFractionItem.split("").reverse().join("");
						console.log('fractionFractionNumerator = '+ fractionFractionNumerator)
						
					}else{
						
						fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
						
						
						
						}*/
		
		/*
		
		
		console.log('fractionFractionNumerator = '+ fractionFractionNumerator)
		var reverseGetFractionItem = fractionFractionNumerator.split("").reverse().join("");
		console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
		reverseGetFractionItem = reverseGetFractionItem.replace(getFractionFractionSquareRootItem.split("").reverse().join(""), '');
		console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
		fractionFractionNumerator = reverseGetFractionItem.split("").reverse().join("");
		console.log('fractionFractionNumerator = '+ fractionFractionNumerator)
						
						
						
							
			*/				
						console.log('fractionFractionNumerator xxxx= '+ fractionFractionNumerator)
						console.log('getFractionFractionSquareRootItemArray xxxx= '+ getFractionFractionSquareRootItemArray)
						console.log('fractionFractionNumerator yyyyyy= '+ fractionFractionNumerator)
						console.log('getFractionFractionSquareRootItemArray yyyyy= '+ getFractionFractionSquareRootItemArray)
						console.log('fractionFractionNumerator zzzzzzz= '+ fractionFractionNumerator)
						
						
						/*fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
						getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
						fractionFractionNumerator = fractionFractionNumerator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];//fractionSquareRoot in Parent 
						getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";*/
						
					//console.log("fractionFractionNumerator111111111111111111111111111111111111111111111111111111111111 == "+ fractionFractionNumerator)
						//console.log('getFractionFractionItem  111111111111111111111111111111111111111111111111111111111111    = '+ getFractionFractionItem)
						
						
						if (fractionFractionSquareRoot.length > 1){
							
							console.log('This is a test This is a testThis is a testThis is a test  ' )//\sqrt{78}
									console.log('getFractionFractionSquareRootItem =  '+ getFractionFractionSquareRootItem)//\sqrt{78}
									console.log('numerator =  '+ numerator)
									console.log('fractionFractionSquareRoot.length =  '+ fractionFractionSquareRoot.length)
									
									haystack = fractionFractionNumerator;
									
									console.log('haystack x=  '+ haystack)
									console.log('needle x=  '+ needle)
									last_position = (haystack + '').lastIndexOf(needle);
									console.log("last_position x= " + last_position);
									part1 = haystack.substring(0, last_position);
									part2 = haystack.substring(last_position + needle.length);
									fractionFractionNumerator = part1+part2;
									console.log("part1 x= " + part1);
									console.log("part2 x= " + part2);
									console.log(part1+part2);
									
									needle = getFractionFractionSquareRootItem; // set needle after the above

									
									getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)
									fractionFractionNumerator = fractionFractionNumerator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];//fractionSquareRoot
									getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
									
									
									
								}else{
									fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//
									getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
									fractionFractionNumerator = fractionFractionNumerator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];//fractionSquareRoot in Parent 
									getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
									
									console.log('fractionFractionSquareRoot.length1111 =  '+ fractionFractionSquareRoot.length)
									console.log('getFractionFractionSquareRootItem1 =  '+ getFractionFractionSquareRootItem)
									needle = getFractionFractionSquareRootItem;//This sets the needle to be remove from the string 'Numerator'in the above test (fractionFractionSquareRoot.length > 1)
								}
						

						
						
						
						
						
						/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							if(numeratorActive==true){//Add items to numerator in previous fraction panel
							
							//console.log('getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1] 11111111111 '+ getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1])
							//console.log('numerator ====== '+ numerator)	
							
							
	
							
							
							
							

							
							
							
							
					/*		var haystack = numerator;
       						var needle = "\sqrt{7}";
       						var last_position = (haystack + '').lastIndexOf(needle);
							console.log("last_position = " + last_position);
      						 var part1 = haystack.substring(0, last_position);
      						 var part2 = haystack.substring(last_position + needle.length);
							  console.log("part1 = " + part1);
							   console.log("part2 = " + part2);
      						 console.log(part1+part2);*/
							
							
								//console.log('numerator ======1111111111 '+ numerator)//empty
								
		
								
						/*		
								//this is where the code is put
								console.log("numerator111111 = " + numerator);
								haystack = numerator;
       						needle = getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];
       						last_position = (haystack + '').lastIndexOf(needle);
							console.log("last_position = " + last_position);
      						 part1 = haystack.substring(0, last_position);
      						 part2 = haystack.substring(last_position + needle.length);
							  console.log("part1 = " + part1);
							   console.log("part2 = " + part2);
      						 console.log(part1+part2);
								
								
								numerator = part1+part2;
								console.log("numerator = " + numerator);*/
								
								
								
								//var numeratorTest
						/*		if (fractionFractionSquareRoot.length > 1){
									console.log('getFractionFractionSquareRootItem =  '+ getFractionFractionSquareRootItem)//\sqrt{78}
									console.log('numerator =  '+ numerator)
									console.log('fractionFractionSquareRoot.length =  '+ fractionFractionSquareRoot.length)
									
									haystack = numerator;
									//needle = getFractionFractionSquareRootItem; //needle is set below
									console.log('haystack x=  '+ haystack)
									console.log('needle x=  '+ needle)
									last_position = (haystack + '').lastIndexOf(needle);
									console.log("last_position x= " + last_position);
									part1 = haystack.substring(0, last_position);
									part2 = haystack.substring(last_position + needle.length);
									numerator = part1+part2;
									console.log("part1 x= " + part1);
									console.log("part2 x= " + part2);
									console.log(part1+part2);
									
									//numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-3], '');//
									console.log('numerator  x=  '+ numerator)
									console.log('getFractionFractionSquareRootItem  x=  '+ getFractionFractionSquareRootItem)
									
									getFractionFractionNumeratorItemArray.push(getFractionFractionItem)
									numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];//fractionSquareRoot is from the Parent panel
									
									console.log('numerator  x=  '+ numerator)
									
									
																		//getFractionFractionSquareRootItem = 
									//fractionFractionSquareRoot = fractionFractionSquareRoot  + item_id;
									getFractionFractionSquareRootItem =  backSlash +'sqrt{'+fractionFractionSquareRoot+ '}';
									
								}else{
									numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//	
									getFractionFractionNumeratorItemArray.push(getFractionFractionItem)
									numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];//fractionSquareRoot is from the Parent panel
									
									console.log('fractionFractionSquareRoot.length1111 =  '+ fractionFractionSquareRoot.length)
									console.log('getFractionFractionSquareRootItem1 =  '+ getFractionFractionSquareRootItem)
									needle = getFractionFractionSquareRootItem;//This sets the needle to be remove from the string 'Numerator'in the above test (fractionFractionSquareRoot.length > 1)
								}*/
								
								//numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//
								//console.log('numerator ======2222222 '+ numerator)
								//console.log('getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1] 1111111111 '+ getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1])
								//console.log('getFractionFractionItem 222222222 '+ getFractionFractionItem)
								//console.log('getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1] 2222222222222 '+ getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1])
								
								
								
							/**/	
								numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//
								getFractionFractionNumeratorItemArray.push(getFractionFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
								numerator = numerator + getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1];//fractionSquareRoot is from the Parent panel
							
								//numerator = numerator + getFractionFractionItem;//fractionSquareRoot is from the Parent panel
								//console.log('numerator ====== 3333333 '+ numerator)
								
								
								
								
								
								//numerator = numerator.replace(getFractionFractionItem, '');//
							//console.log('getFractionFractionItem ====== '+ getFractionFractionItem)	
										
							///console.log("getFractionItem  getFractionItem getFractionItem = " + getFractionItem);
							//getFractionItem = resetBackup;
							//console.log("resetBackup  resetBackup resetBackup = " + resetBackup);
						     
							 
							 
							 
						 //var haystack = '{\begin{align}\frac{\frac{\sqrt{7}+\sqrt{7}+\sqrt{7}}{}\,}{}\end{align}}';
						 
						 	//numerator 
/*							console.log("getFractionFractionSquareRootItem ffffff = "+ getFractionFractionSquareRootItem)
							//console.log("testassdfasdf ==== " +getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1])
       						var needle = getFractionFractionSquareRootItem;
       						var last_position = (numerator + '').lastIndexOf(needle);
							console.log("last_position = " + last_position);
      						 var part1 = numerator.substring(0, last_position);
      						 var part2 = numerator.substring(last_position + needle.length);
							 
							 numerator=part1+part2;
							  console.log("part1 = " + part1);
							   console.log("part2 = " + part2);
      						 console.log(part1+part2);
							 console.log("numerator 3333   33333   "+numerator);*/
							 
							 
							 
							 
							 
							 
							 
/*							   var haystack = '{\begin{align}\frac{\frac{\sqrt{7}+\sqrt{7}+\sqrt{7}}{}\,}{}\end{align}}';
       						var needle = "\sqrt{7}";
       						var last_position = (haystack + '').lastIndexOf(needle);
							console.log("last_position = " + last_position);
      						 var part1 = haystack.substring(0, last_position);
      						 var part2 = haystack.substring(last_position + needle.length);
							  console.log("part1 = " + part1);
							   console.log("part2 = " + part2);
      						 console.log(part1+part2);
							 
							 */
							 
							
								
								
								


							}else{
							
								denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//

								getFractionFractionDenominatorItemArray.push(getFractionFractionItem)//push contents of "getFractionSquareRootFractionItem" to array
	
								denominator = denominator + getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1];//fractionSquareRoot is from the Parent panel
							
							
							}
						
						
						/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
											//console.log('numerator ======3333333 '+ numerator)
								
								
								//console.log('getFractionItem 33333333 '+ getFractionItem)
	
					getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
					
					
					//console.log("getFractionItem  getFractionItem getFractionItem111 = " + getFractionItem);
					
					
					UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
					
					/*
					if(fractionFractionSquareRoot.length > 1){
					
					getFractionItemArray.pop();				
					console.log('getFractionItemArray getFractionItemArray getFractionItemArray getFractionItemArray1111111 = '+ getFractionItemArray)	
						
					}
					getFractionItemArray.push(getFractionFractionSquareRootItem)
						
					console.log('getFractionItemArray getFractionItemArray getFractionItemArray getFractionItemArray = '+ getFractionItemArray)
		*/
					/*		
								console.log('getFractionSquareRootFractionItem = '+ getFractionSquareRootFractionItem)
							console.log('getFractionItem = '+ getFractionItem)
		var reverseGetFractionItem = getFractionItem.split("").reverse().join("");
		console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
		reverseGetFractionItem = reverseGetFractionItem.replace(getFractionSquareRootFractionItem.split("").reverse().join(""), '');
		console.log('reverseGetFractionItem = '+ reverseGetFractionItem)
		getFractionItem = reverseGetFractionItem.split("").reverse().join("");
		console.log('getFractionItem111111111 = '+ getFractionItem)
		
*/
					
					
					
					
					//console.log("getFractionFractionSquareRootItemArray2222222222222222222222222222222222222222222222222222222222222222222222 == "+ getFractionFractionSquareRootItemArray)
				
				}else{//Add items to numerator in previous fraction fraction panel
				//console.log("lakjsdf alskjdhf asd;lskdf lakjsdf alskjdhf asd;lskdf lakjsdf alskjdhf asd;lskdf lakjsdf alskjdhf asd;lskdf")
				
						//In the previous fraction fraction Panel numerator cannot be empty
							if(fractionFractionDenominator==""){
							fractionFractionDenominator = fractionFractionDenominator + " ";
							}
				
				
						fractionFractionDenominator = fractionFractionDenominator.replace(getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1], '');//

						getFractionFractionSquareRootItemArray.push(getFractionFractionSquareRootItem)//push contents of "getFractionSquareRootFractionItem" to array
	
						fractionFractionDenominator = fractionFractionDenominator + getFractionFractionSquareRootItemArray[getFractionFractionSquareRootItemArray.length-1];//fractionSquareRoot is from the Parent panel
				//getFractionFractionPowerItem =   fractionFractionBase + "^{" + fractionFractionExponent + "}";//
				
				getFractionFractionItem =  backSlash +'frac{'+fractionFractionNumerator+'}{'+fractionFractionDenominator+'}' + "\\,";
				
				
				
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
						
						
						/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				
	
				getFractionItem =   backSlash +'frac{'+ numerator+'}{'+denominator+'}';
				
				

				
				
				
				
				
				
				UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
				}
				
				//console.log("numerator111111111111 111111111111111111111111111111111111111111111111111111111111111111111111111111111111= " + numerator)
				
				//console.log("getFractionItem111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 == "+ getFractionItem)
				
				
						
			
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
			
		console.log("-------------------------------------------------------------------------- fraction fraction Power Panel")
			console.log("getFractionFractionSquareRootItem: Fraction Fraction SquareRoot Page = " + getFractionFractionSquareRootItem)
			console.log("fractionFractionSquareRoot: Fraction Fraction SquareRoot Page = " + fractionFractionSquareRoot)
			console.log("getFractionFractionPowerItemArray: Fraction Fraction SquareRoot Page = " + getFractionFractionSquareRootItemArray)
			
		console.log(" -------------------------------------------------------------------------  End Iteration")*/
		
		
		
		
		
			
		
		
		
		
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


			
			getFractionFractionSquareRootItemArray.push(" ")//push contents of "getFractionFractionPowerItemArray" to array
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
					

						fractionFractionNumerator = fractionFractionNumerator.replace(getFractionFractionSquareRootItem, '');//
						getFractionFractionItem = getFractionFractionItem.replace(getFractionFractionSquareRootItem, '');//
						
	
						if(numeratorActive==true){//Add items to numerator in previous fraction panel
							
								
								//numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//
								numerator = numerator.replace(getFractionFractionItem, '');//
								
							}else{
								//denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//
								denominator = denominator.replace(getFractionFractionItem, '');//
							}
						
						getFractionItem = getFractionItem.replace(getFractionFractionSquareRootItem, '');//
						UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel

				
				}else{//Add items to numerator in previous fraction fraction panel
				
				
						fractionFractionDenominator = fractionFractionDenominator.replace(getFractionFractionSquareRootItem, '');//
						getFractionFractionItem = getFractionFractionItem.replace(getFractionFractionSquareRootItem, '');//

							if(numeratorActive==true){//Add items to numerator in previous fraction panel
								//numerator = numerator.replace(getFractionFractionNumeratorItemArray[getFractionFractionNumeratorItemArray.length-1], '');//
								numerator = numerator.replace(getFractionFractionItem, '');//
							}else{
								//denominator = denominator.replace(getFractionFractionDenominatorItemArray[getFractionFractionDenominatorItemArray.length-1], '');//
								denominator = denominator.replace(getFractionFractionItem, '');//
							}
						
						getFractionItem = getFractionItem.replace(getFractionFractionSquareRootItem, '');//
						UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
				
						
						
				
				}
				
				
				
				
				
				
				getFractionFractionSquareRootItemArray=[];// Power - includes exponent and base

				getFractionFractionSquareRootItem="";
				fractionFractionSquareRoot="";
		
				//update current panel
				getFractionFractionSquareRootItem =  backSlash +'sqrt{}';//only Show fractionFractionSquareRoot symbol
				UpdateMath1d(getFractionFractionSquareRootItem);
		*/
		
		console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
		UpdateMath(concatEquationItems + resetBackup); //Realtime update to main Panel
	
		
		
	}
	
	
	function cancelUpDateFractionFractionPanelFromFractionFractionSquareRootPanel(){

		document.getElementById('fractionFractionSquareRootPanel').style.display = "none";
		getFractionItem = getFractionItem.replace(getFractionFractionSquareRootItem, '');//
		//console.log("getFractionItem 888888888 ="  + getFractionItem)
		getFractionFractionSquareRootItem="";
		fractionFractionSquareRoot="";
				
		
		document.getElementById('fractionFractionPanel').style.display = "block";

		//update fraction panel - parent
		UpdateMath1(getFractionItem) //update fraction Panel		
		
		numerator = numerator.replace(getFractionNumeratorSquareRootItemArray[getFractionNumeratorSquareRootItemArray.length-1], '');//
		
		denominator = denominator.replace(getFractionDenominatorSquareRootItemArray[getFractionDenominatorSquareRootItemArray.length-1], '');//
		
		
		
		
		
		UpdateMath(concatEquationItems + getFractionItem); //Realtime update to main Panel
		//End update fraction Panel
		
		//getFractionItem =  backSlash +'frac{'+numerator+'}{'+denominator+'}';
		
		
		//update Main Panel
		//////////UpdateMath(concatEquationItems);//Cancel insert to main Panel
		//End updateViewer
	}