export function mobileSearch(type = '') {
  const elem = document.querySelector('#Mobile-search-js')
  if (type === 'close') {
    elem.classList.remove('display-block')
    document.body.classList.remove('Com-over-hidden')
    return
  }

  if(elem.classList.contains('display-block')) {
    elem.classList.remove('display-block')
    document.body.classList.remove('Com-over-hidden')
  } else {
    elem.classList.add('display-block')
    document.body.classList.add('Com-over-hidden')
  }

}
