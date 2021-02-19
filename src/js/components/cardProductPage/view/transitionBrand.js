export function transitionBrand(item) {
    const items = item.map((item) => {
        return `
            <div class="transitionBrand">
                <span class="brand"><a href=''>${item.brand}</a></span>
                <span class="category">/</span>
                <span class="category" style="margin-left: 8px"><a href=''>${item.category}</a></span>     
            </div>                
        `
    })
    return `${items.join('')}`
}

export function goodStock(text = '', count = 0) {
    return `
        <div class="goodStock">
            <span class="stock">${text}</span>
            <span class="stock">/</span>
            <span class="stock">купили ${count} раз</span>     
        </div>                
    `
}