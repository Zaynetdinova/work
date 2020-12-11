import {Component} from "../../core/Component";
import {catalog} from "./catalog.template";

export class Catalog extends Component {
    static className = 'Catalog'

    constructor($root) {
        super($root, {
            name: 'Catalog',
            listeners: []
        });
    }

    toHTML() {
        return catalog()
    }
}