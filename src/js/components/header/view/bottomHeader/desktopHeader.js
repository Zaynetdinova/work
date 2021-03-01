import optmoyo from '../../../../../images/header/optmoyo_logo.svg'
import search_img from '../../../../../images/header/search.svg'
import plus from '../../../../../images/icons/plus.svg'
import basket from '../../../../../images/header/basket.svg'
import like from '../../../../../images/header/like.svg'
import women from '../../../../../images/bestsellers/1/img1.png'
import {infoProduct} from "../../../common/infoProduct";
import {priceContent} from "../../../common/priceContent";


export function desktopHeader() {

  return `
     <div class='wrapper-b'>
        <div class='content-header'>
            <div class="burger-logo-wrapper">
                <article class='burger-menu' id="burger-menu">
                    
                </article>
                <a class='logo' href="/">                   
                    <img class='logo-img' src=${optmoyo} alt="Логотип">
                </a>
            </div>
            <nav>
                <ul class='menu'>
                    <li>
                        <a href="/#categories-women">Женщинам</a>
                    </li>
                    <li>
                        <a href="/#categories-children">Девочкам</a>
                    </li>
                    <li>
                        <a href="">Мужчинам</a>
                    </li>
                    <li>
                        <a href="">Мальчикам</a>
                    </li>
                    <li>
                        <a href="">Для дома</a>
                    </li>
                    <li>
                        <a href="">Игрушки</a>
                    </li>               
                </ul>
            </nav>
            <article class="input-header" id="desktop-search-js">
                <input class='search-desktop' id="desktop-search-input-js" type='search' placeholder='Я ищу...' alt='search'> 
                <img class="delete" id="desktop-search-delete-js" src=${plus} alt="delete">
                <img class='search-black' src=${search_img} alt="search">  
            </article> 
            
             ${window.userRegistry
                ?   ` 
                    <div class="favorite-header">
                        <a href="/#personal-area/favorites" class="registry-user favorites">
                            <img src=${like}>
                        </a>
                        <div class="quantity-favorites-header">99</div>
                        <div class="favorite-dropdown">
                            <div class="basket-dropdown-wrap">
                                <ul>
                                    <li>
                                        <div class="wrapper-product">
                                            <img class="img-product" src="${women}" alt="">
                                            <div class="wrapper-info">
                                                <div>
                                                    <div class="name-brand">Бренд</div>
                                                    <div class="name-product">Наименование товара</div>
                                                    ${infoProduct(infoFavorite)}
                                                </div>
                                                <div class="price">${priceContent('1 234,00 ₽', '-234,00 ₽', '1 234,00 ₽', true)}</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="wrapper-product">
                                            <div class="wrapper-img"">
                                                <img class="img-product" src="${women}" alt="">
                                                <div class="Card-banner banner-bottom">новинка</div>
                                            </div>
                                            <div class="wrapper-info">
                                                <div>
                                                    <div class="name-brand">Бренд</div>
                                                    <div class="name-product">Наименование товара</div>
                                                    ${infoProduct(infoFavorite)}
                                                </div>
                                                <div class="price">${priceContent('','', '1 234,00 ₽', false)}</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="wrapper-product">
                                            <img class="img-product" src="${women}" alt="">
                                            <div class="wrapper-info">
                                                <div>
                                                    <div class="name-brand">Бренд</div>
                                                    <div class="name-product">Наименование товара</div>
                                                    ${infoProduct(infoFavorite)}
                                                </div>
                                                <div class="price">${priceContent('','', '1 234,00 ₽', false)}</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="wrapper-product">
                                            <img class="img-product" src="${women}" alt="">
                                            <div class="wrapper-info">
                                                <div>
                                                    <div class="name-brand">Бренд</div>
                                                    <div class="name-product">Наименование товара</div>
                                                    ${infoProduct(infoFavorite)}
                                                </div>
                                                <div class="price">${priceContent('','', '1 234,00 ₽', false)}</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="basket-dropdown-total">
                                    <a href="/#personal-area/favorites">В ИЗБРАННОЕ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        `
                : '' }   
                                
            <div class='buy'>
                <a href="/#personal-area/basket" class="content">
                    <img class='basket' id='basket' src=${basket} alt='basket'>
                    <div class='basket-price' id='basket-price'>88 шт. / 888 000 ₽</div>
                </a>
                <div class="basket-dropdown">
                    <div class="basket-dropdown-wrap">
                        <div class="basket-title">
                             <span class="box">Корзина:</span><span class="number">88 шт. / 888 000 ₽</span>
                        </div>
                        <ul>
                            <li>
                                <div class="wrapper-product">
                                    <img class="img-product" src="${women}" alt="">
                                    <div class="wrapper-info">
                                        <div>
                                            <div class="name-brand">Бренд</div>
                                            <div class="name-product">Наименование товара</div>
                                            ${infoProduct(info)}
                                        </div>
                                       
                                        <div class="price">${priceContent('1 234,00 ₽', '-234,00 ₽', '1 234,00 ₽', true)}</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="wrapper-product">
                                    <div class="wrapper-img"">
                                        <img class="img-product" src="${women}" alt="">
                                        <div class="Card-banner banner-bottom">новинка</div>
                                    </div>
                                    <div class="wrapper-info">
                                        <div>
                                            <div class="name-brand">Бренд</div>
                                            <div class="name-product">Наименование товара</div>
                                            ${infoProduct(info)}
                                        </div>
                                        <div class="price">${priceContent('','', '1 234,00 ₽', false)}</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="wrapper-product">
                                    <img class="img-product" src="${women}" alt="">
                                    <div class="wrapper-info">
                                        <div>
                                            <div class="name-brand">Бренд</div>
                                            <div class="name-product">Наименование товара</div>
                                            ${infoProduct(info)}
                                        </div>
                                        <div class="price">${priceContent('','', '1 234,00 ₽', false)}</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="wrapper-product">
                                    <img class="img-product" src="${women}" alt="">
                                    <div class="wrapper-info">
                                        <div>
                                            <div class="name-brand">Бренд</div>
                                            <div class="name-product">Наименование товара</div>
                                            ${infoProduct(info)}
                                        </div>
                                        <div class="price">${priceContent('','', '1 234,00 ₽', false)}</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="basket-dropdown-total">
                            <a href="/#personal-area/basket">В КОРЗИНУ</a>
                        </div>
                    </div>
                </div>
            </div>                              
        </div> 
     </div>
  `
}

let infoFavorite = [
    {
        infoType: 'ID:',
        infoResult: '285660'
    },
    {
        infoType: 'Цвет:',
        infoResult: 'Черный'
    },
    {
        infoType: 'Размеры:',
        infoResult: '42-44, 44-46'
    },
]
let info = [
    {
        infoType: 'ID:',
        infoResult: '285660'
    },
    {
        infoType: 'Цвет:',
        infoResult: 'Черный'
    },
]