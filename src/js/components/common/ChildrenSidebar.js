import {sidebarPoint} from './sidebarPoint'



export function childrenSidebar(item) {
    return `
        <div class='ChildrenSidebar' id="sidebar-children">
            <hr class="line-white">
            ${templateSidebarChildren(item)}
            
            <div class='points sidebar-children'>
                <div class="points-footer">
                    ${sidebarPoint(point)}
                </div>
            </div>
        </div>
    `
}


function templateSidebarChildren(item) {
    const items = item.map((item) => {
        return `
            <div>
                 <article data-type-children=${item.id} class='link-children'>
                    <img class="img" src=${item.img} alt="">
                    <div></div>
                    <div class='wrap-span'>
                        <span class="item">${item.name}</span>
                        <span class="month">${item.month}</span>
                    </div>
                </article>
                <hr class="line-white">
            </div>
        `
    })
    return `${items.join('')}`
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
    }
    ]