export function nameOrder(img,title) {
    return `      
        <div class="img-order">
            <img src="${img}" alt="">
            <div class="title">${title}</div>
        </div>       
    `
}

export function orderName(data) {
    return `
        <div class="wrapper-order-name">
            <div class="order-name">
                <span class="order-title">Заказ № 12345 <span class="data">от 01.12.2020</span></span>
                ${characteristicOrder(data)}
            </div>
            <div>
                <a href="/#personal-area/view-order" class="link-see-order">
                    Посмотреть заказ
                </a>
            </div>
        </div>     
    `
}

function characteristicOrder(item) {
    const items = item.map((item) => {
        return `
            <span class="order-title-delivery">${item.title} <span class="order-delivery">${item.name}</span></span>          
        `
    })
    return `${items.join('')}`
}

