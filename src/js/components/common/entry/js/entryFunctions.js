import {Entry} from '../entry'

export function entryFunctions() {
	const $button = document.querySelector('#entry-registration-button-js')
	$button.addEventListener('click', test)
}

function test() {
	const test = new Entry()
	const $body = document.querySelector('body')

	$body.insertAdjacentHTML('afterbegin', test.toHTML());

	const $mainElement = document.querySelector('#Entry-js')
	$mainElement.addEventListener('click', eventEntry)

	function eventEntry(event) {
		const $el = event.target

		if($el.closest('#sign-up-js')){
			$mainElement.remove()
			$body.insertAdjacentHTML('afterbegin', test.toRegistration());
		}
	}
}

