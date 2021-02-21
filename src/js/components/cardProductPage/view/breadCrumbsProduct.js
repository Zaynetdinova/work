export function breadCrumbsProduct(item) {
    const items = item.map((item) => {
        return `
            <div data-transition-title-js class="bread-crumbs-product">
                <div class="bread-crumbs">
                    <div class="auxiliary-block"></div>
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