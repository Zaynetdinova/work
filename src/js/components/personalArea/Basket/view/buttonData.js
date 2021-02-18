export function ButtonData(text, dataType = '') {
    return `
        <div data-button-parent-js id="${dataType}" class="button-personal-data">${text}</div>
    `
}