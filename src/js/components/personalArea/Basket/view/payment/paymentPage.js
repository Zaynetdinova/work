import {Component} from '../../../../../core/Component'
import {paymentPageTemplate} from './paymentPage.template'
import {activeCheckboxBlock} from '../../../../../core/utils/activeCheckboxBlock'

export class PaymentPage extends Component {
    static className = 'Payment-page'

    constructor($root) {
        super($root, {
            name: 'PaymentPage',
            listeners: ['click']
        });
    }

    toHTML() {
      return paymentPageTemplate()
    }

  afterInitComponent() {
      activeCheckboxBlock(this.$root.$el)
  }

  onClick(e) {
    const element = e.target.closest('[data-open-section-js]');
    if(!element) {
      return
    }
  }
}
