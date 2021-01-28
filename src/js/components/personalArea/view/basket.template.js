import {basketPageTemplate} from "./basketTemplate/basketPage.template";
import {deliveryPageTemplate} from "./basketTemplate/deliveryPage.template";
import {paymentPageTemplate} from "./basketTemplate/paymentPage.template";


export function basketTemplate() {
	return `
		<div class="Basket">
			 ${basketPageTemplate()}
		</div>
	`
}

// ${basketPageTemplate()}
// ${deliveryPageTemplate()}
// ${paymentPageTemplate()}