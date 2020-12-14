import {titleCatalog, transitionTitleCatalog} from "./js/transitionTitleCatalog";
import {number, pagination} from "./js/pagination";
import {sidebarPoint} from "../common/sidebarPoint";
import {navCatalog} from "./js/navCatalog";
import {filter} from "./js/filter";
import arrow from "../../../images/icons/arrow2.svg"


export function catalog()  {
    return `
        <div class="wrapper-catalog">
            ${transitionTitleCatalog(catalogCategory)}
            <div class="wrapper-pagination">
                ${titleCatalog(catalogCategory)}
                ${pagination()}
                ${number()}
            </div>
            <div class="flex-wrap">	
				<div class="sidebar-page-categories">
                    <div class="points">				
                        ${sidebarPoint(point,'notArrow')}
                    </div>
                    <div class="wrapper-filter">${filter()}</div>                    
				</div>
				<div class="content-page-categories">
				    <div class="container">
				        ${navCatalog(item)}
				        <div class="pages">
				            <div class="select">
				                <div>На странице</div>
				                <img class="arrow" src="${arrow}" alt="">
                            </div>
				            
				            <span>100</span>
                        </div>				      
                    </div>				  
    			</div>
  			</div>                  
        </div>
    `
}


let catalogCategory = [
    {
        link: '/#categories',
        title: 'Женщинам',
        value: '1000 товаров',
        titleCategory: 'Платья',
        linkCategory: '/#categories-view'
    }
]

let point =
    [
        {
            title: 'Платья',
            id: 'new1',
            img: false,
            category: [
                {
                    category: 'Повседневные'
                },
                {
                    category: 'Офисные'
                },
                {
                    category: 'Трикотажные'
                },
                {
                    category: 'Коктейльные'
                },
                {
                    category: 'Вечерние'
                },
                {
                    category: 'Длинные'
                },
                {
                    category: 'Костюмы'
                },
                {
                    category: 'Сарафаны'
                },
                {
                    category: 'Летние'
                },
                {
                    category: 'Короткие'
                },
            ],
        },
]

let item = [
    {
        title: 'Наш выбор'
    },
    {
        title: 'Дешевые'
    },
    {
        title: 'Дорогие'
    },
    {
        title: 'Новые'
    },
    {
        title: 'Старые'
    },
    {
        title: 'Скидки'
    },
    {
        title: 'Акции'
    },
    {
        title: 'Популярные'
    },
]

