import {Component} from "../../../core/Component";
import {aboutSizePageTemplate} from "./aboutSizePage.template";

export class AboutSizePage extends Component {
    static className = 'About-size-page'

    constructor($root) {
        super($root, {
            name: 'AboutSizePage',
            listeners: []
        });
        this.link = [
            {
                title: 'Размеры',
                link: '/#information/size'
            }
        ]
    }

    toHTML() {
        return aboutSizePageTemplate(this.link)
    }
}
