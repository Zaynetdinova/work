import optmoyo from '../../../../../images/header/optmoyo_logo.svg'
import search_white from '../../../../../images/header/search_white.svg'
import info_icon from '../../../../../images/header/info.svg'
import basket from '../../../../../images/header/basket.svg'
import enter from '../../../../../images/header/enter.svg'
import user from '../../../../../images/icons/user.svg'
import {showRegistryUserDataView} from '../showRegistryUserDataView'

import {mobileSearchResult} from "../mobileSearchResult"

export function mobileHeader() {

  return `
    <div class='bottomHeader'>
        <div class='wrapper-b'>
            <div class='content-header'>
                <div class="burger-logo-wrapper">
                    <article class='burger-menu' id="burger-menu">
                        
                    </article>
                     
                    <a class='logo' href="/">                   
                        <img class='logo-img' src=${optmoyo} alt="Логотип">
                    </a>
                </div>
                <div class="icons">
                    <div class="icon-width">
                    <article id="mobile-search-button-js">
                       <img class='search-white' src="${search_white}" alt="search-white">
                    </article>
                    </div>
                    <div class="icon-width">
                    <img class='info_icon' src=${info_icon} alt='info-icon'> 
                    </div>
                      ${window.userRegistry
                      ?   `<div class="icon-width">
                            <article id="registry-user-mobile-button-js" class="registry-user favorites-mobile user">
                              <img src=${user}>
                           </article> </div>  `
                      :  `<img class='user' src=${enter} alt='enter'>` }
                      
                </div>
                <div class="buy-phone">
                    <div class="content">
                        <img class='basket-phone' id='basket' src=${basket} alt='basket'>
                    </div>
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

  `
}
