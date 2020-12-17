// переделать
export function eventCommonCardHover() {
  const cards = document.querySelectorAll('.card-bestsellers-js')
  const clientWidth = document.documentElement.clientWidth
  const minWidthNotSlider = '1025'

  if(clientWidth < minWidthNotSlider) {
    return
  } else {
    cards.forEach((item) => {
      item.addEventListener('mouseenter', eventFunc)
    })
  }
  /////////????
  function eventFunc(e) {
    let elem = e.target.closest('article');
    viewMaterial(elem.dataset.id)
  }

  function eventFunc2(e, type ='close') {
    let elem = e.target.closest('article');
    viewMaterial(elem.dataset.id, type)
  }
  //////??????


  cards.forEach((item) => {
    item.addEventListener('mouseleave', eventFunc2 )
  })

  window.addEventListener('resize', () => {
    const clientWidth = document.documentElement.clientWidth

    if(clientWidth < minWidthNotSlider) {
      cards.forEach((item) => {
        item.removeEventListener('mouseenter', eventFunc)
      })
    } else {
      cards.forEach((item) => {
        item.addEventListener('mouseenter', eventFunc)
      })
    }
  })
}

function viewMaterial(id, type) {
  const comWidth = document.documentElement.clientWidth
  const card = document.querySelector(`#${id}`)
  const test = card.closest('figure')
  const cardСoordinate = card.getBoundingClientRect()



  if(type === 'close') {
    card.classList.remove('additional-information-open')
    card.classList.remove('additional-information-open-left')
    test.classList.remove('Com-super-z-index')
    return
  }

  if(comWidth/2 < cardСoordinate.left) {
    card.classList.add('additional-information-open-left')
    test.classList.add('Com-super-z-index')
  } else {
    card.classList.add('additional-information-open')
    test.classList.add('Com-super-z-index')
  }
}
