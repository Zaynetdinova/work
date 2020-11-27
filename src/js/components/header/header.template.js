import {topHeader} from './components/topHeader'
import {bottomHeader} from './components/bottomHeader'
import {bottomHeaderUser} from './components/bottomHeaderUser'
import {sidebar} from './components/sidebar'
import {extra} from './components/extra'

import icon1 from '../../../images/icons/woman.svg'
import icon2 from '../../../images/icons/girl.svg'
import icon3 from '../../../images/icons/man.svg'
import icon4 from '../../../images/icons/boys.svg'
import icon5 from '../../../images/icons/house.svg'
import icon6 from '../../../images/icons/toy.svg'



export function createHeader(data) {
  return `
        ${topHeader()}
        <hr class="line-header">
        ${bottomHeader()}
        <div class='sidebar' id='sidebar'>
            <div class='wrapper-sidebar'>
                <div class='points'>
                    ${sidebar(point)}
                </div>   
                <div class='extra'>
                    ${extra()}
                </div>                   
            </div>     
                    
        </div>  
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
                    category: 'Платья'
                  },
                  {
                    category: 'Трикотаж'
                  },
                  {
                    category: 'Верха'
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
                ]
              },
            ],
        },
        {
            title: 'мужчинам',
            id: 'men',
            img: icon3,
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
        },
        {
            title: 'игрушки',
            id: 'game',
            img: icon6,
        },
    ]




