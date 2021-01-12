import {sidebarPoint} from "../../common/sidebarPoint";

export function infoView() {
  return `
    <div class="info-wrapper">
        <div class='points'>
        ${sidebarPoint(point)}
   </div>
    </div>
   
  `
}

let point = [
  {
    title: 'О ПОКУПКАХ',
    id: 'purchases',
    img: false,
    category: [{
      category: 'Размеры'
    },
      {
        category: 'Доставка'
      },
      {
        category: 'Оплата'
      },
      {
        category: 'Ответы на частые вопросы'
      },
    ]
  },

  {
    title: 'О магазине',
    id: 'store',
    img: false,
    category: [
      {
        category: 'О нас'
      },
      {
        category: 'Условия работы'
      },
      {
        category: 'Контакты'
      },
    ]
  },
  {
    title: 'СОТРУДНИЧЕСТВО',
    id: 'cooperationHeader',
    img: false,
    category: [
      {
        category: 'Поставщикам'
      },
    ]
  },
]
