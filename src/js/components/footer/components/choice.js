export function choice(id, obj) {
    const {info, client, service, cooperation} = obj
    let elem
    if(id === 'info') {
        elem = info
    } else if(id === 'client') {
        elem = client
    } else if(id === 'service') {
        elem = service
    } else (
        elem = cooperation
    )
    const items = elem.map((item) => {
        return `
            <div class='category'>
                <div class='choice'>
                    ${item.category}
                </div>
                <div class='line'></div>
            </div>
        `
    })
    return `${items.join('')}`
}