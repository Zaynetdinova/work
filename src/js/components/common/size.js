export function size(item) {
  const block = item.map(item => {
    return `
      <div class="size">
        ${item}
      </div>
    `
  })
  return `
  
  <div id="size-active-js" class="Size">
    ${block.join('')}
  </div>
  `
}

