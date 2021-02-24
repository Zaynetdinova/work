export function iconTitle(data) {
    return `
        <td class="icon-title-status">
            <div class="wrapper-icon-title">
                ${status(data)}
            </div>
        </td>
    `
}

export function status(item) {
    const items = item.map((item) => {
        return `
            <div class="icon-title">
                <div>
                    <img src="${item.icon}" alt="">
                    <div>${item.title}</div>
                </div>
                <div class="popup">
                    <div>${item.popup}</div>
                </div>     
            </div>
        `
    })
    return `${items.join('')}`
}

