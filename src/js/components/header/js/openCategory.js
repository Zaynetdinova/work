export function openCategory(category) {
  const cat = document.querySelector(`[data-type=${category}]`)
  const el = cat.querySelector(`#${category}`)
  console.log(el)
  el.addEventListener('click', (e) => {
    let category = e.target.closest('article');
    if(!category) return
    const id = category.dataset.id
    const elem = document.querySelector(`[data-id=${id}]`)
    const w = elem.querySelector('.sub-category')
    const arrow = elem.querySelector('.sub-arrow')
    arrow.classList.toggle('arrow-transform-js')
    w.classList.toggle('Com-disp-block')
    console.log(elem)

  })
  if(el.classList.contains('open')) {
    close()
  } else {
    close()
    el.classList.toggle('open')
  }

  const plus = document.querySelector(`[datatype=${category}]`)
  if(plus.classList.contains('minus')) {
    closeMinus()
  } else {
    closeMinus()
    plus.classList.toggle('minus')
  }

}


function close() {
  const elements = document.querySelectorAll('.categories')
  elements.forEach((item) => {
    item.classList.remove('open')
  })
}

function closeMinus() {
  const elements = document.querySelectorAll('.plus')
  elements.forEach((item) => {
    item.classList.remove('minus')
  })
}
