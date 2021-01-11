import {Component} from "../../core/Component";
import {popupQuickButtonTemplate} from "./popupQuickButton.template";
import {favoritesProduct} from "../cardProductPage/js/favoritesProduct";
import {infoProductShow} from "../cardProductPage/js/infoProductShow";
import {anotherColorButton} from "../cardProductPage/js/anotherColorBorder";
import {inputFile} from "../catalog/js/inputFile";


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

    afterInitComponent() {
        inputFile()
    }

    onClick(e) {
        if(e.target.closest('article')) {
            const element = e.target.closest('article');

            switch (element.id) {
                case 'title-description-js':
                    infoProductShow(element, e)
                    break;
                case 'favorites-product-js':
                    favoritesProduct(element)
                    break;
                case 'another-color-js':
                    anotherColorButton(e)
                    break;
            }
        }
    }
}