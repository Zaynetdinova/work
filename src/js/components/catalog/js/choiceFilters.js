
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

	updateSelectedFilters(testGlob)
	console.log(testGlob)
}

function addFilterGroup(id, text) {
	const obj = {id, text}
	testGlob.push(obj)
}

function deleteFilterGroup(id) {
	const newArr = testGlob.filter((item) => {
		return item.id !== id
	})
	testGlob = newArr
}

function updateSelectedFilters(arrSelected) {
	const $elem = document.querySelector('#selected-filters')
	const r = arrSelected.map((item) => {
		return `
		<h4>${item.text}</h4>
		`
	}).join('')
	$elem.innerHTML = `${r}`
}