import img from '../../../../../images/sidebar/img.png'
import sale from '../../../../../images/sidebar/sale.svg'

export function extra(elementsMenu) {

  if(!elementsMenu) {
    return
  }

  const secondColumn = null

    const saleBlock = `
     <a href="#">
        <img src=${sale} alt="sale">
     </a>
    `
    return `
        <div class="extra">
            <div class='More'>
                <div class="wrap-col">
                    <div class="first-col">
                        <div class='first-content'>                  
                            ${elementsMenu.firstColumn ? pick(elementsMenu.firstColumn) : ''}
                        </div>
                        ${!secondColumn ? saleBlock : ''}
                    </div>
                    ${secondColumn 
                      ? `<div class="second-col">
                          <div class='second-content'>
                              ${pick(secondColumn)}
                          </div>
                          ${saleBlock}
                        </div>
                        
                      ` : ''}
                    
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

//
// <a href="#">
//   <img src=${sale} alt="sale">
//   </a>


