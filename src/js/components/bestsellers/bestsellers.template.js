import {categoriesTitle} from '../common/categoriesTitle'
import {commonCard} from '../common/commonCard/commonCards'


export function createBestsellers({woman, child, man, home, toy}) {
  return `
   <section class="root">
     <div class="main-title">
         ${categoriesTitle('ХИТЫ ПРОДАЖ')}
     </div>
     <div class="">
        ${commonCard(woman, 'price')}
    </div>
    <div class="bestsellers-item">
        ${commonCard(child, 'price')}
    </div>
    <div class="bestsellers-item">
        ${commonCard(man, 'price')}
    </div>
    <div class="bestsellers-item">
        ${commonCard(home, 'price')}
    </div>
    <div class="bestsellers-item">
        ${commonCard(toy, 'price')}
    </div>
   </section>
    `
}
