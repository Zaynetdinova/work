import {Component} from "../../../core/Component";
import {workingConditionsPageTemplate} from "./workingСonditionsPage.temlate";

export class WorkingConditionsPage extends Component {
    static className = 'Working-conditions-page'

    constructor($root) {
        super($root, {
            name: 'WorkingСonditionsPage',
            listeners: ['click']
        });
    }

    toHTML() {
        return workingConditionsPageTemplate()
    }

    onClick() {}
}