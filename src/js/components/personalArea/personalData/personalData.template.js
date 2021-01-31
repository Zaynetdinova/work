import {TitleData} from "../Basket/view/titleData";
import {ButtonData} from "../Basket/view/buttonData";
import {checkboxRegistration} from "../../common/checkboxRegistration";
import {imgCloseIcon} from "../Basket/view/imgCloseIcon";
import {transitionWrapper} from "../../common/transitionTitle";
import {navigation} from "../view/navigation";

export function personalDataTemplate() {
	return `
  <div id="personal-area-js" class="wrapper-personal-area">
            ${transitionWrapper(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <div class="exit">Выйти</div>
            </div>
            
            ${navigation('personal-data')}
            
            <div id="personal-area-content-js">
                <div class="Personal-Data">
  <div class="title-data-main">Ваши данные</div>
<div class="wrapper-columns">
  <div class="first-column">
  <div class="wrapper-box">
  <div class="wrapper-box-1">
  ${TitleData('Сумма на Вашем депозите')}
  <div class="color">${TitleData('2 468,00 ₽')}</div>
  </div>
  <div class="wrapper-box-4">
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
<div class="info-text">Если Вы хотите изменить форму собственности и/или название компании, позвоните менеджеру: <span style="white-space: nowrap">+7 800 301-25-75</span></div>
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
  <div class="width-info">
  <div style="margin-bottom: 16px"><span style="color: #AB064E">Внимание!</span> Указан город, в котором Вы получите груз</div>
<div>Информация о городе доставки берется из данных при регистрации на сайте. Если Вы хотите изменить город доставки и у Вас есть оплаченный заказ, позвоните нашему менеджеру: <span style="white-space: nowrap">+7 800 301-25-75</span></div>
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
  ${imgCloseIcon()}
  <div>108840, Россия, Троицк, ул. Академика Черенкова, 3 (склад сдек)</div>
</div>
<div class="tower">
  <div class="width-info">
  <div><span style="color: #AB064E">Внимание!</span> Информация по адресу доставки берется из Вашего первого заказа. Если в дальнейшем Вы хотите изменить адрес доставки и у Вас есть отправленный нам заказ, позвоните нашему менеджеру: <span style="white-space: nowrap">+7 800 301-25-75</span></div>
</div>
${ButtonData('Изменить')}
</div>
</div>
<div class="wrapper-box">
  <div class="wrapper-box-1">
  ${TitleData('Гостевые логины')}
  <div class="password-guest">
  ${imgCloseIcon()}
  <div>Гостевой логин (наценка 0% + 0)</div>
</div>
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
  ${TitleData('Рассылка')}
  <div class="checkbox-data">${checkboxRegistration('Получать рассылку об акциях и новинках')}</div>
  </div>
  </div>
  </div>
  </div>
            </div>
        </div>
		
	`
}

let link = [
  {
    title: 'Личный кабинет',
    link: '/#personal-area'
  }
]
