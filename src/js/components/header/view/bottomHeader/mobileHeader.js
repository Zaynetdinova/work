import optmoyo from '../../../../../images/header/optmoyo_logo.svg'
import search_white from '../../../../../images/header/search_white.svg'
import info_icon from '../../../../../images/header/info.svg'
import basket from '../../../../../images/header/basket.svg'
import enter from '../../../../../images/header/enter.svg'
import user from '../../../../../images/icons/user.svg'
import {mobileSearchResult} from '../mobileSearchResult'
import {showRegistryUserDataView} from '../showRegistryUserDataView'

export function mobileHeader() {

  return `
    <div class='bottomHeader'>
            <div class='wrapper-b'>
                <div class='content-header'>
                  
                  <div class="burger-logo-wrapper">
                      <article class='burger-menu' id="burger-menu">
                          <span></span>
                      </article>  
                      <div class='logo'>                   
                          <img class='logo-img' src=${optmoyo} alt="Логотип">
                      </div> 
                  </div>
                  
                  <div class="icons">
                    <article id="mobile-search-button-js">
                       <img class='search-white' src="${search_white}">
                    </article>
                    <img class='info_icon' src=${info_icon} alt='info-icon'> 
                    ${window.userRegistry
                        ?   `<article id="registry-user-mobile-button-js" class="registry-user favorites-mobile">
                                <img src=${user}>
                              </article>   `
                        :  `<img class='user' src=${enter} alt='enter'>` }
                   
                      
                   </div>
                    
                   
                    
                    <div class="buy-phone">
                      <div class="content">
                          <img class='basket-phone' id='basket' src=${basket} alt='basket'>
                      </div>
                    </div>  
                    
                                        
                </div> 
            </div>
            
            <div class="mobile-search-wrapper">
                ${mobileSearchResult()}
            </div>
            
            <div class="" id="registry-user-mobile-content-js">
                ${showRegistryUserDataView()}
            </div>
  `
}
