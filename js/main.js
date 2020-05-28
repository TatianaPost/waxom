// Видео
let
	video = document.querySelector(".presentation__video"),
	button = document.querySelector(".presentation__play"),
	description = document.querySelector(".presentation__description");

button.addEventListener("click", function play() {
	description.classList.add("is-hidden");

	video.paused ? video.play() : video.pause();

	button.removeEventListener("click", play);

	video.controls = true;
});


// Цифры
let counters = document.querySelectorAll(".count__counter"),
	maxCount = [],
	curCount = [0, 0, 0, 0, 0];

counters.forEach(item => {
	maxCount.push(item.dataset.maxCount);
});

window.addEventListener("scroll", function a() {
	if (window.pageYOffset > 4065) {
		setInterval(function () {
			for (let i = 0; i < counters.length; i++) {
				if (+counters[i].textContent < maxCount[i]) {
					counters[i].textContent = curCount[i] += Math.round(maxCount[i] * 5 / 1000);
				} else {
					counters[i].textContent = maxCount[i];
				}
			}
		}, 1);
		window.removeEventListener("scroll", a);
	}
});

// Скролл
let up = false,
	lastOffset = 0,
	curOffset = 0,
	clipAnim = document.querySelector(".clip-anim");

window.addEventListener("scroll", function a() {
	lastOffset = curOffset;
	curOffset = window.pageYOffset;

	up = curOffset - lastOffset < 0 ? true : false;
	if (window.innerWidth > 767) {
		if (window.pageYOffset > 100 & up) {
			clipAnim.style.cssText = "display: block; animation: clip-nav__down 0.6s 1;";
		} else if (clipAnim.style.display == "block" & !up || window.pageYOffset <= 100) {
			clipAnim.style.animation = "clip-nav__up 0.6s 1";
			setTimeout(() => {
				clipAnim.style.display = "none";
			}, 500);
		}
	}

});
// Уменьшаем свг
if (window.innerWidth < 767) {
	document.querySelector(".presentation__play .svg").setAttribute("viewBox", "0 0 70 70");
}

// Мобильное меню
let
	openButton = document.querySelector(".burger-menu__burger"),
	closeButton = document.querySelector(".menu__burger-close"),
	menu = document.querySelector(".menu"),
	menuContent = document.querySelector(".menu__content"),
	menuButtons = document.querySelectorAll(".menu__li");

openButton.addEventListener("click", function () {
	menuContent.style.animation = "to-left 0.7s 1 ease";
	menu.style.display = "flex";
});
closeButton.addEventListener("click", function () {
	menuContent.style.animation = "to-right 0.7s 1 ease";
	setTimeout(function () {
		menu.style.display = "none";
	}, 600);
});
menuButtons.forEach(item => {
	item.addEventListener("click", function () {
		menuContent.style.animation = "to-right 0.7s 1 ease";
		setTimeout(function () {
			menu.style.display = "none";
		}, 600);
	});
});