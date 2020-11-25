import {categoriesTitle} from '../common/categoriesTitle'
import {button} from '../common/button'

export function popularBrand(data) {
  const cards = data.map(card => {
    return `
      <div class="card">
        <div class="img-wrap"><img class="Com-img" src=${card.img}></div>
        <div class="info">
        <div class="text">
            <div class="title">${card.title}</div> 
            <div class="description">${card.description}</div>
        </div>
        <div class="button-wrapper">
            ${button('подробнее')}
        </div>
        </div>
      </div>
    `
  })

  return `
    <section class="root">
        <div class="main-title">
            ${categoriesTitle('ПОПУЛЯРНЫЕ БРЕНДЫ')}
         </div>
        <div class="desktop Com-flex">
            ${cards.join('')}
        </div>
        
        <div class="mobile">
        <div class="slider-root">
            <div class="popular-brand-js">
              ${cards.join('')}
          </div>
          <div class="slider-dots-wrapper">
            <div class="Slider-dots1"></div>
          </div>
          </div>
         </div>
    </section>
    `
}


