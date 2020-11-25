export function choice(li) {
    const items = li.map((item) => {
        return `
            <div class='category'>
                <a class='choice' id="choice">
                    ${item.category}
                    <div class="arrow"></div>
                </a>
                <div class='line'></div>
            </div>
        `
    })
    return `${items.join('')}`
}

export function menu(nav) {
    const items = nav.map((item) => {
        return `
            <a href="#" class='choice'>
                ${item.article}
            </a>
            <div class='line'></div>
        `
    })
    return `${items.join('')}`
}
