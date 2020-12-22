import {Component} from '../../core/Component'
import {categoriesChildren} from "./categoriesChildren.template";
import img1 from "../../../images/bestsellers/1/img1.png";
import img2 from "../../../images/bestsellers/1/img2.png";
import img3 from "../../../images/bestsellers/1/img3.png";
import img4 from "../../../images/bestsellers/1/img4.png";
import img5 from "../../../images/bestsellers/1/img5.png";
import img6 from "../../../images/bestsellers/1/img6.png";
import {sidebarChildren} from './js/sidebarChildren'

export class CategoriesChildren extends Component {
    static className = 'CategoriesChildren'
    constructor($root) {
        super($root, {
            name: 'CategoriesChildren',
            listeners: ['click']
        });
    }

    toHTML() {
        return categoriesChildren()
    }

    onClick(e) {
        sidebarChildren(e)
    }
}