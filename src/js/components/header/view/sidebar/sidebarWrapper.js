// import {sidebar} from './sidebar'
import {extra} from './extra'
import icon1 from '../../../../../images/icons/woman.svg'
import icon2 from '../../../../../images/icons/girl.svg'
import icon3 from '../../../../../images/icons/man.svg'
import icon4 from '../../../../../images/icons/boys.svg'
import icon5 from '../../../../../images/icons/house.svg'
import icon6 from '../../../../../images/icons/toy.svg'
import {sidebarPoint} from '../../../common/sidebarPoint'
import {subCategoriesMenu} from "../../../common/subCategoriesMenu";

export function sidebarWrapper() {
  return `
  <section class="Sidebar" id='sidebar-js'>
    <div class='menu'>
      <div class='wrapper-sidebar'>
          <div class='points-wrapper'>
            <div class='points'>
                <div class="points-header">
                    ${sidebarPoint(point)}
                </div>
            </div>
          </div>   
          <div class='extra'>
              ${extra()}
          </div> 
          <div class="extra-mobile" id="open-mobile-extra-js">
            ${subCategoriesMenu()}
          </div> 
          
          <div class="button-close" data-id="cancel-js"></div>                
      </div>
    </div>
    <div class="background" data-id="background-js"></div>  
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
          id: 'dress',
          category: 'Платья',
          link: '/#catalog'
        },
        {
          id: 'jersey',
          category: 'Трикотаж',
          link: '/#catalog'
        },
        {
          category: 'Верха',
          link: '/#catalog'
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
              id: 'dress',
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
