export class SendForm {
	constructor() {
		this.forms = null
		this.state = true
	}

	init(root) {
		this.forms = root.querySelectorAll('.form-js')
		if(this.forms) {
		  console.log(this.forms)
			this.forms.forEach((form) => {
				form.addEventListener('submit', async (e) => {
					e.preventDefault()
					const email = form.email
					const password = form.password
					const passwordRepeat = form.passwordRepeat
					const name = form.name
					const surname = form.surname
					const patronymic = form.patronymic
					const city = form.city
					const newPassword = form.newPassword
					const repeatNewPassword = form.repeatNewPassword
          const phone = form.phone
          const organization = form.querySelector('#form-value-organization')
          console.log(organization.textContent)


					//

					const inputs = [
						email,
						password,
						name,
						surname,
						patronymic,
						passwordRepeat,
						city,
						newPassword,
						repeatNewPassword,
            phone
					]

					const activeInputs = this.filterInput(inputs)

					const state = this.verificationInput(activeInputs, form)
					this.fillAllNecessaryFields(state, form, activeInputs)
				})
			})
		}
	}

	filterInput(inputs) {
		const valid = inputs.filter((input) => {
			return input !== undefined && input !== ''
		})

		return valid
	}

	verificationInput(activeInputs) {
		let state = true
		activeInputs.forEach((input) => {
			switch (input.getAttribute('name')) {
				case 'email':
					changeState(input)
					break
				case 'password':
					changeState(input)
					break
				case 'passwordRepeat':
					changeState(input)
					break
				case 'name':
					changeState(input)
					break
				case 'surname':
					changeState(input)
					break
				case 'city':
					changeState(input)
					break
        case 'phone':
          changeState(input)
          break
			}
		})

		function changeState(input) {
			if(input.value === '') {
				state = false
				input.classList.add('not-necessary-fields')
			}
		}


		return state
	}

	fillAllNecessaryFields(state, form, activeInputs) {
		const necessaryFields = form.querySelector('#error-input-text-js')
		if(!state) {
			necessaryFields.classList.add('error-input-text-active')
		} else {
			const data = {}
			activeInputs.forEach((item) => {
				data[item.name] = item.value
			})
			console.log(data)
			necessaryFields.classList.remove('error-input-text-active')
		}
	}

}


