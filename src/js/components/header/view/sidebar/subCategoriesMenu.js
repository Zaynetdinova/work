import {pick} from './extra'

export function subCategoriesMenu() {
  return `
    <div class="Mobile-sub-menu">
      <div class="main-sub-menu">  
        <div class="title-sub-menu">Платья</div>
        <div class="button-back" id="sub-categories-menu-close">
            <div class="back"></div>
            <div class="text-back">НАЗАД</div>
        </div>
        
      </div> 
      <div id="sidebar-extra-mobile-wrapper-js" class="categories">
        
      </div>
    </div>
  `
}

export function newTest(elementsMenu) {
  if(!elementsMenu) {
    return
  }

  return `
    <div>
         ${pick(elementsMenu.firstColumn)}
         ${elementsMenu.secondColumn ? pick(elementsMenu.secondColumn) : null}
    </div>
  `
}
