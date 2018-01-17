$(document).ready(function() {

/* This is basic - uses default settings */

/* $("a.inline").fancybox(); */

/* Using custom settings */

$("a.inline").fancybox({
	'hideOnContentClick': false
});

/* Apply fancybox to multiple items */

$("a.group").fancybox({
	'transitionIn'	:	'elastic',
	'transitionOut'	:	'elastic',
	'speedIn'		:	600,
	'speedOut'		:	200,
	'overlayShow'	:	false
});

});
