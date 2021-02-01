export function SumMoneySale(item) {
    const items = item.map((item) => {
    return `
        <div class="Sum-money-sale">
            <span class="title-sum"><b>${item.title}</b></span>
            <span class="line"></span>
            <span class="money-sum">${item.sum}</span>
        </div>
    `
    })
    return `${items.join('')}`
}