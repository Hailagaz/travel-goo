window.addEventListener("DOMContentLoaded",()=>{{const e=new IntersectionObserver((t,a)=>{t.forEach(t=>{if(t.isIntersecting){const e=new CountUp(t.target.id,0,t.target.dataset.num,0,t.target.dataset.duration||4,{separator:" ",prefix:t.target.dataset.prefix||"",suffix:t.target.dataset.suffix||""});e.start(()=>{t.target.parentElement.classList.add("statistics__block-count_done")}),a.unobserve(t.target)}})});return void document.querySelectorAll(".statistics__block-count span").forEach(t=>{e.observe(t)})}});
document.addEventListener("DOMContentLoaded",()=>{window.location.hash&&document.querySelector(window.location.hash).scrollIntoView(),fetch("js/testimonials.json").then(e=>e.json()).then(e=>{let i="";for(var s of e)i+=`
					<div class="swiper-slide testimonials__slide">
						<img class="swiper-location testimonials__location" 
							src="${s.location}" 
							alt="Location where commentator made photo">

						<div class="swiper-info testimonials__info">
							<img class="swiper-photo testimonials__photo" 
								src="${s.photo}" 
								alt="Photo of commentator">

							<div class="swiper-testimonial testimonials__testimonial">
								<p>${s.testimonial}</p>
							</div>
							<div class="swiper-name testimonials__name">
								<p>-${s.name}</p>
							</div>
						</div>
					</div>
				`;document.querySelector(".swiper").innerHTML=`
				<div class="swiper-wrapper testimonials__wrapper">
    				${i}
  				</div>

  				<div class="swiper-pagination"></div>

  				// <div class="swiper-button-prev"></div>
  				// <div class="swiper-button-next"></div>
			`;new Swiper(".swiper",{loop:!0,slidesPerView:1.5,watchOverflow:!0,spaceBetween:30,slidesPerGroup:1,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0}})}).catch(e=>{document.querySelector(".swiper").innerHTML="<p>Sorry, we have some problems. We will fix them soon.</p>"})});