export function navCatalog(item) {
    return `
        <nav id="nav-catalog" data-catalog-parent-event-js class="navCatalog">${jumpCatalog(item)}</nav>
    `
}


function jumpCatalog(item) {
    const items = item.map((item) => {
        return `
            <div class="page-number-js nav-text ${item.class}" id="${item.id}">${item.title}</div>      
        `
    })
    return `${items.join('')}`
}