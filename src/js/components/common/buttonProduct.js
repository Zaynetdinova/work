export function buttonProduct(name,item= '') {
    return `
    <a class="ButtonProduct" href="${item}">
      <div class="text">${name}</div>
    </a>
  `
}
