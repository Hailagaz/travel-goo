let valueDisplays = document.querySelectorAll(".statNum");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
	let startValue = 0;
	let endValue = parseInt(valueDisplay.getAttribute("data-val"));
	let duration = Math.floor(interval / endValue);

	let counter = setInterval(function () {
		startValue += 1;
		valueDisplay.textContent = startValue;
		if (startValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});

// const statistic = document.querySelector('.statistics');
// window.addEventListener("scroll", function (e) {
// 	if (window.scrollY == statistic) {
		
// 	}
// });