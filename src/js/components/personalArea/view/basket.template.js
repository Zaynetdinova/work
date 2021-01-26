import {basketPageTemplate} from "./basketTemplate/basketPage.template";


export function basketTemplate() {
	return `
		<div class="Basket">
			${basketPageTemplate()}
		</div>
	`
}
