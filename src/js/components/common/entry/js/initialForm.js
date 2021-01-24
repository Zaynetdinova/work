export function initialForm(root) {
	const forms = document.querySelectorAll('.form-js')

	if(forms) {
		forms.forEach((form) => {
			form.addEventListener('submit', async (e) => {
				e.preventDefault()
				const email = form.elements['login-name']
				console.log(email.value)
			})
		})
	}

}