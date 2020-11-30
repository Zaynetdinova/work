export function sliderPointerTemplate(className = '') {
    return `
        <div class='slider-pointer ${className}'>
            <div class='left swiper-button-prev-main'></div> 
            <div class="swiper-pagination"></div>
            
            <div class='right swiper-button-next-main'></div>
        </div>
    `
}

// <div class="ellipse-wrapper">
//     <span class='ellipse_main'></span>
//     <span class='ellipse'></span>
//     <span class='ellipse'></span>
//     <span class='ellipse'></span>
// </div>