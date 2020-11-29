import icon from '../../../../../images/sidebar/icon.svg'

import {choice, menu} from './choice'

export function sidebar(point) {
    const items = point.map((item) => {
    const {category, subcategory = false} = item
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
                    <div class='categories ${ subcategory ? 'main-sub-category' : ''}' id=${item.id}>
                        ${choice(category, subcategory)}
                    </div> 
                    <div class='nav'>${menu(nav)}</div>
                </div>                         
            </div>
        </article>
        
    `
    })
    return `${items.join('')}`
}



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




