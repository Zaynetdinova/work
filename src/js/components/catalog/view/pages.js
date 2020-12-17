import arrow from "../../../../images/icons/arrow2.svg"
import popular from '../../../../images/icons/popular.svg'

export function Pages() {

    return `
    <div class="common">
        <article class="pages" id="number-of-cards-per-page-js">
            <div class="select">
                <div class="page-title" >На странице</div>
                <img class="arrow" src="${arrow}" alt="">
            </div>
        
            <span>100</span>                            
        </article>
        <div class="Q">${q(item)}</div>        
    </div>
         
    `
}


function q(item) {
    const items = item.map((item) => {
        return `
            <div class="openPage">
                <div class="q">${item.number}</div>
                <div class="line"></div>
            </div>	
        `
    })
    return `${items.join('')}`
}


export function Popular() {
    return `
        <div class="common">
            <article class="pages" id="filter-by">
                <div class="select">
                    <div class="wrap">
                        <img src="${popular}" alt="">
                        <div class="page-title">Популярные</div>
                    </div>
                    <img class="arrow" src="${arrow}" alt="">
                </div>
            </article>  
            <div class="Q">${q(sort)}</div>   
        </div>     
    `
}

let item = [
    {
        number: 60
    },
    {
        number: 100
    }
]


let sort = [
    {
        number: 'Наш выбор'
    },
    {
        number: 'Дешёвые'
    },
    {
        number: 'Дорогие'
    },
    {
        number: 'Новые'
    },
    {
        number: 'Старые'
    },
    {
        number: 'Скидки'
    },
    {
        number: 'Акции'
    },
    {
        number: 'Популярные'
    },
]

