import {popupPhoto} from "../../common/popupPhoto/popupPhoto";


export function popupSliderPhoto() {
  const $body = document.querySelector('body')

  // инициализация класса
  const test = new popupPhoto

  $body.insertAdjacentHTML('afterbegin', test.toHTML());
  test.initialSlider()
  test.eventClose()

}
