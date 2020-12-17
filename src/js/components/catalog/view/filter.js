import exit from '../../../../images/icons/exit.svg'
import arrow from '../../../../images/icons/arrow2.svg'
import {filterChoice} from "./filter-choice";

export function filter() {
	return `
        <div class="filter">
        
            <div class="wrapper-title">
                <div class="title">Фильтры</div>
                <div class="cancel">
                   <div class="clear">Очистить</div>
                   <img src="${exit}" alt="exit">
                </div>
            </div>
            
            <div class="material">
            
							${filters.map((filter) => {
								const {title, categories, id} = filter
								return `
									<div id="parents-filter-js" data-_id=${id} class="box">
											<article id="filter-catalog" class="wrapper-material">
													<div class="title2">${title}</div>
													<img class="arrow" src="${arrow}" alt="arrow">
											</article>
										<hr class="hr-material">
										<div class="wrapper-choice" id="filter-choice">
												${filterChoice(categories)}
												<hr class="hr-material">
										</div>								
									</div>
								`
							}).join('')	}
							
							<div id="price"></div>
            </div>
        </div>
    `
}


let filters = [
	{title: 'Материал', id: 'material', categories: [
			{
				category: 'Хлопок',
				number: '(888)',
				id: 'material1',
			},
			{
				category: 'Лен',
				number: '(888)',
				id: 'category2',
			},
			{
				category: 'Шерсть',
				number: '(888)',
				id: 'category3',
			},
			{
				category: 'Кашемир',
				number: '(888)',
				id: 'category4',
			},
			{
				category: 'Вискоза',
				number: '(888)',
				id: 'category5',
			},
			{
				category: 'Полиэстр',
				number: '(888)',
				id: 'category6',
			},
			{
				category: 'Нейлон',
				number: '(888)',
				id: 'category7',
			},
			{
				category: 'Шёлк',
				number: '(888)',
				id: 'category8',
			},
		]},
	{title: 'Цвет', id: 'color', categories: [
			{
				category: 'Белый',
				number: '(888)',
				id: 'category9',
				color: 'color'
			},
			{
				category: 'Черно-белый',
				number: '(888)',
				id: 'category10',
				color: 'black-and-white'
			},
			{
				category: 'Бежевый',
				number: '(888)',
				id: 'category11',
				color: 'beige'
			},
			{
				category: 'Серый',
				number: '(888)',
				id: 'category12',
				color: 'grey'
			},
			{
				category: 'Зеленый',
				number: '(888)',
				id: 'category13',
				color: 'green'
			},
			{
				category: 'Пурпурный',
				number: '(888)',
				id: 'category14',
				color: 'purple'
			},
			{
				category: 'Мятный',
				number: '(888)',
				id: 'category15',
				color: 'mint'
			},
			{
				category: 'Мульти',
				number: '(888)',
				id: 'category16',
				color: 'multi'
			},
		]},
	{title: 'Размер', id: 'size', categories: [
			{
				category: '23/32',
				number: '(888)',
				id: 'category17'
			},
			{
				category: '23/34',
				number: '(888)',
				id: 'category18'
			},
			{
				category: '24/32',
				number: '(888)',
				id: 'category19'
			},
			{
				category: '24/34',
				number: '(888)',
				id: 'category20'
			},
			{
				category: '25',
				number: '(888)',
				id: 'category21'
			},
			{
				category: '25/32',
				number: '(888)',
				id: 'category22'
			},
			{
				category: '25/34',
				number: '(888)',
				id: 'category23'
			},
			{
				category: '26',
				number: '(888)',
				id: 'category24'
			},
		]},
	{title: 'Сезон', id: 'season',  categories: [
			{
				category: 'Демисезон',
				number: '(888)',
				id: 'category25'
			},
			{
				category: 'Весна - Лето',
				number: '(888)',
				id: 'category26'
			},
			{
				category: 'Осень - Зима',
				number: '(888)',
				id: 'category27'
			},
		]},
	{title: 'Стиль', id: 'style', categories: [
			{
				category: 'Базовый',
				number: '(888)',
				id: 'category28'
			},
			{
				category: 'Деловой',
				number: '(888)',
				id: 'category29'
			},
			{
				category: 'Нарядный',
				number: '(888)',
				id: 'category30'
			},
			{
				category: 'Повседневный',
				number: '(888)',
				id: 'category31'
			},
			{
				category: 'Романтический',
				number: '(888)',
				id: 'category32'
			},
			{
				category: 'Сексуальный',
				number: '(888)',
				id: 'category33'
			},
			{
				category: 'Спортивный',
				number: '(888)',
				id: 'category34'
			},
			{
				category: 'Ультрамодный',
				number: '(888)',
				id: 'category35'
			},
		]},

]
