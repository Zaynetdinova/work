import {Component} from "../../core/Component";
import {personalAreaTemplate} from "./personalArea.template";

export class PersonalArea extends Component {
    static className = 'Personal-area'

    constructor($root) {
        super($root, {
            name: 'PersonalArea',
            listeners: ['click']
        });
    }

    toHTML() {
        return personalAreaTemplate()
    }

    onClick() {}
}