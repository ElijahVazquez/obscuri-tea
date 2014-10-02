alert("JS works");
$(document).ready(function() {
	$(".home-content").click(function(){
		alert("jQuery click works");
	})
	alert("lahhhhh");
	$(window).scroll(function () {
	    var scroll = $(window).scrollTop();
	    alert("scroll Works");
	});
});
