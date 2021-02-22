import Inputmask from 'inputmask'

export function inputMaskPhone(selectorName, country = '') {
	let number

	switch (country) {
		case 'Russia':
			number = '+7'
			break
		case 'Armenia':
			number = '+374'
			break
		case 'Georgia':
			number = '+\\9\\95'
			break
		case 'Kazakhstan':
			number = '+7'
			break
		case 'Belarus':
			number = '+375'
			break
		default:
			number = '+7'
	}

	const selector = document.querySelector(selectorName);
	const im = new Inputmask(`${number} (999) -999-99-99`)
	return im.mask(selector);
}
