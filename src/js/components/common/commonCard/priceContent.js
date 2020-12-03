import {Sale} from '../sale'

export function priceContent(oldPrice, newPrice, price, sale) {
	console.log(sale)
	return `
  <div class='Price-content'>
    <section>
      <div class="action">
        <div class="old-price">${oldPrice}</div>
        <div class="new-price">${newPrice}</div>
      </div>
      <div class="sale-price" style="display: flex; align-items: center;">
        <div class="price">${price}</div>
        <div style="margin-left: 6px">${sale ? `${Sale()}` : ''}</div>
      </div>
    </section>
    
		<div class="Health"></div>
    
  </div>
  `
}