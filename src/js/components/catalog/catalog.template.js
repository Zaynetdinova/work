import {titleCatalog, transitionTitleCatalog} from "./js/transitionTitleCatalog";
import {number, pagination} from "./js/pagination";
import {sidebarPoint} from "../common/sidebarPoint";
import {navCatalog} from "./js/navCatalog";
import {filter} from "./view/filter";
import arrow from "../../../images/icons/arrow2.svg"
import img1 from '../../../images/bestsellers/1/img1.png'
import img2 from '../../../images/bestsellers/1/img2.png'
import img3 from '../../../images/bestsellers/1/img3.png'
import img4 from '../../../images/bestsellers/1/img4.png'
import img5 from '../../../images/bestsellers/1/img5.png'
import img6 from '../../../images/bestsellers/1/img6.png'
import {card} from '../common/commonCard/card'


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
            
            <section class="sidebar-page-categories">
                <div class="points">				
                    ${sidebarPoint(point,'notArrow')}
                </div>
                <div class="wrapper-filter">${filter()}</div>                    
            </section>
			
			      <section class="cards-wrapper">
                 
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
                
                <div id="selected-filters"></div>			  
                 
                 
			           <div class="cards">
                    ${woman.data.map(i => {
                    return `
                    ${card(i)}
                    `}).join('')}
                 </div>
            </section>
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
            img: img6,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman9',
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
            id: 'woman10',
            img: img2,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman11',
            img: img3,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman12',
            img: img4,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman13',
            img: img5,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman14',
            img: img6,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman15',
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
