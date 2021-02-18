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
  document.body.classList.add('Com-over-hidden')
}

export function resolveBodyScroll() {
  document.body.classList.remove('Com-over-hidden')
}

export function passwordEye(wrapper) {
  const eye = wrapper.querySelectorAll('.password-control')

  eye.forEach((item) => {
    item.addEventListener('click', () => {
      const $parent = item.closest('[data-input-password-js]')
      const input = $parent.querySelector('.password-control-eye-js');
      if (input.getAttribute('type') === 'password') {
        item.classList.add('view');
        input.setAttribute('type', 'text');
      } else {
        item.classList.remove('view');
        input.setAttribute('type', 'password');
      }
      return false;
    })
  })
}

function validateEmail(email) {
  const pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return pattern.test(email);
}
