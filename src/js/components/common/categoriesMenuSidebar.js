import {sidebarPoint} from "./sidebarPoint";


export  function categoriesMenuSidebar(item) {
    const items = item.map(() => {
    return `
        <div class="CategoriesMenuSidebar">
            <div class="points">
                <div class="sidebar">
                    ${sidebarPoint(item,'notArrow')}               
                </div>
            </div>
        </div>
    `
    })
    return `${items.join('')}`
}
