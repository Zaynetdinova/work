import {star} from "./star";

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
            <article id="show-form-js" class="button">Написать отзыв / вопрос</article>
                
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

