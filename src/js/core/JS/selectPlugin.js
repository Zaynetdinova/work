import arrow from "../../../images/icons/arrow2.svg"
import {popupPhone} from '../../components/common/entry/view/popupPhone'
import Inputmask from "inputmask";

const getTemplate = (data = [], placeholder, originalText, selectedId, type = '') => {
	let text = placeholder ?? 'Placeholder по умолчанию'
	let mainText = originalText ?? 'На странице'
	const items = data.map(item => {
		// let cls = ''
		// if (item.id === selectedId) {
		// 	text = item.value
		// 	cls = 'selected'
		// }
		return `
				<article data-type="item" data-id="${item.id}" class="select-item">
					${item.value} 
				</article>
    `
	})

	if(type === 'test') {
		return test(items, text)
	} else if(type === 'input') {
		return inputSelectedItem(data, text)
	} else {
		return defaultSelectedItem(items, text, mainText)
	}



}

function inputSelectedItem(data, text) {

	return `
    <div class="wrapper-select wrapper-select-input">
    
   		<div class="input-selected-item">
				<input class="input-name test-mask" placeholder="Телефон*">
				<article data-type="input" class="arrow-wrapper">
					<img class="arrow" src="${arrow}" alt="">      
					<span data-type="value" class="value">
						<img src="${text}">
					</span>
				</article> 
			</div>
			
			<div class="popup-selected-items">  
					${popupPhone(data)}
				</div>        
		</div> 
  `
}

function test(items, text) {
	return `
    <div class="wrapper-select">
    
   		<article data-type="input" class="input-selected-item">
				<section class="Com-disp-flex-al-center">
					<div class="test-img"></div>
					<div data-type="value" class="title" >${text}</div>
				</section>
				<section class="arrow-wrapper">
						<img class="arrow" src="${arrow}" alt="">   
				</section>   
			</article>
			
			<div class="popup-selected-items">  ${items.join('')}</div>        
		</div> 
  `
}

function defaultSelectedItem(items, text, mainText) {
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
					break
				case 'input-item':
					this.inputSelect(element)
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


			//error
			// const selector = document.querySelector(".test-mask");
			// const im = new Inputmask("999-999-99-99");
			// im.mask(selector);

		this.selectedId = element.dataset.id

		this.$value.innerHTML = `
		<span data-type="value" class="value">
						<img src="${this.current.value}">
					</span>
		
		`

		// this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
		// 	el.classList.remove('selected')
		// })
		// this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')
		//
		// this.options.onSelect ? this.options.onSelect(this.current) : null

		this.close()

	}

	select(id) {
		this.selectedId = id
		this.$value.textContent = this.current.value
		console.log(this.current)

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