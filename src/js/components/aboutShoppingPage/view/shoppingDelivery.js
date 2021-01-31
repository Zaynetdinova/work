import {titleImg} from '../../common/titleImg'
import transport from '../../../../images/icons/transport-color.svg'
import mail from '../../../../images/icons/mail-color.svg'
import man from '../../../../images/information/man-mail.png'

export function shoppingDelivery() {
	return `
		<div class="shopping-delivery">
			<div class="title-delivery">Доставка</div>
			<p class="text">Вы можете забрать свой заказ в пункте самовывоза по адресу г. Москва, Окружной проезд, 30А. 
			Схему расположения <a href="">смотрите</a> в разделе контакты. 
			Если вы находитесь в другом городе, мы осуществляем бесплатную доставку до любой транспортной компании в Москве.</p>
			<div class="wrapper-column">
				<div class="one-column">
					${titleImg(transport, 'Транспортные компании')}
					<p>Ниже указаны основные транспортные компании, с которыми мы успешно сотрудничаем:</p>
					<div class="items">- Байкал Сервис (въезд на территорию платный, оплачивает покупатель) <br> 
					- Возовоз <br>  - Деловые Линии <br>  - ЖелДорЭкспедиция <br>  
					- ПЭК <br>  - Энергия</div>
					<div class="text-italic">Обращаем внимание, что с 01 сенября 2017 года прекращено сотрудничество с ТК КИТ</div>
				</div>
				<div class="two-column">
					${titleImg(mail, 'Почтовые службы')}
					<p>При выборе такого варианта доставки вам будет выставлен отдельный счет на оплату почтовых услуг.</p>
					<div class="items">- EMS <br> - Почта России <br> - СДЭК <br> - DPD</div>
				</div>
			</div>
			<div class="wrapper-footer-delivery">
				<p>Если вас не устраивают эти компании,
				мы можем отправить ваш заказ любой другой компанией по вашему выбору.
				</p>
				<img src="${man}" alt="man-mail">
			</div>
		</div>
	`
}