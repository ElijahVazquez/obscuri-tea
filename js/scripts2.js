$(document).ready(function() {
	$('#nav-trigger').click(function(e){
		e.preventDefault();
		$('#toggle').slideToggle(250);
	});
});
