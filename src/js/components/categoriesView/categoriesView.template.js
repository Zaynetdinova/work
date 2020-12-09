import img1 from '../../../images/bestsellers/1/img1.png'
import img2 from '../../../images/bestsellers/1/img2.png'
import img3 from '../../../images/bestsellers/1/img3.png'
import img4 from '../../../images/bestsellers/1/img4.png'
import img5 from '../../../images/bestsellers/1/img5.png'
import img6 from '../../../images/bestsellers/1/img6.png'
import {card} from '../common/commonCard/card'

export function categoriesViewTemplate() {
	return `
	<div class="Categories-view">
	<section class="cards">
			${woman.data.map(i => {
			return `
				${card(i)}
			`}).join('')}
	</section>
	
	</div>
	`
}

const woman = {
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
		},
		{
			id: 'woman2',
			img: img2,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman3',
			img: img3,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman4',
			img: img4,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman5',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman6',
			img: img6,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman7',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman8',
			img: img6,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
	],
}