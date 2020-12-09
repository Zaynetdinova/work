export function IconImg(item) {
    return `
        <div class="Icon-img">${icon(item)}</div>
    `
}

function icon(item) {

    const items = item.map((item) => {
        return `
        <div class="box">
            <img src=${item.img} alt="">
			<div class="title">${item.title}</div>
        </div>    
            
        `
    })
    return `${items.join('')}`
}
