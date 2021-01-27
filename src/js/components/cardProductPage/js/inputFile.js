export function inputFile() {
	// ************************ Drag and drop ***************** //
	let dropArea = document.getElementById("drop-area-js")
	const fileElem = document.querySelector('#fileElem')

// Prevent default drag behaviors
	;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
		dropArea.addEventListener(eventName, preventDefaults, false)
		document.body.addEventListener(eventName, preventDefaults, false)
	})

// Highlight drop area when item is dragged over it
	;['dragenter', 'dragover'].forEach(eventName => {
		dropArea.addEventListener(eventName, highlight, false)
	})

	;['dragleave', 'drop'].forEach(eventName => {
		dropArea.addEventListener(eventName, unhighlight, false)
	})

// Handle dropped files
	dropArea.addEventListener('drop', handleDrop, false)

	function preventDefaults (e) {
		e.preventDefault()
		e.stopPropagation()
	}

	function highlight(e) {
		dropArea.classList.add('highlight')
	}

	function unhighlight(e) {
		dropArea.classList.remove('highlight')
	}



	fileElem.addEventListener('change', (e) => {
		handleFiles(e.target.files)
	})

	function handleDrop(e) {
		let dt = e.dataTransfer
		let files = dt.files
		handleFiles(files)
	}

	function handleFiles(files) {
		const $rootEl = document.querySelector('#file-name')
		$rootEl.innerHTML = ''
		Array.from(files).forEach(file => {
			let $el = document.createElement('div')
			$el.innerHTML = file.name
			$rootEl.appendChild($el)
		});
	}
}