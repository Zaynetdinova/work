import arrow from "../../../images/icons/arrow5.svg"

import {selectFilterPopularMobileTemplate} from '../../components/catalog/view/selectFilterPopularMobile'
import {selectChoicePhoneType} from '../../components/common/selectChoicePhoneType'
import {selectOrganizationType} from '../../components/common/selectOrganizationType'

const getTemplate = (data = [], placeholder, originalText, selectedId, type = '') => {
	let text = placeholder ?? 'Placeholder по умолчанию'
	let mainText = originalText ?? 'На странице'
	const items = data.map(item => {
		return `
				<article data-type="item" data-id="${item.id}" class="select-item">
					${item.value} 
				</article>
				<div class="select-line"></div>
    `
	})

  // переделать
	switch (type) {
		case 'numberOfItemsPerPage':
			return defaultTemplate(items, text, mainText)
			break;
		case 'selectFilterPopularMobile':
			return selectFilterPopularMobileTemplate(items, text)
			break;
		case 'select-phone-type':
      		return selectChoicePhoneType(data, text)
			break;
		case 'form-organization-select-js':
			return selectOrganizationType(items, text)
			break;
	}

	function defaultTemplate(items, text, mainText) {
		return `
			<div class="wrapper-select">
				<article data-type="input" class="input-selected-item">
					<div class="title" >${mainText}</div>
					<div class="arrow-wrapper">
						<img class="arrow" src="${arrow}" alt="">      
						<span data-type="value" class="value">${text}</span>
					</div>
				</article>
				<div class="popup-selected-items">  ${items.join('')}</div>        
			</div> 
  `
	}
}



export class Select {
	constructor(selector, options) {
		this.$el = document.querySelector(selector)
		this.options = options
		this.selectedId = options.selectedId

		this.render()
		this.setup()
	}

	render() {
		const {placeholder, originalText, data, type} = this.options
		this.$el.classList.add('select')
		this.$el.innerHTML = getTemplate(data, placeholder, originalText,  this.selectedId, type)

	}

	setup() {
		this.clickHandler = this.clickHandler.bind(this)
		this.$el.addEventListener('click', this.clickHandler)
		this.$value = this.$el.querySelector('[data-type="value"]')
	}



	clickHandler(event) {
		if(event.target.closest('article')) {
			const element = event.target.closest('article')
			const {type} = element.dataset

			switch (type) {
				case 'input':
					this.toggle()
					break;
				case 'item':
					const id = event.target.dataset.id
					this.select(id)
					break;
				case 'input-item':
					this.inputSelect(element)
					break;
			}
		}
	}

	get isOpen() {
		return this.$el.classList.contains('open')
	}

	get current() {
		return this.options.data.find(item => item.id === this.selectedId)
	}

	inputSelect(element) {
		this.selectedId = element.dataset.id
		this.$value.innerHTML = `
			<span data-type="value" class="value">
				<img src="${this.current.value}" alt="">
			</span>
		`


		this.options.onSelect ? this.options.onSelect(this.current) : null
		this.close()

	}

	select(id) {
		this.selectedId = id
		this.$value.textContent = this.current.value

		this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
			el.classList.remove('selected')
		})
		this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

		this.options.onSelect ? this.options.onSelect(this.current) : null

		this.close()
	}

	toggle() {
		this.isOpen ? this.close() : this.open()
	}

	open() {
		this.$el.classList.add('open')
	}

	close() {
		this.$el.classList.remove('open')
	}

	destroy() {
		this.$el.removeEventListener('click', this.clickHandler)
		this.$el.innerHTML = ''
	}
}
