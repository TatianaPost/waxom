'use stict'
let
	tabItem 	= document.querySelectorAll(".tab-item"),
	tabCont 	= document.querySelectorAll(".tab"),
	tabName		= 'tab-1',
	buttons 	= document.querySelectorAll(".portfolio__button"),
	cardsHidden = document.querySelectorAll(".tab__card.is-hidden");

(function tabs() {
	tabItem.forEach( item => {
		item.addEventListener("click", selectTabItem);
	});

	function selectTabItem() {
		tabItem.forEach(item => {
			item.classList.remove("is-active");
		})
		this.classList.add("is-active");
		tabName = this.dataset.tabName;

		selectTabContent();
	}

	function selectTabContent() {
		tabCont.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add("is-active") : item.classList.remove("is-active");
		});
	}
})();

(function showMore() {
	buttons.forEach(item => {
		item.addEventListener("click", show);
	});

	function show() {
		document.querySelectorAll(`.${tabName} .tab__card.is-hidden`).forEach(item => {
			item.classList.remove("is-hidden");
		});

		this.style.display = "none";
	}
})();