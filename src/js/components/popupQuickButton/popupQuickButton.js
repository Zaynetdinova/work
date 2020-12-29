import {Component} from "../../core/Component";
import {popupQuickButtonTemplate} from "./popupQuickButton.template";

export class PopupQuickButton extends Component {
    static className = 'Popup-quick-button'

    constructor($root) {
        super($root, {
            name: 'PopupQuickButton',
            listeners: ['click']
        });
    }

    toHTML() {
        return popupQuickButtonTemplate()
    }



    onClick(e) {}
}