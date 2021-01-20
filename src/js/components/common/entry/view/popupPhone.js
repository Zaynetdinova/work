export function popupPhone(item) {
    const items = item.map((item) => {
    return `
        <div class="popup-phone">
            <div style="display: flex;justify-content: space-between">
                <div class="text">${item.phone}</div>
                <div style="display: flex;">
                    <div class="text" style="margin-right: 10px">${item.country}</div>
                    <img src="${item.img}" alt="">
                </div>
            </div>
        </div>
    `
    })
    return `${items.join('')}`
}