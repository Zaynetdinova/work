export function socialProduct(item) {

    const items = item.map((item) => {
        return `  
            <div class="socialProduct">
                <div class="line"></div>                                
                <img class="socialImg" src="${item.img}" alt="img">
            </div>               
        `
    })
    return `${items.join('')}`
}