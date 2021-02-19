import {Component} from "../../../core/Component";
import {personalDataTemplate} from "./personalData.template";
import {Popup} from '../../common/js/Popup'
import {popupDefaultTemplate} from '../../common/popupDefault.template'
import {changePasswordTemplate} from './view/changePasswordTemplate'
import {changePhoneTemplate} from './view/changePhoneTemplate'
import {changeTransportTemplate} from './view/changeTransportTemplate'



export class PersonalData extends Component {
  static className = 'Personal-Data'

  constructor($root) {
    super($root, {
      name: 'PersonalData',
      listeners: ['click']
    });

    this.popup = new Popup(popupDefaultTemplate)
  }

  toHTML() {
    return personalDataTemplate()
  }

  afterInitComponent() {

  }

  handleClick(event) {
    const clickElem = event.target

    if(clickElem.closest('#close-entry-registration-js')) {
      this.popup.closeEntry()
    }
  }

  onClick(e) {
    if(e.target.closest('[data-button-parent-js]')) {
      const id = e.target.closest('[data-button-parent-js]').id

      switch (id) {
        case 'personal-change-password-js':
          this.changePasswordTemplate()
          break
        case 'personal-replenish-account':
          console.log('personal-replenish-account')
          break
        case 'personal-change-phone-js':
          this.changePhoneTemplate()
          break
        case 'personal-change-transport-js':
          this.changeTransportTemplate()
          break
      }
    }
  }

  changePasswordTemplate() {
    this.popup.addElement(changePasswordTemplate(), this)
  }

  changePhoneTemplate() {
    this.popup.addElement(changePhoneTemplate(), this)
  }
  changeTransportTemplate() {
    this.popup.addElement(changeTransportTemplate(),this)
  }
}
