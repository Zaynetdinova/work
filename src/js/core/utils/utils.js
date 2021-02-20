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

export class UserAgent {
  constructor() {
    this.OSName = 'Unknown'
    this.operatingSystemDetection()
  }

  operatingSystemDetection() {
    if (window.navigator.userAgent.indexOf("Mac") != -1) {
      this.actionsForApple()
    }
  }

  actionsForApple() {
    const $el = document.querySelector('#style-for-apple-js')
    if ($el) {
      $el.classList.add('style-apple-padding')
    }

  }
}


export class ChangeFavoritesProduct {
  constructor() {
    this.health = null
  }

  init() {
    this.health = document.querySelector('[data-favorites-product-js]')
    this.eventInitial()
  }

  eventInitial() {
    this.health.addEventListener('click', () => this.stateFavorites())
  }

  stateFavorites() {
    this.health.classList.toggle('favorite-product-active')
    console.log(this.health.id)
  }
}

// переделать
export function closeWhenClickingInAnInactiveZone() {
  const inputSearch = document.querySelector('#desktop-search-js')

  document.body.addEventListener('click', (e) => {
    let article = e.target.closest('article');
    if (!article) {
      inputSearch.classList.remove('input-header-active')
    };

  })
}
