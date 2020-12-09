export function transitionTitle(item) {
    return `
    <div class="TransitionWrapper">
        <div class="transitionWrapper">
            <span class="home"><a href="/">Главная</a></span>
            <span>/</span>
            ${transitionWrapper(item)}
        </div>
        <div class="titleWrapper">
            ${titleWrapper(item)}
        </div>
    </div>
	`
}



function transitionWrapper(item) {

    const items = item.map((item) => {
        return `
        <span class="title"><a href=${item.link}>${item.title}</a></span>              
        `
    })
    return `${items.join('')}`
}

function titleWrapper(item) {

    const items = item.map((item) => {
        return `
        <div class="title">${item.title}</div>
		    <div class="value">${item.value}</div>           
        `
    })
    return `${items.join('')}`
}


