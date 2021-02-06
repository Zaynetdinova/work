export function sidebarChildren(e) {
	const element = e.target.closest('article')

	if(element && element.dataset.typeChildren){
		const id = element.dataset.typeChildren

		const mainElement = document.querySelector('#sidebar-children')
		const mainElementMobile = document.querySelector('#sidebar-children-mobile')

		// error
		sidebarChoice(mainElement, id)
		sidebarChoice(mainElementMobile, id)


		function sidebarChoice(el, id) {
			if(el.classList.contains(id)) {
				return
			}
			switch (id) {
				case 'children-girl':
					el.classList.remove('children-baby')
					el.classList.add(id)
					break;
				case 'children-baby':
					el.classList.remove('children-girl')
					el.classList.add(id)
					break;
			}
		}

	}
}