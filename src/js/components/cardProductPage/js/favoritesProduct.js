export function favoritesProduct(element) {
	element.classList.toggle('favorite-product-active')
	let elem = document.getElementById('elem');
	if (elem.textContent === 'Добавить в избранное') {
		elem.textContent = 'Убрать из избранного';
	} else {
		elem.textContent = 'Добавить в избранное';
	}
}

