import {Component} from '../../core/Component'
import {createHeader} from './header.template'
import {openMenu} from './js/openMenu'
import {mobileSearch} from './js/mobileSearch'
import {desktopSearch} from './js/desktopSearch'
import {showRegistryUserData} from './js/showRegistryUserData'

import {info} from "./js/info";
import {ExtraMenuItemShow} from './js/ExtraMenuItemShow'


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

  }

  onMouseover(e) {
    const extraMenu = new ExtraMenuItemShow()
    extraMenu.init(e)
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

// переделать
function spreaderClick(e) {
  if(e.target.closest('article')) {
    const element = e.target.closest('article');

    switch (element.id) {
      case 'burger-menu':
        mobileSearch('close')
        showRegistryUserData('close')
        info('close')
        openMenu()
        break;
      case 'mobile-search-button-js':
        openMenu('close')
        showRegistryUserData('close')
        info('close')
        mobileSearch()
        break;
      case 'desktop-search-js':
        desktopSearch(e, element, 'click')
        break;
      case 'icon-info-button-js':
        mobileSearch('close')
        openMenu('close')
        showRegistryUserData('close')
        info()
        break;
      case 'registry-user-mobile-button-js':
        openMenu('close')
        mobileSearch('close')
        info('close')
        showRegistryUserData()
        break;
    }
  }
}





