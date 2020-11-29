import optmoyo from '../../../../images/header/optmoyo_logo.svg'
import search_img from '../../../../images/header/search.svg'
import plus from '../../../../images/icons/plus.svg'
import search_white from '../../../../images/header/search_white.svg'
import info_icon from '../../../../images/header/info.svg'
import basket from '../../../../images/header/basket.svg'
import enter from '../../../../images/header/enter.svg'
import {mobileSearchResult} from "./mobileSearchResult";

export function bottomHeader() {
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
                     
                    <nav>
                        <ul class='menu'>
                            <li>
                                <a href="#">Женщинам</a>
                            </li>
                            <li>
                                <a href="#">Девочкам</a>
                            </li>
                            <li>
                                <a href="#">Мужчинам</a>
                            </li>
                            <li>
                                <a href="#">Мальчикам</a>
                            </li>
                            <li>
                                <a href="#">Для дома</a>
                            </li>
                            <li>
                                <a href="#">Игрушки</a>
                            </li>               
                        </ul>
                    </nav>
                    
                    <article class="input-header" data-id="input-search-js">
                        <input class='search-desktop' type='search' placeholder='Я ищу...' alt='search'> 
                        <img class="delete input-search-delete" src=${plus}>
                        <img class='search-black' src=${search_img}>  
                    </article>   
                    
                    
                     
                    <div class="icons">
                      <article id="mobile-search-button-js">
                         <img class='search-white' src="${search_white}">
                      </article>
                      <img class='info_icon' src=${info_icon} alt='info-icon'> 
                      <img class='user' src=${enter} alt='enter'>
                     
                    </div>
                    <div class='buy'>
                        <div class="content">
                          <img class='basket' id='basket' src=${basket} alt='basket'>
                          <div class='basket-price' id='basket-price'>Корзина <br> пуста</div>
                        </div>
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
            
        </div>
    `
}
