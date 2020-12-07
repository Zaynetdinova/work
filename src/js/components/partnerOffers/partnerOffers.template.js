import {categoriesTitle} from "../common/categoriesTitle";
import img1 from '../../../images/offers/img1.png'
import img2 from '../../../images/offers/img2.png'
import img3 from '../../../images/offers/img3.png'
import img4 from '../../../images/offers/img4.png'



export function partnerOffers() {

    return ` 
    <section class="root">    
        ${categoriesTitle('ПРЕДЛОЖЕНИЯ ОТ ПАРТНЕРОВ')}
        <div class="img-offers">
            <div class="card">
                <img src=${img1} alt="" width="100%" height="100%">
                <title>Женская одежда</title>              
            </div>
            <div class="card">
                <img src=${img2} alt=""  width="100%" height="100%">
                <title>Женская одежда</title>              
            </div>
            <div class="card">
                <img src=${img3} alt=""  width="100%" height="100%">
                <title>Женская одежда</title>              
            </div>
            <div class="card">
                <img src=${img4} alt=""  width="100%" height="100%">
                <title>Женская одежда</title>              
            </div>
        </div>
    </section>
        
    `
}