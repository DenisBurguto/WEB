const menuActive = document.querySelector('.menu_active'); // Находим меню
const burger = document.querySelector('.burger'); // Находим кнопку бургера

function toggleMenu() {
	menuActive.classList.toggle('hidden'); //Ф-ция удаляет или устанавливает класс с названием 'hidden' в div с классом .menu-active
}

burger.addEventListener('click', toggleMenu); // По клику на бургер срабатывает ф-ция
