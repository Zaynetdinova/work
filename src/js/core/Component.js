import {DomListener} from "./DomListener";
import {eventCommonCardHover} from './utils/eventCommonCardHover'

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

  slider() {

  }

  functionAfterContent() {
    // openSidebar()
    if(window.userRegistry) {
      eventCommonCardHover()
    }
  }

}
