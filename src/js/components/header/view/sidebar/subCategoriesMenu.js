import {pick} from './extra'
import {sidebarChoice} from '../../../common/sidebarChoice'

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

export function newTest({firstColumn, secondColumn}) {

  return `
    <div>
         ${pick(firstColumn)}
         ${secondColumn ? pick(secondColumn) : null}
    </div>
  `
}

// ${sidebarChoice(category)}
