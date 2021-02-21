import img1 from "../../../../images/bestsellers/1/img1.png";
import img2 from "../../../../images/bestsellers/1/img2.png";
import img3 from "../../../../images/bestsellers/1/img3.png";
import img4 from "../../../../images/bestsellers/1/img4.png";
import img5 from "../../../../images/bestsellers/1/img5.png";
import img6 from "../../../../images/bestsellers/1/img6.png";
import {card} from "../../common/commonCard/card";
import {navigation} from "../../common/navigation";
import {navigationMobile} from "../../common/navigation-mobile";
import {breadCrumbs} from '../../common/breadCrumbs'

export  function chosenPageTemplate() {
    return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${breadCrumbs(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <a href="/" class="exit">Выйти</a>
            </div>
            <div class="name-user">Имя пользователя</div>
            <div class="wrapper-navigation-personal-area">
                ${navigation('favorites')}
                ${navigationMobile('/#personal-area/discount-and-bonuses','избранное','/#personal-area/basket')}
            </div>
        </div>
        <div class="wrapper-favorite">
            <div class="cards">
                    ${woman.data.map(i => {
                    return `
                    ${card(i)}
                    `}).join('')}
                </div> 
        </div>
    `
}

let link = [
    {
        title: 'Избранное',
        link: '/#personal-area/favorites'
    }
]

const woman = {
    data: [
        {
            id: 'woman1',
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
            id: 'woman2',
            img: img2,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman3',
            img: img3,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman4',
            img: img4,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman5',
            img: img5,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman6',
            img: img6,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman7',
            img: img5,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman8',
            img: img6,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman9',
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
            id: 'woman10',
            img: img2,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman11',
            img: img3,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
        {
            id: 'woman12',
            img: img4,
            title: 'Vittoria Vicci',
            description: 'Наименование товара ',
            oldPrice: '1 234,00 &#8381',
            newPrice: '-234,00 &#8381;',
            price: '1 243,00 &#8381; ',
            sale: true
        },
    ],
}