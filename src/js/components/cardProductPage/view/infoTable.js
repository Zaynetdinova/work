import info from '../../../../images/cardProduct/info.svg'
import minus from '../../../../images/cardProduct/minus.svg'
import plus from '../../../../images/cardProduct/plus.svg'

export function infoTable(item) {
    return `
        <div class="infoTable">
            <div class="common">
                <div class="size-quantity">Размер и количество</div>
                <div class="table-size">Таблица размеров</div>
            </div>
            <table>
                <tr>${titleTable(item)}</tr>   
                <tr class="tr-common">${dataTable(item)}</tr>
                <tr class="tr-common">${dataTable(item)}</tr>   
                <tr class="tr-common">${dataTable(item)}</tr>   
                <tr class="tr-common">${dataTable(item)}</tr>
                <tr class="tr-common">${dataTable(item)}</tr>        
            </table>
            <div class="result"><span class="result-title">Итого:</span> <span class="result-price">88 шт./ 1 234 ₽</span></div>
        </div>
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

function size() {
    return `
        <table>
            <tr class="size">
                <td class="td-size">44</td>
                <td><img class="img-size" src="${info}" alt=""></td>
            </tr>
        </table>       
    `
}

function quantity() {
    return `
        <table>
            <tr class="quantity">
                <td><img src="${minus}" alt=""></td>
                <td class="quantity-number">88</td>
                <td><img src="${plus}" alt=""></td>
            </tr>
        </table>       
    `
}

function price() {
    return `
        <table>
            <tr>
                <td class="price">Цена закрыта</td>
            </tr>
        </table>       
    `
}


