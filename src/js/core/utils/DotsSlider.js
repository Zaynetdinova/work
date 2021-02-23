import {sliderPointerTemplate, sliderPointerTemplateTest} from '../../components/common/sliderPointer.template'

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
    wrapperDots.innerHTML = `${sliderPointerTemplateTest()}`
  }

}
