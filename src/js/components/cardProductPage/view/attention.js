import {buttonProduct} from "../../common/buttonProduct";

export function attention() {
    return `
        <div class="attention">
            <div class="button-attention">${buttonProduct('ВНИМАНИЕ')}</div>                
            <div class="text-attention">Отгрузка данного товара осуществляется через 6-10 дней после заказа.</div> 
        </div>
    `
}
