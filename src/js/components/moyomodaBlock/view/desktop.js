export function desktop(data) {
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

 return `
    <div class="desktop Com-flex">
       ${cards()}
    </div>
 
 `
}
