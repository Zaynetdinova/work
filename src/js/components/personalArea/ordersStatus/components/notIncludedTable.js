import {sizeInfo} from "../../../common/sizeInfo";
import {infoProduct} from "../../../common/infoProduct";
import women from '../../../../../images/bestsellers/1/img1.png'

export function notIncludedTable() {
    return `
        <table class="not-included-table">
            <tr class="title-main-string">
                <td class="first-string">№</td>
                <td class="first-string name-percent">Наименование</td>
                <td class="first-string size-percent">Размер</td>
                <td class="first-string no-order"></td>
                <td class="first-string quantity-percent">Количество</td>
            </tr>
            
            <tr class="auxiliary-unit-top">
                <td class="line-top" colspan="5">
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
                            </div>
                        </div>
                    </td>
                    
                    <td class="size-product">
                        ${sizeInfo(sizes)}
                    </td>
                    
                    <td>
                        <div class="product-out">Товара нет в наличии</div>
                    </td>
                    <td class="quantity-product">
                        ${sizes.map(({col}) => {
                        return  `
                            <div class="col">${col}</div>
                        `}).join('')}
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