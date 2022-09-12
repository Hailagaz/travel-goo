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

			
		})
		.catch((error) => {
			document.querySelector('.swiper').innerHTML = '<p>Sorry, we have some problems. We will fix them soon.</p>';
		});
});