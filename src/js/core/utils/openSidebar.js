import {ExtraMenuItemShow} from '../../components/header/js/ExtraMenuItemShow'
import {headerStorage} from '../storage/header'

export class openSidebarTest {
  constructor() {
    this.$points = document.querySelectorAll('.point-js')
    this.extraInit = new ExtraMenuItemShow()
    this.header = headerStorage.headerMenu()
    this.initListening()
  }

  initListening() {
    this.$points.forEach((item) => {
      item.addEventListener('click', (e) =>  this.defineCategories(e, item.dataset.type))
    })
  }

  defineCategories(e) {
    const $element = e.target.closest('[data-point-element-choice-js]')
    if($element && $element.closest('[data-point-header]')) {
      this.header.pointHandler(e)
      return
    }
    const subCategories = e.target.closest('[data-parent-category]')
    const mainCategory = e.target.closest('[data-point-parent]')

    subCategories ? this.openSubcategories(subCategories) : this.openMainCategories(mainCategory)
  }

  openSubcategories(subCategories) {
    console.log(subCategories.closest('[data-point-header]'))
    subCategories.classList.toggle('show')
  }

  openMainCategories(mainCategory) {
    console.log('open')
    if (mainCategory.classList.contains('open-category-js')) {
      this.close()
    } else {
      this.close()
      mainCategory.classList.toggle('open-category-js')
    }
  }


  close() {
    const elements = document.querySelectorAll('#point-js')
    elements.forEach((item) => {
      item.classList.remove('open-category-js')
    })
  }

}







