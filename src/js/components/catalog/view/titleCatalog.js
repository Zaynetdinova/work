export function titleCatalog(item) {
		const items = item.map((item) => {
				return `
            <div class="titleWrapper">
                <div class="titleAndValue">
                    <div class="title">${item.titleCategory}</div>
                    <div class="value">${item.value}</div>
                </div>
                <article data-catalog-parent-event-js class="button-filter" id="button-filter-mobile-js">Фильтры</article>               
            </div>                             
      	`
		})
		return `${items.join('')}`
}