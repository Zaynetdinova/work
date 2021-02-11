export function nameOrder(img,title) {
    return `
        <td>
            <div class="img-order">
                <img src="${img}" alt="">
                <div class="title">${title}</div>
            </div>
        </td>
    `
}

export function orderName(data) {
    return `
        <td>
            <div class="wrapper-order-name">
                <div class="order-name">
                    <span class="order-title">Заказ № 12345 <span class="data">от 01.12.2020</span></span>
                    ${characteristicOrder(data)}
                </div>
                <div>
                    <a href="" class="link-see-order">
                        Посмотреть заказ
                    </a>
                </div>
            </div>
        </td>
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

// <span class="order-title-delivery">Доставка: <span class="order-delivery">Самовывоз</span></span>
// <span class="order-title-delivery">Получатель: <span class="order-delivery">ИП Получатель</span></span>