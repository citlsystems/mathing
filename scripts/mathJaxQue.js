// JavaScript Document

//  Use a closure to hide the local variables from the
  //  global namespace
  (function () {
	  
	  
		//Start Main Queue for user input 
		var mainQueue = MathJax.Hub.queue;  // shorthand for the queue
		var mainElementJax = null;  // the element jax for the math output.
		
		//  Get the element jax when MathJax has produced it.
		mainQueue.Push(function () {
		  mainElementJax = MathJax.Hub.getAllJax("MathOutput")[0];
		});
		
		//function that typesets the math entered by the user
		window.mainUpdateMathjax = function (TeX) {
		 //different ways to typeset equation
		 //QUEUE.Push(["Text",math,"\\displaystyle{"+TeX+"}"]);
		 //QUEUE.Push(["Text",math,"\\textstyle{"+TeX+"}"]);//in this style the factions size is reduced
		 //QUEUE.Push(["Text",math,"\\scriptstyle{"+TeX+"}"]);
		 //QUEUE.Push(["Text",math,"\\scriptscriptstyle{"+TeX+"}"]);
	
		 //set the MathOutput HTML
		 document.getElementById("MathOutput").innerHTML = TeX;
		 var str = "${\\begin{align}"+TeX+"\\end{align}}$";
		 $("#MathOutput").html(str);
		 //reprocess the MathOutput Element
		 var reprocessMath1 = document.getElementById("MathOutput");
		 MathJax.Hub.Queue(["Typeset",MathJax.Hub,reprocessMath1]);
		
	    }
	
		//End Main Queue for user input
	
	
	/* Start Fraction Queue */
		
		 //fraction builder Queue
		 var F_Queue = MathJax.Hub.queue; 
		 var F_ElementJax = null;             
			
		 F_Queue.Push(function () {
		  F_ElementJax = MathJax.Hub.getAllJax("fractionOutput")[0];
		 });
		 //Event handler that typesets the math entered by the user
		 window.F_UpdateMathjax = function (TeX) {
		  //typeset equation
		  F_Queue.Push(["Text",F_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }		
		 //end fraction builder Queue
				
				
		 //fractionExponent builder Queue
		 var FE_Queue = MathJax.Hub.queue; 
		 var FE_ElementJax = null;             
	
		 FE_Queue.Push(function () {
		  FE_ElementJax = MathJax.Hub.getAllJax("fractionExponentOutput")[0];
		 });
		 window.FE_UpdateMathjax = function (TeX) {
		  FE_Queue.Push(["Text",FE_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }
		 //end fractionExponent builder Queue
	
				
		 //fractionFraction builder Queue
		 var FF_Queue = MathJax.Hub.queue; 
		 var FF_ElementJax = null;             
	
		 FF_Queue.Push(function () {
		  FF_ElementJax = MathJax.Hub.getAllJax("fractionFractionOutput")[0];  
		 });
		 window.FF_UpdateMathjax = function (TeX) {
		  FF_Queue.Push(["Text",FF_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }
		 //fractionFraction builder Queue
					
				
		 //fractionFractionSquareRoot builder Queue
		 var FFS_Queue = MathJax.Hub.queue; 
		 var FFS_ElementJax = null;             
	
		 FFS_Queue.Push(function () {
		  FFS_ElementJax = MathJax.Hub.getAllJax("fractionFractionSquareRootOutput")[0];
		 });
		 window.FFS_UpdateMathjax = function (TeX) {
		  FFS_Queue.Push(["Text",FFS_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }
		 //end fractionFractionSquareRoot builder Queue
				
				
		 //fractionFractionExponent builder Queue
		 var FFE_Queue = MathJax.Hub.queue; 
		 var FFE_ElementJax = null;             
	
		 FFE_Queue.Push(function () {
		  FFE_ElementJax = MathJax.Hub.getAllJax("fractionFractionExponentOutput")[0];
		 });
		 window.FFE_UpdateMathjax = function (TeX) {
		  FFE_Queue.Push(["Text",FFE_ElementJax,"\\displaystyle{"+TeX+"}"]);//in this style the factions size is reduced
		 }
		 //end fractionFractionExponent builder Queue
						
													
		 //fractionFractionExponentfraction builder Queue ... not implemented... no fractions in exponents
		 /*		 
		 var FFEF_Queue = MathJax.Hub.queue; 
		 var FFEF_ElementJax = null;             
	
		 FFEF_Queue.Push(function () {
		 FFEF_ElementJax = MathJax.Hub.getAllJax("fractionFractionExponentFractionOutput")[0];
		 });
		 window.UpdateMath1c = function (TeX) {
		 FFEF_Queue.Push(["Text",FFEF_ElementJax,"\\displaystyle{"+TeX+"}"]);//in this style the factions size is reduced
		 }
		 */
		 //end fractionFractionExponentfraction builder Queue
									
					
		//FractionSquareRoot builder Queue
		 var FS_Queue = MathJax.Hub.queue; 
		 var FS_ElementJax = null;             
	
		 FS_Queue.Push(function () {
		  FS_ElementJax = MathJax.Hub.getAllJax("fractionSquareRootOutput")[0];
		 });
		 window.FS_UpdateMathjax = function (TeX) {
		  FS_Queue.Push(["Text",FS_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }
		//end FractionSquareRoot builder Queue
						
									
		//FractionSquareRootExponent builder Queue
		var FSE_Queue = MathJax.Hub.queue; 
		var FSE_ElementJax = null;             
				
		FSE_Queue.Push(function () {
		 FSE_ElementJax = MathJax.Hub.getAllJax("fractionSquareRootExponentOutput")[0];			  
		});
		window.FSE_UpdateMathjax = function (TeX) {
		 FSE_Queue.Push(["Text",FSE_ElementJax,"\\displaystyle{"+TeX+"}"]);//in this style the factions size is reduced
		}		
		//end FractionSquareRootExponent builder Queue
		
						
		//FractionSquareRootFraction builder Queue
		var FSF_Queue = MathJax.Hub.queue; 
		var FSF_ElementJax = null;             
				
		FSF_Queue.Push(function () {
		 FSF_ElementJax = MathJax.Hub.getAllJax("fractionSquareRootFractionOutput")[0];		  
		});
		window.FSF_UpdateMathjax = function (TeX) {
		 FSF_Queue.Push(["Text",FSF_ElementJax,"\\displaystyle{"+TeX+"}"]);//in this style the factions size is reduced
		}		
		//end FractionSquareRootFraction builder Queue
						
	
	/*Start SquareRoot Queue*/
	
		//SquareRoot builder Queue
		 var S_Queue = MathJax.Hub.queue; 
		 var S_ElementJax = null;             
	
		 S_Queue.Push(function () {
		  S_ElementJax = MathJax.Hub.getAllJax("squareRootOutput")[0];
		 });
		 window.S_UpdateMathjax = function (TeX) {
		  S_Queue.Push(["Text",S_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }
		//end SquareRoot builder Queue
									
						
		//SquareRootFraction builder Queue
		 var SF_Queue = MathJax.Hub.queue; 
		 var SF_ElementJax = null;             
	
		 SF_Queue.Push(function () {
		  SF_ElementJax = MathJax.Hub.getAllJax("squareRootFractionOutput")[0];
		 });
		 window.SF_UpdateMathjax = function (TeX) {
		  SF_Queue.Push(["Text",SF_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }
		//end SquareRootFraction builder Queue
								
															
		//SquareRootFractionExponent builder Queue
		 var SFE_Queue = MathJax.Hub.queue; 
		 var SFE_ElementJax = null;             
	
		 SFE_Queue.Push(function () {
		  SFE_ElementJax = MathJax.Hub.getAllJax("squareRootFractionExponentOutput")[0];
		 });
		 window.SFE_UpdateMathjax = function (TeX) {
		  SFE_Queue.Push(["Text",SFE_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }
		//end SquareRootFractionExponent builder Queue
								
	
		 //SquareRootExponent builder Queue
		 var SE_Queue = MathJax.Hub.queue; 
		 var SE_ElementJax = null;             
	
		 SE_Queue.Push(function () {
		  SE_ElementJax = MathJax.Hub.getAllJax("squareRootExponentOutput")[0];
		 });
		 window.SE_UpdateMathjax = function (TeX) {
		  SE_Queue.Push(["Text",SE_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }
		 //SquareRootExponent builder Queue
												
		 //SquareRootExponentFraction builder Queue - not implemented - no fraction in exponent
		 /*		 
		 var SEF_Queue = MathJax.Hub.queue; 
		 var SE_ElementJax = null;             
	
		 SEF_Queue.Push(function () {
		  SE_ElementJax = MathJax.Hub.getAllJax("squareRootExponentFractionOutput")[0];
		 });
		 window.UpdateMath2c = function (TeX) {
		  SEF_Queue.Push(["Text",SE_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }
		 */
		 //end SquareRootExponentFraction builder Queue
								
	
	
	/*Start Exponent Queue*/	
	
		//Exponent builder Queue
		 var E_Queue = MathJax.Hub.queue; 
		 var E_ElementJax = null;             
	
		 E_Queue.Push(function () {
		 E_ElementJax = MathJax.Hub.getAllJax("exponentOutput")[0];
		 });
		 window.E_UpdateMathjax = function (TeX) {
		  E_Queue.Push(["Text",E_ElementJax,"\\displaystyle{"+TeX+"}"]);
		 }
		//end Exponent builder Queue
	
	//The 2 queues below for feedback and random questions may not be needed due to queues in Tara's scripts
	/*FeedBack Queue*/
			 //Feedback Queue
			 var feedbackQueue = MathJax.Hub.queue; 
			 var feedback_ElementJax = null;             
		
			 feedbackQueue.Push(function () {
			  feedback_ElementJax = MathJax.Hub.getAllJax("feedBackOutput")[0];
			 });
			 window.feedback_UpdateMathjax = function (TeX) {
			  //set the MathOutput HTML
			  document.getElementById("feedBackOutput").innerHTML = TeX;
			  var str = "${\\begin{align}" +TeX+"\\end{align}}$";
			  $("#feedBackOutput").html(str);
			  //reprocess the MathOutput Element
			  var reprocessMath2 = document.getElementById("feedBackOutput");
			  MathJax.Hub.Queue(["Typeset",MathJax.Hub,reprocessMath2]);  
			}
			//end Feedback Queue
	
	/*Random Question Queue*/
			//Random Question Queue
			 var randomQuestionQueue = MathJax.Hub.queue; 
			 var randomQuestion_ElementJax = null;             
		
			 randomQuestionQueue.Push(function () {
			  randomQuestion_ElementJax = MathJax.Hub.getAllJax("showRandonmQuestion")[0];
			 });
			 window.randomQuestion_UpdateMathjax = function (TeX) {
			  randomQuestionQueue.Push(["Text",randomQuestion_ElementJax,"\\displaystyle{"+TeX+"}"]);
			  console.log("test random question")
			 }
			//endRandom Question Queue
	
  })();//end closure