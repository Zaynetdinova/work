export function iconTitle(data) {
    return `
        <td class="wrapper-icon-title">
            ${status(data)}
        </td>
    `
}

function status(item) {
    const items = item.map((item) => {
        return `
            <div class="icon-title">
                <img src="${item.icon}" alt="">
                <div>${item.title}</div>
            </div>
        `
    })
    return `${items.join('')}`
}

