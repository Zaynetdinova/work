import {categoriesTitle} from '../common/categoriesTitle'
import {cardBanner} from '../common/cardBanner'
import {bestsellersHeader} from '../common/bestsellersHeader'
import {quickViewButton} from '../common/quickViewButton'
import {Sale} from "../common/sale";

function mainTitle(index) {
  if(index == 0) {
    return `ЖЕНЩИНАМ`
  } else if(index == 1) {
    return `ДЕТЯМ`
  } else if(index == 2) {
    return `МУЖЧИНАМ`
  } else if (index == 4){
    return `ИГРУШКИ`
  } else if (index === 3) {
    return `ДЛЯ ДОМА`
  }
}

function priceContent(oldPrice, newPrice, price, _, sale) {
    console.log('super')
    console.log('sale', sale)
  return `
  <div class='Price-content'>
    <section>
      <div class="action">
        <div class="old-price">${oldPrice}</div>
        <div class="new-price">${newPrice}</div>
      </div>
      <div class="sale-price" style="display: flex">
        <div class="price">${price}</div>
        <div style="margin-left: 5px">${sale ? `${Sale()}` : ''}</div>
      </div>
    </section>
    <section>
        <div class="Health"></div>
    </section>
  </div>
  `
}

function additionalInformation(title, description, img, index) {
  const sizes = [
    '40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
  ]
  const block = sizes.map(item => {
    return `
      <div class="size">
        ${item}
      </div>
    `
  })

  return `
  <div class="additional-information">
     <div class="content">
        ${index == 0 
          ? ''
          : `<div class="text" style="padding-bottom: 15px">
                <div class="title">${title}</div> 
                <div class="description">${description}</div>
            </div>`}
       
       <div class="Size">
            ${block.join('')}
        </div>
          
          <div class='images'>
              <img src="${img}">
              <img src="${img}">
              <img src="${img}">
              <img src="${img}">
          </div>
      </div>
  </div>
  `
}

export function createBestsellers(data) {
  const block = sizes.map(item => {
    return `
      <div class="size">
        ${item}
      </div>
    `
  })


  function desktop(cards) {
    return `
    <div >
       ${cards.map((card, index) => {
         return `
        <div class="card-wrapper">
       
           <div class="bestsellers-header-wrapper">
                ${bestsellersHeader(mainTitle(index))}
              </div>
            
             
            <div class="Com-flex card-flex">
                ${card.map(i => {
                  
                  const {sale = false, id, img, banner, title, description, oldPrice = '', newPrice = '', price = '', bannerPosition = ''} = i
                      return `
                        <div class="card" id="${id}">
                            <div style="background: url(${img}) center" class="img">
                                 ${banner ? cardBanner('новинка', bannerPosition) : ''}
                            <div>
                        </div>
                        <div class="quick-view">
                            ${quickViewButton(id)}
                        </div>
                        </div>
                        <div class="info">
                        ${index == 0 
                        ? `<div class="Com-flex Com-flex-al-center">
                            <section>
                                <div class="text">
                                    <div class="title">${title}</div> 
                                    <div class="description">${description}</div>
                                </div>
                            </section>
                            <section>
                                <div class="Health"></div>
                            </section>
                           </div>
                           ` 
                        : `${priceContent(oldPrice, newPrice, price, index, sale)}`
                        }
                        </div>
                       ${additionalInformation(title, description, img, index)}
                    </div>
                    `
                      }).join('')}
                  </div>
                </div>
             
             `
       }).join('')}
    </div>
    `
  }

  function mobile(cards) {
    return `
    <div >
         ${cards.map((card, index) => {
           return `
               <div class="slider-root-categories">
                
                    <div class="bestsellers-header-wrapper">
                            ${bestsellersHeader(mainTitle(index))}
                        </div>
                   <div class="popular-brand-js">
                        ${card.map(i => {
                        const {id, img, banner, title, description} = i
                    return `
                        <div class="card" id="${id}">
                            <div style="background: url(${img}) center" class="img">
                        <div>
                            ${banner ? cardBanner('новинка') : ''}
                        </div>
        
                    </div>
                    <div class="info">
                      <div class="text">
                          <div class="title">${title}</div> 
                          <div class="description">${description}</div>
                      </div>
                    </div>
                </div>`
      }).join('')}
</div>
    </div>        `


    }).join('')}
    </div>
    `
  }


  return `
       <section class="root">
         <div class="main-title">
             ${categoriesTitle('ХИТЫ ПРОДАЖ')}
         </div>
         
         <div>
            <div class="desktop">
               ${desktop(data)}
            </div>
            
            <div class="mobile">
                ${mobile(data)}
            </div>
            
         <div>   
        </section>
    `
}

const sizes = [
  '40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
]

