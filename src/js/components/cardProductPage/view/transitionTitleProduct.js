export function transitionTitleProduct(item) {
    const items = item.map((item) => {
        return `
            <div class="transitionWrapper">
                <span class="home"><a href="/">Главная</a></span>
                <span>/</span>
                <span class="home"><a href=${item.link}>${item.title}</a></span>
                <span>/</span>
                <span class="home"><a href=${item.linkCategory}>${item.titleCategory}</a></span>
                <span>/</span>
                <span class="home"><a href=${item.linkType}>${item.titleType}</a></span>
                <span>/</span>
                <span class="title"><a href=${item.linkProduct}>${item.titleProduct}</a></span>     
            </div>                
        `
    })
    return `${items.join('')}`
}