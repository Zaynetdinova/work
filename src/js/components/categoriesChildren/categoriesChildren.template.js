import {titleWrapper, transitionTitle, transitionWrapper} from "../common/transitionTitle";
import video from '../../../video/2.mp4'
import {childrenSidebar} from "../common/ChildrenSidebar";
import {partnerOffers} from "../common/partnerOffers";
import {commonCard} from '../common/commonCard/commonCards'
import {IconChildren} from './view/iconChildren'
import img1 from "../../../images/bestsellers/1/img1.png";
import img2 from "../../../images/bestsellers/1/img2.png";
import img3 from "../../../images/bestsellers/1/img3.png";
import img4 from "../../../images/bestsellers/1/img4.png";
import img5 from "../../../images/bestsellers/1/img5.png";
import img6 from "../../../images/bestsellers/1/img6.png";


export function categoriesChildren() {
    return `
		<div class="wrapper-categories">	
				${transitionWrapper(pageForChildren)}
                ${titleWrapper(pageForChildren)}
				<div class="flex-wrap">	
				
					<section class="sidebar-page-categories sidebar-page-categoriesChildren">
                        ${childrenSidebar(dataSidebarGirl)}
					</section>
					
					<section class="content-page-categories">
						<div class="banner-video">
							<video class="video" autoplay muted loop src=${video} </video>
						</div>
						
						<div class="wrap-ImgChildren">
							${IconChildren()}
						</div>
						
						<div class="wrap-card3">
							${commonCard(woman, 'price')}
						</div>
						<div class="wrap-partnerOffers">
							${partnerOffers()}
						</div>
						<div class="wrap-card-2">
							${commonCard(woman2, 'price')}
						</div>	
					</section>
					
				</div>
		</div>
	`
}

let pageForChildren = [
    {
        link: '/#categories-children',
        title: 'Девочкам',
        value: '1000 товаров'
    }
]

let dataSidebarGirl = [
    {
    	id: 'children-baby',
        img: 'baby',
        name: 'Новорожденным',
        month: '(12 мес. - 17 лет)'
    },
    {
    		id: 'children-girl',
        img: 'girl',
        name: 'Девочкам',
        month: '(12 мес. - 17 лет)'
    },
]

let woman =  {
    _id: 'children',
    title: 'Категория',
    data: [
        {
            id: 'woman1',
            img: img1,
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
            img: img2,
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
            img: img6,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman7',
            img: img5,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman8',
            img: img1,
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

let woman2 =  {
    _id: 'children2',
    title: 'Категория',
    data: [
        {
            id: 'w1',
            img: img1,
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
            id: 'w2',
            img: img2,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'w3',
            img: img3,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'w4',
            img: img4,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'w5',
            img: img5,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'w6',
            img: img6,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'w7',
            img: img5,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'w8',
            img: img1,
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