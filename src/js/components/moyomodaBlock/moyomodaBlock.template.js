import MOYOmoda from '../../../images/moyo/MOYOmoda.svg'
import {desktop} from "./view/desktop";
import {mobile} from "./view/mobile";
import img1 from "../../../images/moyo/women.png";
import img2 from "../../../images/moyo/girl.png";
import img3 from "../../../images/moyo/men.png";
import img4 from "../../../images/moyo/boy.png";
import img5 from "../../../images/moyo/home.png";
import img6 from "../../../images/moyo/toy.png";
import {Title} from "./view/title";


export function moyomodaBlock() {
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
        name: 'БОЛЬШЕ БРЕНДОВ НА САЙТЕ ПАРТНЕРА',
        background: MOYOmoda
    }
]

const cards = [
    {
        id: '',
        img: img1,
        title: 'Женщинам',
        description: 'Смотреть на сайте партнера',
    },
    {
        id: '',
        img: img2,
        title: 'Девочкам',
        description: 'Смотреть на сайте партнера',
    },
    {
        id: '',
        img: img3,
        title: 'Мужчинам',
        description: 'Смотреть на сайте партнера',
    },
    {
        id: '',
        img: img4,
        title: 'Мальчикам',
        description: 'Смотреть на сайте партнера',
    },
    {
        id: '',
        img: img5,
        title: 'Для дома',
        description: 'Смотреть на сайте партнера',
    },
    {
        id: '',
        img: img6,
        title: 'Игрушки',
        description: 'Смотреть на сайте партнера',
    },
]
