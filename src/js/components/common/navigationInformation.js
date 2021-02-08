export function navigationInformation(thisClass = '') {

  return `
	<div class="Navigation">
       <a href="/#personal-area/basket" class="${thisClass === 'size' ? 'active' : ''} item">Размеры</a>
       <a href="/#personal-area/personal-data" class="${thisClass === 'delivery' ? 'active' : ''} item">Доставка</a>
       <a href="/#personal-area/personal-data" class="${thisClass === 'payment' ? 'active' : ''} item">Оплата</a>
       <a href="/#personal-area/discount-and-bonuses" class="${thisClass === 'answer' ? 'active' : ''} item">Вопросы и ответы</a>
	</div>
	`
}
