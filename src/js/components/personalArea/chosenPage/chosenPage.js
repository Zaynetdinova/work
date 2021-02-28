import {Component} from '../../../core/Component'
import {chosenPageTemplate} from './chosenPage.template'
import {testDataCatalog} from '../../../../testData/testDataCatalog'

export class ChosenPage extends Component {
    static className = 'Chosen-page'

    constructor($root) {
        super($root, {
            name: 'ChosenPage',
            listeners: []
        });
        this.link = [
            {
                title: 'Избранное',
                link: '/#personal-area/favorites'
            }
        ]
    }
    toHTML() {
        return chosenPageTemplate(this.link, testDataCatalog.goods)
    }
}
