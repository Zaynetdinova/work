export function sliderPointerTemplate(className = '', type = '') {
    return `
        <div class='slider-pointer ${className} ${type}'>
            <div class='left swiper-button-prev-main'></div> 
            <div class="swiper-pagination"></div>
            <div class='right swiper-button-next-main'></div>
        </div>
    `
}

export function sliderPointerTemplateTest(className = '', type = '') {
  return `
        <div class='slider-pointer'>
            <div class='left swiper-button-prev-main'></div> 
             <div class="dots">
                  <span class="dots-bestseller active"></span>
                  <span class="dots-bestseller"></span>
                  <span class="dots-bestseller"></span>
                  <span class="dots-bestseller"></span>
              </div>
            <div class='right swiper-button-next-main'></div>
        </div>
    `
}
