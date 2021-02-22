const defaultSize =  [
  '40', '42', '46', '48', '50'
]

export function size(item = defaultSize) {
  console.log(item)
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

