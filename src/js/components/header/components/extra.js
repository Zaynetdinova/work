import img from '../../../../images/sidebar/img.png'
import sale from '../../../../images/sidebar/sale.svg'
import {pick} from "./pick";
import {alternative} from "./alternative";

export function extra() {
    return `
        <div class='More'>
            <div class="first-col">
                <div class='first-content'>
                    ${pick(more)}
                </div>
            </div>
            <div class="second-col">
                <div class='second-content'>
                    ${alternative(options)}
                    <a href="#">
                        <img src=${sale} alt="sale">
                    </a>
                </div>
            </div>
            <div class='card'>
                <img src=${img} alt='img'>
                <div class='intro'>
                    <div class='title-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing</div>
                    <p class='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>
                </div>
            </div>
        </div>
    `
}

let more = [
    {
        pick: 'КОЛГОТКИ'
    },
    {
        pick: 'Классические'
    },
    {
        pick: 'Фантазийные'
    },
    {
        pick: 'Эротические'
    },
    {
        pick: 'Для беременных'
    },
    {
        pick: 'Conte Elegant'
    },
    {
        pick: 'Elledue'
    },
    {
        pick: 'Filodoro'
    },
    {
        pick: 'Fiore'
    },
    {
        pick: 'Giulia'
    },
    {
        pick: 'Giulietta'
    },
    {
        pick: 'Golden Lady'
    },
    {
        pick: 'Gatta'
    },
    {
        pick: 'Levante'
    },
    {
        pick: 'Marilyn'
    },
    {
        pick: 'Minimi'
    },
    {
        pick: 'Mirey'
    },
    {
        pick: 'My'
    },
    {
        pick: 'Omsa'
    },
    {
        pick: 'Omero'
    },
    {
        pick: 'Philippe Matignon'
    },
    {
        pick: 'Sisi'
    },
]

let options = [
    {
        alternative: 'чулки'
    },
    {
        alternative: 'гольфы'
    },
    {
        alternative: 'пояса для чулок'
    },
    {
        alternative: 'подследники'
    },
    {
        alternative: 'носки'
    },
    {
        alternative: 'ботфорты'
    },
]