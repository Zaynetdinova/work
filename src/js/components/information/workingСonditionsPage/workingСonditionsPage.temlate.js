import {transitionWrapper} from "../../common/transitionTitle";

export function  workingConditionsPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
           	<div class="title-shopping">О магазине</div>
            
        </div>
    `
}

let link = [
    {
        title: 'Хлебные крошки',
        link: '/#information/working-condition'
    }
]