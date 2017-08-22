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
    $(this).closest('.fixed-action-btn').closeFAB();
});

$(document).on('click', '.view-demo', function(event) {
    $(this).closest('.fixed-action-btn').closeFAB();
});



$(window).on('load resize', function(event) {
	$arrow = $('.arrow-link');
	if($(window).width() > 992) {
		$arrow.addClass('arrow-link-lg').removeClass('arrow-link-sm');
	}
	else {
		$arrow.addClass('arrow-link-sm').removeClass('arrow-link-lg');
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


// Contact form

$(document).on('click', '#toast-container .toast-action', function() {
    $(this).closest('.toast').fadeOut(function(){
        $(this).closest('.toast').remove();
    });
});


var $contactForm = $('#contact-form');
var $dismiss = '<button class="btn-flat toast-action light-blue-text">Dismiss</button>';
$contactForm.submit(function(e) {
	var $name = $('#form-name').val().trim();
	var $email = $('#form-email').val().trim();
	var $msg = $('#form-message').val().trim();
	console.log($msg);
	if($name == '' || $email == '' || $msg == '' ) {
		e.preventDefault();
		Materialize.Toast.removeAll();
		var $toastContent = $('<span>All fields must be filled out.</span>').add($dismiss);
		Materialize.toast($toastContent, 5000);	
	} 
	else {
		e.preventDefault();
		$.ajax({
			url: '//formspree.io/sasadrmic032@gmail.com',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function() {
				Materialize.Toast.removeAll();
				var $toastContent = $('<span>Sending...</span>').add($dismiss);
				Materialize.toast($toastContent, 5000);
			},
			success: function(data) {
				Materialize.Toast.removeAll();
				var $toastContent = $('<span>Sent successfully!</span>').add($dismiss);
				Materialize.toast($toastContent, 5000);
			},
			error: function(err) {
				Materialize.Toast.removeAll();
				var $toastContent = $('<span>Ooops... There was an error.</span>').add($dismiss);
				Materialize.toast($toastContent, 5000);
			}
		});
	}
});