export function openCategory(e, category) {
  const subCategories = e.target.closest('figure')

  if (subCategories !== null && subCategories.dataset.test != undefined) {
    subCategories.classList.toggle('show')
    return
  } else if(subCategories !== null && subCategories.dataset.test2 != undefined) {
    return
  }
  // separatorSubCategories(subCategories)


  const mainCategory = document.querySelector(`[data-type=${category}]`)

  if (mainCategory.classList.contains('open-category-js')) {
    close()
  } else {
    close()
    mainCategory.classList.toggle('open-category-js')
  }
}

// function separatorSubCategories(subCategories) {
//   if (subCategories !== null && subCategories.dataset.test != undefined) {
//     subCategories.classList.toggle('show')
//     return
//   } else if(subCategories !== null && subCategories.dataset.test2 != undefined) {
//     return
//   }
// }

function close() {
  const elements = document.querySelectorAll('#point-js')
  elements.forEach((item) => {
    item.classList.remove('open-category-js')
  })
}


