import {Component} from "../../core/Component";
import {partnerOffers} from "./partnerOffers.template";



export class PartnerOffers extends Component {
    static className = 'PartnerOffers'

    constructor($root) {
        super($root, {
            name: 'PartnerOffers',
            // listeners: []
        });
    }

    toHTML() {
        return partnerOffers()
    }
}

// const cards = [
//     {
//         id: '',
//         img: img2,
//         title: 'Женская одежда',
//
//     },
//     {
//         id: '',
//         img: img3,
//         title: 'Верхняя одежда',
//
//     },
//     {
//         id: '',
//         img: img4,
//         title: 'Одежда для девочек',
//     },
//     {
//         id: '',
//         img: img5,
//         title: 'Одежда для мальчиков',
//     },
// ]