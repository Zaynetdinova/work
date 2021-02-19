import {titleCatalog, transitionTitleCatalog} from "./view/transitionTitleCatalog";
import {numberPages, pagination} from "../common/pagination";
import {sidebarPoint} from "../common/sidebarPoint";
import {navCatalog} from "./view/navCatalog";
import {filter} from "./view/filter";
import {card} from '../common/commonCard/card'
import {commonCard} from "../common/commonCard/commonCards";


export function catalog(catalogCategory, point, filters, testGoods, testDataYouRecentlyViewed)  {
    return `
    <div class="wrapper-catalog">
        ${transitionTitleCatalog(catalogCategory)}
                    
        <div class="wrapper-pagination">
            ${titleCatalog(catalogCategory)}      
            ${pagination('Предыдущая страница', 'Следующая страница')}
            ${numberPages()}
        </div>
                   
        <div class="wrapper-number">
            ${numberPages()}            
        </div>
        
        <div class="wrapper-sort">
            <div class="button-popular" id="select-filter-popular-mobile"></div>
            <div class="button-quantity" id="select-filter-mobile"></div>
        </div>
        
        <div class="flex-wrap">	            
            <section class="sidebar-page-categories">              
                <div class="points" id="points-catalog-open-js">				
                    ${sidebarPoint(point,'notArrow')}
                </div>
                <div class="wrapper-filter mobile-filter" id="mobile-filter-js">${filter()}</div>                    
            </section>
            
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
                    <div class="box">${pagination('Предыдущая страница','Следующая страница')}</div>
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


