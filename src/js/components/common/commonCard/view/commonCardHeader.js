import {sliderPointerTemplate} from '../../sliderPointer.template'

export function commonCardHeader(text,link) {
  return `
    <div class="Bestsellers-header">
      <section class="content">
          <div class="categories">
             <a href=${link}>${text}</a>
        </div>
        <div class="line"></div>
        <div class="see-all">
            СМОТРЕТЬ ВСЕ
        </div>
      </section>
      <section data-slider-pointer-cards-js class="slider-pointer">
         
      </section>
    </div>
  `
}


