import {transitionWrapper} from "../../common/transitionTitle";

export function aboutUsPageTemplate() {
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
        link: '/#information/about-us'
    }
]