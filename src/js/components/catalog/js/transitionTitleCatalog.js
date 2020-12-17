
export function transitionTitleCatalog(item) {

    const items = item.map((item) => {
        return `
            <div class="transitionWrapper">
                <span class="home"><a href="/">Главная</a></span>
                <span>/</span>
                <span class="title"><a href=${item.link}>${item.title}</a></span>
                <span>/</span>
                <span class="title2"><a href=${item.linkCategory}>${item.titleCategory}</a></span>                   
            </div>
                
        `
    })
    return `${items.join('')}`
}


export function titleCatalog(item) {

    const items = item.map((item) => {
        return `
            <div class="titleWrapper">
                <div class="titleAndValue">
                    <div class="title">${item.titleCategory}</div>
                    <div class="value">${item.value}</div>
                </div>
                    <article class="button-filter" id="button-filter-mobile-js">Фильтры</article>               
            </div>
                             
        `
    })
    return `${items.join('')}`
}
