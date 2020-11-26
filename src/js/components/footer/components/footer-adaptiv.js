import {choice} from './choice'

export function footer_adaptive(point) {
    const items = point.map((item) => {
        return `
        <article id="point-js" data-type="${item.id}">
            <div class='common'>
                <div class="point">
                    <div class='title'>${item.title}</div>
                    <a class='plus' id='plus' href='#'>
                        <span></span>
                    </a>
                </div>
                <hr class="footer-line">
                <div>
                    <div class='categories' id=${item.id}>${choice(item.id, obj)}</div> 
                </div>                         
            </div>
        </article>
    `
    })
    return `${items.join('')}`
}
let obj = {
    info: [
        {
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
    ],
    client: [
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
    ],
    service: [
        {
            category: 'Таблица размеров'
        },
        {
            category: 'Заказать звонок'
        },
    ],
    cooperation: [
        {
            category: 'Поставщикам'
        },
    ]
}


