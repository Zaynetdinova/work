export function menuCategories(item) {
    const items = item.map((item) => {
        return `           
            <a class="wrapper" href="${item.link}">
                <img class="logo" src="${item.img}" alt="">
                <div class="title">${item.title}</div>
            </a>               
        `
    })
    return `${items.join('')}`
}