export function initialForm(root) {
	const forms = document.querySelectorAll('.form-js')

	if(forms) {
		forms.forEach((form) => {
			form.addEventListener('submit', async (e) => {
				e.preventDefault()

				const email = form.email
				const password = form.password
				const passwordRepeat = form.passwordRepeat
				const name = form.name
				const surname = form.surname
				const patronymic = form.patronymic
				const city = form.city

				//

				const inputs = [email, password, name, surname, patronymic, passwordRepeat, city]

				const activeInputs = filterInput(inputs)
				const state = verificationInput(activeInputs, form)
				fillAllNecessaryFields(state, form)


			})
		})
	}

}

function validateEmail(email) {
	const pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return pattern.test(email);
}

function fillAllNecessaryFields(state, form) {
	const necessaryFields = form.querySelector('#error-input-text-js')
	if(!state) {
		necessaryFields.classList.add('error-input-text-active')
	} else {
		necessaryFields.classList.remove('error-input-text-active')
	}
}

function verificationInput(activeInputs, form) {
	let state = true

	activeInputs.forEach((input) => {

		switch (input.getAttribute('name')) {
			case 'email':
				changeState(input)
				break
			case 'password':
				changeState(input)
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

function filterInput(inputs) {
	const arrTest = inputs.filter((input) => {
		// починить
		return input !== undefined && input !== ''
	})

	return arrTest
}