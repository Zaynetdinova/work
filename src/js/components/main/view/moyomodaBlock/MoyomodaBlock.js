
import {moyomodaBlockTemplate} from './moyomodaBlock.template'
import Swiper from "swiper";

export class MoyomodaBlock {

  slider() {
        new Swiper('[data-slider-partner-js]', {
            slidesPerView: 1.9,
            slidesPerGroup: 1,
            centeredSlides: true,
            loop: true,

          breakpoints: {
                321: {
                    slidesPerView: 2.5,
                },
                415: {
                slidesPerView: 3,
              }
          }
        })
    }

    toHTML() {
        return `
        <div class="Moyomoda-Block">
            ${moyomodaBlockTemplate()}
        </div>
        `
    }
}

