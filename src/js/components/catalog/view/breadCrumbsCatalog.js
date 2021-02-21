export function breadCrumbsCatalog(item) {
    const items = item.map((item) => {
        return `
            <div class="bread-crumbs">
                <span class="home"><a href="/">Главная</a></span>
                <span class="line-span">/</span>
                <span class="home"><a href=${item.link}>${item.title}</a></span>
                <span class="line-span">/</span>
                <span class="title"><a href=${item.linkCategory}>${item.titleCategory}</a></span>                   
            </div>                
        `
    })
    return `${items.join('')}`
}
