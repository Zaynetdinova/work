import {Component} from "../../../core/Component";
import {aboutUsPageTemplate} from "./aboutUsPage.template";


export class AboutUsPage extends Component {
    static className = 'About-us-page'

    constructor($root) {
        super($root, {
            name: 'AboutUsPage',
            listeners: []
        });


      this.link = [
        {
          title: 'О нас',
          link: '/#information/about-us'
        }
      ]
    }

    toHTML() {
        return aboutUsPageTemplate(this.link)
    }
}
