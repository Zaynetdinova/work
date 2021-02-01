
export function deliveryPage(e) {
	const $el = e.target
	if($el.closest('[data-open-section-js]')){
		const $thisTitle = 	$el.closest('[data-open-section-js]')

		const $parent = $thisTitle.closest('[data-parent-delivery-block-js]')
		const $content = $parent.querySelector('[data-content-js]')
		$content.classList.toggle('show-content')
	}
}