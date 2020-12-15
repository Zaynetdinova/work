
export function Title(item) {

    const items = item.map((item) => {
        return `
            <div class="main-title">
                <div class="caption">${item.name}</div>
                <img src=${item.background} alt="MOYOmoda">
            </div>  
                   
        `
    })
    return `${items.join('')}`
}
