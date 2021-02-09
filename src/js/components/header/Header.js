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
    this.header = headerStorage.headerFunctions()
  }

  onClick(e) {

    if(e.target.closest('article')) {
      const element = e.target.closest('article');

      switch (element.id) {
        case 'burger-menu':
          this.header.mobileSearchClose()
          this.header.closeRegistryUserData()
          this.header.infoClose()
          this.header.menuOpen()
          break;
        case 'mobile-search-button-js':
         this.header.menuClose()
          this.header.closeRegistryUserData()
          this.header.infoClose()
          this.header.mobileSearchOpen()
          break;
        case 'desktop-search-js':
          this.header.desktopSearchActive(element)
          break;
        case 'icon-info-button-js':
          this.header.mobileSearchClose()
          this.header.menuClose()
          this.header.closeRegistryUserData()
          this.header.infoOpen()
          break;
        case 'registry-user-mobile-button-js':
          this.header.menuClose()
          this.header.mobileSearchClose()
          this.header.infoClose()
          this.header.showRegistryUserData()
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







