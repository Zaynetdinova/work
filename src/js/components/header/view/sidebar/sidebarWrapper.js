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
          id: 'jerseyWomen',
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
        {
          id: 'brandWomen',
          link: '',
          category: 'Бренды'
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
              id: 'jerseyGirlNewBorn',
              category: 'Трикотаж'
            },
            {
              id: 'topGirlNewBorn',
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
      id: 'man',
      img: icon3,
      category: [
        {
          id: 't-shirtsMan',
          category: 'Майки, футболки',
          link: '/#catalog'
        },
        {
          id: 'shirtsMan',
          category: 'Рубашки',
          link: '/#catalog'
        },
        {
          id: 'jerseyMan',
          category: 'Трикотаж',
          link: '/#catalog'
        },
        {
          id: 'topMan',
          link: '/#catalog',
          category: 'Верха',

        },
        {
          id: 'outerwearMan',
          link: '/#catalog',
          category: 'Верхняя одежда'
        },
        {
          id: 'shortsMan',
          link: '/#catalog',
          category: 'Брюки, джинсы, шорты'
        },
        {
          id: 'costumesMan',
          link: '',
          category: 'Костюмы'
        },
        {
          id: 'forHomeMan',
          link: '',
          category: 'Для дома'
        },
        {
          id: 'underwearMan',
          link: '',
          category: 'Нижнее белье'
        },
        {
          id: 'tightsSocksMan',
          link: '',
          category: 'Носки'
        },
        {
          id: 'accessoriesMan',
          link: '',
          category: 'Аксессуары'
        },
        {
          id: 'footwearMan',
          link: '',
          category: 'Обувь'
        },
        {
          id: 'newItemsMan',
          link: '',
          category: 'Новинки'
        },
        {
          id: 'promotionsMan',
          link: '',
          category: 'Акции'
        },
        {
          id: 'discountsMan',
          link: '',
          category: 'Скидки'
        },
        {
          id: 'brandMan',
          link: '',
          category: 'Бренды'
        },
      ],
    },
    {
      title: 'мальчикам',
      id: 'boy',
      img: icon4,
      category: [
        {
          id: 'outerwearBoy',
          category: 'Верхняя одежда',
          link: ''
        },
        {
          id: 'jumpersBoy',
          category: 'Джемперы',
          link: ''
        },
        {
          id: 'jerseyBoy',
          category: 'Трикотаж',
          link: ''
        },
        {
          id: 'tiShirtsBoy',
          category: 'Футболки',
          link: ''
        },
        {
          id: 'shirtsBoy',
          category: 'Рубашки',
          link: ''
        },
        {
          id: 'overallsBoy',
          category: 'Комбинезоны',
          link: ''
        },
        {
          id: 'trousersBoy',
          category: 'Брюки',
          link: ''
        },
        {
          id: 'costumesBoy',
          category: 'Костюмы',
          link: ''
        },
        {
          id: 'schoolBoy',
          category: 'Школа',
          link: ''
        },
        {
          id: 'bodysuitBoy',
          category: 'Боди',
          link: ''
        },
        {
          id: 'linenBoy',
          category: 'Белье',
          link: ''
        },
        {
          id: 'footwearBoy',
          category:  'Обувь',
          link: ''
        },
        {
          id: 'accessoriesBoy',
          category:  'Аксессуары',
          link: ''
        },
        {
          id: 'forHomeBoy',
          category: 'Для дома',
          link: ''
        },
        {
          id: 'sockBoy',
          category: 'Носки,колготки',
          link: ''
        },
        {
          id: 'newHome',
          category: 'Новинки',
          link: ''
        },
        {
          id: 'saleHome',
          category: 'Скидки',
          link: ''
        },
        {
          id: 'brandHome',
          category: 'Бренды',
          link: ''
        },
      ]
    },
    {
      title: 'для дома',
      id: 'home',
      img: icon5,
      category: [
        {
          id: 'linensHome',
          category: 'Постельное белье',
          link: ''
        },
        {
          id: 'blanketsHome',
          category: 'Пледы',
          link: ''
        },
        {
          id: 'bedspreadsHome',
          category: 'Покрывала',
          link: ''
        },
        {
          id: 'towelsHome',
          category: 'Полотенца',
          link: ''
        },
        {
          id: 'apronsHome',
          category: 'Фартуки',
          link: ''
        },
        {
          id: 'forKitchenHome',
          category: 'Для кухни',
          link: ''
        },
        {
          id: 'forBathroomHome',
          category: 'Для ванной',
          link: ''
        },
        {
          id: 'curtainsHome',
          category: 'Шторы',
          link: ''
        },
        {
          id: 'cushionsHome',
          category: 'Подушки',
          link: ''
        },
        {
          id: 'fittingsHome',
          category: 'Фурнитура',
          link: ''
        },
        {
          id: 'furnitureHome',
          category: 'Мебель',
          link: ''
        },
        {
          id: 'floraHome',
          category:  'Флористика',
          link: ''
        },
        {
          id: 'animalsHome',
          category:  'Дом. животным',
          link: ''
        },
        {
          id: 'newHome',
          category: 'Новинки',
          link: ''
        },
        {
          id: 'promotionsHome',
          category: 'Акции',
          link: ''
        },
        {
          id: 'saleHome',
          category: 'Скидки',
          link: ''
        },
        {
          id: 'brandHome',
          category: 'Бренды',
          link: ''
        },
      ]
    },
    {
      title: 'игрушки',
      id: 'game',
      img: icon6,
      category: [
        {
          id: 'accessoriesGame',
          category: 'Аксессуары',
          link: ''
        },
        {
          id: 'constructionGame',
          category: 'Конструирование',
          link: ''
        },
        {
          id: 'dollGame',
          category: 'Куклы',
          link: ''
        },
        {
          id: 'logicalGame',
          category: 'Логические игры',
          link: ''
        },
        {
          id: 'tabletopGame',
          category: 'Настольные',
          link: ''
        },
        {
          id: 'experimentsGame',
          category: 'Опыты',
          link: ''
        },
        {
          id: 'entertainmentGame',
          category: 'Развлечение',
          link: ''
        },
        {
          id: 'developmentGame',
          category: 'Раннее развитие',
          link: ''
        },
        {
          id: 'toysGame',
          category: 'Мягкие игрушки',
          link: ''
        },
        {
          id: 'creationGame',
          category: 'Творчество',
          link: ''
        },
        {
          id: 'tricksGame',
          category: 'Фокусы',
          link: ''
        },
        {
          id: 'newGame',
          category: 'Новинки',
          link: ''
        },
        {
          id: 'promotionsGame',
          category: 'Акции',
          link: ''
        },
        {
          id: 'saleGame',
          category: 'Скидки',
          link: ''
        },
        {
          id: 'brandGame',
          category: 'Бренды',
          link: ''
        },
      ]
    },
  ]
