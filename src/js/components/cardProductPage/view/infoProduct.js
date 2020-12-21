export function infoProduct(item) {
    const items = item.map((item) => {
        return `
            <div class="infoProduct">
                <span class="infoType">${item.infoType}<span class="infoResult">${item.infoResult}</span></span>
            </div>                
        `
    })
    return `${items.join('')}`
}