import {inputChoice} from "./inputChoice";

export function basketDeliveryBlock(data) {
    const items = data.map((item) => {
        const {imgIcon, title, text, inputs = [] } = item
        return `
            <div class="basketDeliveryBlock">
                <div class="wrap">
                    <div class="title">
                        <img src="${imgIcon}" alt="">
                        ${title}
                    </div>
                    <p class="text">${text}</p>
                    ${inputs.map(() => {
                       return  inputChoice()
                    }).join('')}                
                </div>
            </div>               
        `
    })
    return `${items.join('')}`
}
