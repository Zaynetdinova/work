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
                                <h1>Сезонная распродажа поднимет вам настроение этой осенью</h1>
                                
                                <p>Дизайнеры Counte предлогают вам гамму которая добавит в вашу осень ярчайших цветов и приятных оттенков.</p>
                                <div class="box-button">
                                <div style="display: flex">
                                    <button type="button">ПОДРОБНЕЕ</button>
                                    <div class='right'></div> 
                                    </div>
                                    ${sliderPointerTemplate('main')}   
                                </div>
                             </div>                                                  
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    `
}

// Сезонная распродажа поднимет вам настроение этой осенью
// Дизайнеры Counte предлогают вам гамму которая добавит в вашу <br> осень ярчайших цветов и приятных оттенков.