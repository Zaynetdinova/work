import {sliderPointerTemplate} from './sliderPointer.template'

export function bestsellersHeader(text) {
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
        ${sliderPointerTemplate()}
      </section>
    </div>
  `
}
