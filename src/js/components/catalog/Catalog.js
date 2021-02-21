import {Component} from "../../core/Component";
import {catalog} from "./catalog.template";
import {select} from './js/select'
import {testDataCatalog} from '../../../testData/testDataCatalog'
import {testDataYouRecentlyViewed} from '../../../testData/testDataYouRecentlyViewed'

import {catalogStorage} from '../../core/storage/storages'
import Swiper from "swiper";

export class Catalog extends Component {
    static className = 'Catalog'

    constructor($root) {
        super($root, {
            name: 'Catalog',
            listeners: ['click', 'input']
        });
        this.activeFilter = []
        this.catalog = null
        this.catalogFilters = null
        this.range = null

        this.catalogCategory = [
            {
                link: '/#categories',
                title: 'Женщинам',
                value: '1000 товаров',
                titleCategory: 'Платья',
                linkCategory: '/#catalog'
            }
        ]

        this.testGoods = testDataCatalog.goods
    }



    toHTML() {
        return catalog(
          this.catalogCategory,
          point,
          filters,
          this.testGoods,
          testDataYouRecentlyViewed)
    }

    afterInitComponent() {
        this.catalog = catalogStorage.catalogFunctions()
        this.catalogFilters = catalogStorage.choiceFilters()
        this.range = catalogStorage.priceFilterRange()
        this.range.init()
        this.catalog.pointsCatalogOpen()
        select()
      //
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

      new Swiper('[data-common-card-slider-catalog]', options)
    }

    onClick(e) {
        if(e.target.closest('[data-catalog-parent-event-js]')) {
            const element = e.target.closest('[data-catalog-parent-event-js]');

            switch (element.id) {
                case 'filter-catalog':
                    this.catalogFilters.toggleFilter(element)
                    break
                case 'delete-filter-js':
                    this.catalogFilters.defineDeleteFilterGroup(element.dataset._id)
                    break
                case 'button-filter-mobile-js':
                  this.catalog.openFilterMobile()
                    break
                case 'mobile-filter-close-js':
                  this.catalog.closeFilterMobile()
                    break
                case 'clear-filter-list':
                    this.catalogFilters.defineDeleteFilterGroup(element.dataset._id)
                    break
                case 'number-pages-js':
                  this.catalog.changeNumberPage(e)
                    break
            }
        }
    }

    onInput(e) {
        this.catalogFilters.choiceFilter(e)
    }
}

let point =
  [
      {
          title: 'Платья',
          id: 'new1',
          img: false,
          category: [
              {
                  category: 'Повседневные'
              },
              {
                  category: 'Офисные'
              },
              {
                  category: 'Трикотажные'
              },
              {
                  category: 'Коктейльные'
              },
              {
                  category: 'Вечерние'
              },
              {
                  category: 'Длинные'
              },
              {
                  category: 'Костюмы'
              },
              {
                  category: 'Сарафаны'
              },
              {
                  category: 'Летние'
              },
              {
                  category: 'Короткие'
              },
          ],
      },
  ]

let filters = [
    {
        title: 'Наш выбор',
        id: 'active1',
        class: 'active-number'
    },
    {
        title: 'Дешевые',
        id: 'active2',
        class: ''
    },
    {
        title: 'Дорогие',
        id: 'active3',
        class: ''
    },
    {
        title: 'Новые',
        id: 'active4',
        class: ''
    },
    {
        title: 'Старые',
        id: 'active5',
        class: ''
    },
    {
        title: 'Скидки',
        id: 'active6',
        class: ''
    },
    {
        title: 'Акции',
        id: 'active7',
        class: ''
    },
    {
        title: 'Популярные',
        id: 'active8',
        class: ''
    },
]
