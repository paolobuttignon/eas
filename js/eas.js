$(document).ready(function() {

	/* apre dettaglio */
	$('.info_sat').click(function() {
	     $('#eas_dett').show();
	});

	/* chiude dettaglio */
	$('#close_dett').click(function() {
	     $('#eas_dett').hide();
	});
	//fadein sequenziale dei blocchi fase
	$("div.fase").hide().each(function(index) { 
		$(this).delay(index*300).fadeIn(300);
    	});
	//effetto iniziale satelliti 
	$("div.satellite_singolo").delay(100).each(function(index){
		$(this).delay(index*200).animate(
			{"top": "0"},1500,"easeOutElastic",function() {
				$(this).effect("highlight",{color:"#fff"})
			}
	 	)});
});
