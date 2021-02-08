import {infoProduct} from '../../../common/infoProduct'
import {favorites} from '../../../common/favorites'
import women from '../../../../../images/bestsellers/1/img1.png'
import close from '../../../../../images/icons/close_popup_black.svg'


export function mobileTableProductsBasket() {
	return `
			<table>
			${goodsTest.map((item) => {
			const {info, sizes} = item
			return `
					<tr class="good">						
							<td class="name-product">
									<div class="wrapper-product">
											<div class="img-product-wrapper-info">
													<img class="img-product" src="${women}" alt="">
													<div class="wrapper-info">
															<div class="wrapper-favorites">${favorites()}</div>
															<div>
																	<div class="name-brand">Vittoria Vicci</div>
																	<div class="name-product">Наименование товара</div>
															</div>													
															<div>${infoProduct(info)}</div>
															<div class="selected-dimensions-product-mobile">
																	<span class="change-selected-dimensions">Изменить выбранные размеры</span>
                    					</div>
													</div>
											</div>
											<img class="close" src="${close}" alt="">
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
	}
]