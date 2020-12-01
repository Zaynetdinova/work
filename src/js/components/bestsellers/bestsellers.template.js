import {categoriesTitle} from '../common/categoriesTitle'
import {bestsellersCards} from './view/bestsellerCards'


export function createBestsellers({woman, child, man}) {
  return `
   <section class="root">
     <div class="main-title">
         ${categoriesTitle('ХИТЫ ПРОДАЖ')}
     </div>
     <div class="">
        ${bestsellersCards(woman)}
    </div>
    <div class="bestsellers-item">
        ${bestsellersCards(child, 'price')}
    </div>
    <div class="bestsellers-item">
        ${bestsellersCards(man, 'price')}
    </div>
   </section>
    `
}
