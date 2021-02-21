export function MainTemplate(banner,
														 menu24,
														 popularBrand,
														 sharesBlock,
														 moyomodaBlock,
														 bestsellers) {
	return `
	 	<div>
			${banner.toHTML()}
			${menu24.toHTML()}
			${popularBrand.toHTML()}
			${sharesBlock.toHTML()}
			${moyomodaBlock.toHTML()}
			${bestsellers.toHTML()}
		</div>
	`
}