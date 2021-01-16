import testBig1 from "../../../../images/cardProduct/test-big1.png";
import testBig2 from "../../../../images/cardProduct/test-big2.png";
import testBig3 from "../../../../images/cardProduct/test-big3.png";
import testBig4 from "../../../../images/cardProduct/test-big4.png";

export function popupPhotoTemplate() {
  return `
  <section class="view-big-photos-popup-block">

    <div class="paranja"></div>
  
    <div  class='content'>
    <div style="display: flex;justify-content: flex-end;">
        <article id="close-popup-js" class="close-popup"></article>
    </div>
  
    <div id="view-big-photos-popup-swiper-js" class="swiper-container wrapper-slider">
    <div class="swiper-wrapper">
        ${popupPhoto(dataPhotos)}
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


const dataPhotos = [
  {
    original: testBig1,
    compressedImg: testBig1,
  },
  {
    original: testBig2,
    compressedImg: testBig2,
  },
  {
    original: testBig3,
    compressedImg: testBig3,
  },
  {
    original: testBig4,
    compressedImg: testBig4,
  },
  {
    original: testBig1,
    compressedImg: testBig1,
  }
]
