export function closeWhenClickingInAnInactiveZone() {
	const inputSearch = document.querySelector('#desktop-search-js')

	document.body.addEventListener('click', (e) => {
		let article = e.target.closest('article');
		if (!article) {
			inputSearch.classList.remove('input-header-active')
		};

	})
}