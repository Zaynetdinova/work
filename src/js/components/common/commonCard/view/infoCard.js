export function infoCard(title, description) {
	return `
	<div class="info">
		<div class="Com-flex Com-flex-al-center">
			<section>
				<div class="text">
					<div class="title">${title}</div>
					<div class="description">${description}</div>
				</div>
			</section>
		</div>
  	</div>
	`
}