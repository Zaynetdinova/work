export function mobileSearch(type = '') {
  const elem = document.querySelector('#Mobile-search-js')
  if (type === 'close') {
    elem.classList.remove('display-block')
    document.body.classList.remove('Com-over-hidden')
    return
  }

  elem.classList.toggle('display-block')
  document.body.classList.toggle('Com-over-hidden')
}
