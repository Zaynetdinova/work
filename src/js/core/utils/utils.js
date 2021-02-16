export function capitalize(string) {
  if(typeof  string !== 'string') {
    return ''
  }

  return  string.charAt(0).toUpperCase() + string.slice(1)
}

export function toggleShowInformation(className) {
  const $mainElem = document.querySelector(className)
  $mainElem.classList.toggle('show-info')
}

export function disableBodyScroll() {
  console.log('Com-over-hidden')
  document.body.classList.add('Com-over-hidden')
}

export function resolveBodyScroll() {
  document.body.classList.remove('Com-over-hidden')
}
