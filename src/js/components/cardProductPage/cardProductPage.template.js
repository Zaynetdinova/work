import {viewPhotosBlock, viewPhotosBlockMobile} from './view/viewPhotosBlock'
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
import photo1 from '../../../images/cardProduct/photo1.png'
import photo2 from '../../../images/cardProduct/photo2.png'
import {favorites} from "./view/favorites";
import {goodStock, transitionBrand} from "./view/transitionBrand";
import {priceContent} from "../common/commonCard/priceContent";
import {infoProduct} from "./view/infoProduct";
import {socialProduct} from "./view/socialProduct";
import {anotherColor} from "./view/anotherColor";
import {infoTable} from "./view/infoTable";
import {attention} from "./view/attention";
import {descriptionModule} from "./view/description";
import {dopInfo} from "./view/dopInfo";
import {form} from "./view/form";
import {commonCard} from "../common/commonCard/commonCards";
import img3 from "../../../images/bestsellers/1/img3.png";
import img4 from "../../../images/bestsellers/1/img4.png";
import img5 from "../../../images/bestsellers/1/img5.png";
import img6 from "../../../images/bestsellers/1/img6.png";

export function cardProductPageTemplate() {
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
							${star(starItem)}
						</div>
						${favorites()}
					</div>
					${transitionBrand(brand)}
					${goodStock()}
					<div class="price">${priceContent('1 234,00 ₽', '-234,00 ₽', '1 234,00 ₽', true)}</div>
					<div class="info">
						<div class="info-1">${infoProduct(info)}</div>
						<div>
							<div class="social">${socialProduct(social)}</div>
							<div class="buttonAnotherGoods">${buttonProduct('Другие товары этого бренда')}</div>
						</div>
					</div>
					<div class="wrapper-another-color">${anotherColor(color)}</div>
					${infoTable(table)}
					<div class="wrapper-attention">${attention()}</div>
					${descriptionModule()}
					<div class="wrapper-dop-info">${dopInfo()}</div>
					${form()}
				</section>
			</div>
		</div>
		<div class="wrapper-card">
			${commonCard(woman2, 'price')}
			${commonCard(woman, 'price')}
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

let color = [
	{
		photo: photo1
	},
	{
		photo: photo2
	},
	{
		photo: photo1
	},
	{
		photo: photo1
	},
	{
		photo: photo1
	},
	{
		photo: photo1
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
	title: 'Вам может понравиться',
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
			sale: true
		},
		{
			id: 'woman2',
			img: img4,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'woman3',
			img: img3,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'woman4',
			img: img4,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'woman5',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'woman6',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
	],
}

const woman2 = {
	title: 'Вы недавно смотрели',
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
			sale: true
		},
		{
			id: 'test2',
			img: img6,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'test3',
			img: img3,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'test4',
			img: img4,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'test5',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'test6',
			img: img6,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'test7',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'test8',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
	],
}


