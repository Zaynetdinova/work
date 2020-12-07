export function openSidebar() {
  const test = document.querySelectorAll('.point-js')

  test.forEach((item) => {
    item.addEventListener('click', (event) =>  openCategories(event, item.dataset.type))
  })


  const cancel = document.querySelector('#sub-categories-menu-close')
  cancel.addEventListener('click', closeSubCategories)
}

function closeSubCategories() {
  const extra = document.querySelector('#open-mobile-extra-js')
  extra.classList.remove('show-extra-mobile')
  extra.classList.add('show-extra-cancel')
}

function openCategories(e, category) {
  const subCategories = e.target.closest('figure')

  if(document.documentElement.clientWidth <= 768 && subCategories && subCategories.dataset.subtest == undefined) {
    const extra = document.querySelector('#open-mobile-extra-js')
    extra.classList.remove('show-extra-cancel')
    extra.classList.add('show-extra-mobile')
  }

  if (subCategories !== null && subCategories.dataset.test != undefined) {
    subCategories.classList.toggle('show')
    return
  } else if(subCategories !== null && subCategories.dataset.test2 != undefined) {
    return
  }


  const mainCategory = document.querySelector(`[data-type=${category}]`)

  if (mainCategory.classList.contains('open-category-js')) {
    close()
  } else {
    close()
    mainCategory.classList.toggle('open-category-js')
  }
}


function close() {
  const elements = document.querySelectorAll('#point-js')
  elements.forEach((item) => {
    item.classList.remove('open-category-js')
  })
}
