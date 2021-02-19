import {nameOrder, orderName} from './nameOrder'
import img1 from '../../../../../images/icons/new-order.svg'
import img2 from '../../../../../images/icons/processed-order.svg'
import img3 from '../../../../../images/icons/send-order.svg'
import img4 from '../../../../../images/icons/paid-order.svg'
import img5 from '../../../../../images/icons/canceled-order.svg'
import img6 from '../../../../../images/icons/package-order.svg'
import img7 from '../../../../../images/icons/done-order.svg'
import plus from '../../../../../images/icons/orderStatus/plus.svg'
import invoiceArgument from '../../../../../images/icons/orderStatus/Invoice-agreement.svg'
import invoice from '../../../../../images/icons/orderStatus/Invoice.svg'
import confirm from '../../../../../images/icons/orderStatus/confirm.svg'
import nonConfirm from '../../../../../images/icons/orderStatus/not-c.svg'
import {status} from './iconTitle'

export function wrapOrderMobile() {
	return `
		<div class="wrap-order-mobail">
			<div data-oder-name-page class="order-name-mobail">
				<div class="wrap-common">
					<div>
						${nameOrder(img1, 'Новый')}
						${orderName(order)}
						<div class="pay-order">
							<div class="way-pay">Ожидается оплата</div>
							<a class="pay-online" href="">Оплатить онлайн</a>
						</div>
					</div>
					<div data-parent-order-js class="more-details" id="more-details">
						<span class="more">Подробнее</span>
						<span class="hide">Скрыть</span>
						<div class="arrow"></div>
					</div>
				</div>
				<div class="see-more-details">
					<div class="wrap-sum-col">
						<div class="post">
							<div class="col">Количество</div>
							<div class="sum">2</div>
						</div>
						<div class="post">
							<div class="col">Сумма</div>
							<div class="sum">2 468,00 ₽</div>
						</div>
					</div>
					<div class="wrapper-icon-title">
						${status(exampleOne)}
					</div>
					<div class="button-see-order">Посмотреть заказ</div>
				</div>
				<div class="title-add">
					<img src="${plus}" alt="">
					<div><a href="">Дозаказ #12345 от 01.12.2020</a> – <b>186 шт. / 12 345,67 ₽</b></div>
				</div>
				<div class="title-add">
					<img src="${plus}" alt="">
					<div><a href="">Дозаказ #12345 от 01.12.2020</a> – <b>186 шт. / 12 345,67 ₽</b></div>
				</div>
				<div class="line"></div>
			</div>	
		</div>
	`
}

let order = [
	{
		title: 'Доставка:',
		name: 'Самовывоз'
	},
	{
		title: 'Получатель:',
		name: 'ИП Получатель'
	}
]

let exampleOne = [
	{
		icon: invoiceArgument,
		title: '<a href="">Счёт-договор</a>'
	},
	{
		icon: invoice,
		title: '<a href="">Накладная Торг12</a>'
	},
	{
		icon: confirm,
		title: 'Товар подтвердил поставщик'
	},
	{
		icon: nonConfirm,
		title: 'Товар собран на складе'
	},
]