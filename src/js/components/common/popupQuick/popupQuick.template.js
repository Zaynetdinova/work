import {favorites} from "../favorites";
import {priceContent} from "../priceContent";
import {infoProduct} from "../infoProduct";
import saleBtn  from '../../../../images/icons/sale_btn.svg'
import {descriptionModule} from "../description";
import {buttonProduct} from "../buttonProduct";
import {viewPhotosBlockPopup} from "./view/viewPhotosBlockPopup";
import {anotherColorPopup} from "./view/anotherColorPopup";
import {popupSizes} from "../infoTable";
import {goodStock, transitionBrand} from '../../cardProductPage/view/transitionBrand'
import {star} from '../../cardProductPage/view/star'

export function popupQuickTemplate(color, info, brand) {
	return `
    <div id="popup-js" class="root">
        <div class="main-popup">
            <div style="display: flex; justify-content: space-between;">
                <section class="photos">
                    ${viewPhotosBlockPopup()}
                </section>
                <section class="product-description">
                    <div class="first-line">
                        <div class="wrapper-button-new"><img src="${saleBtn}" alt=""></div>		
                        <div class="wrapper-close-like">
							${favorites()}
							 <div class="close-quick" id="close-popup"></div>
						</div>					
                    </div>
                    ${transitionBrand(brand)}
                     <div class="wrapper-star-goodStock">
						<div class="star-popup">${star()}</div>
						${goodStock()}
            		</div>
                    <div class="price">${priceContent('1 234,00 ₽', '-234,00 ₽', '1 234,00 ₽', true)}</div>
                    <div class="info">
                        <div class="info-1">${infoProduct(info)}</div>
                        <div class="buttonAnotherGoods" id="close-popup-quick-button-js">
							${buttonProduct('На страницу с товаром','/#card-product')}
						</div>	
                    </div>
                    <div class="wrapper-description">${descriptionModule()}</div>
                    <div class="wrapper-another-color">${anotherColorPopup(color)}</div>
                </section>
            </div>
            
            <div class="wrapper-infoTable">
                ${popupSizes()}
            </div>
        </div>        
    </div>  
    `
}