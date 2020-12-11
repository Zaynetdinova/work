import {titleCatalog, transitionTitleCatalog} from "./js/transitionTitleCatalog";
import {number, pagination} from "./js/pagination";
import {categoriesMenuSidebar} from "../common/categoriesMenuSidebar";


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
					
				</div>
				<div class="content-page-categories">	
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
