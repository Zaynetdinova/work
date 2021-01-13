export function viewPhotoZoom() {
	const $zoomContent = document.querySelector('#zoom-photo-js')

	$zoomContent.addEventListener('mousemove', moveZoom)

	function moveZoom(event) {
		const imgWrapper = event.target.closest('[data-zoom-js]')
		const $img = imgWrapper.querySelector('.zoom-img-js')
		const bounds = imgWrapper.getBoundingClientRect();
		const x = event.clientX - bounds.left;
		const y = event.clientY - bounds.top;
		$img.setAttribute("style", `top: -${y}px; left: -${x}px;`);
	}


}

