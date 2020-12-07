import {Component} from '../../core/Component'
import {transitionTitle} from "./transitionTitle.template";



export class TransitionTitle extends Component {
    static className = 'TransitionTitle'

    constructor($root) {
        super($root, {
            name: 'TransitionTitle',
            // listeners: ['click', 'input', 'mouseenter', 'mouseover']
        });

    }

    toHTML() {
        return transitionTitle()
    }
}