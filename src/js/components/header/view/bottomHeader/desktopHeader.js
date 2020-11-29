import optmoyo from '../../../../../images/header/optmoyo_logo.svg'
import search_img from '../../../../../images/header/search.svg'
import plus from '../../../../../images/icons/plus.svg'
import basket from '../../../../../images/header/basket.svg'
export function desktopHeader() {

  return `
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
                    
                    <article class="input-header" id="desktop-search-js">
                        <input class='search-desktop' id="desktop-search-input-js" type='search' placeholder='Я ищу...' alt='search'> 
                        <img class="delete" id="desktop-search-delete-js" src=${plus}>
                        <img class='search-black' src=${search_img}>  
                    </article>   
                    
                    
                     
                    
                    <div class='buy'>
                        <div class="content">
                          <img class='basket' id='basket' src=${basket} alt='basket'>
                          <div class='basket-price' id='basket-price'>Корзина <br> пуста</div>
                        </div>
                    </div>
                  
                    
                                        
                </div> 
            </div>
          
  
  `
}
