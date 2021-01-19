import {entryTemplate} from './view/entry.template'
import {registrationTemplate} from './view/registration.template'
import {restorePassword} from './view/restorePassword'
import {indexTemplate} from './index.template'

export class Entry {

	showComponent(component) {
		return indexTemplate(component)
	}

	toEntry() {
		return entryTemplate()
	}

	toRegistration() {
		return registrationTemplate()
	}

	toRestorePassword() {
		return restorePassword()
	}

	addElement($el) {
		const $wrapper = document.querySelector('#Entry-js')
		if($wrapper) {
			$wrapper.remove()
		}
		const $body = document.querySelector('body')
		$body.insertAdjacentHTML('afterbegin', indexTemplate($el));
		this.afterInitialization()
	}

	handleClick(event) {
		this.addElement(this.toRegistration())
	}

	afterInitialization() {
		const $wrapper = document.querySelector('#Entry-js')
		$wrapper.addEventListener('click', (event) => this.handleClick(event))
	}

	init() {
		const $button = document.querySelector('#entry-registration-button-js')
		$button.addEventListener('click', () => this.addElement(this.toEntry()))
	}
}