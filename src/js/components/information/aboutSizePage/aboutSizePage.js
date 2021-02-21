import {Component} from "../../../core/Component";
import {aboutSizePageTemplate} from "./aboutSizePage.template";

export class AboutSizePage extends Component {
    static className = 'About-size-page'

    constructor($root) {
        super($root, {
            name: 'AboutSizePage',
            listeners: []
        });
    }

    toHTML() {
        return aboutSizePageTemplate()
    }
}
