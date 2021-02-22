import info from "../../../images/icons/info.svg";

export function sizeInfo(item) {
    const items = item.map((item) => {
    return `
        <table class="Size-info">
            <tr class="size">
                <td class="td-size">${item.size}</td>
                <td class="img-size-wrapper">
                    <img class="img-size" src="${info}" alt="">
                    <div class="popup">
                        <div>Оригинальный размер: S</div>
                        <div>Обхват груди: 86-89 см</div>
                        <div>Обхват талии: 67-71 см</div>
                        <div>Обхват бёдер: 94-97 см</div>
                    </div>
                </td>
            </tr>
        </table>       
    `
    })
    return `${items.join('')}`
}