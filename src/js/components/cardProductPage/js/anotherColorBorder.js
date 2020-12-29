export function anotherColorButton(e) {
	if(e.target.dataset.color) {
		document.querySelectorAll('.color-card-product-js').forEach((item) => {
			item.classList.remove('active-color')
		})
		const $el = e.target
		$el.classList.add('active-color')
	}
}