import done from '../../../../../images/icons/done.svg'
import {commonCard} from "../../../common/commonCard/commonCards";
import img1 from "../../../../../images/bestsellers/1/img1.png";
import img2 from "../../../../../images/bestsellers/1/img2.png";
import img3 from "../../../../../images/bestsellers/1/img3.png";
import img4 from "../../../../../images/bestsellers/1/img4.png";
import img5 from "../../../../../images/bestsellers/1/img5.png";
import img6 from "../../../../../images/bestsellers/1/img6.png";

export function orderDone() {
    return `
        <div class="order-done">
            <div class="flex-order-done">
                <div>
                    <div class="wrapper-title">
                        <img src="${done}" alt="">
                        <div class="title">
                            <div class="order-done-title">Заказ отправлен</div>
                            <div>Номер заказа <b>12345</b></div>
                        </div>
                    </div>
                    <div class="img-order-mobile"></div> 
                    <p>Счёт будет выставлен в течение 1-2х дней с оповещением на электронную почту и телефон. 
                    Этапы сборки заказа Вы можете отслеживать в личном кабинете в разделе <a href="">История заказов.</a></p>
                    <p>Если у Вас остались вопросы, свяжитесь с нами по телефонам <a href="">8 (800) 301-25-75 </a>
                    <br>или <a href="">8 (499) 608-89-25</a>  в рабочее время.</p>
                    <div class="wrapper-button">
                        <a href="/" class="main-button">На главную</a>
                        <a href="/#personal-area/order-status" class="history-order-button">История заказов</a>
                    </div>
                </div>
                <div class="img-order"></div> 
            </div>
            <div class="wrapper-card">
                ${commonCard(testData, 'price')}       
            </div> 
        </div>
    `
}


const testData = {
    title: 'Новые поступления',
    _id: 'catalog',
    data: [
        {
            id: 'test1',
            img: img1,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            banner: 'НОВИНКА',
            bannerPosition: 'bottom',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'test2',
            img: img2,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'test3',
            img: img3,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'test4',
            img: img4,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'test5',
            img: img5,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'test6',
            img: img6,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'test7',
            img: img5,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'test8',
            img: img5,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
    ],
}
