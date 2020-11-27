export function openMenu() {
	// document.getElementById('burger-menu').classList.toggle('show')
	const sidebar = document.getElementById('sidebar-js')
	const menu = sidebar.querySelector(`[data-id='menu-js']`)
	const bg = sidebar.querySelector(`[data-id='background-js']`)
	const cancel = sidebar.querySelector(`[data-id='cancel-js']`)

	menu.classList.add('show')
	bg.classList.add('Com-disp-block')

	document.body.classList.add('Com-over-hidden')

	cancel.addEventListener('click', () => {
		menu.classList.remove('show')
		bg.classList.remove('Com-disp-block')

		document.body.classList.remove('Com-over-hidden')
	})

	document.querySelector('.bg-search').classList.remove('display-block')

}