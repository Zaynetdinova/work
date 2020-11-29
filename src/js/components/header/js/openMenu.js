export function openMenu(type = '') {

	const sidebar = document.getElementById('sidebar-js')
  const cancel = sidebar.querySelector(`[data-id='cancel-js']`)
  const burgerMenu = document.getElementById('burger-menu')

  if(type === 'close') {
    classListRemove()
    return
  }

  if(burgerMenu.classList.contains('show')) {
    classListRemove()
  } else {
    classListAdd()
  }

  cancel.addEventListener('click', () => {
    classListRemove()
  })



  // потом объединить функции
  function classListAdd(type) {
    burgerMenu.classList.add('show')
    sidebar.classList.add('Sidebar-open-js')
    document.body.classList.add('Com-over-hidden')
  }

  function classListRemove(type) {
    burgerMenu.classList.remove('show')
    sidebar.classList.remove('Sidebar-open-js')
    document.body.classList.remove('Com-over-hidden')
  }

}

