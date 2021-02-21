import img1 from "../../../../../images/menu/1.svg";
import img2 from "../../../../../images/menu/2.svg";
import img3 from "../../../../../images/menu/3.svg";
import img4 from "../../../../../images/menu/4.svg";
import img5 from "../../../../../images/menu/5.svg";
import img6 from "../../../../../images/menu/6.svg";

import {menuCategoriesTemplate} from './menu.template'
import Swiper from 'swiper'

export class Menu {
    constructor() {
        this.options = {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesOffsetAfter: 0,
            breakpoints: {
                600: {
                    slidesPerView: 6,
                    slidesOffsetAfter: 0,
                },
                485: {
                    slidesOffsetAfter: 0,
                },
                411: {
                    slidesPerView: 4.5,
                    spaceBetween: 10,
                    slidesOffsetAfter: 10,
                },
                350: {
                    slidesPerView: 3.9,
                    spaceBetween: 10,
                    slidesOffsetAfter: 15,
                },
                320: {
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                    slidesOffsetAfter: 15
                }
            }
        }
    }
    toHTML() {
        return `
            <div class="Menu">
                ${menuCategoriesTemplate(cards)}
            </div>
        `
    }

    slider() {
        new Swiper('[data-slider-1024-menu-js]', this.options)
    }
}

const cards = [
    {
        img: img1,
        title: 'женщинам',
        link: '/#categories-women'
    },
    {
        img: img2,
        title: 'девочкам',
        link: '/#categories-children'
    },
    {
        img: img3,
        title: 'мужчинам',
        link: '/'
    },
    {
        img: img4,
        title: 'мальчикам',
        link: '/'
    },
    {
        img: img5,
        title: 'для дома',
        link: '/'
    },
    {
        img: img6,
        title: 'игрушки',
        link: '/'
    },
]
