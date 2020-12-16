export function updateSelectedFilters(arrSelected) {
	const $elem = document.querySelector('#selected-filters-js')
	const choiceFilters = arrSelected.map((item) => {
		return `
		<div class="choice-filter">
			<div class="text">${item.text}</div>
			<article id="delete-filter-js" data-_id="${item.id}" class="close">+</article>
		</div>
	`
	}).join('')

	$elem.innerHTML = `
			${choiceFilters}
	`
}