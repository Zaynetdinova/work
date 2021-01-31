export function navigation(thisClass = '') {

	return `
	<div id="navigation-js" class="navigation">
       <a href="/#personal-area/basket" class="${thisClass === 'basket' ? 'active' : ''} item" id="basket-js">Корзина</a>
       <a href="/#personal-area/personal-data" class="${thisClass === 'personal-data' ? 'active' : ''} item" id="personal-data-js">Личные данные</a>
       <div class="item" id="order-history-js">История заказов</div>
       <div class="item" id="discounts-and-bonuses-js">Скидки и бонусы</div>
       <div class="item" id="favorites-js">Избранное</div>
	</div>
	`
}
