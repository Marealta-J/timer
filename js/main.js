// Определяем действующие элементы на странице
const day = document.querySelector('#day');
const hour = document.querySelector('#hour');
const minut = document.querySelector('#minut');
const second = document.querySelector('#second');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minuts = document.querySelector('#minuts');
const seconds = document.querySelector('#seconds');

// Делаем расчеты
const currentYear = new Date().getFullYear(); // Текущий год
const nextDate = new Date(`April 17 ${currentYear} 05:32:30`);

function updateCounter() {
	const currentTime = new Date(); //Определение текущей даты
	const diff = nextDate - currentTime; //Разница между текущей датой и следующей
	
	function declensionNum(num, words) {
		return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	  }

	// Перевод в дни
	const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
	// Перевод в часы
	const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
	// Перевод в минуты
	const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
	// Перевод в минуты
	const secondsLeft = Math.floor(diff / 1000) % 60;

	// Вывод оставшегося времени на страницу
	day.innerText = daysLeft;
	hour.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
	minut.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	second.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
	days.innerHTML = declensionNum(daysLeft, ['день', 'дня', 'дней']);
	hours.innerHTML = declensionNum(hoursLeft, ['час', 'часа', 'часов']);
	minuts.innerHTML = declensionNum(minutesLeft, ['минута', 'минуты', 'минут']);
	seconds.innerHTML = declensionNum(secondsLeft, ['секунда', 'секунды', 'секунд']);

	// Остановка таймера по истечении времени
	if (diff <= 0) {
		clearInterval(time);
		day.innerText = '00';
		hour.innerText = '00';
		minut.innerText = '00';
		second.innerText = '00';
	}
}
updateCounter()
// Запускаем расчет 1 раз в секунду (каждую секунду)
time = setInterval(updateCounter, 1000);

