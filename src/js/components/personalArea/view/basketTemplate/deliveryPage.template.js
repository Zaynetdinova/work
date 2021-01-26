import {basketSteps} from "../components/basketSteps";

export function deliveryPageTemplate() {
    return `
        <div class="Delivery-page">
            ${basketSteps()}
            <div class="basket-delivery" id="basket-delivery">
                <div class="active basketDeliveryBlock"></div>
                <div class="basketDeliveryBlock"></div>
                <div class="basketDeliveryBlock"></div>
            </div>
        </div>
    `
}