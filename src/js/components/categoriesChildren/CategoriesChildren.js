import {Component} from '../../core/Component'
import {categoriesChildren} from "./categoriesChildren.template";
import {sidebarChildren} from './js/sidebarChildren'
import {testDataCategoriesChildren} from '../../../testData/testDataCategoriesChildren'
import Swiper from 'swiper'

export class CategoriesChildren extends Component {
    static className = 'CategoriesChildren'
    constructor($root) {
        super($root, {
            name: 'CategoriesChildren',
            listeners: ['click']
        });
    }

    toHTML() {
        return categoriesChildren(testDataCategoriesChildren, pageForChildren, dataSidebarGirl)
    }

    afterInitComponent() {
      const options = {
            slidesPerView: 1.9,
            spaceBetween: 15,
            centeredSlides: false,
            loop: false,
            slidesOffsetAfter: 16,

            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next-main',
                prevEl: '.swiper-button-prev-main',
            },
            breakpoints: {

                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1025: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 6,
                    centeredSlides: false,
                    loop: false,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 4,
                    centeredSlides: false,
                    loop: false,
                    slidesOffsetAfter: 0,
                },
                700: {
                    slidesPerView: 3,
                    slidesOffsetAfter: 0,
                },
                600: {
                    slidesPerView: 2.5,
                },
                374: {
                    slidesPerView: 2.27,
                }
            }
        }
      const partnerOptions = {
        slidesPerView: 1.9,
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: true,
        initialSlide: 1,

        breakpoints: {
          321: {
            slidesPerView: 2.5,
          },
          415: {
            slidesPerView: 3,
          }
        }
      }


      new Swiper('[data-common-card-slider-children]', options)
      new Swiper('[data-slider-partner-js]',  partnerOptions)
    }

    onClick(e) {
        sidebarChildren(e)
    }
}

let pageForChildren = [
    {
        link: '/#categories-children',
        title: 'Девочкам',
        value: '1000 товаров'
    }
]

let dataSidebarGirl = [
    {
        id: 'children-baby',
        img: 'baby',
        name: 'Новорожденным',
        month: '(12 мес. - 17 лет)'
    },
    {
        id: 'children-girl',
        img: 'girl',
        name: 'Девочкам',
        month: '(12 мес. - 17 лет)'
    },
]
