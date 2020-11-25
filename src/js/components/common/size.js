export function size() {
  const block = sizes.map(item => {
    return `
      <div class="size">
        ${item}
      </div>
    `
  })
  return `
  <div class="Size">
    ${block.join('')}
  <div>
  `
}

const sizes = [
  '40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
]
