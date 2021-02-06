export function mobileSearchInput(e, element, type = '') {
	if(type === 'click') {
		element.classList.add('input-header-active')
		return
	}

	const deleteValue = document.querySelector('#mobile-search-delete-js')
	const input = document.querySelector('#mobile-search-input-js')
	const result = document.querySelector('#mobile-search-result')
	deleteValue.classList.add('Com-display-block')
	result.classList.add('Com-display-block')

	if(e.target.value === '') {
		deleteValue.classList.remove('Com-display-block')
		result.classList.remove('Com-display-block')
	}

	deleteValue.addEventListener('click', () => {
		input.value = ''
		if(input.value === '') {
			deleteValue.classList.remove('Com-display-block')
			result.classList.remove('Com-display-block')
		}
	})
}