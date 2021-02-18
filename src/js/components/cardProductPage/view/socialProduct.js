export function socialProduct(item) {

    const items = item.map((item) => {
        return `  
            <div class="socialProduct">    
                <a href="${item.href}" target="_blank">
                    <div class="${item.class}"></div>
                </a>                      
            </div>               
        `
    })
    return `${items.join('')}`
}