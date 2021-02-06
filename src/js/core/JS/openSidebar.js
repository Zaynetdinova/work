import {ExtraMenuItemShow} from '../../components/header/js/ExtraMenuItemShow'

export class openSidebarTest extends ExtraMenuItemShow {
  constructor() {
    super()
    this.$points = document.querySelectorAll('.point-js')
    this.$cancelButton = document.querySelector('#sub-categories-menu-close')

    this.initListening()
  }

  initListening() {
    this.$points.forEach((item) => {
      item.addEventListener('click', (e) =>  this.defineCategories(e, item.dataset.type))
    })

    this.$cancelButton.addEventListener('click', this.closeSubCategories)
  }

  defineCategories(e, category) {
    e.preventDefault()
    const subCategories = e.target.closest('[data-parent-category]')
    const mainCategory = document.querySelector(`[data-type=${category}]`)

    subCategories ? this.openSubcategories(subCategories) : this.openMainCategories(mainCategory)
  }

  openSubcategories(subCategories) {

    // mobile (open extra)
    if(document.documentElement.clientWidth <= 768 && subCategories && subCategories.dataset.subcategory == undefined) {
      this.handleClickMobileMenu(subCategories.id)
      return
    }

    if (subCategories !== null && subCategories.dataset.category != undefined) {
      subCategories.classList.toggle('show')
      return
    }
  }

  openMainCategories(mainCategory) {
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

  closeSidebarCloseMenu() {
    close()
    this.closeSubCategories('close')
  }

  handleClickMobileMenu(id) {
    // попробовать перенести в конструктор
    const extra = document.querySelector('#open-mobile-extra-js')
    //
    super.defineCategory(id)
    // testData

    extra.classList.remove( 'show-extra-cancel')
    extra.classList.add('show-extra-mobile')
  }

  closeSubCategories(type) {
    const extra = document.querySelector('#open-mobile-extra-js')

    if(type === 'close') {
      extra.classList.remove('show-extra-mobile')
      extra.classList.remove('show-extra-cancel')
    } else {
      extra.classList.remove('show-extra-mobile')
      extra.classList.add('show-extra-cancel')
    }
  }

}







