import {viewPhotosBlock} from './view/viewPhotosBlock'

export function cardProductPageTemplate() {
	return `
		<div class="root">
			<div class="wrapper">
				<section class="photos">
					${viewPhotosBlock()}
				</section>
				<section class="product-description">
					<h1>верстка для Ильмиры</h1>
				</section>
			</div>
			
			<div>
			 <h1>вы недавно смотрели</h1>
			</div>
		</div>
	`
}