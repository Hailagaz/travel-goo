// $('.num').countTo({
// 	from: 0,
// 	speed: 100,
// 	refreshInterval: 1,
// 	formatter: function (value, options) {
// 		return value.toFixed(options.decimals);
// 	}
// });



const time = 10000;
const step = 1;

function outNum(num, elem) {
  let e = document.querySelector("#num");
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}

outNum(15, "#num");