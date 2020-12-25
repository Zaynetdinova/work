import {Component} from '../../core/Component'
import {popupQuickViewTemplate} from "./ popupQuickView.tamplate";


export class  PopupQuickView extends Component {
    static className = 'Popup-quick-view'

    constructor($root) {
        super($root, {
            name: 'PopupQuickView',
            listeners: ['click']
        });
    }

    toHTML() {
        return popupQuickViewTemplate()
    }
}