export function openSidebar() {
  // устанавливаем прослушку событий
  const point = document.querySelectorAll('.point-js')
  const cancel = document.querySelector('#sub-categories-menu-close')

  point.forEach((item) => {
    item.addEventListener('click', (event) =>  openCategories(event, item.dataset.type))
  })

  // закрывает подкатегорию
  cancel.addEventListener('click', closeSubCategories)
}

function openCategories(e, category) {
  const subCategories = e.target.closest('figure')
  const mainCategory = document.querySelector(`[data-type=${category}]`)

  // открываем подкатегорию
  if(document.documentElement.clientWidth <= 768 && subCategories && subCategories.dataset.subcategory == undefined) {
    closeSubCategories('open')
    return
  }

  // ????
  if (subCategories !== null && subCategories.dataset.category != undefined) {
    subCategories.classList.toggle('show')
    return
  }


  if (mainCategory.classList.contains('open-category-js')) {
    close()
  } else {
    close()
    mainCategory.classList.toggle('open-category-js')
  }
}

export function closeSidebarCloseMenu() {
  close()
  closeSubCategories('close')
}


function closeSubCategories(type) {
  const extra = document.querySelector('#open-mobile-extra-js')
  if(type === 'open') {
    extra.classList.remove( 'show-extra-cancel')
    extra.classList.add('show-extra-mobile')
  } else if(type === 'close') {
    extra.classList.remove('show-extra-mobile')
    extra.classList.remove('show-extra-cancel')
  } else {
    extra.classList.remove('show-extra-mobile')
    extra.classList.add('show-extra-cancel')
  }
}

// закрывает все открытые категории
function close() {
  const elements = document.querySelectorAll('#point-js')
  elements.forEach((item) => {
    item.classList.remove('open-category-js')
  })
}
