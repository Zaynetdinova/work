export function bannerBackground(className = '') {
  return `
    <div class="swiper-slide">
    <div class='bg-main ${className}'>
      <div class='wrapper'>
        <div class='content'>
          <div class='bg ${className}'></div>        
        </div>
      </div>
    </div>
  </div>
  `
}
