import info from '../../../../images/cardProduct/info.svg'
import minus from '../../../../images/cardProduct/minus.svg'
import plus from '../../../../images/cardProduct/plus.svg'
import {Sale} from "../../common/sale";

export function infoTable(item) {
    return `
        <article id="info-table" class="infoTable">
            <div class="common">
                <div class="size-quantity">Размер и количество</div>
                <div class="table-size">Таблица размеров</div>
            </div>
            <table>
                <tr>${titleTable(item)}</tr>   
                <tr data-size class="tr-common product-item-js">${dataTable3(item)}</tr>
                <tr data-size class="tr-common product-item-js">${dataTable(item)}</tr>   
                <tr data-size class="tr-common product-item-js">${dataTable2(item)}</tr>   
                <tr data-size class="tr-common product-item-js">${dataTable3(item)}</tr>
                <tr data-size class="tr-common product-item-js">${dataTable3(item)}</tr>        
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

function titleTable(item) {

    const items = item.map((item) => {
        return `
            <th id="${item.id}">${item.titleTable}</th>          
        `
    })
    return `${items.join('')}`
}

function dataTable() {
    return `
        <td class="td-common">${size()}</td>  
        <td class="td-common">${quantity()}</td>
        <td class="td-common">${price()}</td>         
    `
}
function dataTable2() {
    return `
        <td class="td-common">${size()}</td>  
        <td class="td-common">${quantity()}</td>
        <td class="td-common">${price2()}</td>         
    `
}
function dataTable3() {
    return `
        <td class="td-common">${size()}</td>  
        <td class="td-common">${quantity()}</td>
        <td class="td-common">${price3()}</td>         
    `
}

function size() {
    return `
        <table>
            <tr class="size">
                <td class="td-size">44</td>
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
                    <img class="minus" data-button-name="minus" src="${minus}" alt="">
                </td>
                <td class="quantity-number">
                    <input class="input-count-js input-count-number"  maxlength="2" type="text" readonly value="0">
                </td>
                <td>
                    <img class="plus" data-button-name="plus" src="${plus}" alt="">
                </td>
            </tr>
        </table>       
    `
}

function price() {
    return `
        <table>
            <tr>
                <td class="price price-js" data-price="1230">${priceProduct('1 234,00 ₽','1 234,00 ₽',true)}</td>
            </tr>
        </table>       
    `
}
function price2() {
    return `
        <table>
            <tr>
                <td class="price price-js" data-price="1230">${priceProduct('','1 234,00 ₽',false)}</td>
            </tr>
        </table>       
    `
}
function price3() {
    return `
        <table>
            <tr>
                <td class="price price-js" data-price="1230">Цена закрыта</td>
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


