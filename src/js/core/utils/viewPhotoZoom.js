export class ViewPhotoZoom {
  constructor() {
    this.$zoomContent = document.querySelector('#zoom-photo-js')
    this.$root = null
    this.events()
  }

  events() {
    this.$zoomContent.addEventListener('mousemove', (event) => this.moveZoom(event))
  }



  moveZoom(event) {
    const imgWrapper = event.target.closest('[data-zoom-js]')
    this.$root = event.target.closest('[data-zoom-wrapper-js]')
    this.$root.classList.add('active-zoom')
    const $img = imgWrapper.querySelector('.zoom-img-js')
    const bounds = imgWrapper.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top

    const topSize = this.defineSize($img.clientHeight, bounds.height, y)
    const leftSize = this.defineSize($img.clientWidth, bounds.width, x)

    $img.setAttribute("style", `top: -${topSize}px; left: -${leftSize}px; height: ${imgWrapper.clientHeight * 2}px;`);
  }

  defineSize(img, wrapper, type) {
    const difference = img - wrapper
    const size = type * 100 / wrapper
    return  size * difference / 100
  }
}
