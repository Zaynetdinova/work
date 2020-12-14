import exit from '../../../../images/icons/exit.svg'
import arrow from '../../../../images/icons/arrow2.svg'
import {colorChoice, filterChoice} from "./filter-choice";

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
            <div class="material">
                <div class="box">
                    <div class="wrapper-material">
                        <div class="title">Материал</div>
                        <img class="arrow" src="${arrow}" alt="arrow">
                    </div>
                <hr class="hr-material">
                <div class="wrapper-choice">
                    ${filterChoice(category)}
                </div>
                </div>
                <div class="box">
                    <div class="wrapper-material">
                        <div class="title">Цвет</div>
                        <img class="arrow" src="${arrow}" alt="arrow">
                    </div>
                    <hr class="hr-material">
                    <div  class="wrapper-choice">
                        ${colorChoice(category2)}
                    </div>
                </div>
                <div class="box">
                    <div class="wrapper-material">
                        <div class="title">Размер</div>
                        <img class="arrow" src="${arrow}" alt="arrow">
                    </div>
                    <hr class="hr-material">
                    <div  class="wrapper-choice">
                        ${filterChoice(category3)}
                    </div>   
                </div>
                <div class="box">
                    <div class="wrapper-material">
                        <div class="title">Сезон</div>
                        <img class="arrow" src="${arrow}" alt="arrow">
                    </div>
                    <hr class="hr-material">
                    <div  class="wrapper-choice">
                        ${filterChoice(category4)}
                    </div>
                </div>
                <div class="box">
                    <div class="wrapper-material">
                        <div class="title">Стиль</div>
                        <img class="arrow" src="${arrow}" alt="arrow">
                    </div>
                    <hr class="hr-material">
                    <div  class="wrapper-choice">
                        ${filterChoice(category5)}
                    </div>
                </div>
                <div class="box">
                    <div class="wrapper-material">
                        <div class="title">Цена</div>
                        <img class="arrow" src="${arrow}" alt="arrow">
                    </div>
                    <hr class="hr-material">
                </div>
            </div>
        </div>
    `
}


let category = [
    {
        category: 'Хлопок (888)',
        id: 'category1',
    },
    {
        category: 'Лен (888)',
        id: 'category2',
    },
    {
        category: 'Шерсть (888)',
        id: 'category3',
    },
    {
        category: 'Кашемир (888)',
        id: 'category4',
    },
    {
        category: 'Вискоза (888)',
        id: 'category5',
    },
    {
        category: 'Полиэстр (888)',
        id: 'category6',
    },
    {
        category: 'Нейлон (888)',
        id: 'category7',
    },
    {
        category: 'Шёлк (888)',
        id: 'category8',
    },
]

let category2 = [
    {
        category: 'Белый (888)',
        id: 'category9',
        color: ''
    },
    {
        category: 'Черно-белый (888)',
        id: 'category10',
        color: 'black-and-white'
    },
    {
        category: 'Бежевый (888)',
        id: 'category11',
        color: 'beige'
    },
    {
        category: 'Серый (888)',
        id: 'category12',
        color: 'grey'
    },
    {
        category: 'Зеленый (888)',
        id: 'category13',
        color: 'green'
    },
    {
        category: 'Пурпурный (888)',
        id: 'category14',
        color: 'purple'
    },
    {
        category: 'Мятный (888)',
        id: 'category15',
        color: 'mint'
    },
    {
        category: 'Мульти (888)',
        id: 'category16',
        color: 'multi'
    },
]

let category3 = [
    {
        category: '23/32 (888)',
        id: 'category17'
    },
    {
        category: '23/34 (888)',
        id: 'category18'
    },
    {
        category: '24/32 (888)',
        id: 'category19'
    },
    {
        category: '24/34 (888)',
        id: 'category20'
    },
    {
        category: '25 (888)',
        id: 'category21'
    },
    {
        category: '25/32 (888)',
        id: 'category22'
    },
    {
        category: '25/34 (888)',
        id: 'category23'
    },
    {
        category: '26 (888)',
        id: 'category24'
    },
]

let category4 = [
    {
        category: 'Демисезон (888)',
        id: 'category25'
    },
    {
        category: 'Весна - Лето (888)',
        id: 'category26'
    },
    {
        category: 'Осень - Зима (888)',
        id: 'category27'
    },
]

let category5 = [
    {
        category: 'Базовый (888)',
        id: 'category28'
    },
    {
        category: 'Деловой (888)',
        id: 'category29'
    },
    {
        category: 'Нарядный (888)',
        id: 'category30'
    },
    {
        category: 'Повседневный (888)',
        id: 'category31'
    },
    {
        category: 'Романтический (888)',
        id: 'category32'
    },
    {
        category: 'Сексуальный (888)',
        id: 'category33'
    },
    {
        category: 'Спортивный (888)',
        id: 'category34'
    },
    {
        category: 'Ультрамодный (888)',
        id: 'category35'
    },
]