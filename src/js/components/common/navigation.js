export function navigation(thisClass = '') {

	return `
	<div id="navigation-js" class="Navigation">
       <a href="/#personal-area/basket" class="${thisClass === 'basket' ? 'active' : ''} item" id="basket-js">Корзина</a>
       <a href="/#personal-area/personal-data" class="${thisClass === 'personal-data' ? 'active' : ''} item" id="personal-data-js">Личные данные</a>
       <a href="/#personal-area/order-status" class="${thisClass === 'order-status' ? 'active' : ''} item" id="order-history-js">История заказов</a>
       <a href="/#personal-area/discount-and-bonuses" class="${thisClass === 'discount' ? 'active' : ''} item" id="discounts-and-bonuses-js">Скидки и бонусы</a>
       <a href="/#personal-area/favorites" class="${thisClass === 'favorites' ? 'active' : ''} item" id="favorites-js">Избранное</a>
	</div>
	`
}
