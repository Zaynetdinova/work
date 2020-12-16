export function filterChoice(item) {

	const items = item.map((item) => {
		const {id, color, category, number} = item
		return `
            <div class="wrapper-box">
                <div class="filter-choice">
                    <div class="checkbox-choice">
                        <input class="checkbox" type="checkbox" id="${id}" data-text="${category}"> 
                        <label for="${id}">
                            <div class="cont">
                                ${color ? `<div class="color ${color}"></div>` : ''}
                                
                                <div class="title">${category} ${number}</div>
                            </div>
                        </label>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
                   
        `
	})
	return `${items.join('')}`
}

