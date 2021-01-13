export function popupSliderPhoto(type = '') {
	const $el = document.querySelector('.view-big-photos-popup-block')
	$el.classList.add('block')

	if(type === 'close') {
		$el.classList.remove('block')
	}
}