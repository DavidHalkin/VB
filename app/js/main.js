$(document).ready(function(){
	$('.owl_carousel_js').owlCarousel({
		// loop:true,
		margin:0,
		nav:false,
		dots:true,
		responsive:{
		    0:{
		        items:1
		    },
		    600:{
		        items:2
		    }
		}
	})
});