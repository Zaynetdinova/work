export function popupPhone(data = []) {
    const items = data.map((item) => {
    return `
        <article data-type="input-item" data-id="${item.id}"  class="popup-phone">
            <div style="display: flex; justify-content: space-between">
                <div class="text">${item.phone}</div>
                <div style="display: flex;">
                    <div class="text" style="margin-right: 10px">${item.country}</div>
                    <img src="${item.value}" alt="">
                </div>
            </div>
        </article>
    `
    })
    return `${items.join('')}`
}