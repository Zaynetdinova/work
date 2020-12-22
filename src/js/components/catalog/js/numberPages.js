// переделать
export function numberPages(e) {

	if(e.target.id) {
		const allNumbers = document.querySelectorAll('.page-number-js')
		allNumbers.forEach((number) => {
			number.classList.remove('active-number')
		})
		const $el = e.target
		$el.classList.add('active-number')
	}
}