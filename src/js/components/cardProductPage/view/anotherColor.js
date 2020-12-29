import {r} from "../../common/commonCard/commonCardHeader";

export function anotherColor(item) {
    return `
    <div class="anotherColor">
        <section id="another-color" class="wrapper-title-dots">
            <div class="title">Выберите другой цвет</div>
            <div class="slider-pointer">${r()}</div>
        </section>
       
        <article id="another-color-js" class="swiper-container another-photo-mobile">
            <div class="swiper-wrapper">
                ${anotherPhoto(item)}
            </div>
        </article>
       
    </div>
    `
}


function anotherPhoto(item) {

    const items = item.map((item) => {
        return `
            <img data-color="color-number" class="swiper-slide ${item.classColor} color-card-product-js" src="${item.photo}" alt="">     
        `
    })
    return `${items.join('')}`
}