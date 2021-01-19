import {entryTemplate} from './entry.template'
import {registrationTemplate} from './view/registration.template'

export class Entry {

	toHTML() {
		return entryTemplate()
	}

	toRegistration() {
		return registrationTemplate()
	}
}