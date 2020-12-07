export function info(type = '') {
  const elem = document.querySelector('#info-mobile-view-js')
  if (type === 'close') {
    elem.classList.remove('info-mobail-active-js')
    document.body.classList.remove('Com-over-hidden')
    return
  }

  if(elem.classList.contains('info-mobail-active-js')) {
    elem.classList.remove('info-mobail-active-js')
    document.body.classList.remove('Com-over-hidden')
  } else {
    elem.classList.add('info-mobail-active-js')
    document.body.classList.add('Com-over-hidden')
  }
}
