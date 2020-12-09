import {commonCard} from '../common/commonCard/commonCards'
import {categoriesMenuSidebar} from '../common/categoriesMenuSidebar'

import video from '../../../video/1.mp4'
import {partnerOffers} from '../common/partnerOffers'
import {transitionTitle} from '../common/transitionTitle'
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

export function categoriesWomen(woman) {
	return `
		<div class="wrapper-categories">	
			${transitionTitle(pageForWomen)}
			<div class="flex-wrap">	
				<div class="sidebar-page-categories">
					${categoriesMenuSidebar()}
				</div>
				<div class="content-page-categories">
					<div class="banner-video">
						<video class="video" autoplay muted loop src=${video}  </video>
					</div>
					<div class="wrap-IconImg">${IconImg(item)}</div>
					<div class="wrap-card">
						${commonCard(woman, 'price')}
					</div>
					<div class="wrap-partnerOffers">
						${partnerOffers()}
					</div>
					<div class="wrap-card-2">
						${commonCard(woman)}
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
		title: 'Платья'
	},
	{
		img: img2,
		title: 'Трикотаж'
	},
	{
		img: img3,
		title: 'ВЕРХА'
	},
	{
		img: img4,
		title: 'НИЗЫ'
	},
	{
		img: img5,
		title: 'ЮБКИ'
	},
	{
		img: img6,
		title: 'ВЕРХНЯЯ ОДЕЖДА'
	},
	{
		img: img7,
		title: 'костюмы'
	},
	{
		img: img8,
		title: 'для дома'
	},
	{
		img: img9,
		title: 'спорт'
	},
	{
		img: img10,
		title: 'Нижнее белье'
	},
	{
		img: img11,
		title: 'купальники'
	},
	{
		img: img12,
		title: 'КОЛГОТКИ И НоСКИ'
	},
	{
		img: img13,
		title: 'аксессуары'
	},
	{
		img: img14,
		title: 'большие размеры'
	},
	{
		img: img15,
		title: 'новинки'
	},
	{
		img: img16,
		title: 'скидки'
	},
	{
		img: img17,
		title: 'акции'
	}
]