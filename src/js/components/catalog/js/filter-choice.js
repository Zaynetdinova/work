export function filterChoice(item) {

    const items = item.map((item) => {
        return `
            <div class="wrapper-box">
                <div class="filter-choice">
                    <div class="checkbox-choice">
                        <input class="checkbox" type="checkbox" id="${item.id}"> <label class="title" for="${item.id}">${item.category}</label>
                         <div class="line"></div>
                    </div>
                </div>
            </div>
                   
        `
    })
    return `${items.join('')}`
}


export function colorChoice(item) {
    const items = item.map((item) => {
        return `
            <div class="wrapper-box">
                <div class="filter-choice">
                    <div class="checkbox-choice">
                        <input class="checkbox" type="checkbox" id="${item.id}"> 
                        <label for="${item.id}">
                            <div class="cont">
                                <div class="color ${item.color}"></div> 
                                <div class="title">${item.category}</div>
                            </div>
                        </label>
                        <div class="line"></div>                      
                    </div>
                </div>
            </div>
                   
        `
    })
    return `${items.join('')}`
}
