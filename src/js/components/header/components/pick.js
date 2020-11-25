export function pick(more) {
    const items = more.map((item) => {
        return `
            <div class='selection'>
                <a href="#">${item.pick}</a>
            </div>
        `
    })
    return `${items.join('')}`
}