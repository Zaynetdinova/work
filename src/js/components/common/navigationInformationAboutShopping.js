export function navigationInformationAboutShopping(thisClass = '') {

  return `
	<div class="Navigation">
       <a href="/#information/size" class="${thisClass === 'size' ? 'active' : ''} item">Размеры</a>
       <a href="/#information/about-shopping" class="${thisClass === 'about-delivery' ? 'active' : ''} item">Доставка</a>
       <a href="/#information/about-payment" class="${thisClass === 'about-payment' ? 'active' : ''} item">Оплата</a>
       <a href="/#information/question-answers" class="${thisClass === 'answer' ? 'active' : ''} item">Вопросы и ответы</a>
       <a href="/#information/return" class="${thisClass === 'return' ? 'active' : ''} item">возврат</a>
	</div>
	`
}
