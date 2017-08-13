var lastScrollTop = 0;
 $(document).on('ready scroll',function() {
 	if($(window).width()>993) {
	 	var st = $(this).scrollTop();
	 	var $header = $('#main-nav');
	 	var $div = $('#main-nav > div');
	 	var $nav = $('#main-nav nav');
	 	var $hero = $('.hero');

	 	if (st > lastScrollTop){
	    	if($(document).scrollTop() > $hero.height()){
	    		$nav.addClass('nav--fixed').removeClass('nav--gone');
	    	}
	    	else {
	    		if($(document).scrollTop() > 50){
	    			$nav.removeClass('nav--fixed').addClass('nav--gone');
	    		}
	    	}
	   } else {
	      if($(document).scrollTop() > $hero.height()){
	    		$nav.removeClass('nav--gone');
	    	}
	    	else {
	    		$nav.removeClass('nav--fixed nav--gone');
	    	}
	   }
    lastScrollTop = st;
    }

  });

