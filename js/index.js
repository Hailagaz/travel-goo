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
					<div class="swiper-slide">
						<img class="swiper-location" 
							src="${testimonial.location}" 
							alt="Location where commentator made photo">

						<div class="swiper-info">
							<img class="swiper-photo" 
								src="${testimonial.photo}" 
								alt="Photo of commentator">

							<div class="swiper-testimonial">
								<p>${testimonial.testimonial}</p>
							</div>
							<div class="swiper-name">
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