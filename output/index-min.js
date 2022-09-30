let valueDisplays=document.querySelectorAll(".statNum"),interval=5e3;valueDisplays.forEach(t=>{let e=0,l=parseInt(t.getAttribute("data-val"));var a=Math.floor(interval/l);let n=setInterval(function(){e+=1,(t.textContent=e)==l&&clearInterval(n)},a)});const statistic=document.querySelector(".statistics");window.addEventListener("scroll",function(t){window.scrollY,statistic});
document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".authorize__file-input");Array.prototype.forEach.call(e,function(e){var n=e.nextElementSibling,i=n.innerHTML;e.addEventListener("change",function(e){console.log(this.files);var t="";(t=this.files&&1<this.files.length?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):this.files[0].name)?n.querySelector("span").innerHTML=t:n.innerHTML=i})})});
document.addEventListener("DOMContentLoaded",()=>{window.location.hash&&document.querySelector(window.location.hash).scrollIntoView(),fetch("js/testimonials.json").then(e=>e.json()).then(e=>{let t="";for(var o of e)t+=`
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
			`;new Swiper(".swiper",{loop:!0,slidesPerView:1.5,watchOverflow:!0,spaceBetween:125,slidesPerGroup:1,centeredSlides:!0,effect:"coverflow",coverflowEffect:{rotate:0,slideShadows:!1,scale:.8},slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},breakpoints:{320:{slidesPerView:1,spaceBetween:25},768:{slidesPerView:1.5,spaceBetween:125},1920:{slidesPerView:1.7},2300:{slidesPerView:2},2700:{slidesPerView:2.5},3400:{slidesPerView:3}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}).catch(e=>{document.querySelector(".swiper").innerHTML="<p>Sorry, we have some problems. We will fix them soon.</p>"});const i=document.querySelector(".header__icon"),s=document.querySelector(".header__nav"),e=(i&&i.addEventListener("click",function(e){document.body.classList.toggle("_lock"),i.classList.toggle("_active"),s.classList.toggle("_active")}),document.querySelectorAll(".header__link[data-goto]"));function t(e){var t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const o=document.querySelector(t.dataset.goto);t=o.getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight;i.classList.contains("_active")&&(document.body.classList.remove("_lock"),i.classList.remove("_active"),s.classList.remove("_active")),window.scrollTo({top:t,behavior:"smooth"}),e.preventDefault()}}0<e.length&&e.forEach(e=>{e.addEventListener("click",t)});const o=document.querySelector(".showbutton");window.addEventListener("scroll",function(e){700<window.scrollY?o.classList.remove("showbutton__hidden"):window.scrollY<700&&o.classList.add("showbutton__hidden")}),o.addEventListener("click",function(e){window.scrollTo(0,0)})});