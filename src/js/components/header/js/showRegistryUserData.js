export function showRegistryUserData(type = '') {
  const elem = document.querySelector('#wrapper-user-data-view-js')
  if(type === 'close') {
    elem.classList.remove('wrapper-user-data-view-show')
    return
  }

  elem.classList.toggle('wrapper-user-data-view-show')
}
