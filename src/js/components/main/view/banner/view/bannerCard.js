import {sliderPointerTemplate} from '../../../../common/sliderPointer.template'

export function bannerCard() {
  return `
  <div class="swiper-slide">
    <h1 id="title"></h1>
    <p id="description"></p>
    
    <div class="wrapper-navigation-button">
        <button class="box-button" type="button">ПОДРОБНЕЕ</button>
        <div class="navigation">
            ${sliderPointerTemplate('main')}
        </div>
    </div>
    
  </div>
 `
}
