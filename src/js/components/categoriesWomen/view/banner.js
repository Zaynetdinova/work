import {desktop} from "../../common/moyomodaBlock/desktop";
import {mobile} from "../../common/moyomodaBlock/mobile";
import {Title} from "../../common/moyomodaBlock/title";
import img1 from "../../../../images/moyo/1.png";
import img2 from "../../../../images/moyo/2.png";
import img3 from "../../../../images/moyo/3.png";
import img4 from "../../../../images/moyo/4.png";
import img5 from "../../../../images/moyo/5.png";
import MOYOmoda from '../../../../images/moyo/MOYOmoda2.svg'

export function bannerBlockWomen() {
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
        title: 'Трикотаж',
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
        title: 'Нижнее белье',
        description: 'Смотреть на сайте партнера',
    },
    {
        id: '',
        img: img5,
        title: 'Колготки и носки',
        description: 'Смотреть на сайте партнера',
    },
]