import {updateSelectedFilters} from '../view/updateSelectedFilters'

// test
let testGlob = []
////////

export function choiceFilters(e) {
	const id = e.target.id
	const text = e.target.dataset.text
	if(e.target.checked) {
		addFilterGroup(id, text)
	} else {
		deleteFilterGroup(id)
	}
}

function addFilterGroup(id, text) {
	const obj = {id, text}
	testGlob.push(obj)

	updateSelectedFilters(testGlob)
}

export function deleteFilterGroup(id) {
	const newArr = testGlob.filter((item) => {
		return item.id !== id
	})
	testGlob = newArr
	document.querySelector(`#${id}`).checked = false

	updateSelectedFilters(testGlob)
}

