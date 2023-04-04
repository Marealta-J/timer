// Определяем действующие элементы на странице
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// Делаем расчеты
const currentYear = new Date().getFullYear(); // текущий год
const nextDate = new Date(`April 07 ${currentYear} 23:59:59`);

function updateCounter() {
	const currentTime = new Date(); //Определение текущей даты
	const diff = nextDate - currentTime; //Разница между текущей датой и следующей

	// Перевод в дни
	const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
	// Перевод в часы
	const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
	// Перевод в минуты
	const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
	// Перевод в минуты
	const secondsLeft = Math.floor(diff / 1000) % 60;

	// console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

	days.innerText = daysLeft;
	hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
	minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}
updateCounter()
// Запускаем расчет 1 раз в секунду (каждую секунду)
setInterval(updateCounter, 1000);
