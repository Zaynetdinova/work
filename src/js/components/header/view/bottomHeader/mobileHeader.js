import optmoyo from '../../../../../images/header/optmoyo_logo.svg'
import search_white from '../../../../../images/header/search_white.svg'
import info_icon from '../../../../../images/header/info.svg'
import basket from '../../../../../images/header/basket.svg'
import enter from '../../../../../images/header/enter.svg'
import user from '../../../../../images/icons/user.svg'
import {showRegistryUserDataView} from '../showRegistryUserDataView'
import {mobileSearchResult} from "../mobileSearchResult"
import {infoView} from "../infoView";
export function mobileHeader() {

    return `
        <div class='bottomHeader'>
            <div class='wrapper-b'>
                <div class='content-header'>        
                    <div class="burger-logo-wrapper">
                        <article  id="burger-menu" class="burger-menu-wrapper">
                           <div class='burger-menu'></div>
                        </article>
                        <a class='logo' href="/">                   
                            <img class='logo-img' src=${optmoyo} alt="Логотип">
                        </a>
                    </div>
                    
                    <div class="icons">
                        <div class="icon-width">
                          <article id="mobile-search-button-js" class="content">
                             <img class='icon-img' src="${search_white}" alt="search-white">
                          </article>
                        </div>
                        <div class="icon-width">
                            <article id="icon-info-button-js" class="content">
                                <img class='icon-img' src=${info_icon} alt='info-icon'>
                            </article>
                        </div>
                        
                        ${window.userRegistry
                        ?   `<div class="icon-width">
                                <article id="registry-user-mobile-button-js" class="registry-user favorites-mobile content">
                                  <img class='icon-img' src=${user}>
                               </article> 
                             </div>  `
                        :  `<div class="icon-width">
                                <article id="enter-button-js" class="content">
                                    <img class='icon-img' src=${enter} alt='enter'>
                                </article>
                            </div>
                        ` }                        
                        <a href="/#personal-area/basket" class="buy-phone">
                            <div class="content">
                                <img class='icon-img' id='basket' src=${basket} alt='basket'>
                            </div>
                        </a>                   
                    </div>                          
                </div>                                        
            </div> 
        </div>
            
    <div class="mobile-search-wrapper">
       ${mobileSearchResult()}
    </div>
    
    <div class="wrapper-user-data-view" id="wrapper-user-data-view-js">
        ${showRegistryUserDataView()}
    </div>
    
    <div class="info-mobail" id="info-mobile-view-js">
        ${infoView()}
    </div>
  `
}
