export function desktopSearch(e, element, type = '') {
  if(type === 'click') {
    element.classList.add('input-header-active')
    return
  }

  const deleteValue = document.querySelector('#desktop-search-delete-js')
  const input = document.querySelector('#desktop-search-input-js')
  deleteValue.classList.add('Com-display-block')

  if(e.target.value === '') {
    deleteValue.classList.remove('Com-display-block')
  }

  deleteValue.addEventListener('click', () => {
    input.value = ''
    if(input.value === '') {
      deleteValue.classList.remove('Com-display-block')
    }
  })
}
