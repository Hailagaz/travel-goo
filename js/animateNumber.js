// window.addEventListener('DOMContentLoaded', () => {

// 	const countNums = () => { // объявляем функцию, чтобы всё, что относится к анимированию чисел было в одном месте
// 		const numbersObserver = new IntersectionObserver((entries, observer) => { // создаём наблюдатель за элементами, в которых будем увеличивать значение числа
// 			entries.forEach(entry => { // для каждого наблюдаемого элемента
// 				if (entry.isIntersecting) { // проверяем, находится ли он в видимой области браузера
// 					const count = new CountUp( // настраиваем новую анимацию для числа
// 						entry.target.id, // 1. задаём идентификатор элемента с числом
// 						0, // 2. задаём начальное число
// 						entry.target.dataset.num, // 3. задаём конечное число (берем из data-атрибута)
// 						0, // 4. задаём количество цифр после запятой
// 						entry.target.dataset.duration || 4, // 5. задаём продолжительность анимации в секундах (если у элемента есть атрибут data-duration, то берём из него значение, иначе назначаем 4 секунды по-умолчанию)
// 						{ // указываем дополнительные параметры
// 							separator: ' ', // задаём разделитель групп разрядов (например для миллиона - 1 000 000)
// 							prefix: entry.target.dataset.prefix || '', // задаём префикс - любые символы перед числом (берем значение из data-prefix, если не указано - то задаем пустую строку по умолчанию)
// 							suffix: entry.target.dataset.suffix || '' // задаём суффикс - любые символы после числа (берем значение из data-suffix, если не указано - то задаем пустую строку по умолчанию)
// 						}
// 					);
// 					count.start(() => { // запускаем настроенную анимацию и по окончании анимации...
// 						entry.target.parentElement.classList.add('statistics__block-count_done') // ...добавляем активный класс родительскому элементу
// 					})
// 					observer.unobserve(entry.target); // отключаем наблюдение за элементом
// 				}
// 			})
// 		});
// 		document.querySelectorAll('.statistics__block-count span').forEach(num => { // ищем элементы за которыми будем наблюдать, и для каждого...
// 			numbersObserver.observe(num) // ...запускаем наблюдение
// 		})
// 	}
// 	countNums() // запускаем объявленную функцию

// })

window.addEventListener('DOMContentLoaded', () => {
	function animateValue(obj, start, end, duration) {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			obj.innerHTML = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	const objYears = document.getElementById("valueYears");
	const objTravellers = document.getElementById("valueTravellers");
	const objPlaces = document.getElementById("valuePlaces");
	const objHistory = document.getElementById("valueHistory");

	animateValue(objYears, 0, dataset.num, 500);
	animateValue(objTravellers, 0, dataset.num, 5000);
	animateValue(objPlaces, 0, dataset.num, 2000);
	animateValue(objHistory, 0, dataset.num, 1000);
});



