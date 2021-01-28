export function inputChoice() {
    return `
        <div class="choice">
            <label class="radio"><input type="radio" name="g"><span></span><div>Оплата наличными</div></label>
            <label class="radio"><input type="radio" name="g"><span></span><div>Безналичная оплата</div></label>
            <label class="radio"><input type="radio" name="g"><span></span><div>Оплата картой на сайте</div></label>
            <label class="radio"><input type="radio" name="g"><span></span><div>Оплата с депозита (1 234,00 ₽)</div></label>
        </div>
    `
}