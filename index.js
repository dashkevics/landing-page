const scroll = () => {
	const parallax = document.querySelector('.parallax');

	let contact = document.getElementById('contact');
	let contactPoint = contact.offsetTop / 2;
	let about = document.getElementById('about');
	let aboutPoint = about.offsetTop / 2;

	let scrollPos = parallax.addEventListener('scroll', function(ev){
		let a = ev.target.scrollTop;
		if (a >= contactPoint) {
			contact.classList.remove('animate__fadeOut');
			contact.classList.add('animate__fadeInRight');
		};

		if (a >= aboutPoint) {
			about.classList.remove('animate__fadeOut');
			about.classList.add('animate__fadeInLeft');
		};
	});
}

scroll();