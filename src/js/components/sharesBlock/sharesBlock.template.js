import {categoriesTitle} from '../common/categoriesTitle'
import {button} from '../common/button'
import {cardBanner} from "../common/cardBanner";
import {sliderPointerTemplate} from '../common/sliderPointer.template'


export function sharesBlock(data) {
    const cards = (className = '') => {
        return data.map(card => {
            return `
      <div class="card">
        <div style="background-image: url(${card.img});" class="img">
        <div class="sharesBlock-sale">
            ${card.banner ? cardBanner('-35%', 'bottom') : ''}
        </div>
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
    }).join('')
}

    const mobile = (className = '') => {
        return data.map(card => {
        return `
      <div class="${className}">
      <div class="card">
        <div style="background-image: url(${card.img});" class="img">
        <div class="sharesBlock-sale">
            ${card.banner ? cardBanner('-35%', 'bottom') : ''}
        </div>
        </div>
        <div class="info">
        <div class="text">
            <div class="title">${card.title}</div> 
            <div class="description">${card.description}</div>
        </div>
        ${button('подробнее')}
        </div>
      </div>
      </div>
    `
    }).join('')
  }
  return `
    <section class="root">
        <div class="main-title">
            ${categoriesTitle('АКЦИИ')}
         </div>
        <div class="desktop Com-flex">
            ${cards()}
        </div>
        
        <div class="mobile">
            <div class="swiper-container3 swiper-container">
                <div class="swiper-wrapper">
                     ${mobile('swiper-slide')}                
                </div>
                <div class="pointer-wrapper">
                    ${sliderPointerTemplate('', 'black')}
                </div>
            </div>
            <div class="shares-line"></div>
        </div>
        
    </section>
    `
}
