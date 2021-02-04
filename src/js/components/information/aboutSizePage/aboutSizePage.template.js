import {transitionWrapper} from "../../common/transitionTitle";

export function aboutSizePageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
           	<div class="title-shopping">О покупках</div>
            
        </div>
    `
}

let link = [
    {
        title: 'Размеры',
        link: '/#information/size'
    }
]