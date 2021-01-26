import {basketPageTemplate} from "./basketTemplate/basketPage.template";
import {deliveryPageTemplate} from "./basketTemplate/deliveryPage.template";


export function basketTemplate() {
	return `
		<div class="Basket">
			${deliveryPageTemplate()}
		</div>
	`
}

// ${basketPageTemplate()}