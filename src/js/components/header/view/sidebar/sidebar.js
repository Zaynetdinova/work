import icon from '../../../../../images/sidebar/icon.svg'

import {choice} from './choice'

export function sidebar(point) {
    const items = point.map((item) => {
    const {category, subcategory = false} = item
    return `
        <article id="point-js" data-type="${item.id}">
            <div class="point">
                <div class='name'>
                    <img class="sidebar-img" src=${item.img} alt='icon'>
                    <div class='title'>${item.title}</div>
                </div>
                <div class='plus' id='plus' datatype="${item.id}">
                    <span></span>
                </div>
            </div>
                
            <hr class="header-line">
            
           
            <div class='categories ${ subcategory ? 'main-sub-category' : ''}' id=${item.id}>
                ${choice(category, subcategory)}
            </div> 
        </article>
        
    `
    })
    return `${items.join('')}`
}





