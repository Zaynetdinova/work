import {categoriesTitle} from '../common/categoriesTitle'
import {button} from '../common/button'

export function popularBrand(data) {
  const cards = (className = '') => {
    return data.map(card => {
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
    }).join('')
  }

  const mobile = (className = '') => {
    return data.map(card => {
      return `
        <div class="${className}">
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
        </div>
     
    `
    }).join('')
  }
  return `
    <section class="root">
        <div class="main-title">
            ${categoriesTitle('ПОПУЛЯРНЫЕ БРЕНДЫ')}
         </div>
        <div class="desktop Com-flex">
            ${cards()}
        </div>
        
        <div class="mobile">
            <div class="swiper-container2 swiper-container">
                <div class="swiper-wrapper">
                     ${mobile('swiper-slide')}                
                </div>
            </div>
        </div>
        
       
    </section>
    `
}


