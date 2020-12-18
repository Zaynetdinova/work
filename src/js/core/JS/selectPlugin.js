import arrow from "../../../images/icons/arrow2.svg"

const getTemplate = (data = [], placeholder, selectedId) => {
	let text = placeholder ?? 'Placeholder по умолчанию'

	const items = data.map(item => {
		// let cls = ''
		// if (item.id === selectedId) {
		// 	text = item.value
		// 	cls = 'selected'
		// }
		return `
				<div data-type="item" data-id="${item.id}" class="openPage select__item select-number">
					${item.value} 
				</div>
    `
	})

	return `
    <div class="common">
			<article class="pages" id="number-of-cards-per-page-js">
					<div class="select">
							<div class="page-title" >На странице</div>
							<img class="arrow" src="${arrow}" alt="">
					</div>            
					<span data-type="value">${text}</span>                            
			</article>
			<div class="popup">  ${items.join('')}</div>        
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
		console.log(this.$el)
		const {placeholder, data} = this.options
		this.$el.classList.add('select')
		this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
	}

	setup() {
		this.clickHandler = this.clickHandler.bind(this)
		this.$el.addEventListener('click', this.clickHandler)
		// this.$arrow = this.$el.querySelector('[data-type="arrow"]')
		this.$value = this.$el.querySelector('[data-type="value"]')
	}

	clickHandler(event) {
		const {type} = event.target.dataset

		if (type === 'input') {
			this.toggle()
		} else if (type === 'item') {
			const id = event.target.dataset.id
			this.select(id)
		} else if (type === 'backdrop') {
			this.close()
		}
	}

	get isOpen() {
		return this.$el.classList.contains('open')
	}

	get current() {
		return this.options.data.find(item => item.id === this.selectedId)
	}

	select(id) {
		this.selectedId = id
		console.log(this.current.value)
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
		// this.$arrow.classList.remove('fa-chevron-down')
		// this.$arrow.classList.add('fa-chevron-up')
	}

	close() {
		this.$el.classList.remove('open')
		// this.$arrow.classList.add('fa-chevron-down')
		// this.$arrow.classList.remove('fa-chevron-up')
	}

	destroy() {
		this.$el.removeEventListener('click', this.clickHandler)
		this.$el.innerHTML = ''
	}
}