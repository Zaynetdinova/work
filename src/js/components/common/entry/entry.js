import {entryTemplate} from './view/entry.template'
import {registrationTemplate} from './view/registration.template'
import {restorePassword} from './view/restorePassword'
import {buyForMeTemplate} from './view/buyForMe.template'
import {buyForSaleTemplate} from './view/buyForSale.template'
import {backCall} from './view/backСall.template'
import {Select} from '../../../core/utils/selectPlugin'
import Armenia from '../../../../images/icons/armenia.svg'
import Belarus from '../../../../images/icons/belarus.svg'
import Georgia from '../../../../images/icons/georgia.svg'
import Kazakhstan from '../../../../images/icons/kazakhstan.svg'
import Russia from '../../../../images/icons/russia.svg'
import {inputMaskPhone} from '../../../core/utils/inputMaskPhone'
import {Popup} from '../js/Popup'
import {popupDefaultTemplate} from '../popupDefaultTemplate/popupDefault.template'
import {entryStorage} from '../../../core/storage/storages'

export class Entry {
  constructor() {
		this.$body = document.querySelector('body')
		this.popup = new Popup(popupDefaultTemplate)
    this.select = new entryStorage.entrySelect()
    this.init()
	}

	init() {
    this.initDesktop()
    this.initMobile()
    this.initCalls()
	}

	initDesktop() {
    const $button = document.querySelector('#entry-registration-button-js')
    $button.addEventListener('click', () => {
      this.popup.addElement(this.toEntry(), this)
    })
  }

  initMobile() {
    const $buttonMobile = document.querySelector('#enter-button-js')

    if($buttonMobile) {
      $buttonMobile.addEventListener('click', () => {
        this.popup.addElement(this.toEntry(), this)
      })
    }
  }

  initCalls() {
    const $calls = document.querySelectorAll('.backCall-js')

    if ($calls) {
      $calls.forEach((call) => {
        call.addEventListener('click', () => {
          window.scrollTo(0,0)
          this.popup.addElement(this.toBack(), this)
          this.select.selectPhone('#back-call-js')
          inputMaskPhone('.test-mask')
        })
      })
    }
  }

	handleClick(event) {
		const clickElem = event.target

		if(clickElem.closest('#close-entry-registration-js')) {
			this.closeEntry()
		}

		if(clickElem.closest('#sign-up-js')) {
			this.popup.addElement(this.toRegistration(), this)
		}

		if(clickElem.closest('#restore-password-button-js')) {
			this.popup.addElement(this.toRestorePassword(), this)
			this.controlBack('password-className-js')
		}

		if(clickElem.closest('#buy-for-sale-js')) {
			this.popup.addElement(this.toBuyForSale(), this)
			this.controlStylingWrapper()
			this.controlBack('restore-className-js')
			this.select.selectFormOwner()
			this.select.selectPhone('#select-phone-registration-js')
			inputMaskPhone('.test-mask')
		}

		if(clickElem.closest('#buy-for-me-js')) {
			this.popup.addElement(this.toBuyForMe(), this)
			this.controlStylingWrapper()
			this.controlBack('restore-className-js')
      this.select.selectPhone('#select-phone-registration-js')
			inputMaskPhone('.test-mask')
		}

		//back
		if(clickElem.closest('.password-className-js')) {
			this.popup.addElement(this.toEntry(), this)
		}

		if(clickElem.closest('.restore-className-js')) {
			this.popup.addElement(this.toRegistration(), this)
		}
	}

	controlBack(className) {
		const backButton = document.querySelector('#back-js')
		backButton.classList.add(`block`)
		backButton.classList.add(`${className}`)

	}

	controlStylingWrapper() {
		const test = document.querySelector('#entry-wrapper-js')
		test.classList.remove('wrapper-Entry')
		test.classList.add('wrapper-buyForMe')
	}

	closeEntry() {
		this.$body.style = 'overflow: auto'
		const $wrapper = document.querySelector('#Entry-js')
		if($wrapper) {
			$wrapper.remove()
		}
	}


	// шаблоны
	toEntry() {
		return entryTemplate()
	}

	toRegistration() {
		return registrationTemplate()
	}

	toRestorePassword() {
		return restorePassword()
	}

	toBuyForMe() {
		return buyForMeTemplate()
	}

	toBuyForSale() {
		return buyForSaleTemplate()
	}
	toBack() {
		return backCall()
	}
}

export class EntrySelect {

  selectFormOwner() {
    new Select('#form-organization-select-js', {
      originalText: 'Форма собственности*',
      placeholder: 'Форма собственности*',
      type: 'form-organization-select-js',
      data: [
        {id: '1', value: 'ИП'},
        {id: '2', value: 'ООО'},
        {id: '3', value: 'ЗАО'},
      ],
      onSelect(item) {
        console.log('Selected Item', item)
      }
    })
  }

  selectPhone(selector) {
    new Select(selector, {
      placeholder: Russia,
      type: 'select-phone-type',
      data: [
        {
          phone: '+374',
          country: 'Армения',
          value: Armenia,
          id: 'Armenia'
        },
        {
          phone: '+375',
          country: 'Белоруссия',
          value: Belarus,
          id: 'Belarus'
        },
        {
          phone: '+995',
          country: 'Грузия',
          value: Georgia,
          id: 'Georgia'
        },
        {
          phone: '+7',
          country: 'Казахстан',
          value: Kazakhstan,
          id: 'Kazakhstan'
        },
        {
          phone: '+7',
          country: 'Россия',
          value: Russia,
          id: 'Russia'
        },
      ],
      onSelect(item) {
        inputMaskPhone('.test-mask', item.id)
      }
    })
  }
}
