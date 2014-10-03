
/*-----------------------------steam stuff here----------------------------------*/
var canvas = document.getElementById('canvas_Element');
var context = canvas.getContext("2d");
var steam = new Image();
var gradient = new Image();
var y = -250;
var masked;
gradient.src = "img/gradient2.png"; //load the gradient for mask
steam.src = "img/steam.png"; //load the steam image
function mask() {	
	//create the steam mask
		context.drawImage(gradient, 0, y);
		context.globalCompositeOperation = 'source-out'; //possibly make source out work
		context.drawImage(steam, -25, -500); //actually draws it.
	//};
};
function draw() {
	context.clearRect(0,0,300,230); //clears canvas
	mask(); 
	y = y-1; //counter
	if(y == -610){
		y = -250;
	}
};

canvas.onload=setInterval(function(){ //sets speed
	draw();
},10);
/*-----------------------------scrolling stuff here----------------------------------*/

$(document).ready(function() {
	$(window).scroll(function () {
	    var scroll = $(window).scrollTop();
	    var height = $(window).height();
	    var smokeHide = height-250;
	    console.log(scroll + " " + height);
	    if(scroll >= smokeHide){
	    	$("#canvas_Element").hide();
	    };
	    if(scroll <= smokeHide){
	    	$("#canvas_Element").show();
	    };
	});
	$('#nav-trigger').click(function(e){
		e.preventDefault();
		$('#toggle').slideToggle(250);
	});
});
