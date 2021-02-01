export function tableDiscount(data) {
    return `
        <table class="Table-discount">
            ${trDiscount(data)}
        </table>
    `
}

function trDiscount(item) {
    const items = item.map((item) => {
        return `
            <tr>
                <td class="left-title-td">
                    <div class="left-title">
                        <span class="left-title-name-wrapper">
                            <span class="left-title-name">${item.name}</span>
                        </span>
                    </div>
                </td>
                <td class="right-money-sum">
                    <span style="color: ${item.color}">${item.money}</span>
                </td>
            </tr>          
        `
    })
    return `${items.join('')}`
}