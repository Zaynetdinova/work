import {Component} from "../../../core/Component";
import {personalDataTemplate} from "./personalData.template";
import {Popup} from '../../common/js/Popup'
import {popupDefaultTemplate} from '../../common/popupDefaultTemplate/popupDefault.template'
import {changePasswordTemplate} from './view/changePasswordTemplate'
import {changePhoneTemplate} from './view/changePhoneTemplate'
import {changeTransportTemplate} from './view/changeTransportTemplate'
import {changeAddressTemplate} from "./view/changeAddressTemplate";
import {changeGuestLoginTemplate} from "./view/changeGuestLoginTemplate";
import {personalDataLegalEntitiesTemplate} from "./personalDataLegalEntities.template";
import {changeBankDetailsTemplate} from "./view/changeBankDetailsTemplate";
import {changeLegalAddressTemplate} from "./view/changeLegalAddressTemplate";



export class PersonalData extends Component {
  static className = 'Personal-Data'

  constructor($root) {
    super($root, {
      name: 'PersonalData',
      listeners: ['click']
    });
    this.link = [
      {
        title: 'Личные данные',
        link: '/#personal-area/personal-data'
      }
    ]
    this.popup = new Popup(popupDefaultTemplate)
  }

  toHTML() {
    return personalDataLegalEntitiesTemplate(this.link)
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
          break;
        case 'personal-replenish-account':
          console.log('personal-replenish-account')
          break;
        case 'personal-change-phone-js':
          this.changePhoneTemplate()
          break;
        case 'personal-change-transport-js':
          this.changeTransportTemplate()
          break;
        case 'personal-change-city-js':
          this.changePhoneTemplate()
          break;
        case 'personal-change-address-js':
          this.changeAddressTemplate()
          break;
        case 'personal-change-guest-login-js':
          this.changeGuestLoginTemplate()
          break;
        case 'personal-change-bank-details-js':
          this.changeBankDetailsTemplate()
          break;
        case 'personal-change-legal-address-js':
          this.changeLegalAddressTemplate()
          break;
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
    this.popup.addElement(changeTransportTemplate(), this)
  }
  changeAddressTemplate() {
    this.popup.addElement(changeAddressTemplate(), this)
  }
  changeGuestLoginTemplate() {
    this.popup.addElement(changeGuestLoginTemplate(), this)
  }
  changeBankDetailsTemplate() {
    this.popup.addElement(changeBankDetailsTemplate(), this)
  }
  changeLegalAddressTemplate() {
    this.popup.addElement(changeLegalAddressTemplate(), this)
    this.controlStylingWrapper()
  }

  controlStylingWrapper() {
    const test = document.querySelector('#entry-wrapper-js')
    test.classList.remove('wrapper-Entry')
    test.classList.add('wrapper-buyForMe')
  }
}
