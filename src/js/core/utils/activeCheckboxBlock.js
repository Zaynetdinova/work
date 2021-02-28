export function activeCheckboxBlock(root) {
  const parents = root.querySelectorAll('[data-personal-checked-options]')
  if(!parents) {
    return
  }

  parents.forEach((parent) => {

    parent.addEventListener('click', () => {
      removeActive()
      const radioButton = parent.querySelector('[data-checkbox-input-js]')
      radioButton.checked = true
      radioButton.closest('[data-personal-checked-options]').classList.add('active')
    })

  })

  function removeActive() {
    parents.forEach((parent) => {
      parent.classList.remove('active')
    })
  }


}
