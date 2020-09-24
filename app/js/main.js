$(document).ready(function(){
	// main mobele nav-menu
	// $('body header.header').append('<span class="menu_overlay menu_overlay_js"></span>');
	// $(".mob_nav_btn_js").click(function(){
 //        $(".nav_menu_js").toggleClass("opened");
 //        $(".menu_overlay_js").toggleClass("active");
 //        $("body").toggleClass("overflow-hidden blur");
 //    });
 //    $(".menu_overlay_js").click(function(){
 //        $(".nav_menu_js").toggleClass("opened");
 //        $(".menu_overlay_js").toggleClass("active");
 //        $("body").toggleClass("overflow-hidden blur");
 //    });

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
	});

});
var lastId,
    topMenu = $(".nav_js"),
    topMenuHeight = topMenu.outerHeight()+65,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});