import {sliderPointerTemplate} from "../common/sliderPointer.template";

export function createMain(data) {

  return `
<div class="root">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        ${mainBackground()}
        ${mainBackground('bg-main2')}
      </div>
      
      <div class="navigation">
        ${sliderPointerTemplate('main')}
    </div>
   </div>

   
    
</div>

    `
}

function mainBackground(className = '') {

  return `
    <div class="swiper-slide ">
    <div class='bg-main ${className}'>
      <div class='wrapper'>
        <div class='content'>
          <div class='bg'></div>
          <div class='banner-box'>
            <div class='box'>


              ${cards.map((item) => {
                const {title, description} = item
                  return `
                    ${card(title, description)}
                                   
                  `}).join('')}
  

             

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}

function card(title, description) {
 return `
  <div class="swiper-slide">
    <h1>${title}</h1>
    <p>${description}</p>
    <button class="box-button type="button">ПОДРОБНЕЕ</button>
  </div>
 `
}

const cards = [
  { title: 'Сезонная распродажа поднимет вам настроение этой осенью',
    description: 'Дизайнеры Counte предлогают вам гамму которая добавит в вашу осень ярчайших цветов и приятных оттенков.'},

]




// Сезонная распродажа поднимет вам настроение этой осенью
// Дизайнеры Counte предлогают вам гамму которая добавит в вашу <br> осень ярчайших цветов и приятных оттенков.
