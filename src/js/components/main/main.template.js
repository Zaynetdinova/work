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
                                <p>Дизайнеры Counte предлогают вам гамму которая добавит в вашу осень ярчайших цветов и приятных оттенков, не упустите свой шанс стать ярче.</p>
                                <div class="box-button">
                                    <button type="button">ПОДРОБНЕЕ</button>   
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
