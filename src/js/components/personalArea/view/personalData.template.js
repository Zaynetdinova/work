import {TitleData} from "./components/titleData";
import {ButtonData} from "./components/buttonData";
import close from '../../../../images/icons/exit.svg'
import {checkboxRegistration} from "../../common/checkboxRegistration";

export function personalDataTemplate() {
	return `
		<div class="Personal-Data">
			<div class="title-data-main">Ваши данные</div>
			<div class="wrapper-columns">
				<div class="first-column">
					<div class="wrapper-box">
						<div class="wrapper-box-1">
							${TitleData('Сумма на Вашем депозите')}
							<div class="color">${TitleData('2 468,00 ₽')}</div>
						</div>
						<div class="wrapper-box-1">
							<input class="input-personal-data" type="text" placeholder="Введите сумму">
							${ButtonData('Пополнить')}
						</div>
					</div>
					<div class="wrapper-box">
						<div class="wrapper-box-1">
							${TitleData('Логин и пароль')}
							<div class="password">Логин: ххххх@mail.ru</div>
						</div>
						${ButtonData('Изменить пароль')}
					</div>
					<div class="wrapper-box-2">
						<div class="wrapper-box-1" style="margin-bottom: 7px">
							${TitleData('Организация')}
							<div class="organization">Название организации</div>
						</div>
						<div class="info-text">Если Вы хотите изменить форму собственности и/или название компании, позвоните менеджеру: +7 800 301-25-75</div>
					</div>
					<div class="wrapper-box">
						<div class="wrapper-box-1">
							${TitleData('Телефон')}
							<div class="transport-company">+7 123 456-78-90</div>
						</div>
						${ButtonData('Изменить')}
					</div>
					<div class="wrapper-box-2">
						<div class="wrapper-box-1">
							${TitleData('Город доставки')}
							<div class="transport-company">Название города</div>
						</div>
						<div class="tower">
							<div style="width: 466px">
								<div style="margin-bottom: 16px"><span style="color: #AB064E">Внимание!</span> Указан город, в котором Вы получите груз</div>
								<div>Информация о городе доставки берется из данных при регистрации на сайте. Если Вы хотите изменить город доставки и у Вас есть оплаченный заказ, позвоните нашему менеджеру: +7 800 301-25-75</div>
							</div>						
							${ButtonData('Изменить')}
						</div>						
					</div>
				</div>
				<div class="second-column">
					<div class="wrapper-box">
						<div class="wrapper-box-1">
							${TitleData('Транспортная компания')}
							<div class="transport-company">ПЭК</div>
						</div>
						${ButtonData('Изменить')}
					</div>
					<div class="wrapper-box-2">
						<div class="wrapper-box-1">
							${TitleData('Адреса доставки')}
						</div>
						<div class="wrap-close-text">
							<img src="${close}" alt="" style="width: 10px; height: 10px;margin-right: 12px">
							<div>108840, Россия, Троицк, ул. Академика Черенкова, 3 (склад сдек)</div>
						</div>
						<div class="tower">
							<div style="width: 466px">
								<div><span style="color: #AB064E">Внимание!</span> Информация по адресу доставки берется из Вашего первого заказа. Если в дальнейшем Вы хотите изменить адрес доставки и у Вас есть отправленный нам заказ, позвоните нашему менеджеру: +7 800 301-25-75</div>
							</div>						
							${ButtonData('Изменить')}
						</div>						
					</div>
					<div class="wrapper-box">
						<div class="wrapper-box-1">
							${TitleData('Гостевые логины')}
							<img src="${close}" alt="" style="width: 10px; height: 10px; margin-left: 12px;margin-right: 12px">
							<div>Гостевой логин (наценка 0% + 0)</div>
						</div>
						${ButtonData('Изменить')}
					</div>
					<div class="wrapper-box">
						<div class="wrapper-box-1">
							${TitleData('Показывать парсер СП')}
						</div>
						<select>
							<option>Нет</option>
							<option>TurboParcer</option>
							<option>Sliza</option>
							<option>BestSP</option>
							<option>Облачный</option>
							<option>ПарсерПлюс</option>
						</select>
					</div>
					<div class="wrapper-box-3">
						<div class="wrapper-box-1">
							${TitleData('Рассылка')}
							<div class="checkbox-data">${checkboxRegistration('Получать рассылку об акциях и новинках')}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
}