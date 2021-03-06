
export function menuCategoriesTemplate(item) {
    const items = item.map((item) => {
        return `           
            <a class="wrapper swiper-slide" href="${item.link}">
                <img class="logo" src="${item.img}" alt="">
                <div class="title">${item.title}</div>
            </a>               
        `
    })
    return `
    <div data-slider-1024-menu-js class="swiper-container">
        <div class="swiper-wrapper">
            ${items.join('')}
        </div>
    </div>
    
    
    `
}