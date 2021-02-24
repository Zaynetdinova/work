import {Component} from "../../../core/Component";
import {cooperationPageTemplate} from "./cooperationPage.template";


export class CooperationPage extends Component {
    static className = 'Cooperation-page'

    constructor($root) {
        super($root, {
            name: 'CooperationPage',
            listeners: ['click']
        });
        this.link = [
            {
                title: 'Поставщикам',
                link: '/#information/cooperation'
            }
        ]
    }

    toHTML() {
        return cooperationPageTemplate(this.link)
    }

    onClick() {}
}