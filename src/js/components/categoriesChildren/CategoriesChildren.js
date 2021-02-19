import {Component} from '../../core/Component'
import {categoriesChildren} from "./categoriesChildren.template";
import {sidebarChildren} from './js/sidebarChildren'
import {testDataCategoriesChildren} from '../../../testData/testDataCategoriesChildren'

export class CategoriesChildren extends Component {
    static className = 'CategoriesChildren'
    constructor($root) {
        super($root, {
            name: 'CategoriesChildren',
            listeners: ['click']
        });
    }

    toHTML() {
        return categoriesChildren(testDataCategoriesChildren, pageForChildren, dataSidebarGirl)
    }

    onClick(e) {
        sidebarChildren(e)
    }
}

let pageForChildren = [
    {
        link: '/#categories-children',
        title: 'Девочкам',
        value: '1000 товаров'
    }
]

let dataSidebarGirl = [
    {
        id: 'children-baby',
        img: 'baby',
        name: 'Новорожденным',
        month: '(12 мес. - 17 лет)'
    },
    {
        id: 'children-girl',
        img: 'girl',
        name: 'Девочкам',
        month: '(12 мес. - 17 лет)'
    },
]