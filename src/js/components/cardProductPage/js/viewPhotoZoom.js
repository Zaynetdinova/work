export function viewPhotoZoom() {
	const $el = document.querySelectorAll('.test')
	const $img = document.querySelectorAll('.test-img')

	$el.forEach((item) => {
		item.addEventListener('mousemove', moveZoom)
	})


console.log($img)
	function moveZoom(event) {
		// посмотреть clientX и offsetX
		const test = event.target.closest('div')
		const bounds = test.getBoundingClientRect();
		const x = event.clientX - bounds.left;
		const y = event.clientY - bounds.top;

		$img.forEach((item) => {
			item.setAttribute("style", `top: -${y}px; left: -${x}px;`);
		})

	}
}

