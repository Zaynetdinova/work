import img3 from '../images/bestsellers/1/img3.png'
import img4 from '../images/bestsellers/1/img4.png'
import img5 from '../images/bestsellers/1/img5.png'
import img6 from '../images/bestsellers/1/img6.png'
import photo1 from '../images/cardProduct/photo1.png'
import photo2 from '../images/cardProduct/photo2.png'

export let testDataCardProductPage = {

	brand: [
		{
			brand: 'Vittoria Vicci',
			category: 'Платье'
		}
	],

	info: [
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
		],

	color: [
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
		],

	cards: {
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
					secondaryImg: [
						img3
					]
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
					secondaryImg: [
						img4
					]
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
					secondaryImg: [
						img3
					]
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
					secondaryImg: [
						img4
					]
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
					secondaryImg: [
						img5
					]
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
					secondaryImg: [
						img5
					]
				},
			],
		},

	cards2: {
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
					secondaryImg: [
						img5
					]
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
					secondaryImg: [
						img6
					]
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
					secondaryImg: [
						img3
					]
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
					secondaryImg: [
						img4
					]
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
					secondaryImg: [
						img5
					]
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
					secondaryImg: [
						img6
					]
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
					secondaryImg: [
						img5
					]
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
					secondaryImg: [
						img5
					]
				},
			],
		},
}