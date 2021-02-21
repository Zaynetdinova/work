import {infoProduct} from "../../../common/infoProduct";
import women from '../../../../../images/bestsellers/1/img1.png'
import {Sale} from "../../../common/sale";
import {iconTitle} from "./iconTitle";
import box from "../../../../../images/icons/box.svg";
import orderProcessing from '../../../../../images/icons/order-processing.svg';

export function viewOrderTable() {
    return `
        <table class="view-order-table">
            <tr class="title-main-string">
                <td class="first-string">№</td>
                <td class="first-string name-percent">Наименование</td>
                <td class="first-string size-percent">Размер</td>
                <td class="first-string quantity-percent">Количество</td>
                <td class="first-string">Статус</td>
                <td class="first-string price-percent">Цена</td>
                <td class="first-string sale-percent">Скидка</td>
                <td class="first-string sum-percent">Сумма</td>
            </tr>
            
            <tr class="auxiliary-unit-top">
                <td class="line-top" colspan="8">
                    <span></span>
                </td>
            </tr>
            
            ${goodsTest.map((item) => {
            const {info, sizes} = item
            return `
                <tr class="good">
                    <td class="wrap-num"><div class="num">1</div></td>
                    <td class="name-product">
                        <div class="wrapper-product">
                            <img class="img-product" src="${women}" alt="">
                            <div class="wrapper-info">
                                <div class="name-brand">Vittoria Vicci</div>
                                <div class="name-product">Наименование товара</div>
                                ${infoProduct(info)}
                                <table class="example-wrapper">
                                    <td>${iconTitle(exampleOne)}</td> 
                                </table>
                            </div>
                        </div>
                    </td>
                    
                    <td class="size-product">
                        ${sizes.map(({size}) => {
                        return  ` <div class="wrap-size">
                                    <div class="col">${size}</div>
                                    <div class="crest"></div>
                                  </div>
                                  `
                        }).join('')}
                    </td>
                    
                    <td class="quantity-product">
                        ${sizes.map(({col}) => {
                        return  `<div class="col">${col}</div>`
                        }).join('')}
                    </td>
                    
                    
                    ${iconTitle(exampleOne)}
                    
                    
                    <td class="price-product">
                        ${sizes.map(({id, price}) => {
                            return `
                                <div class="number-sum" id="${id}">${price},00 ₽</div>
                            `
                            }).join('')}
                    </td>
                
                    <td class="sale-product">
                        <div class="wrapper-sale-product">
                            ${Sale()}
                            <div class="sale-sum">234,00 ₽</div>
                        </div>
                    </td>
                
                    <td class="sum-product">
                        ${sizes.map(({id, price}) => {
                            return `
                                <div class="number-sum" style="font-weight: bold">1 234,00 ₽</div>
                            `
                            }).join('')}
                    </td>
                </tr>
                <tr class="auxiliary-unit-bottom">
                    <td colspan="8">
                         <span></span>
                    </td>
                </tr>
              `
    })} 
        </table>
    `
}

const goodsTest = [
    {
        info: [
            {
                infoType: 'Артикул:',
                infoResult: '01.2345/678'
            },
            {
                infoType: 'ID:',
                infoResult: '247355'
            },
            {
                infoType: 'Цвет:',
                infoResult: 'Коричневый'
            },
        ],

        sizes: [
            {size: '40', price: '1 200', id: 'size40', col: '2'},
            {size: '42', price: '1 200', id: 'size42', col: '88'},
            {size: '44', price: '1 200', id: 'size44', col: '88'},
        ]
    }
]

let exampleOne = [
    {
        icon: orderProcessing,
        title: ''
    },
    {
        icon: box,
        title: ''
    },
]