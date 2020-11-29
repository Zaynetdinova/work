import {sliderPointerTemplate} from "../common/sliderPointer.template";

export function createMain(data) {

  return `
        <div class='main'>
            <div class='bg-main'>
                <div class='wrapper'>
                    <div class='content'>
                        <div class='bg'></div>
                        <div class='banner-box'>
                            <div class='box'>
                            
                            <div class="swiper-container">
                               <div class="swiper-wrapper">
                                  ${cards.map((item) => {
                                    const {title, description} = item
                                    return `
                                   
                                      ${card(title, description)}
                                   
                                    `
                                  }).join('')}
                                </div>
                            </div>
                            ${sliderPointerTemplate('main')}  
                              
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
    <div class="box-button">
    <div style="display: flex">
        <button type="button">ПОДРОБНЕЕ</button>
        <div class='right'></div> 
        </div>
         
    </div>
  </div>
 `
}

const cards = [
  { title: 'Сезонная распродажа поднимет вам настроение этой осенью',
    description: 'Дизайнеры Counte предлогают вам гамму которая добавит в вашу осень ярчайших цветов и приятных оттенков.'},
  { title: 'Super',
    description: 'description.'},
]


// Сезонная распродажа поднимет вам настроение этой осенью
// Дизайнеры Counte предлогают вам гамму которая добавит в вашу <br> осень ярчайших цветов и приятных оттенков.
