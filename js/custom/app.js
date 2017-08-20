var lastScrollTop = 0;
 $(document).on('ready scroll',function() {
 	if($(window).width()>993) {
	 	var st = $(this).scrollTop();
	 	var $header = $('#main-nav');
	 	var $div = $('#main-nav > div');
	 	var $nav = $('#main-nav nav');
	 	var $hero = $('.hero');

	 	if (st > lastScrollTop){
	    	if($(document).scrollTop() > $hero.height() - $nav.height()){
	    		$nav.addClass('nav--fixed').removeClass('nav--gone');
	    	}
	    	else {
	    		if($(document).scrollTop() > 50){
	    			$nav.removeClass('nav--fixed').addClass('nav--gone');
	    		}
	    	}
	   } else {
	      if($(document).scrollTop() > $hero.height() - $nav.height()){
	    		$nav.removeClass('nav--gone');
	    	}
	    	else {
	    		$nav.removeClass('nav--fixed nav--gone');
	    	}
	   }
    lastScrollTop = st;
    }
  });

$('#close-nav').on('click', function(event) {
	$('.button-collapse').sideNav('hide');
});

$(document).on('click', '.our-projects .fixed-action-btn .btn-floating', function(event) {
	var $par = $(this).parent();
	var $card = $(this).closest('.card');

		$card.on('mouseleave', function() {
			setTimeout(function(){
				$par.closeFAB();
			},500);
			
		});

		$(document).on('scroll', function() {
			$par.closeFAB();
		});
});

$(document).on('click', '.view-image', function(event) {
    event.preventDefault();
    $(this).closest('.card-image').find('.materialboxed').click();
});

$(window).on('load resize', function(event) {
	$arrow = $('.arrow-link');
	if($(window).width() > 992) {
		$arrow.addClass('arrow-link-lg').removeClass('arrow-link-sm');
		console.log("vece");
	}
	else {
		$arrow.addClass('arrow-link-sm').removeClass('arrow-link-lg');
		console.log("manje");
	}
});

$(document).ready(function(){
	$('#mobile-demo a,.arrow-link-sm').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	$('.navbar-fixed > nav .hide-on-med-and-down a,.brand-logo,.arrow-link-lg').on('click', function(event) {
		event.preventDefault();
		var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - $('#main-nav > div > nav').height()
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});