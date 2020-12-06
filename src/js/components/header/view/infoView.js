import {sidebarPoint} from "../../common/sidebarPoint";

export function infoView() {
  return `
    <div>
        <div class='points'>
        ${sidebarPoint(point)}
   </div>
    </div>
   
  `
}

let point = [
  {
    title: 'ИНФОРМАЦИЯ',
    id: 'info',
    img: false,
    category: [{
      category: 'О нас'
    },
      {
        category: 'Условия работы'
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
    title: 'ДЛЯ КЛИЕНТОВ',
    id: 'client',
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
    title: 'СЕРВИС',
    id: 'service',
    img: false,
    category: [
      {
        category: 'Таблица размеров'
      },
      {
        category: 'Заказать звонок'
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
