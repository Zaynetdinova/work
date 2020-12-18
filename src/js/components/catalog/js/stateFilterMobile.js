export function stateFilterMobile(type) {
	const elem = document.querySelector('#mobile-filter-js')
	if(type === 'close') {
		elem.classList.remove('Com-disp-block')
	} else {
		elem.classList.add('Com-disp-block')
	}
}