import {viewPhotosBlock} from './view/viewPhotosBlock'
import {transitionTitleProduct} from "./view/transitionTitleProduct";
import {buttonProduct} from "./view/buttonProduct";
import {star} from "./view/star";
import img1 from '../../../images/icons/star.svg'
import img2 from '../../../images/icons/star_empty.svg'
import vk from '../../../images/social/vk.svg'
import fb from '../../../images/social/facebook.svg'
import tw from '../../../images/social/tvitter.svg'
import pen from '../../../images/social/pen.svg'
import mail from '../../../images/social/mail.svg'
import od from '../../../images/social/odnoklassniki.svg'
import {favorites} from "./view/favorites";
import {goodStock, transitionBrand} from "./view/transitionBrand";
import {priceContent} from "../common/commonCard/priceContent";
import {infoProduct} from "./view/infoProduct";
import {socialProduct} from "./view/socialProduct";

export function cardProductPageTemplate() {
	return `
		<div class="root">
			${transitionTitleProduct(productCategory)}
			<div class="wrapper">
				<section class="photos">
					${viewPhotosBlock()}
				</section>
				<section class="product-description">
					<div class="first-line">
						<div class="right-wrap">
							<div style="margin-right: 12px">${buttonProduct('Новинка')}</div>							
							${star(starItem)}
						</div>
						${favorites()}
					</div>
					${transitionBrand(brand)}
					${goodStock()}
					<div class="price">${priceContent('1 234,00 ₽', '-234,00 ₽', '1 234,00 ₽', true)}</div>
					<div class="info">
						<div>${infoProduct(info)}</div>
						<div>
							<div class="social">${socialProduct(social)}</div>
							<div class="buttonAnotherGoods">${buttonProduct('Другие товары этого бренда')}</div>
						</div>
					</div>		
				</section>
			</div>
			
			<div>
			 <h1>вы недавно смотрели</h1>
			</div>
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

let starItem = [
	{
		star: img1,
		starEmpty: img2
	}
]

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

let social = [
	{
		img: vk,
	},
	{
		img: fb,
	},
	{
		img: tw,
	},
	{
		img: pen,
	},
	{
		img: mail,
	},
	{
		img: od,
	},
]