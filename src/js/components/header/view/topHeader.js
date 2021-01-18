import {backCall} from "../../backСall/backСall.template";
import {entry} from "../../entry/entry.template";
import {restorePassword} from "../../restorePassword/restorePassword";
import {registration} from "../../registration/registration.template";

export function topHeader() {
    return `
        <div class='topHeader'>
            <div class='wrapper'>
                <div class='content'>
                    <nav>
                        <span class='span'>Оптовая торговля</span>
                        <article id="entry" class='lk_link'>Вход / Регистрация
                            ${entry()}
                            ${restorePassword()}
                            ${registration()}
                        </article>
                        
                        <a class='info' href='#'>О покупках
                            <div class="wrapper-tooltip"><div class="tooltip">${tooltip(buy)}</div></div>
                        </a>                
                       
                        <a class='info' href='#'>О магазине
                            <div class="wrapper-tooltip"><div class="tooltip">${tooltip(score)}</div></div>
                        </a>
                        <a class='info' href='#'>Сотрудничество
                            <div class="wrapper-tooltip"><div class="tooltip">${tooltip(cooperation)}</div></div>
                        </a>
                    </nav>
                    <nav>
                        <span>
                            <a href='tel:+74996088925'>8 (499) 608-89-25,</a>
                            <a class='lk_link2' href='tel:+78003012575'> (800) 301-25-75</a>
                        </span>
                        <article id="backCall" class='lk_link'>Заказать звонок
                            ${backCall()}
                        </article>
                    </nav>
                </div> 
            </div>
        </div>
    `
}

function tooltip(item) {
    const items = item.map((item) => {
        return `
            <div class="item">${item.title}</div>
        `
    })
    return `${items.join('')}`
}

const buy = [
    {
        title: 'Размеры'
    },
    {
        title: 'Доставка'
    },
    {
        title: 'Оплата'
    },
    {
        title: 'Ответы на вопросы'
    }
]

const score = [
    {
        title: 'О нас'
    },
    {
        title: 'Условия работы'
    },
    {
        title: 'Контакты'
    },
]

const cooperation = [
    {
        title: 'Поставщикам'
    },
]