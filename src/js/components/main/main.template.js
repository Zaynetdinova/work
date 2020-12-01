import {sliderPointerTemplate} from "../common/sliderPointer.template";

export function createMain(data) {

  return `
<div class="root">
    <div class="swiper-container swiper-container1">
      <div class="swiper-wrapper">
        ${mainBackground(cards.first)}
        ${mainBackground(cards.second, 'bg-main2')}
      </div>
      
      <div class="navigation">
        ${sliderPointerTemplate('main')}
        </div>
   </div>

   
    
</div>

    `
}

function mainBackground(cardData, className = '') {
  const {title, description} = cardData
  return `
    <div class="swiper-slide ">
    <div class='bg-main ${className}'>
      <div class='wrapper'>
        <div class='content'>
          <div class='bg ${className}'></div>
         
            <div class='box'>


            
                    ${card(title, description)}
                 
  

             

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

const cards = {
  first:  { title: 'BLACK FRIDAY<br> СКИДКИ ДО 70%*',
    description: '*Акция продлится с 27 НОЯБРЯ по 23:59 30 НОЯБРЯ 2020 г.'},
  second:  { title: 'Сезонная распродажа поднимет вам настроение этой осенью',
    description: '*Дизайнеры Counte предлогают вам гамму которая добавит в вашу осень ярчайших цветов и приятных оттенков.'},

}


