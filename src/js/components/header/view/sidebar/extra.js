import img from '../../../../../images/sidebar/img.png'
import sale from '../../../../../images/sidebar/sale.svg'

export function extra() {
    return `
        <div class='More'>
            <div class="first-col">
                <div class='first-content'>
                    <div class="selection-second">
                        <a href="#">Колготки</a>
                    </div>
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
                    <div class='title-text'>Lorem ipsum dolor sit amet,<br> consectetuer adipiscing</div>
                    <p class='text'>Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit. Aenean</p>
                </div>
            </div>
        </div>
    `
}

function pick(more) {
  const items = more.map((item) => {
    return `
            <div class='selection-first'>
                <a href="#">${item.pick}</a>
            </div>
        `
  })
  return `${items.join('')}`


}

function alternative(options) {
  const items = options.map((item) => {
    return `
            <div class="selection-second">
                <a href="#">${item.alternative}</a>
            </div>
        `
  })
  return `${items.join('')}`
}



let more = [
    {title: 'Колготки',
        elem: [
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
    }
]

let options = [
    {
        alternative: 'Чулки'
    },
    {
        alternative: 'Гольфы'
    },
    {
        alternative: 'Пояса для чулок'
    },
    {
        alternative: 'Подследники'
    },
    {
        alternative: 'Носки'
    },
    {
        alternative: 'Ботфорты'
    },
]


