import {Component} from "../../../../../../core/Component";
import {orderDoneTemplate} from "./orderDone.template";
import Swiper from "swiper";

export class OrderDone extends Component {
    static className = 'Order-done'

    constructor($root) {
        super($root, {
            name: 'OrderDone',
            listeners: ['click']
        });
    }
    toHTML() {
        return orderDoneTemplate()
    }
    onClick(e) {}
    slider() {
        const options = {
            slidesPerView: 1.9,
            spaceBetween: 10,
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
                1950: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                },
                1601: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                1025: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 6,
                    centeredSlides: false,
                    loop: false,
                    spaceBetween: 10,
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

        new Swiper('[data-personal-area-order-done]', options)
    }
}