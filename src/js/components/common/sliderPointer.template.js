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
  console.log(className)
  return `
        <div class='slider-pointer  ${className}'>
            <div class='left swiper-button-prev-main'></div> 
             <div class="swiper-pagination"></div>
            <div class='right swiper-button-next-main'></div>
        </div>
    `
}
//
// <div data-dots-test class="dots">
//   <span data-dots1 class="dots-bestseller active"></span>
//   <span data-dots2 class="dots-bestseller"></span>
//   <span data-dots3 class="dots-bestseller"></span>
//   <span data-dots4 class="dots-bestseller"></span>
//   <span data-dots5 class="dots-bestseller"></span>
//   </div>
