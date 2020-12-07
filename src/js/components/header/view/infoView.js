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
        category: 'Ответы на вопросы'
      },
      {
        category: 'Контакты'
      }
    ]
  },

  {
    title: 'О магазине',
    id: 'store',
    img: false,
    category: [
      {
        category: 'Личный кабинет'
      },
      {
        category: 'Корзина'
      },
      {
        category: 'Избранное'
      },
      {
        category: 'Заказы и их статус'
      },
      {
        category: ' Возврат'
      },
    ]
  },
  {
    title: 'СОТРУДНИЧЕСТВО',
    id: 'cooperation',
    img: false,
    category: [
      {
        category: 'Поставщикам'
      },
    ]
  },
]
