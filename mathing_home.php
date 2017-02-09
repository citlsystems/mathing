<?php /* Template Name: Mathing Home */ ?>
<?php
$fullpath = 'http://blog.delts.mun.ca/scripts/mathing.ca/';
?>


<!-- /web/blog.distance.mun.ca/wp-content/themes/mathing/page-templates -->

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
  "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<title>MATHing.ca</title>

<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600|Fjalla+One' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="<?php echo "$fullpath"; ?>style/style.css">

<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

<!--Run local copy of mathjax version 2.3-->
<script type="text/javascript" src="<?php echo "$fullpath"; ?>MathJax-2.3-latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<!--MathJax config-->
<script type="text/x-mathjax-config">
MathJax.Hub.Config({

tex2jax: {
  inlineMath: [["$","$"],["\\(","\\)"]]
},

});

MathJax.Hub.Config({ TeX: { extensions:['color.js']}});
</script>

<!-- Mathing builder-->
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/mathJaxQue.js"></script><!-- Ques for mathjax Typesetting  -->
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/mainPanel.js"></script><!-- Input via main Panel  -->
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/deleteUserInput.js"></script><!-- Delete User Input  -->
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/addRemoveListenerToNewLineAndEqualSign.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/fractionBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/fractionFractionBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/fractionExponentBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/fractionFractionExponentBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/fractionFractionExponentFractionBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/fractionFractionSquareRootBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/fractionSquareRootBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/fractionSquareRootFractionBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/fractionSquareRootExponentBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/squareRootBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/squareRootFractionBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/squareRootFractionExponentBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/squareRootExponentBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/squareRootExponentFractionBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/exponentBuilder.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/questionSelector.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/numberPadInput.js"></script>


<!-- Linear Equations to solve-->
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/error_analysis_LINEAR_EQUATIONS.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/globalvarsLE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/mathfunctionsLE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/delimeter_mappingLE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/equation_form_testsLE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/fractionsLE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/fractions_latexLE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/solveEqnLE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/polynomialsLE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/solution_panelLE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/tidyingfunctionsLE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/SolveLinearEquationExercises/generate_LINEAR_EQUATIONS.js"></script>

<!-- Quadratic Expression To Factor --> 
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/FactorQuadraticExpressionExercises/error_analysisFQE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/FactorQuadraticExpressionExercises/generateQuadraticExpressionsToFactorFQE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/FactorQuadraticExpressionExercises/globalvarsFQE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/FactorQuadraticExpressionExercises/liveFeedBackPanelFQE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/FactorQuadraticExpressionExercises/mathfunctionsFQE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/FactorQuadraticExpressionExercises/polynomialsFQE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/FactorQuadraticExpressionExercises/solution_panelFQE.js"></script>
<script type="text/javascript" src="<?php echo "$fullpath"; ?>scripts/FactorQuadraticExpressionExercises/tidyingfunctionsFQE.js"></script>

<!-- output-fancyBox for getting started video-->
<script type="text/javascript" src="<?php echo "$fullpath"; ?>output-fancybox/js/jquery.fancybox.js"></script>
<link rel="stylesheet" type="text/css" href="<?php echo "$fullpath"; ?>output-fancybox/css/jquery.fancybox.css">
<!-- end output-fancyBox .. see doc.ready() script at bottom of body tag-->


</head>
<body>
<a href="https://github.com/citlsystems/mathing"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
  <div id="top">
    <div class="topmenu">
     <h1 class="site-title">MATH<span>ing.ca</span><small>beta</small></h1>
     <ul>
      <li><a href="http://mathing.ca/about">About</a></li>  
      <li><a href="http://mathing.ca/videos">Videos</a></li>  
      <li><a href="http://mathing.ca/links/">Useful Links</a></li>  
    </ul>     
    <div class="clear"></div>
  </div>

  <div class="topbar">                               

    <form name="questionTypeForm" class="questionTypeForm">
      <select name="questionFeed" id="questionFeed" onChange="selectQuestion1();;">
        <option value="QuestionTypes" selected="selected">Select Question Type</option>
        <option value="linearEquation">Linear Equations</option>
      <!--   <option value="quadraticExpression">Quadratic Expressions</option> -->
      </select>
      <!--Counter-->
      <input type="text" disabled="disabled" size="4" id="currentQuestion" name="currentQuestion"> <input type="text" disabled="disabled" size="1" id="questionTotal" name="questionTotal">
    </form>



    <div id="menuContainer">

      <!--FeedBack Buttons-->
      <div id="questBtnsDiv">

        <!--See questionSelector.js for newQuestion() and HideAnswer() functions below-->
        <div id="linearEquationBtn">

          <button class="round btn" id="hideAnswer" onClick="hideAnswer()">Hide</button>

          <!--New call March 20-->
          <button class="round btn" id="showAnswer" onClick="solutionLinEqn=LEdisplayLinearEqnSolution(LElinearEquationSolution1(inputLinEqn));document.getElementById('p2').innerHTML= '$'+solutionLinEqn+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p2']);showHideBtn()">Show</button>



          <button class="round btn" id="nextQuestion" onClick="nextQuestion()">Next</button>
          <button class="round btn" id="prevQuestion" onClick="prevQuestion()">Previous</button>

          <!--<button class="round btn" onClick="newQuestion();inputLinEqn=randNiceIntLinTexEq(); document.getElementById('p1').innerHTML = '$'+inputLinEqn+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);getInputLine(inputLinEqn)">New</button>-->
          <button class="round btn" onClick="newQuestion();inputLinEqn=LErandomLinearEquation(); document.getElementById('p1').innerHTML = '$'+inputLinEqn+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);getInputLine(inputLinEqn)">New</button>

        </div>

        <div id="quadraticExpressionBtn">

          <button class="round btn" id="hideAnswer1" onClick="hideAnswer()">Hide</button>
          <button class="round btn" id="showAnswer1" onClick="solutionQuadratic=factorRationalQuadraticExpressionSolution(inputQuadratic);document.getElementById('p2').innerHTML= '$'+solutionQuadratic+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p2']);showHideBtn()">Show</button>

          <button class="round btn" id="nextQuestion1" onClick="nextQuestion()">Next</button>  
          <button class="round btn" id="prevQuestion1" onClick="prevQuestion()">Previous</button>

          <button class="round btn" onClick="newQuestion();inputQuadratic=type3FactorableQuadratic(); document.getElementById('p1').innerHTML = '$'+inputQuadratic+'$';MathJax.Hub.Queue(['Typeset',MathJax.Hub,'p1']);getInputLine(inputQuadratic)">New</button>

        </div>

      </div><!--End FeedBack Buttons-->
    </div><!--End menuContainer-->



    <div class="clear"></div>

    <!-- Select question type Prompt-->
    <div class="question">
      <div id="solveQuestType"></div>
      <div id="p1"></div><!--Tara's random question Output -->

    </div>
    <div class="clear"></div>
  </div><!--End .topbar-->
</div> <!-- close #top -->

<div id="outPutContainer">
  <div id="MathOutput"><!-- Math builder panel-->
    $${
    \begin{align}
    \end{align}   
  }$$
  </div>
  <div id="p2"></div><!-- Solution OutPut-->
</div><!-- end outPutContainer -->

<div class="clear"></div>

<div id="bottom">
  <!-- Realtime Feedback -->  
  <div id="feedBackTextField"></div>

  <div id="calcContainer">

    <!--mainPanel.js  -->
    <div class="calculator">
      <div class="keys">    
        <div class="row basic">           
         <div id="openFractionPanel" onClick="equationBuilder(this.id)">${\frac{a}{b}}$</div>
         <div id="square"onClick="equationBuilder(this.id)">${\sqrt{n}}$</div>
         <div id="power" onClick="equationBuilder(this.id)">${a^{n}}$</div>
         <div id="leftBracket" onClick="equationBuilder(this.id)">${(}$</div>
         <div id="rightBracket" onClick="equationBuilder(this.id)">${)}$</div>

         <div onClick="equationBuilder('+')">${+}$</div>
         <div onClick="equationBuilder('-')">${-}$</div>
         <div onClick="equationBuilder('*')">${&#215;}$</div>
       </div>
       <div class="clear"></div>
       <div class="column-lg">
        <div class="row">
          <div onClick="equationBuilder('1')">${1}$</div>
          <div onClick="equationBuilder('2')">${2}$</div>
          <div onClick="equationBuilder('3')">${3}$</div>
          <div onClick="equationBuilder('4')">${4}$</div>
          <div onClick="equationBuilder('5')">${5}$</div>
          <div onClick="equationBuilder('6')">${6}$</div>
          <div onClick="equationBuilder('7')">${7}$</div>
          <div onClick="equationBuilder('8')">${8}$</div>
          <div onClick="equationBuilder('9')">${9}$</div>  
          <div onClick="equationBuilder('0')">${0}$</div>
          <div onClick="equationBuilder('x')">${x}$</div>
          <div onClick="equationBuilder('y')">${y}$</div>
          <div onClick="equationBuilder('z')">${z}$</div> 
          <div id="equal">${=}$</div><!-- add and remove listeners -->
        </div>        
        <div class="clear"></div>     
      </div>
      <div class="clear"></div>
      <div class="button-wrap">       
        <div id="newLine" class="btn round">Return&#8629;</div>
        <div id="reset"  class="btn round" onClick="equationBuilder(this.id)">Reset</div>
        <button onClick="popMathOutputArray()" class="btn round">Back&#8592;</button>
      </div> 
    </div>                
  </div>  <!--End Class Keys -->   

  <!-- fractionBuilder.js -->             

  <div id="fractionPanel">
    <div class="calculator">
      <div class="keys">    
        <div class="row basic">           
          <div id="fractionFractionBtn" onClick="fractionBuilder(this.id)">${\frac{a}{b}}$</div><!--open fraction in fraction panel -->
          <div id="fractionSquareBtn" onClick="fractionBuilder(this.id)">${\sqrt{n}}$</div>
          <div id="fractionPowerBtn" onClick="fractionBuilder(this.id)">${a^{n}}$</div>
          <div onClick="fractionBuilder('(')">${(}$</div>
          <div onClick="fractionBuilder(')')">${)}$</div>
          <div onClick="fractionBuilder('+')">${+}$</div>
          <div onClick="fractionBuilder('-')">${-}$</div>
          <div onClick="fractionBuilder('*')">${&#215;}$</div>
        </div>
        <div class="row">
          <div onClick="fractionBuilder('1')">${1}$</div>
          <div onClick="fractionBuilder('2')">${2}$</div>
          <div onClick="fractionBuilder('3')">${3}$</div>
          <div onClick="fractionBuilder('4')">${4}$</div>
          <div onClick="fractionBuilder('5')">${5}$</div>
          <div onClick="fractionBuilder('6')">${6}$</div>
          <div onClick="fractionBuilder('7')">${7}$</div>
          <div onClick="fractionBuilder('8')">${8}$</div>
          <div onClick="fractionBuilder('9')">${9}$</div>            
          <div onClick="fractionBuilder('0')">${0}$</div>
          <div onClick="fractionBuilder('x')">${x}$</div>
          <div onClick="fractionBuilder('y')">${y}$</div>
          <div onClick="fractionBuilder('z')">${z}$</div>
        </div>        
        <div class="clear"></div>  
        <div id="fractionOutput">
          ${
          \begin{align}

          \end{align}
        }$
      </div>
      <div class="button-wrap">   
        <div class="btn round" id="numeratorid" onClick="fractionBuilder(this.id)">Numerator</div>
        <div class="btn round" id="denominatorid" onClick="fractionBuilder(this.id)">Denominator</div>   
      </div>  
      <div class="button-wrap">              
       <div class="btn round" id="insertFraction" onClick="upDateMainEquationFromFraction()">Insert</div>
       <div class="btn round" id="resetFraction" onClick="resetFraction()">Reset</div>
       <div class="btn round" id="cancelFraction" onClick="cancelUpDateMainEquationFromFraction()">Cancel</div>
     </div>                
   </div>  <!--End Class Keys -->   
 </div>  <!--End id calculator -->
</div><!--End fraction Panel -->

<!--fractionExponentBuilder.js -->
<div id="fractionExponentPanel">
  <div class="calculator">
    <div class="keys">    
      <div class="row">           
        <div onClick="fractionExponentBuilder('(')">${(}$</div>
        <div onClick="fractionExponentBuilder(')')">${)}$</div>
        <div onClick="fractionExponentBuilder('+')">${+}$</div>
        <div onClick="fractionExponentBuilder('-')">${-}$</div>
        <div onClick="fractionExponentBuilder('*')">${&#215;}$</div>
      </div>
      <div class="row">
        <div onClick="fractionExponentBuilder('1')">${1}$</div>
        <div onClick="fractionExponentBuilder('2')">${2}$</div>
        <div onClick="fractionExponentBuilder('3')">${3}$</div>
        <div onClick="fractionExponentBuilder('4')">${4}$</div>
        <div onClick="fractionExponentBuilder('5')">${5}$</div>
        <div onClick="fractionExponentBuilder('6')">${6}$</div>
        <div onClick="fractionExponentBuilder('7')">${7}$</div>
        <div onClick="fractionExponentBuilder('8')">${8}$</div>
        <div onClick="fractionExponentBuilder('9')">${9}$</div>  
        <div onClick="fractionExponentBuilder('0')">${0}$</div>
        <div onClick="fractionExponentBuilder('x')">${x}$</div>
        <div onClick="fractionExponentBuilder('y')">${y}$</div>
        <div onClick="fractionExponentBuilder('z')">${z}$</div>
      </div>        
      <div class="clear"></div>
      <div id="fractionExponentOutput">
        ${
        \begin{split}

        \end{split}
      }$
    </div>
    <div class="button-wrap">
      <div class="btn round" id="fractionBaseId" onClick="fractionExponentBuilder(this.id)">Base</div>
      <div class="btn round" id="fractionExponentId" onClick="fractionExponentBuilder(this.id)">Exponent</div>
    </div> 
    <div class="button-wrap">                
     <div class="btn round" id="insertFractionExponent" onClick="upDateFractionPanelFromFractionExponentPanel()">Insert</div>
     <div class="btn round" id="resetFractionExponent" onClick="resetFractionExponent()">Reset</div>
     <div class="btn round" id="cancelFractionExponent" onClick="cancelUpDateFractionPanelFromFractionExponentPanel()">Cancel</div>   
   </div>                
 </div>  <!--End Class Keys -->   
</div>  <!--End id calculator -->
</div><!--End Fraction Power Panel-->


<!--fractionFraction.js  -->
<div id="fractionFractionPanel">
  <div class="calculator">
    <div class="keys"></div>  
    <div class="row">           
      <div id="fractionFractionSquareRootBtn" onClick="fractionFractionBuilder(this.id)">${\sqrt{n}}$</div>
      <div id="fractionFractionPowerBtn" onClick="fractionFractionBuilder(this.id)">${a^{n}}$</div>
      <div onClick="fractionFractionBuilder('(')">${(}$</div>
      <div onClick="fractionFractionBuilder(')')">${)}$</div>
      <div onClick="fractionFractionBuilder('+')">${+}$</div>
      <div onClick="fractionFractionBuilder('-')">${-}$</div>
      <div onClick="fractionFractionBuilder('*')">${&#215;}$</div>
    </div>
    <div class="row">
      <div onClick="fractionFractionBuilder('1')">${1}$</div>
      <div onClick="fractionFractionBuilder('2')">${2}$</div>
      <div onClick="fractionFractionBuilder('3')">${3}$</div>
      <div onClick="fractionFractionBuilder('4')">${4}$</div>
      <div onClick="fractionFractionBuilder('5')">${5}$</div>
      <div onClick="fractionFractionBuilder('6')">${6}$</div>
      <div onClick="fractionFractionBuilder('7')">${7}$</div>
      <div onClick="fractionFractionBuilder('8')">${8}$</div>
      <div onClick="fractionFractionBuilder('9')">${9}$</div> 
      <div onClick="fractionFractionBuilder('0')">${0}$</div>
      <div onClick="fractionFractionBuilder('x')">${x}$</div>
      <div onClick="fractionFractionBuilder('y')">${y}$</div>
      <div onClick="fractionFractionBuilder('z')">${z}$</div>
    </div>        
    <div class="clear"></div>
    <div id="fractionFractionOutput">
      ${
      \begin{split}

      \end{split}
    }$
  </div>   
  <div class="button-wrap">           
    <div id="fractionFractionNumeratorid" class="numeratorid btn round" onClick="fractionFractionBuilder(this.id)">Numerator</div>
    <div id="fractionFractionDenominatorid" class="denominatorid btn round" onClick="fractionFractionBuilder(this.id)">Denominator</div>
    <div class="button-wrap">                
     <div class="btn round" id="insertFractionFraction" onClick="upDatefractionPanelFromfractionFractionPanel()">Insert</div>
     <div class="btn round" id="resetFractionFraction" onClick="resetFractionFraction()">Reset</div>
     <div class="btn round" id="cancelFractionFraction" onClick="cancelUpDateFractionPanelFromFractionFractionPanel()">Cancel</div>  
   </div>                
 </div>  <!--End Class Keys -->   
</div>  <!--End id calculator -->
</div><!--End Fraction Fraction Panel-->


<!--fractionFractionExponent.js  -->            
<div id="fractionFractionExponentPanel">
  <div class="calculator">
    <div class="keys">  
      <div class="row">           
        <div onClick="fractionFractionExponentBuilder('(')">${(}$</div>
        <div onClick="fractionFractionExponentBuilder(')')">${)}$</div>
        <div onClick="fractionFractionExponentBuilder('+')">${+}$</div>
        <div onClick="fractionFractionExponentBuilder('-')">${-}$</div>
        <div onClick="fractionFractionExponentBuilder('*')">${&#215;}$</div>
      </div>
      <div class="row">
        <div onClick="fractionFractionExponentBuilder('1')">${1}$</div>
        <div onClick="fractionFractionExponentBuilder('2')">${2}$</div>
        <div onClick="fractionFractionExponentBuilder('3')">${3}$</div>
        <div onClick="fractionFractionExponentBuilder('4')">${4}$</div>
        <div onClick="fractionFractionExponentBuilder('5')">${5}$</div>
        <div onClick="fractionFractionExponentBuilder('6')">${6}$</div>
        <div onClick="fractionFractionExponentBuilder('7')">${7}$</div>
        <div onClick="fractionFractionExponentBuilder('8')">${8}$</div>
        <div onClick="fractionFractionExponentBuilder('9')">${9}$</div> 
        <div onClick="fractionFractionExponentBuilder('0')">${0}$</div> 
        <div onClick="fractionFractionExponentBuilder('x')">${x}$</div>
        <div onClick="fractionFractionExponentBuilder('y')">${y}$</div>
        <div onClick="fractionFractionExponentBuilder('z')">${z}$</div> 
      </div>        
      <div class="clear"></div>  
      <div id="fractionFractionExponentOutput">
        ${
        \begin{split}

        \end{split}
      }$
    </div>  
    <div class="button-wrap">
      <div class="btn round" id="fractionFractionBaseId" onClick="fractionFractionExponentBuilder(this.id)">Base</div>
      <div class="btn round" id="fractionFractionExponentId" onClick="fractionFractionExponentBuilder(this.id)">Exponent</div>
    </div>
    <div class="button-wrap"> 
      <div class="btn round" id="insertFractionFractionExponent" onClick="upDatefractionFractionPanelFromfractionFractionExponentPanel()">Insert</div>
      <div class="btn round" id="resetFractionFractionExponent" onClick="resetFractionFractionExponent()">Reset</div>
      <div class="btn round" id="cancelFractionFractionExponent" onClick="cancelUpDateFractionFractionPanelFromFractionFractionExponentPanel()">Cancel</div>
    </div> <!--End button wrap -->
  </div>  <!--End Class Keys -->
</div>  <!--End id calculator -->
</div><!-- End Fraction Fraction Exponent-->



<!--fractionFractionSquareRootBuilder.js-->            
<div id="fractionFractionSquareRootPanel">
  <div class="calculator">
    <div class="keys">    
      <div class="row square">           
        <div onClick="fractionFractionSquareRootBuilder('(')">${(}$</div>
        <div onClick="fractionFractionSquareRootBuilder(')')">${)}$</div>
        <div onClick="fractionFractionSquareRootBuilder('+')">${+}$</div>
        <div onClick="fractionFractionSquareRootBuilder('-')">${-}$</div>
        <div onClick="fractionFractionSquareRootBuilder('*')">${&#215;}$</div>
      </div>
      <div class="row">
        <div onClick="fractionFractionSquareRootBuilder('1')">${1}$</div>
        <div onClick="fractionFractionSquareRootBuilder('2')">${2}$</div>
        <div onClick="fractionFractionSquareRootBuilder('3')">${3}$</div>
        <div onClick="fractionFractionSquareRootBuilder('4')">${4}$</div>
        <div onClick="fractionFractionSquareRootBuilder('5')">${5}$</div>
        <div onClick="fractionFractionSquareRootBuilder('6')">${6}$</div>
        <div onClick="fractionFractionSquareRootBuilder('7')">${7}$</div>
        <div onClick="fractionFractionSquareRootBuilder('8')">${8}$</div>
        <div onClick="fractionFractionSquareRootBuilder('9')">${9}$</div>  
        <div onClick="fractionFractionSquareRootBuilder('0')">${0}$</div>
        <div onClick="fractionFractionSquareRootBuilder('x')">${x}$</div>
        <div onClick="fractionFractionSquareRootBuilder('y')">${y}$</div>
        <div onClick="fractionFractionSquareRootBuilder('z')">${z}$</div>  
      </div>    
      <div class="clear"></div>
      <div id="fractionFractionSquareRootOutput">
        ${
        \begin{split}

        \end{split}
      }$
    </div> 
    <div class="button-wrap"> 
      <div class="btn round" id="insertFractionFractionSquareRoot" onClick="upDatefractionFractionPanelFromfractionFractionSquareRootPanel()">Insert</div>
      <div class="btn round" id="resetFractionFractionSquareRoot" onClick="resetFractionFractionSquareRoot()">Reset</div>
      <div class="btn round" id="cancelFractionFractionSquareRoot" onClick="cancelUpDateFractionFractionPanelFromFractionFractionSquareRootPanel()">Cancel</div>
    </div> <!--End button wrap -->
  </div>  <!--End Class Keys -->
</div>  <!--End id calculator -->
</div><!-- End Fraction Fraction SquareRoot Panels-->


<!--fractionSquareRoot.js -->
<div id="fractionSquareRootPanel">
  <div class="calculator">
    <div class="keys">    
      <div class="row square">           
        <div id="fractionSquareRootFractionBtn" onClick="fractionSquareRootBuilder(this.id)">${\frac{a}{b}}$</div><!--open fraction in fraction panel -->
        <div id="fractionSquareRootPowerBtn" onClick="fractionSquareRootBuilder(this.id)">${a^{n}}$</div>
        <div onClick="fractionSquareRootBuilder('(')">${(}$</div>
        <div onClick="fractionSquareRootBuilder(')')">${)}$</div>
        <div onClick="fractionSquareRootBuilder('+')">${+}$</div>
        <div onClick="fractionSquareRootBuilder('-')">${-}$</div>
        <div onClick="fractionSquareRootBuilder('*')">${&#215;}$</div>
      </div>
      <div class="row">
        <div onClick="fractionSquareRootBuilder('1')">${1}$</div>
        <div onClick="fractionSquareRootBuilder('2')">${2}$</div>
        <div onClick="fractionSquareRootBuilder('3')">${3}$</div>
        <div onClick="fractionSquareRootBuilder('4')">${4}$</div>
        <div onClick="fractionSquareRootBuilder('5')">${5}$</div>
        <div onClick="fractionSquareRootBuilder('6')">${6}$</div>
        <div onClick="fractionSquareRootBuilder('7')">${7}$</div>
        <div onClick="fractionSquareRootBuilder('8')">${8}$</div>
        <div onClick="fractionSquareRootBuilder('9')">${9}$</div>  
        <div onClick="fractionSquareRootBuilder('0')">${0}$</div>
        <div onClick="fractionSquareRootBuilder('x')">${x}$</div>
        <div onClick="fractionSquareRootBuilder('y')">${y}$</div>
        <div onClick="fractionSquareRootBuilder('z')">${z}$</div>
      </div>
      <div class="clear"></div>
      <div id="fractionSquareRootOutput">
        ${
        \begin{split}

        \end{split}
      }$
    </div>
    <div class="button-wrap">
      <div class="btn round" id="insertFractionSquareRoot" onClick="upDateFractionPanelFromFractionSquareRootPanel()">Insert</div>
      <div class="btn round" id="resetFractionSquareRoot" onClick="resetFractionSquareRoot()">Reset</div>
      <div class="btn round" id="cancelFractionSquareRoot" onClick="cancelUpDateFractionPanelFromFractionSquareRootPanel()">Cancel</div>
    </div> <!--End button wrap -->
  </div>  <!--End Class Keys -->
</div>  <!--End class calculator -->
</div><!--End Fraction SquareRoot Panel-->


<!--fractionSquareRootExponentBuilder.js  -->
<div id="fractionSquareRootExponentPanel">
  <div class="calculator">
    <div class="keys"> 
     <div class="row">           
      <div onClick="fractionSquareRootExponentBuilder('(')">${(}$</div>
      <div onClick="fractionSquareRootExponentBuilder(')')">${)}$</div>
      <div onClick="fractionSquareRootExponentBuilder('+')">${+}$</div>
      <div onClick="fractionSquareRootExponentBuilder('-')">${-}$</div>
      <div onClick="fractionSquareRootExponentBuilder('*')">${&#215;}$</div>
    </div>
    <div class="row">
      <div onClick="fractionSquareRootExponentBuilder('1')">${1}$</div>
      <div onClick="fractionSquareRootExponentBuilder('2')">${2}$</div>
      <div onClick="fractionSquareRootExponentBuilder('3')">${3}$</div>
      <div onClick="fractionSquareRootExponentBuilder('4')">${4}$</div>
      <div onClick="fractionSquareRootExponentBuilder('5')">${5}$</div>
      <div onClick="fractionSquareRootExponentBuilder('6')">${6}$</div>
      <div onClick="fractionSquareRootExponentBuilder('7')">${7}$</div>
      <div onClick="fractionSquareRootExponentBuilder('8')">${8}$</div>
      <div onClick="fractionSquareRootExponentBuilder('9')">${9}$</div>  
      <div onClick="fractionSquareRootExponentBuilder('0')">${0}$</div>
      <div onClick="fractionSquareRootExponentBuilder('x')">${x}$</div>
      <div onClick="fractionSquareRootExponentBuilder('y')">${y}$</div>
      <div onClick="fractionSquareRootExponentBuilder('z')">${z}$</div>
    </div>
    <div class="clear"></div>
    <div id="fractionSquareRootExponentOutput">
      ${
      \begin{split}

      \end{split}
    }$
  </div> 
  <div class="button-wrap">           
     <div class="btn round" id="fractionSquareRootBaseId" onClick="fractionSquareRootExponentBuilder(this.id)">Base</div>
     <div class="btn round" id="fractionSquareRootExponentId" onClick="fractionSquareRootExponentBuilder(this.id)">Exponent</div>
  </div>  
  <div class="button-wrap">
    <div class="btn round" id="insertFractionSquareRootExponent" onClick="upDateFractionSquareRootPanelFromFractionSquareRootExponentPanel()">Insert</div>
    <div class="btn round" id="resetFractionSquareRootExponent" onClick="resetFractionSquareRootExponent()">Reset</div>
    <div class="btn round" id="cancelFractionSquareRootExponent" onClick="cancelUpDateFractionSquareRootPanelFromFractionSquareRootExponentPanel()">Cancel</div>
  </div> <!--End button wrap -->
</div>  <!--End Class Keys -->
</div>  <!--End class calculator -->
</div><!--End Fraction SquareRoot Power Panel-->


<!--fractionSquareRootFraction.js  -->             
<div id="fractionSquareRootFractionPanel">
  <div class="calculator">
    <!--<p>Fraction Builder</p> -->
    <div class="keys">    
      <div class="row">           
      	<div onClick="fractionSquareRootFractionBuilder('(')">${(}$</div>
      	<div onClick="fractionSquareRootFractionBuilder(')')">${)}$</div>
        <div onClick="fractionSquareRootFractionBuilder('+')">${+}$</div>
        <div onClick="fractionSquareRootFractionBuilder('-')">${-}$</div>
        <div onClick="fractionSquareRootFractionBuilder('*')">${&#215;}$</div>
      </div>
      <div class="row">
        <div onClick="fractionSquareRootFractionBuilder('1')">${1}$</div>
        <div onClick="fractionSquareRootFractionBuilder('2')">${2}$</div>
        <div onClick="fractionSquareRootFractionBuilder('3')">${3}$</div>
        <div onClick="fractionSquareRootFractionBuilder('4')">${4}$</div>
        <div onClick="fractionSquareRootFractionBuilder('5')">${5}$</div>
        <div onClick="fractionSquareRootFractionBuilder('6')">${6}$</div>
        <div onClick="fractionSquareRootFractionBuilder('7')">${7}$</div>
        <div onClick="fractionSquareRootFractionBuilder('8')">${8}$</div>
        <div onClick="fractionSquareRootFractionBuilder('9')">${9}$</div> 
        <div onClick="fractionSquareRootFractionBuilder('0')">${0}$</div>
        <div onClick="fractionSquareRootFractionBuilder('x')">${x}$</div>
        <div onClick="fractionSquareRootFractionBuilder('y')">${y}$</div>
        <div onClick="fractionSquareRootFractionBuilder('z')">${z}$</div>
      </div>
      <div class="clear"></div>
      <div id="fractionSquareRootFractionOutput">
        ${
        \begin{split}
        
        \end{split}
      }$
    </div>
    <div class="button-wrap">           
      <div class="btn round" id="fractionSquareRootFractionNumeratorId" onClick="fractionSquareRootFractionBuilder(this.id)">Numerator</div>
      <div class="btn round" id="fractionSquareRootFractionDenominatorId" onClick="fractionSquareRootFractionBuilder(this.id)">Denominator</div>
    </div>  
    <div class="button-wrap">                
     <div class="btn round" id="insertFractionSquareRootFraction" onClick="upDateFractionSquareRootPanelFromFractionSquareRootFractionPanel()">Insert</div>
     <div class="btn round" id="resetFractionSquareRootFraction" onClick="resetFractionSquareRootFraction()">Reset</div>
     <div class="btn round" id="cancelFractionSquareRootFraction" onClick="cancelUpDateFractionSquareRootPanelFromFractionSquareRootFractionPanel()">Cancel</div> 
   </div>                
 </div>  <!--End Class Keys -->   
</div>  <!--End id calculator -->
</div><!--End Fraction SquareRoot Fraction Panel-->


<!--squareRoot.js -->
<div id="squareRootPanel">
  <div class="calculator">
    <div class="keys">    
      <div class="row basic">           
        <div id="squareRootFractionBtn" onClick="squareRootBuilder(this.id)">${\frac{a}{b}}$</div><!--open fraction in fraction panel -->
        <div id="squareRootPowerBtn" onClick="squareRootBuilder(this.id)">${a^{n}}$</div>
        <div onClick="squareRootBuilder('(')">${(}$</div>
        <div onClick="squareRootBuilder(')')">${)}$</div>
        <div onClick="squareRootBuilder('+')">${+}$</div>
        <div onClick="squareRootBuilder('-')">${-}$</div>
        <div onClick="squareRootBuilder('*')">${&#215;}$</div>
      </div>
      <div class="row">
        <div onClick="squareRootBuilder('1')">${1}$</div>
        <div onClick="squareRootBuilder('2')">${2}$</div>
        <div onClick="squareRootBuilder('3')">${3}$</div>
        <div onClick="squareRootBuilder('4')">${4}$</div>
        <div onClick="squareRootBuilder('5')">${5}$</div>
        <div onClick="squareRootBuilder('6')">${6}$</div>
        <div onClick="squareRootBuilder('7')">${7}$</div>
        <div onClick="squareRootBuilder('8')">${8}$</div>
        <div onClick="squareRootBuilder('9')">${9}$</div>  
        <div onClick="squareRootBuilder('0')">${0}$</div>
        <div onClick="squareRootBuilder('x')">${x}$</div>
        <div onClick="squareRootBuilder('y')">${y}$</div>
        <div onClick="squareRootBuilder('z')">${z}$</div>
      </div>
      <div class="clear"></div>
      <div id="squareRootOutput">
        ${
        \begin{split}
        
        \end{split}
      }$
    </div>
    <div class="button-wrap">
      <div class="btn round" id="insertSquareRoot" onClick="upDateMainEquationFromSquareRoot()">Insert</div>
      <div class="btn round" id="resetSquareRoot" onClick="resetSquareRoot()">Reset</div>
      <div class="btn round" id="cancelSquareRoot" onClick="cancelUpDateMainEquationFromSquareRoot()">Cancel</div>
    </div> <!--End button wrap -->
  </div>  <!--End Class Keys -->
</div>  <!--End class calculator -->
</div><!--End SquareRoot Builder-->


<!--squareRootFractionBuilder.js  -->    
<div id="squareRootFractionPanel">
  <div class="calculator">
    <div class="keys">   
      <div class="row">           
        <div id="squareRootFractionPowerBtn" onClick="squareRootFractionBuilder(this.id)">${a^{n}}$</div>
        <div onClick="squareRootFractionBuilder('(')">${(}$</div>
        <div onClick="squareRootFractionBuilder(')')">${)}$</div>
        <div onClick="squareRootFractionBuilder('+')">${+}$</div>
        <div onClick="squareRootFractionBuilder('-')">${-}$</div>
        <div onClick="squareRootFractionBuilder('*')">${&#215;}$</div>
      </div>
      <div class="row">
        <div onClick="squareRootFractionBuilder('1')">${1}$</div>
        <div onClick="squareRootFractionBuilder('2')">${2}$</div>
        <div onClick="squareRootFractionBuilder('3')">${3}$</div>
        <div onClick="squareRootFractionBuilder('4')">${4}$</div>
        <div onClick="squareRootFractionBuilder('5')">${5}$</div>
        <div onClick="squareRootFractionBuilder('6')">${6}$</div>
        <div onClick="squareRootFractionBuilder('7')">${7}$</div>
        <div onClick="squareRootFractionBuilder('8')">${8}$</div>
        <div onClick="squareRootFractionBuilder('9')">${9}$</div> 
        <div onClick="squareRootFractionBuilder('0')">${0}$</div>
        <div onClick="squareRootFractionBuilder('x')">${x}$</div>
        <div onClick="squareRootFractionBuilder('y')">${y}$</div>
        <div onClick="squareRootFractionBuilder('z')">${z}$</div>
      </div>
      <div class="clear"></div> 
      <div id="squareRootFractionOutput">
        ${
        \begin{split}
        
        \end{split}
      }$
    </div>
    <div class="button-wrap">           
      <div class="numeratorid btn round" id="squareRootFractionNumeratorid" onClick="squareRootFractionBuilder(this.id)">Numerator</div>
      <div id="squareRootFractionDenominatorid" class="denominatorid btn round" onClick="squareRootFractionBuilder(this.id)">Denominator</div>
    </div>  
    <div class="button-wrap">                
     <div class="btn round" id="insertSquareRootFraction" onClick="upDateSquareRootPanelFromSquareRootFractionPanel()">Insert</div>
     <div class="btn round" id="resetSquareRootFraction" onClick="resetSquareRootFraction()">Reset</div>
     <div class="btn round" id="cancelSquareRootFraction" onClick="cancelUpDateSquareRootPanelFromSquareRootFractionPanel()">Cancel</div> 
   </div>                
 </div>  <!--End Class Keys -->   
</div>  <!--End id calculator -->
</div><!--End SquareRoot Fraction Panel-->

<!--squareRootFractionExponentBuilder.js  -->
<div id="squareRootFractionExponentPanel">
  <div class="calculator">
    <div class="keys">    
     <div class="row">           
      <div onClick="squareRootFractionExponentBuilder('(')">${(}$</div>
      <div onClick="squareRootFractionExponentBuilder(')')">${)}$</div>
      <div onClick="squareRootFractionExponentBuilder('+')">${+}$</div>
      <div onClick="squareRootFractionExponentBuilder('-')">${-}$</div>
      <div onClick="squareRootFractionExponentBuilder('*')">${&#215;}$</div>
    </div>
    <div class="row">
      <div onClick="squareRootFractionExponentBuilder('1')">${1}$</div>
      <div onClick="squareRootFractionExponentBuilder('2')">${2}$</div>
      <div onClick="squareRootFractionExponentBuilder('3')">${3}$</div>
      <div onClick="squareRootFractionExponentBuilder('4')">${4}$</div>
      <div onClick="squareRootFractionExponentBuilder('5')">${5}$</div>
      <div onClick="squareRootFractionExponentBuilder('6')">${6}$</div>
      <div onClick="squareRootFractionExponentBuilder('7')">${7}$</div>
      <div onClick="squareRootFractionExponentBuilder('8')">${8}$</div>
      <div onClick="squareRootFractionExponentBuilder('9')">${9}$</div>
      <div onClick="squareRootFractionExponentBuilder('0')">${0}$</div>
      <div onClick="squareRootFractionExponentBuilder('x')">${x}$</div>
      <div onClick="squareRootFractionExponentBuilder('y')">${y}$</div>
      <div onClick="squareRootFractionExponentBuilder('z')">${z}$</div>   
    </div>
    <div class="clear"></div>
    <div id="squareRootFractionExponentOutput">
      ${
      \begin{split}

      \end{split}
    }$
  </div>
  <div class="button-wrap">           
   <div class="btn round" id="squareRootFractionBaseId" onClick="squareRootFractionExponentBuilder(this.id)">Base</div>
   <div class="btn round" id="squareRootFractionExponentId" onClick="squareRootFractionExponentBuilder(this.id)">Exponent</div>
 </div>  
 <div class="button-wrap">                
  <div class="btn round" id="insertSquareRootFractionExponent" onClick="upDateSquareRootFractionPanelFromSquareRootFractionExponentPanel()">Insert</div>
  <div class="btn round" id="resetSquareRootFractionExponent" onClick="resetSquareRootFractionExponent()">Reset</div>
  <div class="btn round" id="cancelSquareRootFractionExponent" onClick="cancelUpDateSquareRootFractionPanelFromSquareRootFractionExponentPanel()">Cancel</div> 
</div>                
</div>  <!--End Class Keys -->   
</div>  <!--End id calculator -->
</div><!--End SquareRoot Fraction Power Panel-->  


<!--squareRootExponentBuilder.js  -->
<div id="squareRootExponentPanel">
  <div class="calculator">
    <div class="keys">  
      <div class="row"> 
        <div onClick="squareRootExponentBuilder('(')">${(}$</div>
        <div onClick="squareRootExponentBuilder(')')">${)}$</div>
        <div onClick="squareRootExponentBuilder('+')">${+}$</div>
        <div onClick="squareRootExponentBuilder('-')">${-}$</div>
      </div> 
      
      <div class="row">
        <div onClick="squareRootExponentBuilder('1')">${1}$</div>
        <div onClick="squareRootExponentBuilder('2')">${2}$</div>
        <div onClick="squareRootExponentBuilder('3')">${3}$</div>
        <div onClick="squareRootExponentBuilder('4')">${4}$</div>
        <div onClick="squareRootExponentBuilder('5')">${5}$</div>
        <div onClick="squareRootExponentBuilder('6')">${6}$</div>
        <div onClick="squareRootExponentBuilder('7')">${7}$</div>
        <div onClick="squareRootExponentBuilder('8')">${8}$</div>
        <div onClick="squareRootExponentBuilder('9')">${9}$</div>  
        <div onClick="squareRootExponentBuilder('0')">${0}$</div>
        <div onClick="squareRootExponentBuilder('x')">${x}$</div>
        <div onClick="squareRootExponentBuilder('y')">${y}$</div>
        <div onClick="squareRootExponentBuilder('z')">${z}$</div>
      </div>          
      <div class="clear"></div> 
      <div id="squareRootExponentOutput">
        ${
        \begin{split}
        
        \end{split}
      }$
    </div>  
    <div class="button-wrap">
      <div class="btn round" id="squareRootBaseId" onClick="squareRootExponentBuilder(this.id)">Base</div>
      <div class="btn round" id="squareRootExponentId" onClick="squareRootExponentBuilder(this.id)">Exponent</div>
    </div>
    <div class="button-wrap"> 
      <div class="btn round" id="insertSquareRootExponent" onClick="upDateSquareRootPanelFromSquareRootExponentPanel()">Insert</div>
      <div class="btn round" id="resetSquareRootExponent" onClick="resetSquareRootExponent()">Reset</div>
      <div class="btn round" id="cancelSquareRootExponent" onClick="cancelUpDateSquareRootPanelFromSquareRootExponentPanel()">Cancel</div>
    </div> <!--End button wrap -->
  </div>  <!--End Class Keys -->
</div>  <!--End id calculator -->
</div><!-- End SquareRoot Power Panel -->


<!--exponentBuilder.js  -->
<div id="exponentPanel">
  <div class="calculator">
    <div class="keys">    
      <div class="row">   
        <div onClick="exponentBuilder('(')">${(}$</div>
        <div onClick="exponentBuilder(')')">${)}$</div>
        <div onClick="exponentBuilder('+')">${+}$</div>
        <div onClick="exponentBuilder('-')">${-}$</div> 
      </div>
      <div class="row">
        <div onClick="exponentBuilder('1')">${1}$</div>
        <div onClick="exponentBuilder('2')">${2}$</div>
        <div onClick="exponentBuilder('3')">${3}$</div>
        <div onClick="exponentBuilder('4')">${4}$</div>
        <div onClick="exponentBuilder('5')">${5}$</div>
        <div onClick="exponentBuilder('6')">${6}$</div>
        <div onClick="exponentBuilder('7')">${7}$</div>
        <div onClick="exponentBuilder('8')">${8}$</div>
        <div onClick="exponentBuilder('9')">${9}$</div> 
        <div onClick="exponentBuilder('0')">${0}$</div>
        <div onClick="exponentBuilder('x')">${x}$</div>
        <div onClick="exponentBuilder('y')">${y}$</div>
        <div onClick="exponentBuilder('z')">${z}$</div> 
      </div>                                  
      <div class="clear"></div> 
      <div id="exponentOutput">
        ${
        \begin{split}

        \end{split}
      }$
    </div>
    <div class="button-wrap">
      <div class="btn round" id="baseId" onClick="exponentBuilder(this.id)">Base</div>
      <div class="btn round" id="exponentId" onClick="exponentBuilder(this.id)">Exponent</div>
    </div>
    <div class="button-wrap"> 
      <div class="btn round" id="insertExponent" onClick="upDateMainEquationFromExponent()">Insert</div>
      <div class="btn round" id="resetExponent" onClick="resetExponent()">Reset</div>
      <div class="btn round" id="cancelExponent" onClick="cancelUpDateMainEquationFromExponent()">Cancel</div>
    </div> <!--End button wrap -->
  </div>  <!--End Class Keys -->
</div>  <!--End id calculator -->
</div><!-- End Power Panel -->


</div>  <!--End id calculator to main panel-->     
</div>  <!--End CalcContainer -->




<div id="footer">
</div>
<p class="right"><a href="/mathing-ca-student-survey/">Give us your feedback&nbsp;&raquo;</a></p>
<p class="video-link"><a id="yt" title="" href="<?php echo "$fullpath"; ?>iframe.html">&laquo;Replay video</a></p>


<!-- output-fancyBox.. checkCookie..-->
<script type="text/javascript" charset="utf-8">
$(document).ready(function(){
	$("#yt").click(function() {
		$.fancybox({
      'padding'        : 0,
      'autoScale'      : false,
      'transitionIn'   : 'none',
      'transitionOut'  : 'none',
      'title'          : this.title,
      'width'          : 655,
      'height'         : 380,
      'href'           : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
      'type'           : 'iframe',
      'iframe'         : {

       'preload'    :'false'
     }
   });
		return false;
	});
  checkCookie();
});
function autoLaunchVideo(){
	$("#yt").trigger("click");
}
function checkCookie(){
  if(getCookie("walkthrough") == ""){
    autoLaunchVideo();
  }
  setCookie("walkthrough", "completed", 90);
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' '){
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length,c.length);
    }
  }
  return "";
}
</script>
<!-- end output-fancyBox-->


</body>
</html>

