import {updateSelectedFilters} from '../view/updateSelectedFilters'


export class ChoiceFilters  {
	constructor() {
		this.filters = []
	}

	toggleFilter(element) {
		const parent = element.closest('#parents-filter-js')
		parent.classList.toggle('open-category-filter')
	}

	choiceFilter(e) {
		const id = e.target.id
		const text = e.target.dataset.text
		if(e.target.checked) {
			this.addFilterGroup(id, text)
		} else {
			this.defineDeleteFilterGroup(id)
		}
	}

	addFilterGroup(id, text) {
		const obj = {id, text}
		this.filters.push(obj)

		// template
		updateSelectedFilters(this.filters)
	}

	defineDeleteFilterGroup(id) {
		if(!id) {
			this.deleteFilterGroupAll()
		} else {
			this.deleteFilterGroupOne(id)
		}

		updateSelectedFilters(this.filters)
	}

	deleteFilterGroupAll() {
		this.filters = []
		const $inputCheckbox = document.querySelectorAll('.checkbox-filter-js')
		$inputCheckbox.forEach((input) => {
			input.checked = false
		})
	}

	deleteFilterGroupOne(id) {
		const newArr = this.filters.filter((item) => {
			return item.id !== id
		})
		this.filters = newArr
		document.querySelector(`#${id}`).checked = false
	}
}





