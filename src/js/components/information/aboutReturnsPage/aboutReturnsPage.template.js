import {transitionWrapper} from "../../common/transitionTitle";

export function  aboutReturnsPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
           	<div class="title-shopping">О покупках</div>
            
        </div>
    `
}

let link = [
    {
        title: 'Возврат',
        link: '/#information/return'
    }
]