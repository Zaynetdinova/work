export function filterBy(element) {
	const parentElement = element.closest('div')
	parentElement.classList.toggle('show-filter-by')
}