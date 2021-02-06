import img from '../../../../../images/sidebar/img.png'
import sale from '../../../../../images/sidebar/sale.svg'

export function extra(elementsMenu) {
    const {firstColumn, secondColumn = []} = elementsMenu

  return `
        <div class="extra">
            <div class='More'>
            
            <div class="first-col">
                <div class='first-content'>                  
                    ${pick(firstColumn)}
                </div>
            </div>
            
            <div class="second-col">
                <div class='second-content'>
                    ${secondColumn ? pick(secondColumn) : null}
                    <a href="#">
                        <img src=${sale} alt="sale">
                    </a>
                </div>
            </div>
            
            <div class='card'>
                <img src=${img} alt='img'>
                <div class='intro'>
                    <div class='title-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing</div>
                    <p class='text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>
                    <div id="test-show-extra-js"></div>
                </div>
            </div>
        </div>
        </div>
    `
}

export function pick(elementsMenu) {
  const items = elementsMenu.map((item) => {
    const {title, subElements = []} = item
    return `
            <div class='selection-second'>
                <a href="#">${title}</a>
            </div>
            ${subElements 
              ? subElements.map((item) => {
                return `
                    <div class="selection-first">
                        <a href="#">${item.pick}</a>
                    </div>
                `
              }).join('')
              :  null
        }
        `
  })
  return `${items.join('')}`
}





