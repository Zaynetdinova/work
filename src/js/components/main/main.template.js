import {sliderPointerTemplate} from "../common/sliderPointer.template";

export function createMain(data) {

  return `
      <div class="root">
          <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
              ${mainBackground()}
              ${mainBackground('bg-main2')}
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

function mainBackground(className = '') {
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

function card() {
 return `
  <div class="swiper-slide">
    <h1 id="title"></h1>
    <p id="description"></p>
    
    <div class="wrapper-navigation-button">
        <button class="box-button" type="button">ПОДРОБНЕЕ</button>
        <div class="navigation">
            ${sliderPointerTemplate('main')}
        </div>
    </div>
    
  </div>
 `
}


