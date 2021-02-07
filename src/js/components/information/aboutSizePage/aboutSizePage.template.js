import {transitionWrapper} from "../../common/transitionTitle";



export function aboutSizePageTemplate() {
    return `
        <div class="wrapper-size-page">
            ${transitionWrapper(link)}
           	<div class="title-shopping">О покупках</div>
            <div class="title-size-page">Таблица основных размеров</div>
            
              
        </div>
    `
}

let link = [
    {
        title: 'Размеры',
        link: '/#information/size'
    }
]

