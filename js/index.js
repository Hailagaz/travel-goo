document.addEventListener("DOMContentLoaded", () => {
	if (window.location.hash) {
		document.querySelector(window.location.hash).scrollIntoView();
	}

	fetch("js/testimonials.json")
		.then((response) => response.json())
		.then((data) => {
			let slides = '';

			for (let testimonial of data) {
				slides += `
					<div class="swiper-slide testimonials__slide">
						<img class="swiper-location testimonials__location" 
							src="${testimonial.location}" 
							alt="Location where commentator made photo">

						<div class="swiper-info testimonials__info">
							<img class="swiper-photo testimonials__photo" 
								src="${testimonial.photo}" 
								alt="Photo of commentator">

							<div class="swiper-testimonial testimonials__testimonial">
								<p>${testimonial.testimonial}</p>
							</div>
							<div class="swiper-name testimonials__name">
								<p>-${testimonial.name}</p>
							</div>
						</div>
					</div>
				`;
			}

			document.querySelector('.swiper').innerHTML = `
				<div class="swiper-wrapper testimonials__wrapper">
    				${slides}
  				</div>

  				<div class="swiper-pagination"></div>

  				<div class="swiper-button-prev"></div>
  				<div class="swiper-button-next"></div>
			`;

			const swiper = new Swiper('.swiper', {
				loop: true,

				slidesPerView: 1.5,
				watchOverflow: true,
				spaceBetween: 30,
				slidesPerGroup: 1,
				centeredSlides: true,

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