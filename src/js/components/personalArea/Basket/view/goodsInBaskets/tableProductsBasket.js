import women from '../../../../../../images/bestsellers/1/img1.png'
import close from '../../../../../../images/icons/close_popup_black.svg'
import {sizeInfo} from '../../../../common/sizeInfo'
import {infoProduct} from '../../../../common/infoProduct'
import {Sale} from '../../../../common/sale'
import {quantity} from '../../../../common/quantity'
import {favorites} from '../../../../common/favorites'

export function tableProductsBasket() {
    return `
        <table class="wrapper-basket">
        
            <tr class="title-main-string">
                <td class="first-string name-percent">Наименование</td>
                <td class="first-string size-percent">Размер</td>
                <td class="first-string quantity-percent">Количество</td>
                <td class="first-string price-percent">Цена</td>
                <td class="first-string sale-percent">Скидка</td>
                <td class="first-string sum-percent">Сумма</td>
                <td class="first-string selected-dimensions-product-title" style="width: 12%"></td>
                <td class="first-string" style="width: 5%"></td>
            </tr>
            
            <tr class="auxiliary-unit-top">
                <td class="line-top" colspan="8">
                    <div class="">
                        <span></span>
                    </div>
                </td>
            </tr>
            
            ${goodsTest.map((item) => {
                const {info, sizes} = item
                return `
                <tr class="good">
                
                <td class="name-product">
                    <div class="wrapper-product">
                        <img class="img-product" src="${women}" alt="">
                        <div class="wrapper-info">
                            <div class="wrapper-favorites">${favorites()}</div>
                            <div class="name-brand">Vittoria Vicci</div>
                            <div class="name-product">Наименование товара</div>
                            ${infoProduct(info)}
                        </div>
                    </div>
                </td>
                
                <td class="size-product">
                    ${sizeInfo(sizes)}
                </td>
                
                <td class="quantity-product">
                    ${sizes.map(({id}) => {
                      return quantity(id)
                    }).join('')}
                </td>
                
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
                
                <td class="selected-dimensions-product">
                    <div class="change-selected-dimensions">Изменить выбранные размеры</div>
                </td>
                
                <td class="img-close">
                    <img class="close" src="${close}" alt="">
                </td>
            </tr>
            
            <tr class="auxiliary-unit-bottom">
                <td colspan="8">
                    <div class="selected-dimensions-product-mobile">
                        <span class="change-selected-dimensions">Изменить выбранные размеры</span>
                    </div>
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
        infoType: 'ID:',
        infoResult: '247355'
      },
      {
        infoType: 'Цвет:',
        infoResult: 'Коричневый'
      },
    ],

    sizes: [
      {size: '40', price: '1 200', id: 'size40'},
      {size: '42', price: '1 200', id: 'size42'},
      {size: '44', price: '1 200', id: 'size44'},
    ]
  },
  {
    info: [
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
      {size: '40', price: '1 200', id: 'size40'},
      {size: '42', price: '1 200', id: 'size42'},
      {size: '44', price: '1 200', id: 'size44'},
    ]
  }
]
