export function infoTable(e) {
	if(e.target.dataset.buttonName) {
		const buttonType = e.target.dataset.buttonName
		const $size = e.target.closest('[data-size]')
		const count = $size.querySelector('.input-count-js')

		count.value = changeCount(count.value, buttonType)
	}
}

function changeCount(valueCount, buttonType) {
	if(buttonType == 'plus') {
		return +valueCount + 1

	} else {
		if(valueCount == 0) {
			return 0
		}
		return +valueCount - 1
	}
}