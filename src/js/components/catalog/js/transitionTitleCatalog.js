
export function transitionTitleCatalog(item) {

    const items = item.map((item) => {
        return `
            <div class="transitionWrapper">
                <span class="home"><a href="/">Главная</a></span>
                <span>/</span>
                <span class="title"><a href=${item.link}>${item.title}</a></span>
                <span>/</span>
                <span class="title"><a href=${item.linkCategory}>${item.titleCategory}</a></span>                   
            </div>
                
        `
    })
    return `${items.join('')}`
}


export function titleCatalog(item) {

    const items = item.map((item) => {
        return `
            <div class="titleWrapper">
                <div class="title">${item.titleCategory}</div>
		        <div class="value">${item.value}</div>
            </div>
                   
        `
    })
    return `${items.join('')}`
}
