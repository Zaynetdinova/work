import {categoriesTitle} from '../common/categoriesTitle'
import {button} from '../common/button'
import {cardBanner} from "../common/cardBanner";


export function sharesBlock(data) {
  const cards = data.map(card => {
    return `
      <div class="card">
        <div style="background-image: url(${card.img}); background-repeat: no-repeat; background-position: center; position: relative; background-size: cover" class="img">
            ${card.banner ? cardBanner('-35%', 'bottom') : ''}
        </div>
        <div class="info">
        <div class="text">
            <div class="title">${card.title}</div> 
            <div class="description">${card.description}</div>
        </div>
        ${button('подробнее')}
        </div>
      </div>
    `
  })

  return `
    <section class="root">
        <div class="main-title">
            ${categoriesTitle('АКЦИИ')}
         </div>
        <div class="desktop Com-flex">
            ${cards.join('')}
        </div>
        
        <div class="mobile">
            <div class="slider-root">
            <div class="popular-brand-js">
                ${cards.join('')}
              </div>
              <div class='slider-dots-wrapper'>
                <div class="Slider-dots2"></div>            
              </div>
              
            </div>
        </div>
        
    </section>
    `
}
