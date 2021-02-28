import {Component} from '../../core/Component'
import {createHeader} from './header.template'
import {headerStorage} from '../../core/storage/header'

export class Header extends Component {
  static className = 'Header'
  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['click', 'input', 'mouseover']
    });
    this.header = null
  }
  toHTML() {
    return createHeader()
  }

  afterInitComponent() {
    console.log('super')
    this.header = headerStorage.headerFunctions()
    this.headerMenu = headerStorage.headerMenu()
    this.headerStateRegulation = headerStorage.headerStateRegulation()
    this.headerMenu.menuClose()
  }

  onClick(e) {
    if(e.target.closest('article')) {
      const element = e.target.closest('article');

      switch (element.id) {
        case 'burger-menu':
          this.headerStateRegulation.init('menuOpen')
          break;
        case 'mobile-search-button-js':
         this.headerStateRegulation.init('mobileSearchOpen')
          break;
        case 'desktop-search-js':
          this.header.desktopSearchActive(element)
          break;
        case 'icon-info-button-js':
          this.headerStateRegulation.init('infoOpen')
          break;
        case 'registry-user-mobile-button-js':
          this.headerStateRegulation.init('showRegistry')
          break;
      }
    }
  }

  onInput(e) {
    if(e.target.closest('article')) {
      const element = e.target.closest('article');

      switch (element.id) {
        case 'desktop-search-js':
          this.header.desktopSearchInputActive(e)
          break;
        case 'mobile-search-js':
          this.header.mobileSearchInput(e)
          break;
      }
    }
  }

  onMouseover(e) {
    const extraMenu = headerStorage.extraMenuShow()
    extraMenu.init(e)
  }

}









