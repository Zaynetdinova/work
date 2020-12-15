import {Component} from "../../core/Component";
import {moyomodaBlock} from "./moyomodaBlock.template";
import Swiper from "swiper";

export class MoyomodaBlock extends Component {
    static className = 'Moyomoda-Block'
    constructor($root) {
        super($root, {
            name: 'MoyomodaBlock',
        });
    }
    slider() {
        let moyomodaBlock = new Swiper('.swiper-container4', {
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
        return moyomodaBlock()
    }
}

