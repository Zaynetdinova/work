import {sliderPointerTemplate, sliderPointerTemplateTest} from '../../components/common/sliderPointer.template'

// export class DotsSlider {
//   constructor(root, sliderLength, slider1024, slider768) {
//     this.root = root
//     this.sliderLength = sliderLength
//     this.slider1024 = slider1024
//     this.slider768 = slider768
//   }
// }
export function DotsSlider(el, length, slider1024, slider768) {
  console.log(length, slider1024, slider768)
  const $parent = document.querySelector(`${el}`)
  const wrapperDots = $parent.querySelector('[data-slider-pointer-cards-js]')
  if(length <= slider1024) {
    return
  }
  if(length <= slider1024 + 3) {
    wrapperDots.innerHTML = `${sliderPointerTemplate('slider-pointer-bestseller')}`
  }
  if(length > slider1024 + 3) {
    wrapperDots.innerHTML = `${sliderPointerTemplateTest('slider-pointer-bestseller')}`
  }

}

export function changeSlideDots(el, length, index) {
  const count = Math.round((length - 6)/3)


  const $parent = document.querySelector(`${el}`)
  const dots = document.querySelector(`[data-dots-test]`)
  if(dots) {
    const dots1 = $parent.querySelector('[data-dots1]')
    const dots2 = $parent.querySelector('[data-dots2]')
    const dots3 = $parent.querySelector('[data-dots3]')
    const dots4 = $parent.querySelector('[data-dots4]')
    const dots5 = $parent.querySelector('[data-dots5]')

  }
}
