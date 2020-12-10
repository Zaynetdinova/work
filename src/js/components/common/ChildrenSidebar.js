import {sidebarPoint} from './sidebarPoint'



export function childrenSidebar(item) {
    return `
        <div class='ChildrenSidebar' id="sidebar-children">
            <hr class="line-children">
            ${templateSidebarChildren(item)}
            
            <div class='points sidebar-girl'>
                <div class="points-footer">
                    ${sidebarPoint(pointGirl)}
                </div>
            </div>
            
             <div class='points sidebar-baby'>
                <div class="points-footer">
                    ${sidebarPoint(pointBaby)}
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
                    <div class="img img-${item.img}"></div>
                    <div class='wrap-span'>
                        <span class="item">${item.name}</span>
                        <span class="month">${item.month}</span>
                    </div>
                </article>
                <hr class="line-children">
            </div>
        `
    })
    return `${items.join('')}`
}

let pointGirl = [
    {
        title: 'Платья',
        id: 'info',
        img: false,
        category: [
            {
                category: 'Повседневные'
            },
            {
                category: 'Офисные'
            },
            {
                category: 'Трикотажные'
            },
            {
                category: 'Коктейльные'
            },
            {
                category: 'Вечерние'
            },
            {
                category: 'Длинные'
            },
            {
                category: 'Костюмы'
            },
            {
                category: 'Сарафаны'
            },
            {
                category: 'Летние'
            },
            {
                category: 'Короткие'
            },
        ]
    },

    {
        title: 'Трикотаж',
        id: 'client',
        img: false,
        category: [
            {
                category: 'Повседневные'
            },
            {
                category: 'Офисные'
            },
            {
                category: 'Трикотажные'
            },
            {
                category: 'Коктейльные'
            },
            {
                category: 'Вечерние'
            },
            {
                category: 'Длинные'
            },
            {
                category: 'Костюмы'
            },
            {
                category: 'Сарафаны'
            },
            {
                category: 'Летние'
            },
            {
                category: 'Короткие'
            },
        ]
    },

    {
        title: 'Верха',
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
        title: 'Низы',
        id: 'cooperation',
        img: false,
        category: [
            {
                category: 'Поставщикам'
            },
        ]
    }
    ]

let pointBaby = [
    {
        title: 'Юбки',
        id: 'info-2',
        img: false,
        category: [
            {
                category: 'Повседневные'
            },
            {
                category: 'Офисные'
            },
            {
                category: 'Трикотажные'
            },
            {
                category: 'Коктейльные'
            },
            {
                category: 'Вечерние'
            },
            {
                category: 'Длинные'
            },
            {
                category: 'Костюмы'
            },
            {
                category: 'Сарафаны'
            },
            {
                category: 'Летние'
            },
            {
                category: 'Короткие'
            },
        ]
    },

    {
        title: 'Верхняя одежда',
        id: 'client-2',
        img: false,
        category: [
            {
                category: 'Повседневные'
            },
            {
                category: 'Офисные'
            },
            {
                category: 'Трикотажные'
            },
            {
                category: 'Коктейльные'
            },
            {
                category: 'Вечерние'
            },
            {
                category: 'Длинные'
            },
            {
                category: 'Костюмы'
            },
            {
                category: 'Сарафаны'
            },
            {
                category: 'Летние'
            },
            {
                category: 'Короткие'
            },
        ]
    }
]