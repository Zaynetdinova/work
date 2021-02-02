import {inputChoice} from "./inputChoice";

export function basketDeliveryBlock(data) {
    const items = data.map((item) => {
        const {imgIcon, title, text, inputs = [] } = item
        return `
            <div data-parent-delivery-block-js class="basketDeliveryBlock">
                <div class="wrap">
                    <section data-open-section-js class="title">
                        <div class="img-title">
                            <img src="${imgIcon}" alt="">
                            <div>${title}</div>
                        </div>
                        <div class="arrow"></div>
                    </section>
                    
                    <section data-content-js class="content">
                       <p class="text">${text}</p>
                          ${inputs.map((item) => {
                          return  inputChoice(item)
                          }).join('')} 
                    </section>
                                  
                </div>
            </div>               
        `
    })
    return `${items.join('')}`
}
