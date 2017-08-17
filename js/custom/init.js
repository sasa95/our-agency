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