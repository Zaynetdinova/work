export function titleWrapper(item) {
		const items = item.map((item) => {
				return `
            <div class="titleWrapper">
                <div class="title">${item.title}</div>
		        <div class="value">${item.value}</div>
            </div>                  
    		`
		})
	return `${items.join('')}`
}