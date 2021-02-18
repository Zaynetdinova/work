export function topHeader() {
    return `
        <div class='topHeader'>
            <div class='wrapper'>
                <div class='content'>
                    <nav>
                        <span class='span'>Оптовая торговля</span>
                        <article id="entry-registration-button-js" class='lk_link'>Вход / Регистрация</article>
                        
                        <div class='info'>О покупках
                            <div class="wrapper-tooltip"><div class="tooltip">${tooltip(buy)}</div></div>
                        </div>                
                       
                        <div class='info'>О магазине
                            <div class="wrapper-tooltip"><div class="tooltip">${tooltip(score)}</div></div>
                        </div>
                        <div class='info'>Сотрудничество
                            <div class="wrapper-tooltip"><div class="tooltip">${tooltip(cooperation)}</div></div>
                        </div>
                    </nav>
                    <nav>
                        <span>
                            <a href='tel:+74996088925'>8 (499) 608-89-25,</a>
                            <a class='lk_link2' href='tel:+78003012575'>8 (800) 301-25-75</a>
                        </span>
                        <article class='lk_link backCall-js'>Заказать звонок</article>
                    </nav>
                </div> 
            </div>
        </div>
    `
}

function tooltip(item) {
    const items = item.map((item) => {
        return `
            <a href="${item.link}" class="item">${item.title}</a>
            <div class="tooltip-line"></div>
        `
    })
    return `${items.join('')}`
}

const buy = [
    {
        title: 'Размеры',
        link: '/#information/size'
    },
    {
        title: 'Доставка',
        link: '/#information/about-shopping'
    },
    {
        title: 'Оплата',
        link: '/#information/about-payment'
    },
    {
        title: 'Ответы на вопросы',
        link: '/#information/question-answers'
    },
    {
        title: 'Возврат',
        link: '/#information/return'
    }
]

const score = [
    {
        title: 'О нас',
        link: '/#information/about-us'
    },
    {
        title: 'Контакты',
        link: '/#information/contacts'
    },
]

const cooperation = [
    {
        title: 'Поставщикам',
        link: '/#information/cooperation'
    },
    {
        title: 'Условия работы',
        link: '/#information/working-condition'
    },
]