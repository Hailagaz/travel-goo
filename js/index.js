document.addEventListener("DOMContentLoaded", () => {
	if (window.location.hash) {
		document.querySelector(window.location.hash).scrollIntoView();
	}

	
	//Scroll to
	const menuLinks = document.querySelectorAll('.header__link[data-goto]');
	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener("click", onMenuLinkClick);
		});

		function onMenuLinkClick(e) {
			const menuLink = e.target;
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				e.preventDefault();

			}

			menu.classList.toggle('active');
			menuBtn.classList.toggle('active');
		}
	}


	//Get data and build sliders structure
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
				  <!--  -->
  				<!-- <div class="swiper-pagination"></div> -->

  				<!-- <div class="swiper-button-prev"></div> -->
  				<!-- <div class="swiper-button-next"></div> -->
			`;

			const swiper = new Swiper('.swiper', {
				loop: true,

				slidesPerView: 1.5,
				watchOverflow: true,
				spaceBetween: 125,
				slidesPerGroup: 1,
				centeredSlides: true,

				effect: 'coverflow',
				coverflowEffect: {
					rotate: 0,
					slideShadows: false,
					scale: 0.8,
				},
				slideToClickedSlide: true,

				keyboard: {
					enabled: true,
					onlyInViewport: true,
					pageUpDown: true,
				},

				mousewheel: {
					sensitivity: 1,
					//eventTarget: ".testimonials__slider",
				},

				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 25,
					},
					1024: {
						slidesPerView: 1.5,
						spaceBetween: 125,
					}
				},

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



		//Burger menu
		const iconHeader = document.querySelector('.header__icon');
		if (iconHeader) {
			const navHeader = document.querySelector('.header__nav');
			iconHeader.addEventListener("click", function (event) {
				document.body.classList.toggle('_lock');
				iconHeader.classList.toggle('_active');
				navHeader.classList.toggle('_active');
			});
		}
});