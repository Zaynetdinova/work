import {sidebarChoice} from "./sidebarChoice";

export function sidebarPoint(point, arrow = '') {
  const items = point.map((item) => {
    const {category, subcategory = false, img} = item
    return `
        <article id="point-js" class="point-js" data-type="${item.id}">
            <div class="point">
                <div class='name'>
                    ${img ? `<img class="sidebar-img" src=${img} alt='icon'>` : ''}
                    
                    <div class='title'>${item.title}</div>
                </div>
                <div class='plus' id='plus' datatype="${item.id}">
                    <span></span>
                </div>
            </div>
                
            <hr class="line-white">           
           
            <div class='categories ${ subcategory ? 'main-sub-category' : ''}' id=${item.id}>
                ${sidebarChoice(category, subcategory, arrow)}
            </div> 
        </article>        
    `
  })
  return `${items.join('')}`
}
