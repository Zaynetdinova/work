import {viewPhotosBlock, viewPhotosBlockMobile} from './view/viewPhotosBlock'
import {transitionTitleProduct} from "./view/transitionTitleProduct";
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

export function cardProductPageTemplate(
	cards = [],
	cards2 = [],
	testColor = [],
	testInfo = []) {
	return `
		<div class="root">
			
			${transitionTitleProduct(productCategory)}
			
			<div class="wrapper">
			
				<section class="photos">
					${viewPhotosBlock()}
					${viewPhotosBlockMobile()}
				</section>
				
				<section class="product-description">
					<div class="first-line">
						<div class="right-wrap">
							<div class="wrapper-button-new">${buttonProduct('Новинка')}</div>							
							${star()}
						</div>
						${favorites()}
					</div>
					${transitionBrand(brand)}
					${goodStock()}
					<div class="price">${priceContent('1 234,00 ₽', '-234,00 ₽', '1 234,00 ₽', true)}</div>
					<div class="info">
						<div class="info-1">${infoProduct(testInfo)}</div>
						<div style="margin-bottom: 4px;">
							<div class="social">${socialProduct(social)}</div>
							<div class="buttonAnotherGoods">${buttonProduct('Другие товары этого бренда')}</div>
						</div>
					</div>
					<div class="wrapper-another-color">${anotherColor(testColor)}</div>
					${infoTable(table)}
					<div class="wrapper-attention">${attention()}</div>
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

let productCategory = [
	{
		link: '/#categories',
		title: 'Женщинам',
		titleCategory: 'Платья',
		linkCategory: '/#catalog',
		titleType: 'Тип платья',
		titleProduct: 'Наименование товара',
		linkProduct: '/#card-product',
		linkType: '/#catalog',
	}
]



let brand = [
	{
		brand: 'Vittoria Vicci',
		category: 'Платье'
	}
]

let social = [
	{
		class: 'vk',
		href: 'https://vk.com/optmoyo'
	},
	{
		class: 'fb',
		href: 'https://www.facebook.com/OptMoyo.Ru/'
	},
	{
		class: 'tw',
		href: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Foptmoyo.ru%2Fproduct%2F288461&text=%D0%9F%D0%B8%D0%B6%D0%B0%D0%BC%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%B5%D0%BA%20Archi%20288461%20%7C%20Optmoyo.ru'
	},
	{
		class: 'pen',
		href: 'https://www.livejournal.com/update.bml?event=https:%2F%2Foptmoyo.ru%2Fproduct%2F288461&subject=%D0%9F%D0%B8%D0%B6%D0%B0%D0%BC%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%B5%D0%BA%20Archi%20288461%20%7C%20Optmoyo.ru'
	},
	{
		class: 'mail',
		href: 'https://connect.mail.ru/share?url=https%3A%2F%2Foptmoyo.ru%2Fproduct%2F288461&title=%D0%9F%D0%B8%D0%B6%D0%B0%D0%BC%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%B5%D0%BA%20Archi%20288461%20%7C%20Optmoyo.ru&description=%D0%9F%D0%B8%D0%B6%D0%B0%D0%BC%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B8%20%D0%B8%D0%B7%20%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B8%20%D0%B8%20%D1%88%D0%BE%D1%80%D1%82%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B0%20%D0%B8%D0%B7%20%D1%82%D0%BE%D0%BD%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%85%D0%BB%D0%BE%D0%BF%D0%BA%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D0%BF%D0%BE%D0%BB%D0%BE%D1%82%D0%BD%D0%B0.%20%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0%20%D1%81%20%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%BC%D0%B8%20%D1%80%D1%83%D0%BA%D0%B0%D0%B2%D0%B0%D0%BC%D0%B8%20%D1%83%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B0%20%D0%BC%D0%B8%D0%BB%D1%8B%D0%BC%20%7C%20Optmoyo.ru&imageurl=https%3A%2F%2Fcdn2.moyo.moda%2Fws%2Fmain%2F154x231%2F288461.webp'
	},
	{
		class: 'od',
		href: 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.deprecated=1&st.shareUrl=https%3A%2F%2Foptmoyo.ru%2Fproduct%2F288461&st.comments=%D0%9F%D0%B8%D0%B6%D0%B0%D0%BC%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%B5%D0%BA%20Archi%20288461%20%7C%20Optmoyo.ru'
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
	{
		titleTable: 'Цена',
		id: 'col3'
	},
]




