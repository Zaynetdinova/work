export function alternative(options) {
    const items = options.map((item) => {
        return `
            <div>
                <a href="#">${item.alternative}</a>
            </div>
        `
    })
    return `${items.join('')}`
}