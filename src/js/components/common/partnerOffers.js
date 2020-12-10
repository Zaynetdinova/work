import {categoriesTitle} from "../common/categoriesTitle";
import img1 from '../../../images/offers/img1.png'
import img2 from '../../../images/offers/img2.png'
import img3 from '../../../images/offers/img3.png'
import img4 from '../../../images/offers/img4.png'
import {button} from "./button";



export function partnerOffers() {

    return ` 
    <section class="root"> 
        <div class="wrap-categoriesTitle">  
            ${categoriesTitle('ПРЕДЛОЖЕНИЯ ОТ ПАРТНЕРОВ')}
        </div> 
        <div class="img-offers">
            <div class="card">
                <div class="img-wrap-offers">
                    <img class="img" src=${img1} alt="" width="100%" height="100%">
                </div>               
                <div class="text-offers">
                    <div class="category-dress">Женская одежда</div>
                    <div class="button-wrap-offers">
                        ${button('На сайт партнера')}
                    </div>
                </div>            
            </div>
            <div class="card">
                <div class="img-wrap-offers">
                    <img class="img" src=${img2} alt=""  width="100%" height="100%">
                </div>
                <div class="text-offers">
                    <div class="category-dress">Верхняя одежда</div>
                    <div class="button-wrap-offers">
                        ${button('На сайт партнера')}
                    </div>
                </div>              
            </div>
            <div class="card">
                <div class="img-wrap-offers">
                    <img class="img" src=${img3} alt=""  width="100%" height="100%">
                </div>
                <div class="text-offers">
                    <div class="category-dress">Одежда для девочек</div>
                    <div class="button-wrap-offers">
                        ${button('На сайт партнера')}
                    </div>
                </div>             
            </div>
            <div class="card">
                <div class="img-wrap-offers">
                    <img class="img" src=${img4} alt=""  width="100%" height="100%">
                </div>
                <div class="text-offers">
                    <div class="category-dress">Одежда для мальчиков</div>
                    <div class="button-wrap-offers">
                        ${button('На сайт партнера')}
                    </div>
                </div>             
            </div>
        </div>
    </section>
        
    `
}