import {sliderPointerTemplate} from "../common/sliderPointer.template";

export function createMain(data) {

  return `
      <div class="root">
          <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
              ${mainBackground(cards.first)}
              ${mainBackground(cards.second, 'bg-main2')}
            </div>
            
            <figure class="navigation-wrapper">
               <div class='box'>
                    ${card()}
               </div>
            </figure>
           
         </div>
        
      </div>
    `
}

function mainBackground(cardData, className = '') {
  const {title, description} = cardData
  return `
    <div class="swiper-slide">
    <div class='bg-main ${className}'>
      <div class='wrapper'>
        <div class='content'>
          <div class='bg ${className}'></div>
         
            
          
        </div>
      </div>
    </div>
  </div>
  `
}

function card(title = 'hello', description = 'hello') {
 return `
  <div class="swiper-slide">
    <h1 id="test">${title}</h1>
    <p>${description}</p>
    
    <div class="wrapper-navigation-button">
        <button class="box-button type="button">ПОДРОБНЕЕ</button>
        <div class="navigation">
            ${sliderPointerTemplate('main')}
        </div>
    </div>
    
  </div>
 `
}

const cards = {
  first:  { title: 'BLACK FRIDAY<br> <span style="font-weight: normal">СКИДКИ ДО</span> 70%*',
    description: '*Акция продлится с 27 НОЯБРЯ по 23:59 30 НОЯБРЯ 2020 г.'},
  second:  { title: 'Сезонная распродажа поднимет вам настроение этой осенью',
    description: '*Дизайнеры Counte предлогают вам гамму которая добавит в вашу осень ярчайших цветов и приятных оттенков.'},

}


