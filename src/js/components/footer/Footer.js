import {Component} from '../../core/Component'
import {footerTemplate} from './footer.template'

export class Footer extends Component {
  static className = 'Footer'
  constructor($root) {
    super($root, {
      name: 'Footer',
      listeners: ['click']
    });


  }
  toHTML() {
    return footerTemplate()
  }

  onClick() {
  }
}

