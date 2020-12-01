import MOYOmoda from '../../../images/moyo/MOYOmoda.svg'


export function moyomodaBlock (data) {
    const cards = (className = '') => {
        return data.map(card => {
            return `
      <div class="card">
        <div class="box-img">
            <img class="img" src=${card.img} alt="img">
        </div>
        <div class="info">
            <div class="line"></div>
            <div class="text">
                <div class="title">${card.title}</div> 
                <div class="description">${card.description}</div>
            </div>
        </div>
      </div>
    `
        }).join('')
    }

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
    <section class="root">
        <div class="main-title">
            <div class="caption">БОЛЬШЕ БРЕНДОВ НА САЙТЕ ПАРТНЕРА</div>
            <img src=${MOYOmoda} alt="MOYOmoda">
         </div>
        <div class="desktop Com-flex">
            ${cards()}
        </div>
        
        <div class="mobile">
            <div class="swiper-container4 swiper-container">
                <div class="swiper-wrapper">
                     ${mobile('swiper-slide')}                
                </div>
            </div>
        </div>
        
    </section>
    `
}