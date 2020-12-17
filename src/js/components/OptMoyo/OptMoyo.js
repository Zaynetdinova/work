import {$} from '../../core/dom'

export class OptMoyo {
  constructor(options) {
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'Opt-moyo')

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })

    return $root
  }

  init() {
    this.components.forEach(component => component.init())
    this.components.forEach(component => component.slider())
  }
}
