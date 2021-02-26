import {Component} from "../../../../../../core/Component";
import {onlinePayOrderTemplate} from "./onlinePayOrder.template";


export class OnlinePayOrder extends Component {
    static className = 'Online-pay-order'

    constructor($root) {
        super($root, {
            name: 'OnlinePayOrder',
            listeners: ['click']
        });
    }
    toHTML() {
        return onlinePayOrderTemplate()
    }
    onClick(e) {}
}