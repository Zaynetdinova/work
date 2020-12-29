import {titleProductPage} from "./titleProdactPage";

export function descriptionModule() {
    return `
        <div class="description-module description-module-js">
            <div style="margin-bottom: 15px;">${titleProductPage('Описание', 'description')}</div>
            <div class="text">Короткое женское платье прямого кроя с поясом на талии из основной ткани. 
            Рукава длинные с манжетами на кнопке, спинка с застежкой на пуговицу. 
            Отличное платье для любительниц строго стиля и минимализма в одежде. 
            Отличный выбор для современной женщины. ВНИМАНИЕ!!! Города, закрытые 
            для отгрузки: Хабаровск, <span style="white-space: nowrap">Петропавловск-Камчатский</span>, Владивосток, Краснодар, 
            Самара, Шахты.</div>
        </div>
    `
}