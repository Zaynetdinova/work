import {transitionWrapper} from "../../common/transitionTitle";
import img1 from '../../../../images/icons/return/1.svg'
import img2 from '../../../../images/icons/return/2.svg'
import img3 from '../../../../images/icons/return/3.svg'
import img4 from '../../../../images/icons/return/4.svg'
import {navigationInformationAboutShopping} from "../../common/navigationInformationAboutShopping";

export function  aboutReturnsPageTemplate() {
    return `
        <div class="wrapper-return">
            ${transitionWrapper(link)}
           	<div class="title-shopping">О покупках</div>
           	<div class="wrapper-navigation-info">
           	    ${navigationInformationAboutShopping('return')}
            </div>
            <div class ="wrapper-flex">
                <div class="flex-item">
                    <div class="title">
                        <img src="${img1}" alt="">
                        <div>1. Заполните заявление</div>
                    </div>
                    <div class="box">
                        <div class="wrapper-exel">
                            <div class="exel">
                                <img src="${img4}" alt="">
                                <div>Бланк заявления на возврат товара по причине 
                                брака для физ. и юр. лиц</div>
                            </div>
                            <div class="exel">
                                <img src="${img4}" alt="">
                                <div>Бланк заявления на возврат денежных средств по 
                                причине недовложения/пересорта для физ. и юр. лиц</div>
                            </div>
                        </div>                
                        <div class="statement-email">Заявления отправлять на почту <a href="mailto:vozvrat@optmoyo.ru">vozvrat@optmoyo.ru</a></div>        
                    </div>
                </div>
                <div class="flex-item">
                    <div class="title">
                        <img src="${img2}" alt="">
                        <div>2. Отправьте брак/пересорт</div>
                    </div>
                    <div class="box">
                        <div>Почтой России обычной посылкой на адрес:
                            <span class="grey"><span class="no-wrap">105077, Москва,</span> до востребования, <span class="no-wrap">ИП Потапов Л.В.</span></span>
                        </div>
                        <div class="box-2-text">Или доставьте самостоятельно по адресу:<span class="grey"> Москва, Окружной проезд, 30А</span></div>
                        <div><span class="color">Внимание!</span> <br> Пересылка брака и пересорта за наш счет</div>
                    </div>
                </div>
                <div class="flex-item">
                    <div class="title">
                        <img src="${img3}" alt="">
                        <div>3. Получите деньги</div>
                    </div>
                    <div class="box">
                        <div class="box-3">Возврат денежных средств будет осуществлен 
                        после получения посылки в течение <span class="no-wrap">10 рабочих дней</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

let link = [
    {
        title: 'Возврат',
        link: '/#information/return'
    }
]
