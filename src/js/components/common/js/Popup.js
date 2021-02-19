import {passwordEye} from '../../../core/utils/utils'
import {SendForm} from './SendForm'

export class Popup {
	constructor(template) {
		this.$body = document.querySelector('body')
		this.$wrapper = null
		this.template = template
		this.sendForm = new SendForm()

	}

	afterInitialization(context) {
		this.$wrapper = document.querySelector('#Entry-js')
		this.$wrapper.style.top = `${window.pageYOffset}px`
		this.$wrapper.addEventListener('click', (event) => context.handleClick(event))
		passwordEye(this.$wrapper)
		this.sendForm.init(this.$wrapper)
	}

	addElement($el, context) {
		this.closeEntry()
		this.$body.style = 'overflow: hidden'
		this.$body.insertAdjacentHTML('afterbegin', this.template($el));
		this.afterInitialization(context)
	}

	closeEntry() {
		this.$body.style = 'overflow: auto'
		const $wrapper = document.querySelector('#Entry-js')
		if($wrapper) {
			$wrapper.remove()
		}
	}
}