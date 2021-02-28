import {Component} from '../../../../../core/Component'
import {deliveryPageTemplate} from './deliveryPage.template'
import {toggleShowInformation} from '../../../../../core/utils/utils'
import {activeCheckboxBlock} from '../../../../../core/utils/activeCheckboxBlock'

export class DeliveryPage extends Component {
    static className = 'Delivery-page'

    constructor($root) {
        super($root, {
            name: 'DeliveryPage',
            listeners: ['click']
        });
    }

  afterInitComponent() {
    activeCheckboxBlock(this.$root.$el)
  }

    toHTML() {
        return deliveryPageTemplate()
    }

    onClick(e) {
      const element = e.target.closest('[data-open-section-js]');
      if(!element) {
        return
      }
      switch (element.id) {

        case 'delivery-page-1-js':
          toggleShowInformation('#data-content-1-js')
          break;
        case 'delivery-page-2-js':
          toggleShowInformation('#data-content-2-js')
          break;
        case 'delivery-page-3-js':
          toggleShowInformation('#data-content-3-js')
          break;
        case 'delivery-page-4-js':
          toggleShowInformation('#data-content-4-js')
          break;
      }
    }
}
