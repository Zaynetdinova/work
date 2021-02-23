import icon1 from '../../../../../images/icons/woman.svg'
import icon2 from '../../../../../images/icons/girl.svg'
import icon3 from '../../../../../images/icons/man.svg'
import icon4 from '../../../../../images/icons/boys.svg'
import icon5 from '../../../../../images/icons/house.svg'
import icon6 from '../../../../../images/icons/toy.svg'
import {sidebarPoint} from '../../../common/sidebarPoint'
import {subCategoriesMenu} from './subCategoriesMenu'


export function sidebarWrapper() {
  return `
  <section class="Sidebar" id='sidebar-js'>
    <div class='menu'>
      <div class='wrapper-sidebar'>
          
          <div data-parent-point class='points-wrapper'>
              <div class='points'>
                  <div class="points-header">
                      ${sidebarPoint(point, '', 'header')}
                  </div>
              </div>
          </div>   
          
          <div class="sidebar-extra-wrapper" id="sidebar-extra-wrapper-js"></div>
                     
          <div class="extra-mobile" id="open-mobile-extra-js">
            ${subCategoriesMenu()}
          </div>
                    
          <div class="button-close" data-id="cancel-js"></div>  
                        
      </div>
    </div>
    <div id="menu-background-js" class="background" data-id="background-js"></div>  
  </section>
  `
}

let point =
  [
    {
      title: 'женщинам',
      id: 'women',
      img: icon1,
      category: [
        {
          id: 'dressWomen',
          category: 'Платья',
          link: '/#catalog'
        },
        {
          id: 'jerseyWoman',
          category: 'Трикотаж',
          link: '/#catalog'
        },
        {
          id: 'topWomen',
          category: 'Верха',
          link: '/#catalog'
        },
        {
          id: 'bottomWomen',
          link: '/#catalog',
          category: 'Низы',

        },
        {
          id: 'skirtsWomen',
          link: '/#catalog',
          category: 'Юбки'
        },
        {
          id: 'outerwearWomen',
          link: '/#catalog',
          category: 'Верхняя одежда'
        },
        {
          id: 'costumesWomen',
          link: '/#catalog',
          category: 'Костюмы'
        },
        {
          id: 'forHomeWomen',
          link: '',
          category: 'Для дома'
        },
        {
          id: 'sportWomen',
          link: '',
          category: 'Спорт'
        },
        {
          id: 'underwearWomen',
          link: '',
          category: 'Нижнее белье'
        },
        {
          id: 'swimwearWomen',
          link: '',
          category: 'Купальники'
        },
        {
          id: 'tightsSocksWomen',
          link: '',
          category: 'Колготки и Носки'
        },
        {
          id: 'bigSizesWomen',
          link: '',
          category: 'Большие размеры'
        },
        {
          id: 'accessoriesWomen',
          link: '',
          category: 'Аксессуары'
        },
        {
          id: 'newItemsWomen',
          link: '',
          category: 'Новинки'
        },
        {
          id: 'promotionsWomen',
          link: '',
          category: 'Акции'
        },
        {
          id: 'discountsWomen',
          link: '',
          category: 'Скидки'
        },
      ],
    },

    {
      title: 'девочкам',
      id: 'girl',
      img: icon2,
      subcategory: true,
      category: [
        {
          name: 'Новорожденным',
          subtitle: '(0 - 12 мес)',
          id: 'newBornSub',
          categories: [
            {
              id: 'dressGirlNewBorn',
              category: 'Платья'
            },
            {
              category: 'Трикотаж'
            },
            {
              category: 'Верха'
            },
            {
              category: 'Низы'
            },
            {
              category: 'Юбки'
            },
            {
              category: 'Верхняя одежда'
            },
            {
              category: 'Костюмы'
            },
            {
              category: 'Для дома'
            },
            {
              category: 'Спорт'
            },
            {
              category: 'Нижнее белье'
            },
            {
              category: 'Купальники'
            },
            {
              category: 'Колготки и Носки'
            },
            {
              category: 'Большие размеры'
            },
            {
              category: 'Аксессуары'
            },
            {
              category: 'Новинки'
            },
            {
              category: 'Акции'
            },
            {
              category: 'Скидки'
            },
          ]
        }, {
          name: 'Девочкам',
          subtitle: '(12 мес - 17 лет)',
          id: 'girlSub',
          categories: [
            {
              category: 'Платья'
            },
            {
              category: 'Трикотаж'
            },
            {
              category: 'Верха'
            },
            {
              category: 'Низы'
            },
            {
              category: 'Юбки'
            },
            {
              category: 'Верхняя одежда'
            },
            {
              category: 'Костюмы'
            },
            {
              category: 'Для дома'
            },
            {
              category: 'Спорт'
            },
            {
              category: 'Нижнее белье'
            },
            {
              category: 'Купальники'
            },
            {
              category: 'Колготки и Носки'
            },
            {
              category: 'Большие размеры'
            },
            {
              category: 'Аксессуары'
            },
            {
              category: 'Новинки'
            },
            {
              category: 'Акции'
            },
            {
              category: 'Скидки'
            },
          ]
        },
      ],
    },
    {
      title: 'мужчинам',
      id: 'men',
      img: icon3,
      category: [
        {
          id: 't-shirtsMen',
          category: 'Майки, футболки',
          link: '/#catalog'
        },
        {
          id: 'shirtsMen',
          category: 'Рубашки',
          link: '/#catalog'
        },
        {
          id: 'jerseyMen',
          category: 'Трикотаж',
          link: '/#catalog'
        },
        {
          id: 'topMen',
          link: '/#catalog',
          category: 'Верха',

        },
        {
          id: 'outerwearMen',
          link: '/#catalog',
          category: 'Верхняя одежда'
        },
        {
          id: 'shortsMen',
          link: '/#catalog',
          category: 'Брюки, джинсы, шорты'
        },
        {
          id: 'costumesMen',
          link: '',
          category: 'Костюмы'
        },
        {
          id: 'forHomeMen',
          link: '',
          category: 'Для дома'
        },
        {
          id: 'underwearMen',
          link: '',
          category: 'Нижнее белье'
        },
        {
          id: 'tightsSocksMen',
          link: '',
          category: 'Носки'
        },
        {
          id: 'accessoriesMen',
          link: '',
          category: 'Аксессуары'
        },
        {
          id: 'footwearMen',
          link: '',
          category: 'Обувь'
        },
        {
          id: 'newItemsMen',
          link: '',
          category: 'Новинки'
        },
        {
          id: 'promotionsMen',
          link: '',
          category: 'Акции'
        },
        {
          id: 'discountsMen',
          link: '',
          category: 'Скидки'
        },
      ],
    },
    {
      title: 'мальчикам',
      id: 'boy',
      img: icon4,
    },
    {
      title: 'для дома',
      id: 'home',
      img: icon5,
      categories: [
        {
          category: 'Платья'
        },
        {
          category: 'Трикотаж'
        },
        {
          category: 'Верха'
        },
        {
          category: 'Низы'
        },
        {
          category: 'Юбки'
        },
        {
          category: 'Верхняя одежда'
        },
        {
          category: 'Костюмы'
        },
        {
          category: 'Для дома'
        },
        {
          category: 'Спорт'
        },
        {
          category: 'Нижнее белье'
        },
        {
          category: 'Купальники'
        },
        {
          category: 'Колготки и Носки'
        },
        {
          category: 'Большие размеры'
        },
        {
          category: 'Аксессуары'
        },
        {
          category: 'Новинки'
        },
        {
          category: 'Акции'
        },
        {
          category: 'Скидки'
        },
      ]
    },
    {
      title: 'игрушки',
      id: 'game',
      img: icon6,
      categories: [
        {
          category: 'Платья'
        },
        {
          category: 'Трикотаж'
        },
        {
          category: 'Верха'
        },
        {
          category: 'Низы'
        },
        {
          category: 'Юбки'
        },
        {
          category: 'Верхняя одежда'
        },
        {
          category: 'Костюмы'
        },
        {
          category: 'Для дома'
        },
        {
          category: 'Спорт'
        },
        {
          category: 'Нижнее белье'
        },
        {
          category: 'Купальники'
        },
        {
          category: 'Колготки и Носки'
        },
        {
          category: 'Большие размеры'
        },
        {
          category: 'Аксессуары'
        },
        {
          category: 'Новинки'
        },
        {
          category: 'Акции'
        },
        {
          category: 'Скидки'
        },
      ]
    },
  ]
