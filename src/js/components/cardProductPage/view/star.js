export function star(item) {

    const items = item.map((item) => {
        return `
            <div class="star">
               <img src="${item.star}" alt="star">
               <img src="${item.star}" alt="star">
               <img src="${item.star}" alt="star">
               <img src="${item.star}" alt="star">
               <img src="${item.starEmpty}" alt="starEmpty">    
            </div>
                
        `
    })
    return `${items.join('')}`
}