import {Component} from '../../core/Component'
import {createHeader} from './header.template'
import {openMenu} from './js/openMenu'
import {mobileSearch} from "./js/mobileSearch";
import {openCategory} from "./js/openCategory";

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
    console.log(e.target.value)
    const inputSearchDelete = document.querySelector('.input-search-delete')
    const input = document.querySelector('.search-desktop')
    inputSearchDelete.classList.add('Com-display-block')

    if(e.target.value === '') {
      inputSearchDelete.classList.remove('Com-display-block')
    }
    inputSearchDelete.addEventListener('click', () => {
      input.value = ''
      if(input.value === '') {
        inputSearchDelete.classList.remove('Com-display-block')
      }
    })
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
    }
  }
}





