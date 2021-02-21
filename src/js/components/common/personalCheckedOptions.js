export function personalCheckedOptions(data) {
  const items = data.map((item) => {
    const {imgIcon, title, text, inputs = [] } = item
    return `
            <div data-personal-checked-options class="basketDeliveryBlock">
                <div data-content-js class="wrap">
                    <section data-open-section-js class="title">
                        <div class="img-title">
                            <img src="${imgIcon}" alt="">
                            <div>${title}</div>
                        </div>
                        <div class="arrow"></div>
                    </section>
                    
                    <section  class="content">
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

function inputChoice(data) {
  return `
        <div class="choice">
            <label class="radio" id="${data.id}">
                <input class="radio-button-delivery-js" type="radio" name="g">
                <span></span>
                <div>${data.titleCheckbox}</div>
            </label>
        </div>
    `
}
