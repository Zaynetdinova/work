export function inputChoice(data) {
    return `
        <div class="choice">
            <label class="radio">
                <input class="radio-button-delivery-js" type="radio" name="g">
                <span></span>
                <div>${data.titleCheckbox}</div>
            </label>
        </div>
    `
}