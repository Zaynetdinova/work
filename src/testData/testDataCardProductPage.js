import img3 from '../images/bestsellers/1/img3.png'
import img4 from '../images/bestsellers/1/img4.png'
import img5 from '../images/bestsellers/1/img5.png'
import img6 from '../images/bestsellers/1/img6.png'
import photo1 from '../images/cardProduct/photo1.png'
import photo2 from '../images/cardProduct/photo2.png'

export class TestDataCardProductPage {

	info() {
		return [
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
	}

	color() {
		return [
			{
				photo: photo1,
				classColor: 'active-color',
				testColorId: 'red'
			},
			{
				photo: photo2,
				classColor: '',
				testColorId: 'yellow',
			},
			{
				photo: photo1,
				classColor: '',
				testColorId: 'blue',
			},
			{
				photo: photo1,
				classColor: '',
				testColorId: 'black'
			},
			{
				photo: photo1,
				classColor: '',
			},
			{
				photo: photo1,
				classColor: ''
			},
		]
	}

	cards() {
		return  {
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


	}

	cards2() {
		return  {
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
	}
}