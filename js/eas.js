$(document).ready(function() {

	// inizializza plugin per overlay dettagli
  $('#eas-dettaglio').popup({
	  color: '#555',
    opacity: 0.8,
    transition: '0.3s',
    scrolllock: true,
    setzindex: false
   });


	//fadein sequenziale dei blocchi fase
	$("div.fase").hide().each(function(index) { 
		$(this).delay(index*300).show("highlight","",300);
    	});
	//effetto iniziale satelliti 
	$("div.satellite_singolo").delay(100).each(function(index){
		$(this).delay(index*200).animate(
			{"top": "0"},1500,"easeOutElastic",function() {
				$(this).effect("highlight",{color:"#fff"})
			}
	 	)});
});
