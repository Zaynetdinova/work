export function buttonProduct(name,item= '') {
    return `
    <a class="Button-product" href="${item}">
      <div class="text">${name}</div>
    </a>
  `
}
