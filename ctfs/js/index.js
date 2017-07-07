$(document).ready(function() {
	$('.js-timer').countdown('2017/07/08', function(event) {
  $(this).html(event.strftime('%D days %H:%M:%S'));
});
	// animate scroll when nav links are clicked
	$(document).on('click', 'a[href^="#"]', function(e) {
		// target element id
		var id = $(this).attr('href');

		// target element
		var $id = $(id);
		if ($id.length === 0) {
			return;
		}
		// prevent standard hash navigation (avoid blinking in IE)
		// e.preventDefault();

		// top position relative to the document
		var pos = $(id).offset().top - 100;

		// animated top scrolling
		$('body, html').animate({
			scrollTop: pos
		});
	});
});
