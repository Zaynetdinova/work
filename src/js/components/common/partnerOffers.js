import {categoriesTitle} from "../common/categoriesTitle";
import img1 from '../../../images/offers/img1.png'
import img2 from '../../../images/offers/img2.png'
import img3 from '../../../images/offers/img3.png'
import img4 from '../../../images/offers/img4.png'


export function partnerOffers() {

    return ` 
    <section class="root"> 
        <div class="wrap-categoriesTitle">  
            ${categoriesTitle('ИНТЕРЕСНЫЕ ПРЕДЛОЖЕНИЯ')}
        </div> 
        <div class="img-offers">
            <div class="card">
                <div class="img-wrap-offers">
                    <img class="img" src=${img1} alt="" width="100%" height="100%">
                </div>               
                          
            </div>
            <div class="card">
                <div class="img-wrap-offers">
                    <img class="img" src=${img2} alt=""  width="100%" height="100%">
                </div>
                         
            </div>
            <div class="card">
                <div class="img-wrap-offers">
                    <img class="img" src=${img3} alt=""  width="100%" height="100%">
                </div>
           
            </div>
            <div class="card">
                <div class="img-wrap-offers">
                    <img class="img" src=${img4} alt=""  width="100%" height="100%">
                </div>
                   
            </div>
        </div>
    </section>
        
    `
}
