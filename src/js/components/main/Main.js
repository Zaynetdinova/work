import {Component} from '../../core/Component'
import {createMain} from './main.template'

export class Main extends Component {
  static className = 'Main'
  constructor($root) {
    super($root, {
      name: 'Main',
      listeners: ['click']
    });


  }
  toHTML() {
    return createMain(['Main', 2, 3])

  }

  onClick(e) {
    console.log('Main', e)
  }
}
