import {Component} from "../../core/Component";
import {personalAreaTemplate} from "./personalArea.template";
import {basketTemplate} from './view/basket.template'
import {personalDataTemplate} from './view/personalData.template'
import {orderHistoryTemplate} from './view/orderHistory.template'
import {discountAndBonusesTemplate} from './view/discountAndBonuses.template'
import {favoritesTemplate} from './view/favorites.template'

export class PersonalArea extends Component {
    static className = 'Personal-area'

    constructor($root) {
        super($root, {
            name: 'PersonalArea',
            listeners: ['click']
        });

        this.activeComponent = ''
        this.$component = null
        this.$personalArea = null

    }

    toHTML() {
        return personalAreaTemplate()
    }

    afterInitComponent() {
       this.showComponent()
        this.$personalArea = document.querySelector('#personal-area-js')
    }

    handleClick(event) {
        const $component = document.querySelector('#personal-area-content-js')

    }

    showComponent(event) {
        this.$component = document.querySelector('#personal-area-content-js')

        if (!event) {
            this.$component.insertAdjacentHTML('afterbegin', wrapperComponentPersonalArea(basketTemplate()));
            return
        }

        const $idElem = event.target

        if($idElem.closest('#personal-data-js')) {
            const root = $idElem.closest('#personal-data-js')
            this.addComponent(root, personalDataTemplate())
            return
        }

        if($idElem.closest('#basket-js')){
            const root = $idElem.closest('#basket-js')
            this.addComponent(root, basketTemplate())
            return
        }

        if($idElem.closest('#order-history-js')){
            const root = $idElem.closest('#order-history-js')
            this.addComponent(root, orderHistoryTemplate())
            return
        }

        if($idElem.closest('#discounts-and-bonuses-js')){
            const root = $idElem.closest('#discounts-and-bonuses-js')
            this.addComponent(root, discountAndBonusesTemplate())
            return
        }

        if($idElem.closest('#favorites-js')){
            const root = $idElem.closest('#favorites-js')
            this.addComponent(root, favoritesTemplate())
            return
        }
    }


    addComponent(root, $component) {

        if(this.activeComponent === root.id) {
            return
        }
        this.addClassActive(root)
        this.removeComponent()
        this.$component.insertAdjacentHTML('afterbegin', wrapperComponentPersonalArea($component));
        this.activeComponent = root.id
    }

    addClassActive(root) {
        const navigation = this.$personalArea.querySelector('#navigation-js')
        navigation.querySelectorAll('.item').forEach((item) => {
            item.classList.remove('active')
        })
        root.classList.add('active')
    }

    removeComponent() {
        const $wrapper = this.$component.querySelector('#wrapper-component')
        if($wrapper){
            $wrapper.remove()
        }
    }

    onClick(event) {
       this.showComponent(event)
    }
}

function wrapperComponentPersonalArea(component) {
    return `
        <div id="wrapper-component">
            ${component}
        </div>
    `
}