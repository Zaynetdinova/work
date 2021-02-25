export class CatalogFunctions {
	constructor() {
	  this.mobileFilter = document.querySelector('#mobile-filter-js')
      this.menuBurger = document.querySelector('#desktop-filter-js')
	}

	changeNumberPage(e) {
	  if(e.target.id) {
      const allNumbers = document.querySelectorAll('.page-number-js')
      allNumbers.forEach((number) => {
        number.classList.remove('active-number')
      })
      const $el = e.target
      $el.classList.add('active-number')
    }
  }

  pointsCatalogOpen() {
    const $pointsCatalogOpen = document.querySelector('#points-catalog-open-js')
    $pointsCatalogOpen.querySelector('#point-js').classList.add('open-category-js')
  }

  openFilterMobile() {
    this.mobileFilter.classList.add('Com-disp-block')
    document.body.classList.add('Com-over-hidden')
  }

  closeFilterMobile() {
    this.mobileFilter.classList.remove('Com-disp-block')
    document.body.classList.remove('Com-over-hidden')
  }

  openMenuBurger() {
    this.menuBurger.classList.toggle('show')
  }
}
