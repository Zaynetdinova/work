// import {goodStock, transitionBrand} from "../cardProductPage/view/transitionBrand";
// import {star} from "../cardProductPage/view/star";
import close from '../../../../images/icons/close_popup.svg'
import {favorites} from "../../common/favorites";
import {priceContent} from "../../common/commonCard/priceContent";
import {infoProduct} from "../../common/infoProduct";
import photo1 from "../../../../images/cardProduct/photo1.png";
import photo2 from "../../../../images/cardProduct/photo2.png";
import saleBtn  from '../../../../images/icons/sale_btn.svg'
import {descriptionModule} from "../../common/description";
import {buttonProduct} from "../../common/buttonProduct";
import {viewPhotosBlockPopup} from "./view/viewPhotosBlockPopup";
import {anotherColorPopup} from "./view/anotherColorPopup";
import {infoTable} from '../../common/infoTable'
import {goodStock, transitionBrand} from '../../cardProductPage/view/transitionBrand'
import {star} from '../../cardProductPage/view/star'

export function popupQuickTemplate() {
	return `
    <div id="popup-js" class="root">
        <div class="header-popup">
            <div class="wrapper-header">
                ${transitionBrand(brand)}
                <img id="close-popup" src="${close}" alt="">
            </div>
            <div class="wrapper-star-goodStock">
                <div class="star-popup">${star()}</div>
                ${goodStock()}
            </div>
        </div>
        <div class="main-popup">
            <div style="display: flex; justify-content: space-between;">
                <section class="photos">
                    ${viewPhotosBlockPopup()}
                </section>
                <section class="product-description">
                    <div class="first-line">
                        <div class="wrapper-button-new"><img src="${saleBtn}" alt=""></div>							
                        ${favorites()}
                    </div>
                    <div class="price">${priceContent('1 234,00 ₽', '-234,00 ₽', '1 234,00 ₽', true)}</div>
                    <div class="info">
                        <div class="info-1">${infoProduct(info)}</div>
                        <div class="buttonAnotherGoods">${buttonProduct('На страницу с товаром')}</div>	
                    </div>
                    ${descriptionModule()}
                    <div class="wrapper-another-color">${anotherColorPopup(color)}</div>
                </section>
            </div>
            <div class="wrapper-infoTable">
                ${infoTable(table)}
                <div class="no-title">${infoTable(table)}</div>
            </div>
        </div>        
    </div>  
    `
}

// ${buttonProduct('Новинка')}
let brand = [
	{
		brand: 'Vittoria Vicci',
		category: 'Платье'
	}
]
let info = [
	{
		infoType: 'Арт:',
		infoResult: '1-20-2-2-02-52291'
	},
	{
		infoType: 'ID:',
		infoResult: '247355'
	},
	{
		infoType: 'Цвет:',
		infoResult: 'Коричневый'
	},
	{
		infoType: 'Состав:',
		infoResult: '100% Полиэстер'
	},
	{
		infoType: 'Сезон:',
		infoResult: 'Весна-Лето'
	},
]

let color = [
	{
		photo: photo1,
		classColor: 'active-color'
	},
	{
		photo: photo2,
		classColor: ''
	},
	{
		photo: photo1,
		classColor: ''
	},
	{
		photo: photo1,
		classColor: ''
	},
	{
		photo: photo1,
		classColor: ''
	},
	{
		photo: photo1,
		classColor: ''
	},
]
let table = [
	{
		titleTable: 'Размер',
		id: 'col1'
	},
	{
		titleTable: 'Количество',
		id: 'col2'
	},
]