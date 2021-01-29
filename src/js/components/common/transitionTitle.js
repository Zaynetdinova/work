export function transitionWrapper(item) {
    const items = item.map((item) => {
        return `
            <div class="transitionWrapper">
                <span class="home"><a href="/">Главная</a></span>
                <span class="line-span">/</span>
                <span class="title"><a href=${item.link}>${item.title}</a></span>                   
            </div>                
        `
    })
    return `${items.join('')}`
}

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


