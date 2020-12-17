export function stateNumberOfCardsPerPage(element) {
	const parentElement = element.closest('div')
	parentElement.classList.toggle('show-number-of-cards-page')
}