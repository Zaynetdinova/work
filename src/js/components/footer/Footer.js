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

  openCategory(category) {
    // document.getElementById('plus').classList.toggle('minus')
    const cat = document.querySelector(`[data-type=${category}]`)
    const el = cat.querySelector(`#${category}`)
    if(el.classList.contains('open')) {
      close()
    } else {
      close()
      el.classList.toggle('open')
    }
  }

  onClick(e) {
    let button = e.target.closest('article');
    if (!button) return;
    // console.log('Footer', e)
    if(button.id === 'point-js') {
      this.openCategory(button.dataset.type)
    }
  }
}

function close() {
  const elements = document.querySelectorAll('.categories')
  elements.forEach((item) => {
    item.classList.remove('open')
  })
}
