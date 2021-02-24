import {Component} from "../../../core/Component";
import {workingConditionsPageTemplate} from "./workingСonditionsPage.temlate";

export class WorkingConditionsPage extends Component {
    static className = 'Working-conditions-page'

    constructor($root) {
        super($root, {
            name: 'WorkingСonditionsPage',
            listeners: ['click']
        });
        this.link = [
            {
                title: 'Условия работы',
                link: '/#information/working-condition'
            }
        ]
    }

    toHTML() {
        return workingConditionsPageTemplate(this.link)
    }

    onClick() {}
}