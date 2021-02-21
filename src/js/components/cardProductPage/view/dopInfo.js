import {titleProductPage} from "../../common/titleProdactPage";

export function dopInfo() {
    return `
        <div class="dop-info dop-info-js">
            ${titleProductPage('Дополнительная информация', 'dop-info')}
            <div class="dop-info-items">
                <div class="first-col">${dopInfoItem(information)}</div>
                <div class="second-col">${dopInfoItem(information2)}</div>
            </div>
        </div>
    `
}


function dopInfoItem(item) {
    const items = item.map((item) => {
        return `
            <div class="common-dop-info">
                <span class="dop-info-title">${item.dopInfoTitle}</span> <span class="dop-info-inform">${item.dopInfo}</span>
            </div>  
        `
    })
    return `${items.join('')}`
}


let information = [
    {
        dopInfoTitle: 'Длина',
        dopInfo: 'Миди'
    },
    {
        dopInfoTitle: 'Фасон',
        dopInfo: 'Прямые'
    },
    {
        dopInfoTitle: 'Рисунок',
        dopInfo: 'Без рисунка'
    },
    {
        dopInfoTitle: 'Тип карманов',
        dopInfo: 'Без карманов'
    },
    {
        dopInfoTitle: 'Декоративные элементы',
        dopInfo: 'Кружево'
    },
    {
        dopInfoTitle: 'Основная ткань',
        dopInfo: 'Полиэстер'
    },
]

let information2 = [
    {
        dopInfoTitle: 'Стиль',
        dopInfo: 'Романтический'
    },
    {
        dopInfoTitle: 'Страна бренда',
        dopInfo: 'Россия'
    },
    {
        dopInfoTitle: 'Страна производства',
        dopInfo: 'Россия'
    },
    {
        dopInfoTitle: 'Посадка',
        dopInfo: 'Высокая'
    },
    {
        dopInfoTitle: 'Подкладка',
        dopInfo: 'Есть'
    },
]