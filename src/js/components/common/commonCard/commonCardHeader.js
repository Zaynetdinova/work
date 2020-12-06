import {sliderPointerTemplate} from '../sliderPointer.template'

export function commonCardHeader(text) {
  return `
    <div class="Bestsellers-header">
      <section class="content">
          <div class="categories">
             ${text}
        </div>
        <div class="line"></div>
        <div class="see-all">
            СМОТРЕТЬ ВСЕ
        </div>
      </section>
      <section class="slider-pointer">
         ${sliderPointerTemplate('slider-pointer-bestseller')}
         ${r()}
      </section>
    </div>
  `
}

function r () {
  return `
    <div class="dots">
        <span class="dots-bestseller active"></span>
        <span class="dots-bestseller"></span>
        <span class="dots-bestseller"></span>
        <span class="dots-bestseller"></span>
    </div>
  `
}


