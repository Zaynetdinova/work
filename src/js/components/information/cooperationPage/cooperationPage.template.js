import {transitionWrapper} from "../../common/transitionTitle";
import img1 from '../../../../images/icons/1.svg'
import img2 from '../../../../images/icons/2.svg'
import img3 from '../../../../images/icons/3.svg'
import img4 from '../../../../images/icons/4.svg'
import img5 from '../../../../images/icons/5.svg'
import img6 from '../../../../images/icons/6.svg'

export function cooperationPageTemplate() {
    return `
        <div class="wrapper-cooperation">
            ${transitionWrapper(link)}
           	<div class="title-shopping">Сотрудничество</div>
           	<div class="title-cooperation">Приглашаем к сотрудничеству производителей одежды и аксессуаров.</div>
           	<div class="grid">
           	    <div class="item-grid">
           	        <img src="${img1}" alt="">
           	        <div>Высокое качество изделий</div>
                </div>
                <div class="item-grid">
           	        <img src="${img3}" alt="">
           	        <div>Сезонное пополнение коллекций</div>
                </div>
                <div class="item-grid">
           	        <img src="${img5}" alt="">
           	        <div>Скидка от оптовой цены</div>
                </div>
                <div class="item-grid">
           	        <img src="${img2}" alt="">
           	        <div>Товарный запас</div>
                </div>
                <div class="item-grid">
           	        <img src="${img4}" alt="">
           	        <div>Предоставление актуальных товарных остатков</div>
                </div>
                <div class="item-grid">
           	        <img src="${img6}" alt="">
           	        <div>Наличие готового скалада в Москве или соседних городах, доступных по логистике</div>
                </div>
            </div>
            <div class="text-cooperation">Мы всегда открыты для сотрудничества и переговоров. Все предложения вы можете отправлять на почту <a href="mailto:allyleon@optmoyo.ru">allyleon@optmoyo.ru</a></div>
            <b>Стройте бизнес с лучшими!</b>
        </div>
    `
}

let link = [
    {
        title: 'Поставщикам',
        link: '/#information/cooperation'
    }
]