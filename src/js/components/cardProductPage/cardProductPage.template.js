import {viewPhotosBlock, viewPhotosBlockMobile} from './view/viewPhotosBlock'
import {buttonProduct} from "../common/buttonProduct";
import {star} from "./view/star";
import {favorites} from "../common/favorites";
import {goodStock, transitionBrand} from "./view/transitionBrand";
import {priceContent} from "../common/priceContent";
import {infoProduct} from "../common/infoProduct";
import {socialProduct} from "./view/socialProduct";
import {anotherColor} from "./view/anotherColor";
import {infoTable} from "../common/infoTable";
import {attention} from "./view/attention";
import {descriptionModule} from "../common/description";
import {dopInfo} from "./view/dopInfo";
import {form} from "./view/form";
import {commonCard} from "../common/commonCard/commonCards";
import {socialNetworks} from '../../core/utils/social'
import {breadCrumbsProduct} from './view/breadCrumbsProduct'

export function cardProductPageTemplate(
	cards = [],
	cards2 = [],
	testColor = [],
	testInfo = [],
	title) {
	return `
		<div class="root">
			
			${breadCrumbsProduct(title)}
			
			<div class="wrapper">
			
				<section class="photos">
					${viewPhotosBlock()}
					${viewPhotosBlockMobile()}
				</section>
				
				<section class="product-description">
					<div class="first-line">
						<div class="right-wrap">
							<div class="wrapper-button-new">
								${buttonProduct('Новинка')}
							</div>
														
							${star()}
							
						</div>
						
						${favorites()}
						
					</div>
					
					${transitionBrand(brand)}
					
					${goodStock('товар в наличии', '16')}
					
					<div class="price">${priceContent('1 234,00 ₽', '-234,00 ₽', '1 234,00 ₽', true)}</div>
					
					<div class="info">
						<div class="info-1">${infoProduct(testInfo)}</div>
						
						<div class="wrapper-right-info">
							<div class="social">${socialProduct(socialNetworks)}</div>
							<div class="buttonAnotherGoods">Другие товары этого бренда</div>
						</div>
						
					</div>
					<div class="wrapper-another-color">
						${anotherColor(testColor)}
					</div>
					
					${infoTable(table)}
					
					<div class="wrapper-attention">
						${attention()}
						</div>
					
					${descriptionModule()}
					
					<div class="wrapper-dop-info">
						${dopInfo()}
					</div>
					
					${form()}
				</section>
				
			</div>
		</div>
		
		<div class="wrapper-card">
			${commonCard(cards, 'price')}
			${commonCard(cards2, 'price')}
		</div>
	`
}



let brand = [
	{
		brand: 'Vittoria Vicci',
		category: 'Платье'
	}
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
	{
		titleTable: 'Цена',
		id: 'col3'
	},
]




