export function popupPhotoTemplate(testDataPopupPhoto) {
  return `
    <section class="view-big-photos-popup-block">
      <div class="paranja"></div>
      <div  class='content'>
        <div class="wrapper-close-popup">
          <article id="close-popup-js" class="close-popup"></article>
        </div>
        <div id="view-big-photos-popup-swiper-js" class="swiper-container wrapper-slider">
          <div class="swiper-wrapper">
            ${popupPhoto(testDataPopupPhoto)}
          </div>
          <div class="swiper-button-next-main swiper-button button-next"></div>
          <div class="swiper-button-prev-main swiper-button button-prev"></div>
        </div>
      </div>
    </section>
  `
}

function popupPhoto(data) {
  return data.map((photo) => {
    return `
      <div class="test swiper-slide">
          <img src="${photo.original}" class="popup-photo">
      </div>
		`
  }).join('')
}
