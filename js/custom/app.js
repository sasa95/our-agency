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
			console.log("asdfdsf");
			$par.closeFAB();
		});

		$(document).on('scroll', function() {
			console.log("asdfdsf");
			$par.closeFAB();
		});

});

$(document).on('click', '.view-image', function(event) {
    event.preventDefault();
    $(this).closest('.card-image').find('.materialboxed').click();
});

$(document).ready(function(){
	$('#mobile-demo a').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	$('.navbar-fixed > nav .hide-on-med-and-down a,.brand-logo').on('click', function(event) {
		event.preventDefault();
		var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - $('.navbar-fixed > nav').height()
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});