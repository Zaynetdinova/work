import {bannerCard} from "./view/bannerCard";
import {bannerBackground} from "./view/bannerBackground";

export function bannerTemplate() {
  return `
      <div class="root">
          <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
              ${bannerBackground()}
              ${bannerBackground('bg-main2')}
            </div>
            
            <figure class="navigation-wrapper">
               <div class='box'>
                    ${bannerCard()}
               </div>
            </figure>       
         </div>       
      </div>
    `
}




