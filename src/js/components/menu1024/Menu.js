import {Component} from "../../core/Component";

import img1 from "../../../images/menu/1.svg";
import img2 from "../../../images/menu/2.svg";
import img3 from "../../../images/menu/3.svg";
import img4 from "../../../images/menu/4.svg";
import img5 from "../../../images/menu/5.svg";
import img6 from "../../../images/menu/6.svg";

import {menuCategories} from "./menu.template";

export class Menu extends Component {
    static className = 'Menu'
    constructor($root) {
        super($root, {
            name: 'Menu',
            listeners: []
        });
    }
    toHTML() {
        return menuCategories(cards)
    }
}

const cards = [
    {
        img: img1,
        title: 'женщинам',
        link: '/#categories'
    },
    {
        img: img2,
        title: 'девочкам',
        link: '/#categories-children'
    },
    {
        img: img3,
        title: 'мужчинам',
        link: '/#categories'
    },
    {
        img: img4,
        title: 'мальчикам',
        link: '/#categories-children'
    },
    {
        img: img5,
        title: 'для дома',
        link: '/#categories'
    },
    {
        img: img6,
        title: 'игрушки',
        link: '/#categories'
    },
]
