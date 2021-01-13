export function showForm(type = '') {
	const $el = document.querySelector('#regulate-form-and-statistics-js')

	$el.classList.add('show-form')

	if(type === 'cancel') {
		$el.classList.remove('show-form')
	}
}