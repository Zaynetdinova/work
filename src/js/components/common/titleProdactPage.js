import arrow from '../../../images/icons/arrow2.svg'

export function titleProductPage(name, id) {
    return `
        <article id="title-${id}-js" data-title="test" class="title-product-page">
            ${name}
            <img class="arrow" src="${arrow}" alt="arrow">
        </article>
  `
}