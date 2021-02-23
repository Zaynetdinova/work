import {Component} from "../../../core/Component";
import {aboutContactsPageTemplate} from "./aboutContactsPage.template";


export class AboutContactsPage extends Component {
    static className = 'About-contacts-page'

    constructor($root) {
        super($root, {
            name: 'AboutContactsPage',
            listeners: []
        });

      this.link = [
        {
          title: 'Контакты',
          link: '/#information/contacts'
        }
      ]
    }

    toHTML() {
        return aboutContactsPageTemplate(this.link)
    }

}
