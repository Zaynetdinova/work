import women from '../../../../images/bestsellers/1/img1.png'
import close from '../../../../images/icons/close_popup_black.svg'
import {infoProduct} from "../../common/infoProduct";
import {favorites} from "../../common/favorites";
import {sizeInfo} from "../../common/sizeInfo";
import {quantity} from "../../common/quantity";
import {Sale} from "../../common/sale";
import {ButtonData} from "./components/buttonData";
import {SumMoneySale} from "./sumMoneySale";


export function basketTemplate() {
	return `
		<div class="Basket-table">
			<table class="wrapper-basket">
				<tr class="title-main-string">
					<th class="first-string" style="width: 293px">Наименование</th>
					<th class="first-string" style="width: 249px">Размер</th>
					<th class="first-string" style="width: 112px">Количество</th>
					<th class="first-string" style="width: 253px">Цена</th>
					<th class="first-string" style="width: 112px">Скидка</th>
					<th class="first-string" style="width: 248px">Сумма</th>
					<th class="first-string" style="width: 173px"></th>
				</tr>
				<tr class="good">
					<td>
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
					<td>
						${sizeInfo(ArrSizes)}
					</td>
					<td>
						${quantity()}
						${quantity()}
						${quantity()}
					</td>
					<td>
						<div style="text-align: center;line-height: 32px">1 234,00 ₽</div>
						<div style="text-align: center;line-height: 32px">1 234,00 ₽</div>
						<div style="text-align: center;line-height: 32px">1 234,00 ₽</div>
					</td>
					<td>
						<div style="display: flex; justify-content: center">
							${Sale()}
							<div style="margin-left: 5px">234,00 ₽</div>
						</div>
					</td>
					<td>
						<div style="text-align: center;line-height: 32px;font-weight: bold">1 234,00 ₽</div>
						<div style="text-align: center;line-height: 32px;font-weight: bold"">1 234,00 ₽</div>
						<div style="text-align: center;line-height: 32px;font-weight: bold"">1 234,00 ₽</div>
					</td>
					<td>
						<div class="change-selected-dimensions">Изменить выбранные размеры</div>
					</td>
				</tr>
				<tr class="good">
					<td>
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
					<td>
						${sizeInfo(ArrSizes2)}
					</td>
					<td>
						${quantity()}
					</td>
					<td>
						<div style="text-align: center;line-height: 32px">1 234,00 ₽</div>
					</td>
					<td>
						<div style="display: flex; justify-content: center">
							${Sale()}
							<div style="margin-left: 5px">234,00 ₽</div>
						</div>
					</td>
					<td>
						<div style="text-align: center;line-height: 32px;font-weight: bold"">1 234,00 ₽</div>
					</td>
					<td>
						<div class="change-selected-dimensions">Изменить выбранные размеры</div>
					</td>
				</tr>
				<tr class="good">
					<td>
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
					<td>
						${sizeInfo(ArrSizes3)}
					</td>
					<td>
						${quantity()}
						${quantity()}
					</td>
					<td>
						<div style="text-align: center;line-height: 32px">1 234,00 ₽</div>
						<div style="text-align: center;line-height: 32px">1 234,00 ₽</div>
					</td>
					<td></td>
					<td>
						<div style="text-align: center;line-height: 32px;font-weight: bold"">1 234,00 ₽</div>
						<div style="text-align: center;line-height: 32px;font-weight: bold"">1 234,00 ₽</div>
					</td>
					<td>
						<div class="change-selected-dimensions">Изменить выбранные размеры</div>
					</td>
				</tr
			</table>
			<div class="wrapper-result">
				<div class="promo-code">
					<div style="width: 49%;">
						<div class="line-promo">
							<input class="input-promo-cod" type="text" placeholder="Промокод">
							<div class="wrap-button-data">${ButtonData('Применить')}</div>
						</div>
						<div class="line-promo">
							<div class="bonus">Бонус за выкуп: <span>1 234,00 ₽</span></div>
							<div class="wrap-button-data">${ButtonData('Применить')}</div>
						</div>
						<div class="line-promo">
							<div class="bonus sale">Накопленная Вами скидка: <span>10%</span></div>
						</div>
						<div style="display: flex; justify-content: flex-end">На дипозите: 1 234,00</div>
					</div>
					<div style="width: 49%;">
						${SumMoneySale(sumMoney)}
					</div>
				<div>
				<div class="button-buy-arrange"></div>
			</div>
		</div>
	`
}

let info = [
	{
		infoType: 'ID:',
		infoResult: '247355'
	},
	{
		infoType: 'Цвет:',
		infoResult: 'Коричневый'
	},
]

let sumMoney = [
	{
		title: 'Общая стоимость товаров',
		sum: '1 234,00 ₽'
	},
	{
		title: 'Скидка',
		sum: '1 234,00 ₽'
	},
	{
		title: 'Скидка по промокоду',
		sum: '0,00 ₽'
	},
	{
		title: 'Накопительная скидка',
		sum: '0,00 ₽'
	},
	{
		title: 'Бонус за выкуп',
		sum: '0,00 ₽'
	},
]

const ArrSizes = [
	{size: '40'},
	{size: '42'},
	{size: '44'},
]
const ArrSizes2 = [
	{size: '40'},
]
const ArrSizes3 = [
	{size: '40'},
	{size: '42'},
]