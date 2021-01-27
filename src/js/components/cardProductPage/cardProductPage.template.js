import {viewPhotosBlock, viewPhotosBlockMobile} from './view/viewPhotosBlock'
import {transitionTitleProduct} from "./view/transitionTitleProduct";
import {buttonProduct} from "../common/buttonProduct";
import {star} from "./view/star";
import vk from '../../../images/social/vk.svg'
import fb from '../../../images/social/facebook.svg'
import tw from '../../../images/social/tvitter.svg'
import pen from '../../../images/social/pen.svg'
import mail from '../../../images/social/mail.svg'
import od from '../../../images/social/odnoklassniki.svg'
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


const woman = {
	title: 'Вы недавно смотрели',
	_id: 'product2',
	data: [
		{
			id: 'woman1',
			img: img3,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			banner: 'НОВИНКА',
			bannerPosition: 'bottom',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'woman2',
			img: img4,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'woman3',
			img: img3,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'woman4',
			img: img4,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'woman5',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'woman6',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
	],
}

const woman2 = {
	title: 'Вам может понравиться',
	_id: 'product',
	data: [
		{
			id: 'test1',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			banner: 'НОВИНКА',
			bannerPosition: 'bottom',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'test2',
			img: img6,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'test3',
			img: img3,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'test4',
			img: img4,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'test5',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'test6',
			img: img6,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'test7',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
		{
			id: 'test8',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true,
			size: [
				'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
			],
		},
	],
}

