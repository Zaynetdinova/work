export function navCatalog(item) {
    return `
        <nav class="navCatalog">${jumpCatalog(item)}</nav>
    `
}


function jumpCatalog(item) {
    const items = item.map((item) => {
        return `
            <article data-catalog-parent-event-js id="page-number-js">
                <div class="nav-text ${item.class}" id="${item.id}">${item.title}</div>
            </article>        
        `
    })
    return `${items.join('')}`
}