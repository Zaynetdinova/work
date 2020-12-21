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

export function goodStock() {
    return `
        <div class="goodStock">
            <span class="stock">товар в наличии</span>
            <span class="stock">/</span>
            <span class="stock">купили 1 раз</span>     
        </div>                
    `
}