$(document).ready(function(){
	//$("#loaderw").load("header.html");
	//$(".below span").append('<i class="line"></i>');
		$(".hr, .vr").hide();
		console.log("guides()");
		(function() {
			window.guides = guides;
			function guides() {
				$(".hr, .vr").toggle();
			}
		})();
	//scrollspy
	var offset = 20;
	$('.navbar li a').click(function(event) {
		    event.preventDefault();
		    $($(this).attr('href'))[0].scrollIntoView();
		    scrollBy(0, -offset);
		});
	$('.navbar li.team-link a').click(function(event) {
		    event.preventDefault();
		    $($(this).attr('href'))[0].scrollIntoView();
		    scrollBy(0, -70);
		});
	$('.navbar li.hello-link a').click(function(event) {
		    event.preventDefault();
		    $($(this).attr('href'))[0].scrollIntoView();
		    scrollBy(0, +200);
		});

//end
});