export function navCatalog(item) {
    return `
        <nav class="navCatalog">${jumpCatalog(item)}</nav>
    `
}


function jumpCatalog(item) {
    const items = item.map((item) => {
        return `
            <a class="nav-text" href="">${item.title}</a>           
        `
    })
    return `${items.join('')}`
}