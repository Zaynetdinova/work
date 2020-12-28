import {r} from "../../common/commonCard/commonCardHeader";

export function anotherColor(item) {
    return `
    <div class="anotherColor">
        <section class="wrapper-title-dots">
            <div class="title">Выберите другой цвет</div>
            <div class="slider-pointer">${r()}</div>
        </section>
       
        <section class="swiper-container another-photo-mobile">
            <div class="swiper-wrapper">
                ${anotherPhoto(item)}
            </div>
        </section>
       
    </div>
    `
}


function anotherPhoto(item) {

    const items = item.map((item) => {
        return `
            <img class="swiper-slide" src="${item.photo}" alt="">     
        `
    })
    return `${items.join('')}`
}