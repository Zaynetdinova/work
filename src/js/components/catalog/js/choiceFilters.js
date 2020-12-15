let testGlob = []
export function choiceFilters(e) {

	if(e.target.checked) {
		const id = e.target.id
		const text = e.target.dataset.text
		const obj = {id, text}
		testGlob.push(obj)
	} else {
		const test = testGlob.filter((item) => {
			return item.id !== e.target.id
		})
		testGlob = test
	}

	console.log(testGlob)
}