import {pagination} from "../common/pagination";
import {numberPages} from '../common/numperPages'
import {sidebarPoint} from "../common/sidebarPoint";
import {navCatalog} from "./view/navCatalog";
import {filter} from "./view/filter";
import {card} from '../common/commonCard/card'
import {commonCard} from "../common/commonCard/commonCards";
import {titleCatalog} from './view/titleCatalog'
import {breadCrumbsCatalog} from './view/breadCrumbsCatalog'


export function catalog(catalogCategory, point, filters, testGoods, testDataYouRecentlyViewed)  {
    return `
    <div class="wrapper-catalog">
        ${breadCrumbsCatalog(catalogCategory)}
                    
        <div class="wrapper-pagination">
            <div class="wrap-flex">
                <article class="burger-catalog" id="burger-catalog">
                    
                </article>
                ${titleCatalog(catalogCategory)}      
            </div>
            ${pagination('Предыдущая страница','', 'Следующая страница','')}
            ${numberPages()}
        </div>
        <article class="sidebar-page-categories" id="desktop-filter-js">
            <div class="points" id="points-catalog-open-js">
                ${sidebarPoint(point,'notArrow')}
            </div>
            <div class="wrapper-filter">${filter()}</div>
        </article>
        <div class="mobile-filter" id="mobile-filter-js">${filter()}</div>
                   
        <div class="wrapper-number">
            ${numberPages()}            
        </div>
        
        <div class="wrapper-sort">
            <div class="button-popular" id="select-filter-popular-mobile"></div>
            <div class="button-quantity" id="select-filter-mobile"></div>
        </div>
        
        <div class="flex-wrap">	            
            <section class="cards-wrapper">               
                <div class="container">
                    ${navCatalog(filters)}
                    <div class="wrapper-filter-desktop-ilmira">
                        <div id="select-filter"></div>
                    </div>
                </div>                
                <div id="selected-filters-js" class="selected-filters"></div>			                   
                <div class="cards">
                    ${testGoods.map(i => {
                    return `
                    ${card(i)}
                    `}).join('')}
                </div>                                  
                 <div class="bottom-pagination">                                             
                    <div class="box">${pagination('Предыдущая страница','','Следующая страница','')}</div>
                    <div class="box-number">${numberPages()}</div>
                 </div>  
                 <div class="wrapper-number">
                    ${numberPages()}
                 </div>               
                <div class="wrap-card-see" id="style-for-apple-js">
                    ${commonCard(testDataYouRecentlyViewed, 'price')}
                </div>               
            </section>        
        </div>                     
    </div>
    `
}


