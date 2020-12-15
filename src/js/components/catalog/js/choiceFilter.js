export function choiceFilter(e, element) {
	const parent = element.closest('#parents-filter-js')
	parent.classList.toggle('open-category-filter')
}