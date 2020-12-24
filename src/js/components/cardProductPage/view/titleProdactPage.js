import arrow from '../../../../images/icons/arrow2.svg'

export function titleProductPage(name) {
    return `
    <div class="title-product-page">
      ${name}
      <img class="arrow" src="${arrow}" alt="arrow">
    </div>
  `
}