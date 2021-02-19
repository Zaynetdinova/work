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
        id: 'dress-girl',
        img: false,
        category: [
            {
                category: 'Повседневные'
            },
            {
                category: 'Нарядные'
            },
            {
                category: 'Трикотажные'
            },
            {
                category: 'Летние'
            },
            {
                category: 'Школа'
            },
            {
                category: 'Сарафаны'
            },
        ]
    },
    {
        title: 'Блузки',
        id: 'blouses-girl',
        img: false,
        category: [
            {
                category: 'Блузы'
            },
            {
                category: 'Топы'
            },
            {
                category: 'Водолазки'
            },
            {
                category: 'Рубашки'
            },
            {
                category: 'Толстовки'
            },
            {
                category: 'Кофточки'
            },
            {
                category: 'Футболки'
            },
            {
                category: 'Туники'
            },
            {
                category: 'Джемперы'
            },
            {
                category: 'Жилеты'
            },
        ]
    },
    {
        title: 'Трикотаж',
        id: 'client',
        img: false,
        category: [
            {
                category: 'Кардиганы'
            },
            {
                category: 'Свитера'
            },
            {
                category: 'Джемперы'
            },
            {
                category: 'Жакеты'
            },
            {
                category: 'Жилеты'
            },
            {
                category: 'Платья'
            },
            {
                category: 'Комплекты'
            },
        ]
    },
    {
        title: 'Брюки',
        id: 'trousers-girl',
        img: false,
        category: [
            {
                category: 'Брюки'
            },
            {
                category: 'Шорты'
            },
            {
                category: 'Джинсы'
            },
            {
                category: 'Легинсы'
            },
            {
                category: 'Ползунки'
            },
        ]
    },
    {
        title: 'Юбки',
        id: 'skirts-girl',
        img: false,
        category: [
            {
                category: 'Юбки'
            },
        ]
    },
    {
        title: 'Школа',
        id: 'school-girl',
        img: false,
        category: [
            {
                category: 'Платья'
            },
            {
                category: 'Сарафаны'
            },
            {
                category: 'Блузы'
            },
            {
                category: 'Жилеты'
            },
            {
                category: 'Жакеты'
            },
            {
                category: 'Брюки'
            },
            {
                category: 'Юбки'
            },
            {
                category: 'Комплекты'
            },
        ]
    },
    {
        title: 'Жакеты',
        id: 'jackets-girl',
        img: false,
        category: [
            {
                category: 'Жакеты'
            },
        ]
    },
    {
        title: 'Верх.одежда',
        id: 'outerwear-girl',
        img: false,
        category: [
            {
                category: 'Жакеты'
            },
            {
                category: 'Куртки'
            },
            {
                category: 'Плащи'
            },
            {
                category: 'Пуховики'
            },
            {
                category: 'Жилеты'
            },
            {
                category: 'Комплекты'
            },
            {
                category: 'Пальто'
            },
            {
                category: 'Комбинезоны'
            },
        ]
    },
    {
        title: 'Колготки, носки',
        id: 'socks-girl',
        img: false,
        category: [
            {
                category: 'Классические колготки'
            },
            {
                category: 'Фантазийные колготки'
            },
            {
                category: 'Носки'
            },
            {
                category: 'Гольфы'
            },
            {
                category: 'CONTE ELEGANT'
            },
            {
                category: 'CONTE KIDS'
            },
            {
                category: 'GIULIA'
            },
            {
                category: 'MONA'
            },
            {
                category: 'MARK FORMELLE'
            },
            {
                category: 'GATTA'
            },
        ]
    },
    {
        title: 'Белье',
        id: 'underwear-girl',
        img: false,
        category: [
            {
                category: 'Трусы'
            },
            {
                category: 'Термобелье'
            },
            {
                category: 'Комплекты'
            },
            {
                category: 'Майки'
            },
        ]
    },
    {
        title: 'Купальники',
        id: 'swimwear-girl',
        img: false,
        category: [
            {
                category: 'Купальники'
            },
        ]
    },
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