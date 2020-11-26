import arrow from '../../../../images/icons/arrow2.svg'

export function choice(li = [], subcategory) {
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

    const test = (arr = []) => {
        console.log(arr)
        return  arr.map((item) => {
            return `
            <div class='category'>
                <a class='choice' id="choice">
                    ${item.category}
                    <div class="arrow"></div>
                </a>
                <div class='line'></div>
            </div>
        `
        }).join('')
    }


    const itemsSubCategories = li.map((item) => {
        return `
            <article class='sub-category-wrapper' data-id=${item.id}>
                <a class='item'>
                <div>
                    <span>${item.name}</span>
                    <span class="sub-title">${item.subtitle}</span>
                </div>
                <img class="sub-arrow" src=${arrow}>
                </a>
                <div class="sub-category Com-disp-none">
                    ${test(item.categories)}
                </div>
            </article>
        `
    })


    if (!subcategory) {
        return `${items.join('')}`
    } else {
        return `${itemsSubCategories.join('')}`
    }
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
