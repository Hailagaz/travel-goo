let valueDisplays=document.querySelectorAll(".statNum"),interval=5e3;valueDisplays.forEach(t=>{let e=0,a=parseInt(t.getAttribute("data-val"));var l=Math.floor(interval/a);let r=setInterval(function(){e+=1,(t.textContent=e)==a&&clearInterval(r)},l)});
document.addEventListener("DOMContentLoaded",()=>{window.location.hash&&document.querySelector(window.location.hash).scrollIntoView();const e=document.querySelectorAll(".header__link[data-goto]");function t(e){var t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const o=document.querySelector(t.dataset.goto);t=o.getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight;window.scrollTo({top:t,behavior:"smooth"}),e.preventDefault()}menu.classList.toggle("active"),menuBtn.classList.toggle("active")}0<e.length&&e.forEach(e=>{e.addEventListener("click",t)}),fetch("js/testimonials.json").then(e=>e.json()).then(e=>{let t="";for(var o of e)t+=`
					<div class="swiper-slide testimonials__slide">
						<img class="swiper-location testimonials__location" 
							src="${o.location}" 
							alt="Location where commentator made photo">

						<div class="swiper-info testimonials__info">
							<img class="swiper-photo testimonials__photo" 
								src="${o.photo}" 
								alt="Photo of commentator">

							<div class="swiper-testimonial testimonials__testimonial">
								<p>${o.testimonial}</p>
							</div>
							<div class="swiper-name testimonials__name">
								<p>-${o.name}</p>
							</div>
						</div>
					</div>
				`;document.querySelector(".swiper").innerHTML=`
				<div class="swiper-wrapper testimonials__wrapper">
    				${t}
  				</div>
				  <!--  -->
  				<!-- <div class="swiper-pagination"></div> -->

  				<!-- <div class="swiper-button-prev"></div> -->
  				<!-- <div class="swiper-button-next"></div> -->
			`;new Swiper(".swiper",{loop:!0,slidesPerView:1.5,watchOverflow:!0,spaceBetween:125,slidesPerGroup:1,centeredSlides:!0,effect:"coverflow",coverflowEffect:{rotate:0,slideShadows:!1,scale:.8},slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},breakpoints:{320:{slidesPerView:1,spaceBetween:25},1024:{slidesPerView:1.5,spaceBetween:125}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}).catch(e=>{document.querySelector(".swiper").innerHTML="<p>Sorry, we have some problems. We will fix them soon.</p>"});const o=document.querySelector(".header__icon");if(o){const i=document.querySelector(".header__nav");o.addEventListener("click",function(e){document.body.classList.toggle("_lock"),o.classList.toggle("_active"),i.classList.toggle("_active")})}});