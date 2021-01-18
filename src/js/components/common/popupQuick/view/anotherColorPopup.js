export function anotherColorPopup(item) {
    return `
    <div id="popup-another-color-js-test" class="anotherColor">
        <section id="another-color" class="wrapper-title-dots">
            <div class="title">Доступные цвета</div>
            <div class="slider-pointer">${r()}</div>
        </section>
       
        <article id="another-color-popup-js" class="swiper-container another-photo-mobile-2">
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

// problem
function r () {
    return `
    <div class="dots">
        <span class="dots-bestseller active"></span>
        <span class="dots-bestseller"></span>
        <span class="dots-bestseller"></span>
        <span class="dots-bestseller"></span>
    </div>
  `
}