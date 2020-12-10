export function sidebarChildren(e) {
	const element = e.target.closest('article')

	if(element && element.dataset.typeChildren){
		const mainElement = document.querySelector('#sidebar-children')
		mainElement.classList.add('active-menu')
	}
}