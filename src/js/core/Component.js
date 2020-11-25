import {DomListener} from "./DomListener";

export class Component extends DomListener {
  constructor($root, options) {
    super($root, options.listeners);
    this.name = options.name || ''
  }

  toHTML() {
    return ``
  }

  init() {
    this.initDOMListeners()
  }

}
