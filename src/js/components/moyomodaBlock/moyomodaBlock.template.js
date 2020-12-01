import MOYOmoda from '../../../images/moyo/MOYOmoda.svg'
import {desktop} from "./view/desktop";
import {mobile} from "./view/mobile";


export function moyomodaBlock (data) {
  return `
    <section class="root">
        <div class="main-title">
            <div class="caption">БОЛЬШЕ БРЕНДОВ НА САЙТЕ ПАРТНЕРА</div>
            <img src=${MOYOmoda} alt="MOYOmoda">
        </div>
        
        ${desktop(data)}
        
        ${mobile(data)}
        
    </section>
   `
}
