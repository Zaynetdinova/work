import {Component} from "../../../core/Component";
import {personalDataTemplate} from "./personalData.template";



export class PersonalData extends Component {
  static className = 'Personal-Data'

  constructor($root) {
    super($root, {
      name: 'PersonalData',
      listeners: []
    });
  }

  toHTML() {
    return personalDataTemplate()
  }
}
