$(document).ready(function(){
	// main mobele nav-menu
	$('body header.header').append('<span class="menu_overlay menu_overlay_js"></span>');
	$(".mob_nav_btn_js").click(function(){
        $(".nav_menu_js").toggleClass("opened");
        $(".menu_overlay_js").toggleClass("active");
        $("body").toggleClass("overflow-hidden blur");
    });
    $(".menu_overlay_js").click(function(){
        $(".nav_menu_js").toggleClass("opened");
        $(".menu_overlay_js").toggleClass("active");
        $("body").toggleClass("overflow-hidden blur");
    });

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