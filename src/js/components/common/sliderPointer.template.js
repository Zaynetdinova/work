export function sliderPointerTemplate(className = '', type = '') {
    return `
        <div class='slider-pointer ${className} ${type}'>
            <div class='left swiper-button-prev-main'></div> 
            <div class="swiper-pagination"></div>
            <div class='right swiper-button-next-main'></div>
        </div>
    `
}
