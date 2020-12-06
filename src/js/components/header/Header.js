import {Component} from '../../core/Component'
import {createHeader} from './header.template'
import {openMenu} from './js/openMenu'
import {mobileSearch} from './js/mobileSearch'
import {desktopSearch} from './js/desktopSearch'
import {showRegistryUserData} from './js/showRegistryUserData'
import {mobileSearchInput} from './js/mobileSearchInput'
import {showExtra} from './js/showExtra'

export class Header extends Component {
  static className = 'Header'
  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['click', 'input', 'mouseenter', 'mouseover']
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

  onMouseenter(e) {
    console.log(e.target)
  }

  onMouseover(e) {
    // на будущее
    const el = e.target.closest('figure')
    if(el != undefined) {
      showExtra(el.id)
    }
  }

}

function spreaderOnInput(e) {
  if(e.target.closest('article')) {
    const element = e.target.closest('article');

    switch (element.id) {
      case 'desktop-search-js':
        desktopSearch(e, element)
        break;
      case 'mobile-search-js':
        mobileSearchInput(e, element)
        break;
    }
  }


}

function spreaderClick(e) {
  if(e.target.closest('article')) {
    const element = e.target.closest('article');

    switch (element.id) {
      case 'burger-menu':
        mobileSearch('close')
        showRegistryUserData('close')
        openMenu()
        break;
      case 'mobile-search-button-js':
        openMenu('close')
        showRegistryUserData('close')
        mobileSearch()
        break;
      case 'desktop-search-js':
        desktopSearch(e, element, 'click')
        break;
      case 'registry-user-mobile-button-js':
        openMenu('close')
        mobileSearch('close')
        showRegistryUserData()
        break;
    }
  }
}





