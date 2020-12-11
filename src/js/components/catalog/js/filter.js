import {sidebarPoint} from "../../common/sidebarPoint";

export function filter() {
    return `
        <div class="filter">
            <div class="points">				
                ${sidebarPoint(point,'notArrow')}
            </div>
        </div>
    `
}

let point = [
    {
        title: 'Фильтры',
        id: 'filter',
        img: false,
        category: [
            {
                category: 'Материал'
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