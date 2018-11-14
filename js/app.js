$(document).ready(function () {
	
	// scroll reveal
	// window.sr = new scrollReveal();
	ScrollReveal().reveal('.left-in', {
		duration: 2000,
		origin: 'left',
		distance: '30px',
		reset: true
	}, 500);

	ScrollReveal().reveal('.bottom-in', {
		duration: 2000,
		interval: 200,
		origin: 'bottom',
		distance: '10px',
		reset: true,
		delay: 240
	});

	ScrollReveal().reveal('.right-in', {
		duration: 2000,
		origin: 'right',
		distance: '30px',
		reset: true
	});
	// sr.reveal('.right-in');
});
