import {titleRegistration} from '../../../common/titleRegistration'
import {nesessaryFildsTemplate} from '../../../common/entry/view/nesesaryFilds.template'
import {buttonRegistration} from '../../../common/buttonRegistration'

export function changePhoneTemplate() {
	return `

	${titleRegistration('Изменение')}
	<form class="form-js" id="personal-change-phone-form-js">
	 <div class="wrap-input">
		<h1>Phone</h1>
			
			${nesessaryFildsTemplate()}
			${buttonRegistration('Изменить тедефл')} 
      </div>
	</form>
	
	`
}