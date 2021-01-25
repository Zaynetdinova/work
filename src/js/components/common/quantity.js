export function quantity() {
    return `
        <table>
            <tr class="quantity">
                <td>
                    <div class="minus" data-button-name="minus"></div>
                </td>
                <td class="quantity-number">
                    <input class="input-count-js input-count-number"  maxlength="2" type="text" readonly value="0">
                </td>
                <td>
                    <div class="plus" data-button-name="plus"></div>
                </td>
            </tr>
        </table>       
    `
}