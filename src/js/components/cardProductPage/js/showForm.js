export function showForm(type = '') {
	const $el = document.querySelector('#regulate-form-and-statistics-js')

	$el.classList.add('show-form')
	$el.classList.remove('gratitude-form')

	if(type === 'cancel') {
		$el.classList.remove('show-form')
	}
	if (type === 'send') {
		$el.classList.add('gratitude-form')
		$el.classList.remove('show-form')
	}
}