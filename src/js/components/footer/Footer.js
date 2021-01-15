import {Component} from '../../core/Component'
import {footerTemplate} from './footer.template'
import {showBackCallFooter} from "./js/showBackCall";

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

  onClick(e) {
    spreaderClick(e)
  }
}
function spreaderClick(e) {
  if(e.target.closest('article')) {
    const element = e.target.closest('article');

    switch (element.id) {
      case 'backCallFooter':
        showBackCallFooter()
        break;
      case 'closeImg-backCall':
        showBackCallFooter('close')
        break;
    }
  }
}
