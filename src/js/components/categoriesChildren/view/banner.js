import {Title} from "../../common/moyomodaBlock/title";
import {desktop} from "../../common/moyomodaBlock/desktop";
import {mobile} from "../../common/moyomodaBlock/mobile";
import MOYOmoda from "../../../../images/icons/partner-moyomoda.svg";
import img1 from "../../../../images/moyo/girl/1.png";
import img2 from "../../../../images/moyo/girl/2.png";
import img3 from "../../../../images/moyo/girl/3.png";
import img4 from "../../../../images/moyo/girl/4.png";
import img5 from "../../../../images/moyo/girl/5.png";

export function bannerBlockChildren() {
    return `
    <section class="root">
        ${Title(title)}      
        ${desktop(cards)}
        ${mobile(cards)}      
    </section>
   `
}

const title = [
    {
        name: 'ПРЕДЛОЖЕНИЯ ОТ ПАРТНЕРА',
        background: MOYOmoda
    }
]

const cards = [
    {
        id: '',
        img: img1,
        title: 'Платья',
        description: 'Смотреть на сайте партнера',
    },
    {
        id: '',
        img: img2,
        title: 'Блузки',
        description: 'Смотреть на сайте партнера',
    },
    {
        id: '',
        img: img3,
        title: 'Верхняя одежда',
        description: 'Смотреть на сайте партнера',
    },
    {
        id: '',
        img: img4,
        title: 'Одежда для школы',
        description: 'Смотреть на сайте партнера',
    },
    {
        id: '',
        img: img5,
        title: 'Колготки и носки',
        description: 'Смотреть на сайте партнера',
    },
]