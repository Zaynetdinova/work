import arrow from "../../../../images/icons/arrow2.svg"
import popular from '../../../../images/icons/popular.svg'

export function Pages() {
    return `
        <div class="pages">
            <div class="select">
                <div class="page-title">На странице</div>
                <img class="arrow" src="${arrow}" alt="">
            </div>
        
            <span>100</span>
        </div>
    `
}


export function Popular() {
    return `
        <div class="pages">
            <div class="select">
                <div class="wrap">
                    <img src="${popular}" alt="">
                    <div class="page-title">Популярные</div>
                </div>
                <img class="arrow" src="${arrow}" alt="">
            </div>
        </div>
    `
}