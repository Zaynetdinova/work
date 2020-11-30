export function openCategory(category) {
  // Main category
  const mainCategory = document.querySelector(`[data-type=${category}]`)

  // const plus = document.querySelector(`[datatype=${category}]`)
  //
  // if(plus.classList.contains('minus')) {
  //   closeMinus()
  // } else {
  //   closeMinus()
  //   plus.classList.toggle('minus')
  // }

  if(mainCategory.classList.contains('test')) {
    close()
  } else {
    close()
    mainCategory.classList.toggle('test')
  }

  mainCategory.addEventListener('click', (e) => {
    let subCategory = e.target.closest('article');
    if(!subCategory) return
    subCategory.classList.toggle('show')
  })
}


function close() {
  const elements = document.querySelectorAll('#point-js')
  elements.forEach((item) => {
    item.classList.remove('test')
  })
}

function closeMinus() {
  const elements = document.querySelectorAll('.plus')
  elements.forEach((item) => {
    item.classList.remove('minus')
  })
}
