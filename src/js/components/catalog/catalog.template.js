import {titleCatalog, transitionTitleCatalog} from "./view/transitionTitleCatalog";
import {number, pagination} from "./view/pagination";
import {sidebarPoint} from "../common/sidebarPoint";
import {navCatalog} from "./view/navCatalog";
import {filter} from "./view/filter";
import img1 from '../../../images/bestsellers/1/img1.png'
import img2 from '../../../images/bestsellers/1/img2.png'
import img3 from '../../../images/bestsellers/1/img3.png'
import img4 from '../../../images/bestsellers/1/img4.png'
import img5 from '../../../images/bestsellers/1/img5.png'
import img6 from '../../../images/bestsellers/1/img6.png'
import {card} from '../common/commonCard/card'
import {commonCard} from "../common/commonCard/commonCards";


export function catalog()  {
    return `
    <div class="wrapper-catalog">
        ${transitionTitleCatalog(catalogCategory)}
                    

                   
        <div class="wrapper-number">
            ${number()}            
        </div>
        
        <div class="wrapper-sort">
            <div class="button-popular" id="select-filter-popular-mobile"></div>
            <div class="button-quantity" id="select-filter-mobile"></div>
        </div>
        
        <div class="flex-wrap">	            
            <section class="sidebar-page-categories">
            <div style="margin-bottom: 15px">${titleCatalog(catalogCategory)}</div>    
                <div class="points" id="points-catalog-open-js">				
                    ${sidebarPoint(point,'notArrow')}
                </div>
                <div class="wrapper-filter mobile-filter" id="mobile-filter-js">${filter()}</div>                    
            </section>
            
            <section class="cards-wrapper">
                <div class="box-pagination">
                    <div class="box">${pagination()}</div>
                    <div class="wrapper-pagination">             
                        ${number()}   
                    </div>
                </div>
                <div class="container">
                    ${navCatalog(item)}
                    <div class="wrapper-filter-desktop-ilmira">
                        <div id="select-filter"></div>
                    </div>
                     
                </div>                
                <div id="selected-filters-js" class="selected-filters"></div>			                   
                <div class="cards">
                    ${woman.data.map(i => {
                    return `
                    ${card(i)}
                    `}).join('')}
                </div>                                  
                 <div class="bottom-pagination">                                             
                    <div class="box" ">${pagination()}</div>             
                    <div class="wrapper-pagination">             
                        ${number()}   
                    </div>
                 </div>  
                 <div class="wrapper-number">
                    ${number()}
                 </div>               
                <div class="wrap-card-see">
                    ${commonCard(woman2, 'price')}
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
        linkCategory: '/#catalog'
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


const woman2 = {
    title: 'Вы недавно смотрели',
    _id: 'catalog',
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

