document.addEventListener("DOMContentLoaded", () => {
	if(window.location.hash) {
        document.querySelector(window.location.hash).scrollIntoView();
    }

	fetch("js/testimonials.json")
		.then((response) => response.json())
		.then((data) => {
			let slides = '';

			for (let testimonial of data) {
				slides += ``; 
			}

			document.querySelector('.swiper').innerHTML = ``;

			const swiper = new Swiper('.swiper', {
				loop: true,
				slidesPerView: 1.5,
				spaceBetween: 30,

				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		})
		.catch((error) => {
			document.querySelector('.swiper').innerHTML = '<p>Sorry, we have some problems. We will fix them soon.</p>';
		});
});