export function openForm(element) {
	if(element.closest('form')) {
		const $el = element.closest('form')
		$el.classList.toggle('open-form')
	}
}