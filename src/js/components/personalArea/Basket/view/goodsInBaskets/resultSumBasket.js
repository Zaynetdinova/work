import {SumMoneySale} from '../sumMoneySale'
import {ButtonData} from '../buttonData'
import cut from '../../../../../../images/icons/cut.svg'

export function resultSumBasket() {
    return `
        <div class="wrapper-result">
            <div class="promo-code">
                <div class="column">
                    <div>
                        <div class="line-promo">
                            <input class="input-promo-cod" type="text" placeholder="Промокод">
                            <img class="cut" src="${cut}" alt="cut">
                            <div class="wrap-button-data">${ButtonData('Применить')}</div>        
                        </div>
                        <div class="line-promo">
                            <div class="bonus">Бонус за выкуп: <span class="margin">1 234,00 ₽</span></div>
                            <div class="wrap-button-data">${ButtonData('Применить')}</div>
                        </div>
                        <div class="line-promo">
                            <div class="bonus sale">Накопленная Вами скидка: <span class="margin">10%</span></div>
                        </div>   
                    </div>
                    <div class="result">На дипозите:  <b>1 234,00 ₽</b></div>              
                </div>
                <div class="column">
                    <div class="wrap-sum">${SumMoneySale(sumMoney)}</div>
                    <div class="result">Итого:  <b>1 234,00 ₽</b></div>
                </div>
            </div>
		</div>
    `
}


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
