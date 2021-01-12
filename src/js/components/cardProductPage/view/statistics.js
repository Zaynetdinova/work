import {star} from "./star";
import photo1 from '../../../../images/cardProduct/photo1.png'
export function Statistics() {
    return `
        <div class="Statistics">
            <div class="first-box">
                <div class="rating">
                    <div class="number">4.0</div>
                    <div class="wrap-star">${star()}</div>
                    <div class="comment">Отзывов: 99</div>
                </div>
                <div class="percent">
                    <div class="wrap-percent">${percent(item)}</div>
                </div>
            </div>
            <div class="second-box">
                <div class="circle-percent">
                    ${circle('0%', 'Маломерит')}                   
                </div>
                <div class="circle-percent">
                    <div class="active-border">
                        <div class="circle">75%</div>
                    </div>
                    <div class="text">Соответствует</div>
                </div>
                <div class="circle-percent">
                    ${circle('0%', 'Большемерит')}   
                </div>       
            </div>
            <div class="button">Написать отзыв / вопрос</div>
            ${reviews(info)}         
        </div>
    `
}
function circle(percent, text) {
    return `
        <div class="circle2">${percent}</div>
        <div class="text">${text}</div>
    `
}

function percent(item) {
    const items = item.map((item) => {
        return `
            <div class="lines">
                <div class="first">${item.first}</div>
                <div class="progress-bar">
                    <span class="progress-bar-fill" style="width: ${item.percent}"></span>
                </div>
                <div class="third">${item.percent}</div>
            </div>
                   
        `
    })
    return `${items.join('')}`
}

function reviews(item) {
    const items = item.map((item) => {
        return `
            <div class="wrapper-reviews">
                <div class="nameClient">
                    <div class="name">Имя Фамилия</div>
                    <div class="data">20.11.2020</div>
                </div>
                <div class="wrap">${star()}</div>
                <div class="size-text">
                    <div class="size">Размер: 134</div>
                    <div class="text">Соответствует</div>
                </div>
                <div class="description">${item.description}</div>
                <img class="photo" src="${item.photo}" alt="">
            </div>
        `
    })
    return `${items.join('')}`
}


const item = [
    {
        first: '1',
        percent: '100%'
    },
    {
        first: '2',
        percent: '0%'
    },
    {
        first: '3',
        percent: '0%'
    },
    {
        first: '4',
        percent: '0%'
    },
    {
        first: '5',
        percent: '50%'
    }
]

const info = [
    {
        description: 'Короткое женское платье прямого кроя с поясом на талии из основной ткани. Рукава длинные с манжетами на кнопке, спинка с застежкой на пуговицу.' +
            ' Отличное платье для любительниц строго стиля и минимализма в одежде. ' +
            'Отличный выбор для современной женщины. ВНИМАНИЕ!!! ' +
            'Города, закрытые для отгрузки: Хабаровск, <span style="white-space: nowrap">Петропавловск-Камчатский</span> ' +
            'Владивосток, Краснодар, Самара, Шахты.',
    },
    {
        description: 'Короткое женское платье прямого кроя с поясом на талии из основной ткани. Рукава длинные с манжетами на кнопке, спинка с застежкой на пуговицу.',
        photo: photo1
    },
]