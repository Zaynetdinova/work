import {Component} from '../../core/Component'
import {createHeader} from './header.template'
import {openMenu} from './js/openMenu'
import {mobileSearch} from './js/mobileSearch'
import {openCategory} from './js/openCategory'
import {desktopSearch} from './js/desktopSearch'

export class Header extends Component {
  static className = 'Header'
  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['click', 'input']
    });

  }
  toHTML() {
    return createHeader()
  }

  onClick(e) {
    spreaderClick(e)
  }

  onInput(e) {
    spreaderOnInput(e)
  }



}

function spreaderOnInput(e) {
  if(e.target.closest('article')) {
    const element = e.target.closest('article');

    switch (element.id) {
      case 'desktop-search-js':
        desktopSearch(e, element)
        break;
    }
  }


}

function spreaderClick(e) {
  if(e.target.closest('article')) {
    const element = e.target.closest('article');

    switch (element.id) {
      case 'burger-menu':
        openMenu()
        break;
      case 'mobile-search-button-js':
        openMenu('close')
        mobileSearch()
        break;
      case 'point-js':
        openCategory(element.dataset.type)
        break;
      case 'desktop-search-js':
        desktopSearch(e, element, 'click')
    }
  }
}





