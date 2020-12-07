import {DomListener} from "./DomListener";
import {eventCommonCardHover} from './utils/eventCommonCardHover'
import {openSidebar} from './utils/openSidebar'

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
    console.log('super')
    // openSidebar()
    if(window.userRegistry) {
      eventCommonCardHover()
    }
  }

}
