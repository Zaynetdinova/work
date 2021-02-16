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
    category: [
      {
        category: 'Размеры',
        link: '/#information/size'
      },
      {
        category: 'Доставка',
        link: '/#information/about-shopping'
      },
      {
        category: 'Оплата',
        link: '/#information/about-payment'
      },
      {
        category: 'Ответы на вопросы',
        link: '/#information/question-answers'
      },
      {
        category: 'Возврат',
        link: '/#information/cooperation'
      },
    ]
  },

  {
    title: 'О магазине',
    id: 'store',
    img: false,
    category: [
      {
        category: 'О нас',
        link: '/#information/about-us'
      },
      {
        category: 'Условия работы',
        link: '/#information/working-condition'
      },
      {
        category: 'Контакты',
        link: '/#information/contacts'
      },
    ]
  },
  {
    title: 'СОТРУДНИЧЕСТВО',
    id: 'cooperationHeader',
    img: false,
    category: [
      {
        category: 'Поставщикам',
        link: '/#information/cooperation'
      },
    ]
  },
]
