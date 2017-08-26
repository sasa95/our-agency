// Collapse button
$(".button-collapse").sideNav({
	closeOnClick: true,
	draggable:false,
	onOpen: function(el) { 
		$('#main-nav nav').addClass('transparent-nav'); 
		$('#main-nav .brand-logo').addClass('no-brand-logo');
		$('body').addClass('body--fixed');
	},
	onClose: function(el) { 
		$('#main-nav nav').removeClass('transparent-nav'); 
		$('#main-nav .brand-logo').removeClass('no-brand-logo');
		$('body').removeClass('body--fixed');
	}
});

// Tabs
 $(document).ready(function(){
    $('ul.tabs').tabs();
});

// Material Box
$(document).ready(function(){
    $('.materialboxed').materialbox();
});

// Slider
$(document).ready(function(){
	$('.slider').slider({interval:10000});
});

// ScrollSpy
function offsetCalculating() {
	if ($(window).width()>993) {
		return 64;
	}
	else {
		return 0;
	}
}

$(document).ready(function(){
	$scrollOffset = offsetCalculating();

	$(window).resize(function() {
		$scrollOffset = offsetCalculating();
		$('.scrollspy').scrollSpy({activeClass:'inFocus',scrollOffset:$scrollOffset});	
	});

	$('.scrollspy').scrollSpy({activeClass:'inFocus',scrollOffset:$scrollOffset});	
	console.log($scrollOffset);
    
});

// Tooltip
$(document).ready(function(){
	$('.tooltipped').tooltip({delay: 50,position:'right'});
});
        