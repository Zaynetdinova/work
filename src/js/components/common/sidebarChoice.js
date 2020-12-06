import arrowIcon from '../../../images/icons/arrow2.svg'

export function sidebarChoice(li = [], subcategory, arrow) {
  const items = (arr = []) => {
    return  arr.map((item) => {
      const {category, id = ''} = item

      return `
        <figure data-test class='category' id="${id}">
            <a class='choice' id="choice">
                ${category}
                ${arrow == 'notArrow' ? '' : `<div class="arrow"></div>`}
            </a>
            <div class='line'></div>
        </figure>
        `
    }).join('')
  }


  const itemsSubCategories = li.map((item) => {
    return `
            <figure data-test data-subtest class='sub-category-wrapper' data-id=${item.id}>
                <a class='item'>
                <div>
                    <span>${item.name}</span>
                    <span class="sub-title">${item.subtitle}</span>
                </div>
                <img class="sub-arrow arrow-transform-js" src=${arrowIcon}>
                </a>
                <div class="sub-category">
                    ${items(item.categories)}
                </div>
            </figure>
        `
  })


  if (!subcategory) {
    return `${items(li)}`
  } else {
    return `${itemsSubCategories.join('')}`
  }
}
