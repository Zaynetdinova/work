export class UserAgent {
	constructor() {
		this.OSName = 'Unknown'
	}

	operatingSystemDetection() {
		if (window.navigator.userAgent.indexOf("Mac") != -1) {
			this.actionsForApple()
		} else {
			console.log('windows')
		}
	}

	actionsForApple() {
		const $el = document.querySelector('#style-for-apple-js')
		$el.classList.add('style-apple-padding')
	}

	actionsForAll() {

	}
}