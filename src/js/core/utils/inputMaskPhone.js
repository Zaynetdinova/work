import Inputmask from 'inputmask'

export function inputMaskPhone(selectorName) {
	const selector = document.querySelector(selectorName);
	const im = new Inputmask("+7 (999) -999-99-99");
	return im.mask(selector);
}