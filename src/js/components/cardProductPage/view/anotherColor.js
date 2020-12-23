export function anotherColor(item) {
    return `
    <div class="anotherColor">
        <div class="title">Выберите другой цвет</div>
        <div class="anotherPhoto">${anotherPhoto(item)}</div>
    </div>
    `
}


function anotherPhoto(item) {

    const items = item.map((item) => {
        return `
            <div><img src="${item.photo}" alt=""></div>              
        `
    })
    return `${items.join('')}`
}