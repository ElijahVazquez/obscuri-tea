$(document).ready(function() {
	$('#nav-trigger').click(function(e){
		e.preventDefault();
		$('#toggle').slideToggle(250);
	});
	$('.read-more').click(function(e){
		e.preventDefault();
		$(this).prev().slideToggle(500, function(){
			if($(this).next().html() == "Read More"){
				$(this).next().html("Read Less");
			}
			else{
				$(this).next().html("Read More");
			}
		});
	});
});
