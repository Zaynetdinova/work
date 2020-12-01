import {Component} from "../../core/Component";
import {moyomodaBlock} from "./moyomodaBlock.template";
import img1 from "../../../images/moyo/women.png";
import img2 from "../../../images/moyo/girl.png";
import img3 from "../../../images/moyo/men.png";
import img4 from "../../../images/moyo/boy.png";
import img5 from "../../../images/moyo/home.png";
import img6 from "../../../images/moyo/toy.png";
import Swiper from "swiper";

export class MoyomodaBlock extends Component {
    static className = 'Moyomoda-Block'
    constructor($root) {
        super($root, {
            name: 'MoyomodaBlock',
        });
    }
    slider() {
        let moyomodaBlock = new Swiper('.swiper-container4', {
            slidesPerView: 3,
            slidesPerGroup: 1,
            centerSlides: true,
        })
    }
    toHTML() {
        return moyomodaBlock(cards)
    }
}

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