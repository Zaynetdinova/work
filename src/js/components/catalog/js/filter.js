import exit from '../../../../images/icons/exit.svg'
import arrow from '../../../../images/icons/arrow2.svg'

export function filter() {
    return `
        <div class="filter">
            <div class="wrapper-title">
                <div class="title">Фильтры</div>
                <div class="cancel">
                   <div class="clear">Очистить</div>
                   <img src="${exit}" alt="exit">
                </div>
            </div>
            ${material(point)}
        </div>
    `
}

function material(item) {
    const items = item.map((item) => {
        return `
            <div class="material">
                <div class="wrapper-material">
                    <div class="title">${item.title}</div>
                    <img class="arrow" src="${arrow}" alt="arrow">
                </div>
                <hr class="hr-material">
            </div>    
            <div class="checkbox">
                <input type="checkbox">
                <div class="checkbox-title"></div>
            </div>     
        `
    })
    return `${items.join('')}`
}

let point = [
    {
        title: 'Материал',
        id: 'filter',
        img: false,
        category: [
            {
                category: 'Хлопок (888)'
            },
            {
                category: 'Лен (888)'
            },
            {
                category: 'Шерсть (888)'
            },
            {
                category: 'Кашемир (888)'
            },
            {
                category: 'Вискоза (888)'
            },
            {
                category: 'Полиэстр (888)'
            },
            {
                category: 'Нейлон (888)'
            },
            {
                category: 'Шёлк (888)'
            },
        ],
    },
    {
        title: 'Цвет',
        id: 'filter1',
        img: false,
        category: [
            {
                category: 'Хлопок (888)'
            },
            {
                category: 'Цвет'
            },
            {
                category: 'Размер'
            },
            {
                category: 'Сезон'
            },
            {
                category: 'Стиль'
            },
            {
                category: 'Цена'
            },
        ],
    },
    {
        title: 'Размер',
        id: 'filter2',
        img: false,
        category: [
            {
                category: 'Хлопок (888)'
            },
            {
                category: 'Цвет'
            },
            {
                category: 'Размер'
            },
            {
                category: 'Сезон'
            },
            {
                category: 'Стиль'
            },
            {
                category: 'Цена'
            },
        ],
    },
    {
        title: 'Сезон',
        id: 'filter3',
        img: false,
        category: [
            {
                category: 'Хлопок (888)'
            },
            {
                category: 'Цвет'
            },
            {
                category: 'Размер'
            },
            {
                category: 'Сезон'
            },
            {
                category: 'Стиль'
            },
            {
                category: 'Цена'
            },
        ],
    },
    {
        title: 'Стиль',
        id: 'filter4',
        img: false,
        category: [
            {
                category: 'Хлопок (888)'
            },
            {
                category: 'Цвет'
            },
            {
                category: 'Размер'
            },
            {
                category: 'Сезон'
            },
            {
                category: 'Стиль'
            },
            {
                category: 'Стиль'
            },
        ],
    },
    {
        title: 'Цена',
        id: 'filter5',
        img: false,
        category: [
            {
                category: 'Хлопок (888)'
            },
            {
                category: 'Цвет'
            },
            {
                category: 'Размер'
            },
            {
                category: 'Сезон'
            },
            {
                category: 'Стиль'
            },
            {
                category: 'Цена'
            },
        ],
    },
]



