export function basketDeliveryBlock(item) {
    const items = item.map((item) => {
        return `
            <div class="basketDeliveryBlock">
                <div class="wrap">
                    <div class="title">
                        <img src="${item.imgIcon}" alt="">
                        ${item.title}
                    </div>
                    <p class="text">${item.text}</p>
                    <div class="choice">
                        <label class="radio"><input type="radio" name="g"><span></span>г. Москва, Окружной проезд, 30А</label>
                        <label class="radio"><input type="radio" name="g"><span></span>СДЭК</label>
                    </div>
                </div>
            </div>               
        `
    })
    return `${items.join('')}`
}


// 'г. Москва, Окружной проезд, 30А'

// 'Байкал-Сервис'
// 'Возовоз'
// 'Деловые линии'
// 'Желдорэкспедиция'
// 'ПЭК'
// 'Энергия'

// 'EMS'
// 'СДЭК'
// 'Почта России'
// 'DPD'
