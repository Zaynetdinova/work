import {commonCard} from '../common/commonCard/commonCards'
import {categoriesMenuSidebar} from '../common/categoriesMenuSidebar'

import video from '../../../video/1.mp4'
import {partnerOffers} from '../common/partnerOffers'
import {titleWrapper, transitionWrapper} from '../common/transitionTitle'
import {IconImg} from "../common/icon";
import img1 from "../../../images/Categories/woman/img1.svg";
import img2 from "../../../images/Categories/woman/img2.svg";
import img3 from "../../../images/Categories/woman/img3.svg";
import img4 from "../../../images/Categories/woman/img4.svg";
import img5 from "../../../images/Categories/woman/img5.svg";
import img6 from "../../../images/Categories/woman/img6.svg";
import img7 from "../../../images/Categories/woman/img7.svg";
import img8 from "../../../images/Categories/woman/img8.svg";
import img9 from "../../../images/Categories/woman/img9.svg";
import img10 from "../../../images/Categories/woman/img10.svg";
import img11 from "../../../images/Categories/woman/img11.svg";
import img12 from "../../../images/Categories/woman/img12.svg";
import img13 from "../../../images/Categories/woman/img13.svg";
import img14 from "../../../images/Categories/woman/img14.svg";
import img15 from "../../../images/Categories/woman/img15.svg";
import img16 from "../../../images/Categories/woman/img16.svg";
import img17 from "../../../images/Categories/woman/img17.svg";


import img18 from '../../../images/bestsellers/1/img1.png'
import img19 from '../../../images/bestsellers/1/img2.png'
import img20 from '../../../images/bestsellers/1/img3.png'
import img21 from '../../../images/bestsellers/1/img4.png'
import img22 from '../../../images/bestsellers/1/img5.png'
import img23 from '../../../images/bestsellers/1/img6.png'

import {bannerBlockWomen} from "./view/banner";
import {backCall} from "../backСall/backСall.template";

export function categoriesWomen(woman) {
	return `
		<div class="wrapper-categories">	
			${transitionWrapper(pageForWomen)}
			${titleWrapper(pageForWomen)}
			<div class="flex-wrap">	
				<div class="sidebar-page-categories-women">				
					${categoriesMenuSidebar()}
				</div>
				<div class="content-page-categories">
					<div class="banner-video">
						<video class="video" autoplay muted loop src=${video} </video>
					</div>
					<div class="wrap-IconImg">${IconImg(item)}</div>
					<div class="wrap-card Moyomoda-Block BannerBlock">
						${bannerBlockWomen()}
					</div>
					<div class="wrap-partnerOffers">
						${partnerOffers()}
					</div>
					<div class="wrap-card-2">
						${commonCard(woman2, 'price')}
					</div>
    			</div>
  			</div>
  		</div>
	`
}

let pageForWomen = [
	{
		link: '/#categories',
		title: 'Женщинам',
		value: '1000 товаров'
	}
]

let item = [
	{
		img: img1,
		title: 'Платья',
		link: '/#catalog',
	},
	{
		img: img2,
		title: 'Трикотаж',
		link: '/#catalog',
	},
	{
		img: img3,
		title: 'ВЕРХА',
		link: '/#catalog',
	},
	{
		img: img4,
		title: 'НИЗЫ',
		link: '/#catalog',
	},
	{
		img: img5,
		title: 'ЮБКИ',
		link: '/#catalog',
	},
	{
		img: img6,
		title: 'ВЕРХНЯЯ ОДЕЖДА',
		link: '/#catalog',
	},
	{
		img: img7,
		title: 'костюмы',
		link: '/#catalog',
	},
	{
		img: img8,
		title: 'для дома',
		link: '/#catalog',
	},
	{
		img: img9,
		title: 'спорт',
		link: '/#catalog',
	},
	{
		img: img10,
		title: 'Нижнее белье',
		link: '/#catalog',
	},
	{
		img: img11,
		title: 'купальники',
		link: '/#catalog',
	},
	{
		img: img12,
		title: 'КОЛГОТКИ И НоСКИ',
		link: '/#catalog',
	},
	{
		img: img13,
		title: 'аксессуары',
		link: '/#catalog',
	},
	{
		img: img14,
		title: 'большие размеры',
		link: '/#catalog',
	},
	{
		img: img15,
		title: 'новинки',
		link: '/#catalog',
	},
	{
		img: img16,
		title: 'скидки',
		link: '/#catalog',
	},
	{
		img: img17,
		title: 'акции',
		link: '/#catalog',
	}
]

let woman2 =  {
	_id: 'goods',
	title: 'Категория',
	data: [
		{
			id: 'woman12',
			img: img18,
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
			id: 'woman22',
			img: img19,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'woman32',
			img: img20,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'woman42',
			img: img21,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'woman52',
			img: img22,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'woman62',
			img: img23,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'woman72',
			img: img20,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},
		{
			id: 'woman82',
			img: img21,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			banner: 'НОВИНКА',
			bannerPosition: 'bottom',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
			sale: true
		},

	],
}


