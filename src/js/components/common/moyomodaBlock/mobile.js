export function mobile(data) {
  const mobile = (className = '') => {
    return data.map(card => {
      return `
      <div class="${className}">
      <div class="card">
        <img class="img" src=${card.img} alt="img">
        <div class="info">
            <div class="line"></div>
            <div class="text">
                <div class="title">${card.title}</div> 
                <div class="description">${card.description}</div>
            </div>
        </div>
      </div>
      </div>
    `
    }).join('')
  }

  return `
      <div class="mobile">
          <div class="swiper-container4 swiper-container">
              <div class="swiper-wrapper">
                   ${mobile('swiper-slide')}                
              </div>
          </div>
      </div>
  `
}
