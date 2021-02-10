export function transitionTitleProduct(item) {
    // переименовать name
    const items = item.map((item) => {
        return `
            <div data-transition-title-js class="test1">
                <div class="transitionWrapper">
                <div class="test-block"></div>
                <span class="home"><a href="/">Главная</a></span>
                <span class="line-span">/</span>
                <span class="home"><a href=${item.link}>${item.title}</a></span>
                <span class="line-span">/</span>
                <span class="home"><a href=${item.linkCategory}>${item.titleCategory}</a></span>
                <span class="line-span">/</span>
                <span class="home"><a href=${item.linkType}>${item.titleType}</a></span>
                <span class="line-span">/</span>
                <span class="title"><a href=${item.linkProduct}>${item.titleProduct}</a></span>     
            </div>     
            </div>           
        `
    })
    return `${items.join('')}`
}