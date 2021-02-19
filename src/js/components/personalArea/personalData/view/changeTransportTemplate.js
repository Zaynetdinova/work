import {titleRegistration} from '../../../common/titleRegistration'
import {nesessaryFildsTemplate} from '../../../common/entry/view/nesesaryFilds.template'
import {buttonRegistration} from '../../../common/buttonRegistration'

export function changeTransportTemplate() {
	return `

	${titleRegistration('Изменение транспортной компании')}
	<form class="form-js" id="personal-change-transport-form-js">
	 <div class="wrap-input">
		<h1>transport</h1>
			
			${nesessaryFildsTemplate()}
			${buttonRegistration('Сохранить')} 
      </div>
	</form>
	
	`
}