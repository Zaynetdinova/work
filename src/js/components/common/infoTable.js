import info from '../../../images/cardProduct/info.svg'
import {Sale} from './sale'

const testArrSizes = [
    {size: '44', oldPrice: '1 234,00 ₽', price: false, sale: true},
    {size: '56', oldPrice: '1 234,00 ₽', price: '1 234,00 ₽', sale: false},
    {size: '52', oldPrice: '1 244,00 ₽', price: false, sale: true},
    {size: '46', oldPrice: '1 254,00 ₽', price: '1 234,00 ₽', sale: true}
]

export function infoTable(item) {
    return `
        <article id="info-table" class="infoTable">
            <div class="common">
                <div class="size-quantity">Размер и количество</div>
                <div class="table-size">Таблица размеров</div>
            </div>
            
            <table>
                <tr>${titleTable(item)}</tr>   
                ${testArrSizes.map((item) => {
                    return `
                        <tr data-size class="tr-common product-item-js">${dataTable(item)}</tr>
                    `
                }).join('')  }
            </table>
            
            <div class="result">
            <span class="result-title">Итого:</span> 
                <span class="result-price">
                    <input class="common-count-js input-count-number count" value="0" readonly> шт. /
                    <input class="common-price-js input-count-number" readonly value="0"> ₽
                </span>
            </div>
        </article>
   `
}

export function popupSizes(item) {
    return `
        <article id="info-table" class="infoTable">
            <div class="common">
                <div class="size-quantity">Размер и количество</div>
                <div class="table-size">Таблица размеров</div>
            </div>
            
            
            <div>
                ${testArrSizes.map((item) => {
                return `
                        <div data-size class="tr-common product-item-js">${dataTable2(item)}</div>
                    `
                }).join('')  }
            </div>
        </article>
   `
}

function titleTable(item) {

    const items = item.map((item) => {
        return `
            <th id="${item.id}">${item.titleTable}</th>          
        `
    })
    return `${items.join('')}`
}


function dataTable(data) {
    return `
        <td class="td-common">${size(data)}</td>  
        <td class="td-common">${quantity()}</td>
        <td class="td-common">${price(data)}</td>         
    `
}

function dataTable2(data) {
  return `
    <div>Hello</div>
  `
}


function size(data) {
    const {size} = data
    return `
        <table>
            <tr class="size">
                <td class="td-size">${size}</td>
                <td class="img-size-wrapper">
                    <img class="img-size" src="${info}" alt="">
                    <div class="popup">
                        <div>Оригинальный размер: S</div>
                        <div>Обхват груди: 86-89 см</div>
                        <div>Обхват талии: 67-71 см</div>
                        <div>Обхват бёдер: 94-97 см</div>
                    </div>
                </td>
            </tr>
        </table>       
    `
}

function quantity() {
    return `
        <table>
            <tr class="quantity">
                <td>
                    <div class="minus" data-button-name="minus"></div>
                </td>
                <td class="quantity-number">
                    <input class="input-count-js input-count-number"  maxlength="2" type="text" readonly value="0">
                </td>
                <td>
                    <div class="plus" data-button-name="plus"></div>
                </td>
            </tr>
        </table>       
    `
}

function price(data) {
    const {oldPrice, price, sale} = data
    return `
        <table>
            <tr>
                <td class="price price-js" data-price="1230">
                ${price ? priceProduct(oldPrice, price, sale) : 'Цена закрыта'}
                    
                </td>
            </tr>
        </table>       
    `
}


function priceProduct(oldPrice, price, sale) {
    return `
        <div class="price-product">
            <section>
                <div class="action">
                    <div style="margin-right: 6px">${sale ? `${Sale()}` : ''}</div>
                    <div class="old-price">${oldPrice}</div>
                </div>
                <div class="price">${price}</div>
            </section>
        </div>
    `
}


