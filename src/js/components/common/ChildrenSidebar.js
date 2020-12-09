

export function childrenSidebar(item) {
    return `
        <div class='ChildrenSidebar'>
            <hr class="line-white">
            ${templateSidebarChildren(item)}
        </div>
    `
}


function templateSidebarChildren(item) {
    const items = item.map((item) => {
        return `
            <a class='link-children'>
                <img class="img" src=${item.img} alt="">
                <div class='wrap-span'>
                    <span class="item">${item.name}</span>
                    <span class="month">${item.month}</span>
                </div>
            </a>
            <hr class="line-white">
        `
    })
    return `${items.join('')}`
}