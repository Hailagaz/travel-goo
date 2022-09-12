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
					<div class="swiper__slide">
						<img class="swiper__location" 
							src="${testimonial.location}" 
							alt="Location where commentator made photo">

						<div class="swiper__info">
							<img class="swiper__photo" 
								src="${testimonial.photo}" 
								alt="Photo of commentator">

							<div class="swiper__testimonial">
								<p>${testimonial.testimonial}</p>
							</div>
							<div class="swiper__name">
								<p>-${testimonial.name}</p>
							</div>
						</div>
					</div>
				`;
			}

			document.querySelector('.swiper').innerHTML = `
				<div class="swiper-wrapper">
    				${slides}
  				</div>

  				<div class="swiper-pagination"></div>

  				<div class="swiper-button-prev"></div>
  				<div class="swiper-button-next"></div>
			`;

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