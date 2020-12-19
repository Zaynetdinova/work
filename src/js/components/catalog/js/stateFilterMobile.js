export function stateFilterMobile(type) {
	const elem = document.querySelector('#mobile-filter-js')
	if(type === 'close') {
		elem.classList.remove('Com-disp-block')
		document.body.classList.remove('Com-over-hidden')
	} else {
		elem.classList.add('Com-disp-block')
		document.body.classList.add('Com-over-hidden')
	}
}