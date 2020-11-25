import icon from '../../../../images/sidebar/icon.svg'

import {choice, menu} from './choice'

export function sidebar(point) {
    const items = point.map((item) => {
    return `
        <article id="point-js" data-type="${item.id}">
            <div class='common'>
                <div class="point">
                    <div class='name'>
                        <img class="sidebar-img" src=${item.img} alt='icon'>
                        <div class='title'>${item.title}</div>
                    </div>
                    <a class='plus' id='plus' href='#' datatype="${item.id}">
                        <span></span>
                    </a>
                </div>
                <hr class="header-line">
                <div>
                    <div class='categories' id=${item.id}>${choice(li)}</div> 
                    <div class='nav'>${menu(nav)}</div>
                </div>                         
            </div>
        </article>
        
    `
    })
    return `${items.join('')}`
}

let li =
    [
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


let nav = [
    {
        article: 'Повседневные'
    },
    {
        article: 'Офисные'
    },
    {
        article: 'Трикотажные'
    },
    {
        article: 'Коктейльные'
    },
    {
        article: 'Вечерние'
    },
    {
        article: 'Длинные'
    },
    {
        article: 'Сарафаны'
    },
    {
        article: 'Летние'
    },
    {
        article: 'Короткие'
    },
    {
        article: 'Выпускные'
    },
    {
        article: 'Кружевные'
    },
    {
        article: 'Пляжные'
    },
    {
        article: 'Свадебные'
    },
    {
        article: 'Скидки'
    },
]




