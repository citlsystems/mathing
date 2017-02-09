// JavaScript Document

//hide and show solution Panel with chevron > 

  var toggle = function() {
	  document.getElementById('hintLabel').style.display = 'none';//hide buttons
  	var feedBackPanel = document.getElementById('feedBackOutput');
  		if (feedBackPanel.style.display === 'block' || feedBackPanel.style.display === ''){
    		feedBackPanel.style.display = 'none';
			document.getElementById('MathOutput').style.minWidth='446px';
			
			
			document.getElementById('chevron').innerHTML ='<img src="images/arrowLeft.png" width="14" height="14">';
		}else{
			document.getElementById('hintLabel').style.display = 'block';//show buttons
   			feedBackPanel.style.display = 'block'
			document.getElementById('MathOutput').style.minWidth='214px';
			
			document.getElementById('chevron').innerHTML ='<img src="images/arrowRight.png" width="14" height="14">';		
			
  	}

}