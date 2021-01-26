export function IconImg(item) {
    return `
        <div class="Icon-img">${icon(item)}</div>
    `
}

function icon(item) {
    const items = item.map((item) => {
        return `
        <a class="box" href="${item.link}">
            <img src=${item.img} alt="">
			      <div class="title">${item.title}</div>
        </a>    
            
        `
    })
    return `${items.join('')}`
}
