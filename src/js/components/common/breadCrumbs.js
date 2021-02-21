export function breadCrumbs(item) {
    const items = item.map((item) => {
        return `
            <div class="bread-crumbs">
                <span class="home"><a href="/">Главная</a></span>
                <span class="line-span">/</span>
                <span class="title"><a href=${item.link}>${item.title}</a></span>                   
            </div>                
        `
    })
    return `${items.join('')}`
}


