import {entryTemplate} from './view/entry.template'
import {registrationTemplate} from './view/registration.template'
import {restorePassword} from './view/restorePassword'
import {indexTemplate} from './index.template'
import {buyForMeTemplate} from './view/buyForMe.template'
import {buyForSaleTemplate} from './view/buyForSale.template'
import {Select} from '../../../core/JS/selectPlugin'

export class Entry {

	constructor() {
		this.$body = document.querySelector('body')
		this.$wrapper = null
	}

	afterInitialization() {
		this.$wrapper = document.querySelector('#Entry-js')
		this.$wrapper.addEventListener('click', (event) => this.handleClick(event))

		this.passwordEye()
		this.select()
	}

	init() {
		const $button = document.querySelector('#entry-registration-button-js')
		//mobile
		const $buttonMobile = document.querySelector('#enter-button-js')
		if($buttonMobile) {
			$buttonMobile.addEventListener('click', () => this.addElement(this.toEntry()))
		}
		$button.addEventListener('click', () => this.addElement(this.toEntry()))
	}

	addElement($el) {
		this.closeEntry()
		this.$body.style = 'overflow: hidden'
		this.$body.insertAdjacentHTML('afterbegin', indexTemplate($el));
		this.afterInitialization()
	}

	handleClick(event) {
		const clickElem = event.target

		if(clickElem.closest('#close-entry-registration-js')) {
			this.closeEntry()
		}

		if(clickElem.closest('#sign-up-js')) {
			this.addElement(this.toRegistration())
		}

		if(clickElem.closest('#restore-password-button-js')) {
			this.addElement(this.toRestorePassword())
			this.controlBack('password-className-js')
		}

		if(clickElem.closest('#buy-for-me-js')) {
			this.addElement(this.toBuyForMe())
			this.controlStylingWrapper()
			this.controlBack('restore-className-js')
		}

		if(clickElem.closest('#buy-for-sale-js')) {
			this.addElement(this.toBuyForSale())
			this.controlStylingWrapper()
			this.controlBack('restore-className-js')
		}

		//back
		if(clickElem.closest('.password-className-js')) {
			this.addElement(this.toEntry())
		}

		if(clickElem.closest('.restore-className-js')) {
			this.addElement(this.toRegistration())
		}
	}

	controlBack(className) {
		const backButton = document.querySelector('#back-js')
		backButton.classList.add(`block`)
		backButton.classList.add(`${className}`)

	}

	controlStylingWrapper() {
		const test = document.querySelector('#entry-wrapper-js')
		test.classList.remove('wrapper-Entry')
		test.classList.add('wrapper-buyForMe')
	}

	closeEntry() {
		this.$body.style = 'overflow: auto'
		const $wrapper = document.querySelector('#Entry-js')
		if($wrapper) {
			$wrapper.remove()
		}
	}

	passwordEye() {
		const eye = this.$wrapper.querySelectorAll('.password-control')

		eye.forEach((item) => {
			item.addEventListener('click', () => {
				const $parent = item.closest('[data-input-password-js]')
				const input = $parent.querySelector('#password-input');
				if (input.getAttribute('type') === 'password') {
					item.classList.add('view');
					input.setAttribute('type', 'text');
				} else {
					item.classList.remove('view');
					input.setAttribute('type', 'password');
				}
				return false;
			})
		})
	}

	select() {
		new Select('#select-test', {
			originalText: 'Форма собственности*',
			// selectedId: '2',
			placeholder: 'Форма собственности*',
			type: 'test',
			data: [
				{id: '1', value: 'ИП'},
				{id: '2', value: 'ООО'},
				{id: '3', value: 'ЗАО'},
			],
			onSelect(item) {
				console.log('Selected Item', item)
			}
		})

		new Select('#select-phone-registration-js', {
			placeholder: 'Телефон*',
			type: 'input',
			data: [
				{id: '1', value: 'ИП'},
				{id: '2', value: 'ООО'},
				{id: '3', value: 'ЗАО'},
			],
			onSelect(item) {
				console.log('Selected Item', item)
			}
		})
	}

	// шаблоны
	toEntry() {
		return entryTemplate()
	}

	toRegistration() {
		return registrationTemplate()
	}

	toRestorePassword() {
		return restorePassword()
	}

	toBuyForMe() {
		return buyForMeTemplate()
	}

	toBuyForSale() {
		return buyForSaleTemplate()
	}
}