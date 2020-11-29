import optmoyo from '../../../../../images/header/optmoyo_logo.svg'
import search_white from '../../../../../images/header/search_white.svg'
import info_icon from '../../../../../images/header/info.svg'
import basket from '../../../../../images/header/basket.svg'
import enter from '../../../../../images/header/enter.svg'
import burger from '../../../../../images/header/burger.svg'
import {mobileSearchResult} from "../mobileSearchResult"

export function mobileHeader() {

  return `
    <div class='bottomHeader'>
        <div class='wrapper-b'>
            <div class='content-header'>
                <div class="burger-logo-wrapper">
                    <img src=${burger} alt="burger" id="burger-menu" class="burger-menu">  
                    <a class='logo' href="/">                   
                        <img class='logo-img' src=${optmoyo} alt="Логотип">
                    </a> 
                </div>
                <div class="icons">
                    <article id="mobile-search-button-js">
                       <img class='search-white' src="${search_white}" alt="search-white">
                    </article>
                    <img class='info_icon' src=${info_icon} alt='info-icon'> 
                    <img class='user' src=${enter} alt='enter'>
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
  `
}
